import React, { useState, useEffect } from 'react';
import { 
  Plus, 
  Trash2, 
  ArrowUp, 
  ArrowDown, 
  Heading2, 
  Heading3, 
  AlignLeft, 
  List, 
  Table as TableIcon,
  HelpCircle
} from 'lucide-react';

const BlogBlockEditor = ({ value, onChange }) => {
  const [blocks, setBlocks] = useState([]);

  // Converts HTML back to structured blocks
  const htmlToBlocks = (html) => {
    if (!html) return [{ type: 'paragraph', value: '' }];
    
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const parsedBlocks = [];
    
    doc.body.childNodes.forEach((node) => {
      if (node.nodeType === Node.ELEMENT_NODE) {
        const tagName = node.tagName.toLowerCase();
        if (tagName === 'h2') {
          parsedBlocks.push({ type: 'heading', value: node.textContent || '' });
        } else if (tagName === 'h3') {
          parsedBlocks.push({ type: 'subheading', value: node.textContent || '' });
        } else if (tagName === 'p') {
          parsedBlocks.push({ type: 'paragraph', value: node.innerHTML || '' });
        } else if (tagName === 'ul') {
          const items = [];
          node.querySelectorAll('li').forEach((li) => {
            items.push(li.innerHTML || '');
          });
          parsedBlocks.push({ type: 'list', items });
        } else if (tagName === 'table') {
          const headers = [];
          const rows = [];
          
          // Try standard thead/tbody
          const thElements = node.querySelectorAll('thead th');
          if (thElements.length > 0) {
            thElements.forEach((th) => {
              headers.push(th.innerHTML || '');
            });
          }
          
          const trElements = node.querySelectorAll('tbody tr');
          if (trElements.length > 0) {
            trElements.forEach((tr) => {
              const row = [];
              tr.querySelectorAll('td').forEach((td) => {
                row.push(td.innerHTML || '');
              });
              rows.push(row);
            });
          }
          
          // Fallback if thead/tbody are missing
          if (headers.length === 0 && rows.length === 0) {
            node.querySelectorAll('tr').forEach((tr, trIdx) => {
              const cells = Array.from(tr.querySelectorAll('th, td')).map(c => c.innerHTML || '');
              if (trIdx === 0 && tr.querySelector('th')) {
                headers.push(...cells);
              } else {
                rows.push(cells);
              }
            });
          }

          // Ensure headers & rows are valid
          const finalHeaders = headers.length > 0 ? headers : ['Column 1', 'Column 2'];
          const finalRows = rows.length > 0 ? rows : [['', '']];
          
          parsedBlocks.push({ type: 'table', headers: finalHeaders, rows: finalRows });
        } else {
          parsedBlocks.push({ type: 'paragraph', value: node.outerHTML || node.textContent || '' });
        }
      } else if (node.nodeType === Node.TEXT_NODE && node.textContent.trim()) {
        parsedBlocks.push({ type: 'paragraph', value: node.textContent.trim() });
      }
    });
    
    if (parsedBlocks.length === 0) {
      parsedBlocks.push({ type: 'paragraph', value: html });
    }
    
    return parsedBlocks;
  };

  // Convert blocks back to HTML
  const blocksToHtml = (blocksList) => {
    return blocksList.map((block) => {
      switch (block.type) {
        case 'heading':
          return `<h2>${block.value.trim()}</h2>`;
        case 'subheading':
          return `<h3>${block.value.trim()}</h3>`;
        case 'paragraph':
          return `<p>${block.value.trim()}</p>`;
        case 'list':
          if (!block.items || block.items.length === 0) return '';
          const lis = block.items
            .map(item => item.trim())
            .filter(Boolean)
            .map(item => `<li>${item}</li>`)
            .join('');
          return lis ? `<ul>${lis}</ul>` : '';
        case 'table':
          const ths = (block.headers || []).map(h => `<th>${h.trim()}</th>`).join('');
          const trs = (block.rows || []).map(row => {
            const tds = row.map(cell => `<td>${cell.trim()}</td>`).join('');
            return `<tr>${tds}</tr>`;
          }).join('');
          return `<table><thead><tr>${ths}</tr></thead><tbody>${trs}</tbody></table>`;
        default:
          return '';
      }
    }).filter(Boolean).join('\n');
  };

  // Initialize blocks when value changes (e.g. on blog select/edit)
  useEffect(() => {
    // Only parse if blocks is empty to prevent resetting while typing
    if (blocks.length === 0) {
      setBlocks(htmlToBlocks(value));
    }
  }, [value]);

  // Propagate changes to parent
  const updateParent = (updatedBlocks) => {
    setBlocks(updatedBlocks);
    onChange({
      target: {
        name: 'content',
        value: blocksToHtml(updatedBlocks),
        type: 'text'
      }
    });
  };

  const handleBlockChange = (index, field, newValue) => {
    const updated = [...blocks];
    updated[index] = {
      ...updated[index],
      [field]: newValue
    };
    updateParent(updated);
  };

  // Add block helpers
  const addBlock = (type) => {
    let newBlock;
    if (type === 'heading' || type === 'subheading' || type === 'paragraph') {
      newBlock = { type, value: '' };
    } else if (type === 'list') {
      newBlock = { type, items: [''] };
    } else if (type === 'table') {
      newBlock = { 
        type, 
        headers: ['Header 1', 'Header 2'], 
        rows: [['', '']] 
      };
    }
    const updated = [...blocks, newBlock];
    updateParent(updated);
  };

  const removeBlock = (index) => {
    if (window.confirm('Are you sure you want to delete this content block?')) {
      const updated = blocks.filter((_, i) => i !== index);
      updateParent(updated.length === 0 ? [{ type: 'paragraph', value: '' }] : updated);
    }
  };

  const moveBlock = (index, direction) => {
    if (direction === 'up' && index === 0) return;
    if (direction === 'down' && index === blocks.length - 1) return;
    
    const targetIndex = direction === 'up' ? index - 1 : index + 1;
    const updated = [...blocks];
    const temp = updated[index];
    updated[index] = updated[targetIndex];
    updated[targetIndex] = temp;
    updateParent(updated);
  };

  // List item actions
  const handleListItemChange = (blockIdx, itemIdx, value) => {
    const updated = [...blocks];
    const items = [...updated[blockIdx].items];
    items[itemIdx] = value;
    updated[blockIdx] = { ...updated[blockIdx], items };
    updateParent(updated);
  };

  const addListItem = (blockIdx) => {
    const updated = [...blocks];
    const items = [...updated[blockIdx].items, ''];
    updated[blockIdx] = { ...updated[blockIdx], items };
    updateParent(updated);
  };

  const removeListItem = (blockIdx, itemIdx) => {
    const updated = [...blocks];
    const items = updated[blockIdx].items.filter((_, i) => i !== itemIdx);
    updated[blockIdx] = { ...updated[blockIdx], items: items.length === 0 ? [''] : items };
    updateParent(updated);
  };

  // Table actions
  const handleTableCellChange = (blockIdx, rowIdx, colIdx, val) => {
    const updated = [...blocks];
    const rows = [...updated[blockIdx].rows];
    rows[rowIdx] = [...rows[rowIdx]];
    rows[rowIdx][colIdx] = val;
    updated[blockIdx] = { ...updated[blockIdx], rows };
    updateParent(updated);
  };

  const handleTableHeaderChange = (blockIdx, colIdx, val) => {
    const updated = [...blocks];
    const headers = [...updated[blockIdx].headers];
    headers[colIdx] = val;
    updated[blockIdx] = { ...updated[blockIdx], headers };
    updateParent(updated);
  };

  const addTableRow = (blockIdx) => {
    const updated = [...blocks];
    const colCount = updated[blockIdx].headers.length;
    const rows = [...updated[blockIdx].rows, Array(colCount).fill('')];
    updated[blockIdx] = { ...updated[blockIdx], rows };
    updateParent(updated);
  };

  const removeTableRow = (blockIdx, rowIdx) => {
    const updated = [...blocks];
    const rows = updated[blockIdx].rows.filter((_, i) => i !== rowIdx);
    updated[blockIdx] = { ...updated[blockIdx], rows: rows.length === 0 ? [Array(updated[blockIdx].headers.length).fill('')] : rows };
    updateParent(updated);
  };

  const addTableColumn = (blockIdx) => {
    const updated = [...blocks];
    const headers = [...updated[blockIdx].headers, `Header ${updated[blockIdx].headers.length + 1}`];
    const rows = updated[blockIdx].rows.map(row => [...row, '']);
    updated[blockIdx] = { ...updated[blockIdx], headers, rows };
    updateParent(updated);
  };

  const removeTableColumn = (blockIdx) => {
    const updated = [...blocks];
    if (updated[blockIdx].headers.length <= 1) return;
    const headers = updated[blockIdx].headers.slice(0, -1);
    const rows = updated[blockIdx].rows.map(row => row.slice(0, -1));
    updated[blockIdx] = { ...updated[blockIdx], headers, rows };
    updateParent(updated);
  };

  // Watch for external reset (when clearing/editing different blog)
  useEffect(() => {
    const currentHtml = blocksToHtml(blocks);
    if (value !== currentHtml) {
      setBlocks(htmlToBlocks(value));
    }
  }, [value]);

  return (
    <div className="blog-block-editor border rounded p-3 bg-light">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <label className="fw-semibold text-deep-espresso mb-0">Blog Content Blocks</label>
        <span className="text-muted small">Arrange headings, tables & lists block-by-block.</span>
      </div>

      <div className="blocks-list d-flex flex-column gap-3 mb-4">
        {blocks.map((block, index) => (
          <div key={index} className="block-card border rounded bg-white p-3 shadow-sm position-relative">
            {/* Header Block Actions */}
            <div className="d-flex justify-content-between align-items-center mb-2 border-bottom pb-2">
              <span className="badge bg-espresso text-uppercase text-xs" style={{ fontSize: '10px' }}>
                {block.type === 'heading' ? 'Heading 2' : block.type === 'subheading' ? 'Subheading 3' : block.type}
              </span>
              
              <div className="d-flex gap-1">
                <button 
                  type="button" 
                  className="btn btn-sm btn-outline-secondary p-1 border-0" 
                  onClick={() => moveBlock(index, 'up')}
                  disabled={index === 0}
                  title="Move Up"
                >
                  <ArrowUp size={14} />
                </button>
                <button 
                  type="button" 
                  className="btn btn-sm btn-outline-secondary p-1 border-0" 
                  onClick={() => moveBlock(index, 'down')}
                  disabled={index === blocks.length - 1}
                  title="Move Down"
                >
                  <ArrowDown size={14} />
                </button>
                <button 
                  type="button" 
                  className="btn btn-sm btn-outline-danger p-1 border-0 ms-2" 
                  onClick={() => removeBlock(index)}
                  title="Delete Block"
                >
                  <Trash2 size={14} />
                </button>
              </div>
            </div>

            {/* Block Fields */}
            {block.type === 'heading' && (
              <input 
                type="text" 
                className="form-control" 
                placeholder="Enter heading text (H2)..." 
                value={block.value}
                onChange={(e) => handleBlockChange(index, 'value', e.target.value)}
              />
            )}

            {block.type === 'subheading' && (
              <input 
                type="text" 
                className="form-control" 
                placeholder="Enter subheading text (H3)..." 
                value={block.value}
                onChange={(e) => handleBlockChange(index, 'value', e.target.value)}
              />
            )}

            {block.type === 'paragraph' && (
              <textarea 
                className="form-control" 
                rows="4"
                placeholder="Enter paragraph content (HTML formats like <strong> are supported)..." 
                value={block.value}
                onChange={(e) => handleBlockChange(index, 'value', e.target.value)}
              />
            )}

            {block.type === 'list' && (
              <div className="list-block-items d-flex flex-column gap-2">
                {(block.items || []).map((item, itemIdx) => (
                  <div key={itemIdx} className="d-flex gap-2 align-items-center">
                    <span className="text-muted">•</span>
                    <input 
                      type="text" 
                      className="form-control form-control-sm" 
                      placeholder="List item content..." 
                      value={item}
                      onChange={(e) => handleListItemChange(index, itemIdx, e.target.value)}
                    />
                    <button 
                      type="button" 
                      className="btn btn-sm btn-outline-danger border-0 p-1"
                      onClick={() => removeListItem(index, itemIdx)}
                    >
                      <Trash2 size={13} />
                    </button>
                  </div>
                ))}
                <button 
                  type="button" 
                  className="btn btn-sm btn-outline-dark align-self-start mt-1 d-flex align-items-center gap-1"
                  onClick={() => addListItem(index)}
                  style={{ fontSize: '12px' }}
                >
                  <Plus size={12} /> Add Item
                </button>
              </div>
            )}

            {block.type === 'table' && (
              <div className="table-block-editor">
                <div className="table-responsive">
                  <table className="table table-sm table-bordered align-middle mb-2" style={{ minWidth: '400px' }}>
                    <thead>
                      <tr>
                        {(block.headers || []).map((header, colIdx) => (
                          <th key={colIdx} style={{ minWidth: '100px' }}>
                            <input 
                              type="text" 
                              className="form-control form-control-sm border-0 bg-transparent fw-bold" 
                              style={{ color: 'var(--deep-espresso)' }}
                              value={header}
                              onChange={(e) => handleTableHeaderChange(index, colIdx, e.target.value)}
                              placeholder="Header"
                            />
                          </th>
                        ))}
                        <th style={{ width: '40px' }} className="text-center bg-light">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {(block.rows || []).map((row, rowIdx) => (
                        <tr key={rowIdx}>
                          {row.map((cell, colIdx) => (
                            <td key={colIdx}>
                              <input 
                                type="text" 
                                className="form-control form-control-sm border-0" 
                                value={cell}
                                onChange={(e) => handleTableCellChange(index, rowIdx, colIdx, e.target.value)}
                                placeholder="Cell content"
                              />
                            </td>
                          ))}
                          <td className="text-center">
                            <button 
                              type="button" 
                              className="btn btn-sm btn-outline-danger border-0 p-1"
                              onClick={() => removeTableRow(index, rowIdx)}
                            >
                              <Trash2 size={13} />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="d-flex gap-2 mt-2">
                  <button 
                    type="button" 
                    className="btn btn-sm btn-outline-dark d-flex align-items-center gap-1"
                    onClick={() => addTableRow(index)}
                    style={{ fontSize: '11px' }}
                  >
                    <Plus size={11} /> Add Row
                  </button>
                  <button 
                    type="button" 
                    className="btn btn-sm btn-outline-dark d-flex align-items-center gap-1"
                    onClick={() => addTableColumn(index)}
                    style={{ fontSize: '11px' }}
                  >
                    <Plus size={11} /> Add Column
                  </button>
                  <button 
                    type="button" 
                    className="btn btn-sm btn-outline-danger d-flex align-items-center gap-1"
                    onClick={() => removeTableColumn(index)}
                    disabled={block.headers.length <= 1}
                    style={{ fontSize: '11px' }}
                  >
                    Remove Column
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Editor Controls */}
      <div className="editor-controls border-top pt-3 d-flex flex-wrap gap-2">
        <button 
          type="button" 
          className="btn btn-sm btn-outline-gold d-flex align-items-center gap-1" 
          onClick={() => addBlock('paragraph')}
        >
          <AlignLeft size={14} /> + Paragraph
        </button>
        <button 
          type="button" 
          className="btn btn-sm btn-outline-gold d-flex align-items-center gap-1" 
          onClick={() => addBlock('heading')}
        >
          <Heading2 size={14} /> + Heading (H2)
        </button>
        <button 
          type="button" 
          className="btn btn-sm btn-outline-gold d-flex align-items-center gap-1" 
          onClick={() => addBlock('subheading')}
        >
          <Heading3 size={14} /> + Subheading (H3)
        </button>
        <button 
          type="button" 
          className="btn btn-sm btn-outline-gold d-flex align-items-center gap-1" 
          onClick={() => addBlock('list')}
        >
          <List size={14} /> + List
        </button>
        <button 
          type="button" 
          className="btn btn-sm btn-outline-gold d-flex align-items-center gap-1" 
          onClick={() => addBlock('table')}
        >
          <TableIcon size={14} /> + Table
        </button>
      </div>
    </div>
  );
};

export default BlogBlockEditor;
