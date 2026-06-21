import React, { useEffect, useMemo, useState } from 'react'
import { apiUrl, assetUrl } from '../config/api'
import {
  fetchAdminPartnerLogos,
  createPartnerLogo,
  updatePartnerLogo,
  deletePartnerLogo,
} from '../services/partnerLogoService'
import {
  createBlog,
  dateInputValue,
  deleteBlog,
  fetchAdminBlogs,
  updateBlog,
} from '../services/blogService'
import BlogBlockEditor from '../components/Admin/BlogBlockEditor'
import {
  deleteGalleryImage,
  fetchAdminGalleryImages,
  saveGalleryImage,
} from '../services/galleryService'

const emptyForm = {
  title: '',
  location: '',
  type: 'Residential',
  area: 'On Request',
  price: 'Price on Request',
  priceSubtext: 'Starting price. Taxes & charges extra.',
  badge: 'Signature',
  description: '',
  developer: 'Majestic Landbase',
  developerDescription: 'Developer details will be updated soon.',
  sortOrder: 0,
  isActive: true,
  image: null,
  galleryImages: [],
}

const emptyLogoForm = {
  name: '',
  bg: 'white',
  sortOrder: 0,
  isActive: true,
  logo: null,
}

const emptyBlogForm = {
  title: '',
  excerpt: '',
  content: '',
  category: 'Insights & Blogs',
  date: new Date().toISOString().slice(0, 10),
  sortOrder: 0,
  isActive: true,
  image: null,
}

const emptyGalleryForm = {
  title: '',
  sortOrder: 0,
  isActive: true,
  image: null,
}

const AdminDashboard = () => {
  const [token, setToken] = useState(() => localStorage.getItem('adminToken') || '')
  const [login, setLogin] = useState({ username: '', password: '' })
  const [activeTab, setActiveTab] = useState('projects')
  
  // Projects State
  const [projects, setProjects] = useState([])
  const [form, setForm] = useState(emptyForm)
  const [editingId, setEditingId] = useState('')
  const [fileInputKey, setFileInputKey] = useState(0)

  // Logos State
  const [logos, setLogos] = useState([])
  const [logoForm, setLogoForm] = useState(emptyLogoForm)
  const [editingLogoId, setEditingLogoId] = useState('')
  const [logoFileInputKey, setLogoFileInputKey] = useState(0)

  // Blogs State
  const [blogs, setBlogs] = useState([])
  const [blogForm, setBlogForm] = useState(emptyBlogForm)
  const [editingBlogId, setEditingBlogId] = useState('')
  const [blogFileInputKey, setBlogFileInputKey] = useState(0)

  // Gallery State
  const [galleryImages, setGalleryImages] = useState([])
  const [galleryForm, setGalleryForm] = useState(emptyGalleryForm)
  const [editingGalleryId, setEditingGalleryId] = useState('')
  const [galleryFileInputKey, setGalleryFileInputKey] = useState(0)

  // General State
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const authHeaders = useMemo(() => ({ Authorization: `Bearer ${token}` }), [token])

  const loadProjects = async () => {
    if (!token) return

    const response = await fetch(apiUrl('/api/admin/signature-projects'), {
      headers: authHeaders,
    })

    if (response.status === 401) {
      localStorage.removeItem('adminToken')
      setToken('')
      return
    }

    const data = await response.json()
    setProjects(Array.isArray(data) ? data : [])
  }

  const loadLogos = async () => {
    if (!token) return
    try {
      const data = await fetchAdminPartnerLogos(token)
      setLogos(Array.isArray(data) ? data : [])
    } catch (error) {
      console.error("Error loading partner logos:", error)
    }
  }

  const loadBlogs = async () => {
    if (!token) return
    try {
      const data = await fetchAdminBlogs(token)
      setBlogs(Array.isArray(data) ? data : [])
    } catch (error) {
      console.error("Error loading blogs:", error)
    }
  }

  const loadGalleryImages = async () => {
    if (!token) return
    try {
      setGalleryImages(await fetchAdminGalleryImages(token))
    } catch (error) {
      console.error('Error loading gallery images:', error)
    }
  }

  useEffect(() => {
    if (token) {
      loadProjects()
      loadLogos()
      loadBlogs()
      loadGalleryImages()
    }
  }, [token])

  const handleLogin = async (event) => {
    event.preventDefault()
    setLoading(true)
    setMessage('')

    try {
      const response = await fetch(apiUrl('/api/admin/login'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(login),
      })
      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Login failed')
      }

      localStorage.setItem('adminToken', data.token)
      setToken(data.token)
      setLogin({ username: '', password: '' })
    } catch (error) {
      setMessage(error.message)
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (event) => {
    const { name, value, type, checked, files } = event.target
    setForm((current) => ({
      ...current,
      [name]: type === 'file'
        ? event.target.multiple
          ? Array.from(files)
          : files[0]
        : type === 'checkbox'
          ? checked
          : value,
    }))
  }

  const handleLogoChange = (event) => {
    const { name, value, type, checked, files } = event.target
    setLogoForm((current) => ({
      ...current,
      [name]: type === 'file'
        ? files[0]
        : type === 'checkbox'
          ? checked
          : value,
    }))
  }

  const handleBlogChange = (event) => {
    const { name, value, type, checked, files } = event.target
    setBlogForm((current) => ({
      ...current,
      [name]: type === 'file'
        ? files[0]
        : type === 'checkbox'
          ? checked
          : value,
    }))
  }

  const handleGalleryChange = (event) => {
    const { name, value, type, checked, files } = event.target
    setGalleryForm((current) => ({
      ...current,
      [name]: type === 'file' ? files[0] : type === 'checkbox' ? checked : value,
    }))
  }

  const resetForm = () => {
    setForm({ ...emptyForm })
    setEditingId('')
    setFileInputKey((current) => current + 1)
  }

  const resetLogoForm = () => {
    setLogoForm({ ...emptyLogoForm })
    setEditingLogoId('')
    setLogoFileInputKey((current) => current + 1)
  }

  const resetBlogForm = () => {
    setBlogForm({ ...emptyBlogForm })
    setEditingBlogId('')
    setBlogFileInputKey((current) => current + 1)
  }

  const resetGalleryForm = () => {
    setGalleryForm({ ...emptyGalleryForm })
    setEditingGalleryId('')
    setGalleryFileInputKey((current) => current + 1)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setLoading(true)
    setMessage('')

    try {
      const formData = new FormData()
      Object.entries(form).forEach(([key, value]) => {
        if (Array.isArray(value)) {
          value.forEach((item) => formData.append(key, item))
        } else if (value !== null && value !== undefined) {
          formData.append(key, value)
        }
      })

      const response = await fetch(
        apiUrl(`/api/admin/signature-projects${editingId ? `/${editingId}` : ''}`),
        {
          method: editingId ? 'PUT' : 'POST',
          headers: authHeaders,
          body: formData,
        }
      )
      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Unable to save project')
      }

      setMessage(editingId ? 'Project updated.' : 'Project added.')
      resetForm()
      await loadProjects()
    } catch (error) {
      setMessage(error.message)
    } finally {
      setLoading(false)
    }
  }

  const handleLogoSubmit = async (event) => {
    event.preventDefault()
    setLoading(true)
    setMessage('')

    try {
      const formData = new FormData()
      Object.entries(logoForm).forEach(([key, value]) => {
        if (value !== null && value !== undefined) {
          formData.append(key, value)
        }
      })

      if (editingLogoId) {
        await updatePartnerLogo(token, editingLogoId, formData)
        setMessage('Partner logo updated.')
      } else {
        await createPartnerLogo(token, formData)
        setMessage('Partner logo added.')
      }
      resetLogoForm()
      await loadLogos()
    } catch (error) {
      setMessage(error.message)
    } finally {
      setLoading(false)
    }
  }

  const handleBlogSubmit = async (event) => {
    event.preventDefault()
    setLoading(true)
    setMessage('')

    try {
      const formData = new FormData()
      Object.entries(blogForm).forEach(([key, value]) => {
        if (value !== null && value !== undefined) {
          formData.append(key, value)
        }
      })

      if (editingBlogId) {
        await updateBlog(token, editingBlogId, formData)
        setMessage('Blog updated.')
      } else {
        await createBlog(token, formData)
        setMessage('Blog added.')
      }
      resetBlogForm()
      await loadBlogs()
    } catch (error) {
      setMessage(error.message)
    } finally {
      setLoading(false)
    }
  }

  const handleGallerySubmit = async (event) => {
    event.preventDefault()
    setLoading(true)
    setMessage('')
    try {
      const formData = new FormData()
      Object.entries(galleryForm).forEach(([key, value]) => {
        if (value !== null && value !== undefined) formData.append(key, value)
      })
      await saveGalleryImage(token, editingGalleryId, formData)
      setMessage(editingGalleryId ? 'Gallery image updated.' : 'Gallery image added.')
      resetGalleryForm()
      await loadGalleryImages()
    } catch (error) {
      setMessage(error.message)
    } finally {
      setLoading(false)
    }
  }

  const handleEdit = (project) => {
    setEditingId(project._id)
    setForm({
      title: project.title || '',
      location: project.location || '',
      type: project.type || '',
      area: project.area || '',
      price: project.price || '',
      priceSubtext: project.priceSubtext || '',
      badge: project.badge || '',
      description: project.description || '',
      developer: project.developer || '',
      developerDescription: project.developerDescription || '',
      sortOrder: project.sortOrder || 0,
      isActive: project.isActive !== false,
      image: null,
      galleryImages: [],
    })
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleLogoEdit = (logoItem) => {
    setEditingLogoId(logoItem._id)
    setLogoForm({
      name: logoItem.name || '',
      bg: logoItem.bg || 'white',
      sortOrder: logoItem.sortOrder || 0,
      isActive: logoItem.isActive !== false,
      logo: null,
    })
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleBlogEdit = (blogItem) => {
    setEditingBlogId(blogItem._id || blogItem.id)
    setBlogForm({
      title: blogItem.title || '',
      excerpt: blogItem.excerpt || blogItem.desc || '',
      content: blogItem.content || '',
      category: blogItem.category || 'Insights & Blogs',
      date: dateInputValue(blogItem.dateValue || blogItem.date || blogItem.createdAt) || new Date().toISOString().slice(0, 10),
      sortOrder: blogItem.sortOrder || 0,
      isActive: blogItem.isActive !== false,
      image: null,
    })
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleGalleryEdit = (item) => {
    setEditingGalleryId(item.id)
    setGalleryForm({
      title: item.title || '',
      sortOrder: item.sortOrder || 0,
      isActive: item.isActive !== false,
      image: null,
    })
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this signature project?')) return

    const response = await fetch(apiUrl(`/api/admin/signature-projects/${id}`), {
      method: 'DELETE',
      headers: authHeaders,
    })

    if (response.ok) {
      setMessage('Project deleted.')
      await loadProjects()
    }
  }

  const handleLogoDelete = async (id) => {
    if (!window.confirm('Delete this partner logo?')) return

    try {
      await deletePartnerLogo(token, id)
      setMessage('Partner logo deleted.')
      await loadLogos()
    } catch (error) {
      setMessage(error.message)
    }
  }

  const handleBlogDelete = async (id) => {
    if (!window.confirm('Delete this blog?')) return

    try {
      await deleteBlog(token, id)
      setMessage('Blog deleted.')
      await loadBlogs()
    } catch (error) {
      setMessage(error.message)
    }
  }

  const handleGalleryDelete = async (id) => {
    if (!window.confirm('Delete this gallery image?')) return
    try {
      await deleteGalleryImage(token, id)
      setMessage('Gallery image deleted.')
      await loadGalleryImages()
    } catch (error) {
      setMessage(error.message)
    }
  }

  const logout = () => {
    localStorage.removeItem('adminToken')
    setToken('')
    setProjects([])
    setLogos([])
    setBlogs([])
    setGalleryImages([])
  }

  if (!token) {
    return (
      <main className="admin-page">
        <section className="admin-auth-section">
          <form className="admin-auth-card" onSubmit={handleLogin}>
            <h1>Admin Login</h1>
            <p>Sign in to manage website contents.</p>
            {message && <div className="alert alert-warning">{message}</div>}
            <label>
              Username
              <input
                className="form-control"
                name="username"
                value={login.username}
                onChange={(event) => setLogin({ ...login, username: event.target.value })}
                required
              />
            </label>
            <label>
              Password
              <input
                className="form-control"
                name="password"
                type="password"
                value={login.password}
                onChange={(event) => setLogin({ ...login, password: event.target.value })}
                required
              />
            </label>
            <button className="btn btn-gold w-100" disabled={loading}>
              {loading ? 'Signing in...' : 'Login'}
            </button>
          </form>
        </section>
      </main>
    )
  }

  return (
    <main className="admin-page">
      <section className="admin-dashboard-section">
        <div className="container">
          <div className="admin-dashboard-header">
            <div>
              <h1>Admin Dashboard</h1>
              <p>Upload and manage website contents shown on the Home and Properties pages.</p>
            </div>
            <button className="btn btn-outline-dark" onClick={logout}>Logout</button>
          </div>

          {/* Tab Navigation */}
          <div className="d-flex gap-3 mb-4 border-bottom pb-2">
            <button 
              className={`btn ${activeTab === 'projects' ? 'btn-gold' : 'btn-outline-dark'}`}
              onClick={() => { setActiveTab('projects'); setMessage(''); }}
            >
              Signature Projects
            </button>
            <button 
              className={`btn ${activeTab === 'logos' ? 'btn-gold' : 'btn-outline-dark'}`}
              onClick={() => { setActiveTab('logos'); setMessage(''); }}
            >
              Partner Logos
            </button>
            <button
              className={`btn ${activeTab === 'blogs' ? 'btn-gold' : 'btn-outline-dark'}`}
              onClick={() => { setActiveTab('blogs'); setMessage(''); }}
            >
              Blogs
            </button>
            <button
              className={`btn ${activeTab === 'gallery' ? 'btn-gold' : 'btn-outline-dark'}`}
              onClick={() => { setActiveTab('gallery'); setMessage(''); }}
            >
              Gallery
            </button>
          </div>

          {message && <div className="alert alert-info">{message}</div>}

          {activeTab === 'projects' ? (
            <div className="row g-4">
              <div className="col-lg-4">
                <form className="admin-panel" onSubmit={handleSubmit}>
                  <h2>{editingId ? 'Edit Project' : 'Add Project'}</h2>

                  <label>
                    Title
                    <input className="form-control" name="title" value={form.title} onChange={handleChange} required />
                  </label>

                  <label>
                    Location
                    <input className="form-control" name="location" value={form.location} onChange={handleChange} required />
                  </label>

                  <label>
                    Type
                    <input className="form-control" name="type" value={form.type} onChange={handleChange} required />
                  </label>

                  <label>
                    Area
                    <input className="form-control" name="area" value={form.area} onChange={handleChange} />
                  </label>

                  <label>
                    Price
                    <input className="form-control" name="price" value={form.price} onChange={handleChange} />
                  </label>

                  <label>
                    Price Subtext
                    <input className="form-control" name="priceSubtext" value={form.priceSubtext} onChange={handleChange} />
                  </label>

                  <label>
                    Badge
                    <input className="form-control" name="badge" value={form.badge} onChange={handleChange} />
                  </label>

                  <label>
                    Description
                    <textarea className="form-control" name="description" rows="5" value={form.description} onChange={handleChange} />
                  </label>

                  <label>
                    Developer
                    <input className="form-control" name="developer" value={form.developer} onChange={handleChange} />
                  </label>

                  <label>
                    Developer Description
                    <textarea className="form-control" name="developerDescription" rows="3" value={form.developerDescription} onChange={handleChange} />
                  </label>

                  <label>
                    Sort Order
                    <input className="form-control" name="sortOrder" type="number" value={form.sortOrder} onChange={handleChange} />
                  </label>

                  <label>
                    Project Image {editingId ? '(leave empty to keep current image)' : ''}
                    <input
                      key={fileInputKey}
                      className="form-control"
                      name="image"
                      type="file"
                      accept="image/*"
                      onChange={handleChange}
                      required={!editingId}
                    />
                  </label>

                  <label>
                    Gallery Images {editingId ? '(upload new images to replace current gallery)' : ''}
                    <input
                      key={`gallery-${fileInputKey}`}
                      className="form-control"
                      name="galleryImages"
                      type="file"
                      accept="image/*"
                      multiple
                      onChange={handleChange}
                    />
                  </label>

                  <label className="admin-check">
                    <input name="isActive" type="checkbox" checked={form.isActive} onChange={handleChange} />
                    Show on website
                  </label>

                  <div className="d-flex gap-2">
                    <button className="btn btn-gold flex-grow-1" disabled={loading}>
                      {loading ? 'Saving...' : editingId ? 'Update' : 'Add Project'}
                    </button>
                    {editingId && <button className="btn btn-outline-dark" type="button" onClick={resetForm}>Cancel</button>}
                  </div>
                </form>
              </div>

              <div className="col-lg-8">
                <div className="admin-panel">
                  <h2>Current Projects</h2>
                  <div className="admin-project-list">
                    {projects.map((project) => (
                      <article className="admin-project-item" key={project._id}>
                        <img src={assetUrl(project.image)} alt={project.title} />
                        <div>
                          <h3>{project.title}</h3>
                          <p>{project.location} | {project.type} | {project.price}</p>
                          <p className="text-muted small mb-2">
                            {project.description
                              ? `${project.description.slice(0, 120)}${project.description.length > 120 ? '...' : ''}`
                              : 'No description added yet.'}
                          </p>
                          <span className={project.isActive ? 'status-active' : 'status-hidden'}>
                            {project.isActive ? 'Visible' : 'Hidden'}
                          </span>
                        </div>
                        <div className="admin-project-actions">
                          <button className="btn btn-sm btn-outline-dark" onClick={() => handleEdit(project)}>Edit</button>
                          <button className="btn btn-sm btn-outline-danger" onClick={() => handleDelete(project._id)}>Delete</button>
                        </div>
                      </article>
                    ))}

                    {projects.length === 0 && <p className="text-muted mb-0">No signature projects added yet.</p>}
                  </div>
                </div>
              </div>
            </div>
          ) : activeTab === 'logos' ? (
            <div className="row g-4">
              <div className="col-lg-4">
                <form className="admin-panel" onSubmit={handleLogoSubmit}>
                  <h2>{editingLogoId ? 'Edit Partner Logo' : 'Add Partner Logo'}</h2>

                  <label>
                    Partner Name
                    <input className="form-control" name="name" value={logoForm.name} onChange={handleLogoChange} required />
                  </label>

                  <label>
                    Background Theme
                    <select className="form-control" name="bg" value={logoForm.bg} onChange={handleLogoChange}>
                      <option value="white">White Background</option>
                      <option value="black">Black Background</option>
                    </select>
                  </label>

                  <label>
                    Sort Order
                    <input className="form-control" name="sortOrder" type="number" value={logoForm.sortOrder} onChange={handleLogoChange} />
                  </label>

                  <label>
                    Logo Image {editingLogoId ? '(leave empty to keep current)' : ''}
                    <input
                      key={logoFileInputKey}
                      className="form-control"
                      name="logo"
                      type="file"
                      accept="image/*"
                      onChange={handleLogoChange}
                      required={!editingLogoId}
                    />
                  </label>

                  <label className="admin-check">
                    <input name="isActive" type="checkbox" checked={logoForm.isActive} onChange={handleLogoChange} />
                    Show on website
                  </label>

                  <div className="d-flex gap-2">
                    <button className="btn btn-gold flex-grow-1" disabled={loading}>
                      {loading ? 'Saving...' : editingLogoId ? 'Update' : 'Add Logo'}
                    </button>
                    {editingLogoId && <button className="btn btn-outline-dark" type="button" onClick={resetLogoForm}>Cancel</button>}
                  </div>
                </form>
              </div>

              <div className="col-lg-8">
                <div className="admin-panel">
                  <h2>Current Partner Logos</h2>
                  <div className="admin-project-list">
                    {logos.map((logoItem) => (
                      <article className="admin-project-item" key={logoItem._id}>
                        <img 
                          src={logoItem.logo} 
                          alt={logoItem.name} 
                          style={logoItem.bg === 'black' ? { backgroundColor: '#000', padding: '5px' } : { backgroundColor: '#f8f9fa', padding: '5px' }} 
                        />
                        <div>
                          <h3>{logoItem.name}</h3>
                          <p>Theme: {logoItem.bg === 'black' ? 'Black' : 'White'} | Order: {logoItem.sortOrder}</p>
                          <span className={logoItem.isActive ? 'status-active' : 'status-hidden'}>
                            {logoItem.isActive ? 'Visible' : 'Hidden'}
                          </span>
                        </div>
                        <div className="admin-project-actions">
                          <button className="btn btn-sm btn-outline-dark" onClick={() => handleLogoEdit(logoItem)}>Edit</button>
                          <button className="btn btn-sm btn-outline-danger" onClick={() => handleLogoDelete(logoItem._id)}>Delete</button>
                        </div>
                      </article>
                    ))}

                    {logos.length === 0 && <p className="text-muted mb-0">No partner logos added yet.</p>}
                  </div>
                </div>
              </div>
            </div>
          ) : activeTab === 'gallery' ? (
            <div className="row g-4">
              <div className="col-lg-4">
                <form className="admin-panel" onSubmit={handleGallerySubmit}>
                  <h2>{editingGalleryId ? 'Edit Gallery Image' : 'Add Gallery Image'}</h2>

                  <label>
                    Image Title
                    <input className="form-control" name="title" value={galleryForm.title} onChange={handleGalleryChange} placeholder="Image description" />
                  </label>

                  <label>
                    Sort Order
                    <input className="form-control" name="sortOrder" type="number" value={galleryForm.sortOrder} onChange={handleGalleryChange} />
                  </label>

                  <label>
                    Gallery Image {editingGalleryId ? '(leave empty to keep current)' : ''}
                    <input
                      key={galleryFileInputKey}
                      className="form-control"
                      name="image"
                      type="file"
                      accept="image/*"
                      onChange={handleGalleryChange}
                      required={!editingGalleryId}
                    />
                  </label>

                  <label className="admin-check">
                    <input name="isActive" type="checkbox" checked={galleryForm.isActive} onChange={handleGalleryChange} />
                    Show on website
                  </label>

                  <div className="d-flex gap-2">
                    <button className="btn btn-gold flex-grow-1" disabled={loading}>
                      {loading ? 'Saving...' : editingGalleryId ? 'Update' : 'Add Image'}
                    </button>
                    {editingGalleryId && <button className="btn btn-outline-dark" type="button" onClick={resetGalleryForm}>Cancel</button>}
                  </div>
                </form>
              </div>

              <div className="col-lg-8">
                <div className="admin-panel">
                  <h2>Current Gallery Images</h2>
                  <p className="text-muted small">All visible images appear on the website, three per row, in sort order.</p>
                  <div className="admin-project-list">
                    {galleryImages.map((item) => (
                      <article className="admin-project-item" key={item.id}>
                        <img src={item.image} alt={item.title} />
                        <div>
                          <h3>{item.title}</h3>
                          <p>Order: {item.sortOrder}</p>
                          <span className={item.isActive ? 'status-active' : 'status-hidden'}>
                            {item.isActive ? 'Visible' : 'Hidden'}
                          </span>
                        </div>
                        <div className="admin-project-actions">
                          <button className="btn btn-sm btn-outline-dark" onClick={() => handleGalleryEdit(item)}>Edit</button>
                          <button className="btn btn-sm btn-outline-danger" onClick={() => handleGalleryDelete(item.id)}>Delete</button>
                        </div>
                      </article>
                    ))}
                    {galleryImages.length === 0 && <p className="text-muted mb-0">No gallery images added yet.</p>}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="row g-4">
              <div className="col-lg-4">
                <form className="admin-panel" onSubmit={handleBlogSubmit}>
                  <h2>{editingBlogId ? 'Edit Blog' : 'Add Blog'}</h2>

                  <label>
                    Title
                    <input className="form-control" name="title" value={blogForm.title} onChange={handleBlogChange} required />
                  </label>

                  <label>
                    Category
                    <input className="form-control" name="category" value={blogForm.category} onChange={handleBlogChange} />
                  </label>

                  <label>
                    Date
                    <input className="form-control" name="date" type="date" value={blogForm.date} onChange={handleBlogChange} />
                  </label>

                  <label>
                    Short Description
                    <textarea className="form-control" name="excerpt" rows="3" value={blogForm.excerpt} onChange={handleBlogChange} />
                  </label>

                  <div className="mb-3">
                    <BlogBlockEditor
                      value={blogForm.content}
                      onChange={handleBlogChange}
                    />
                  </div>

                  <label>
                    Sort Order
                    <input className="form-control" name="sortOrder" type="number" value={blogForm.sortOrder} onChange={handleBlogChange} />
                  </label>

                  <label>
                    Blog Image {editingBlogId ? '(leave empty to keep current)' : ''}
                    <input
                      key={blogFileInputKey}
                      className="form-control"
                      name="image"
                      type="file"
                      accept="image/*"
                      onChange={handleBlogChange}
                      required={!editingBlogId}
                    />
                  </label>

                  <label className="admin-check">
                    <input name="isActive" type="checkbox" checked={blogForm.isActive} onChange={handleBlogChange} />
                    Show on website
                  </label>

                  <div className="d-flex gap-2">
                    <button className="btn btn-gold flex-grow-1" disabled={loading}>
                      {loading ? 'Saving...' : editingBlogId ? 'Update' : 'Add Blog'}
                    </button>
                    {editingBlogId && <button className="btn btn-outline-dark" type="button" onClick={resetBlogForm}>Cancel</button>}
                  </div>
                </form>
              </div>

              <div className="col-lg-8">
                <div className="admin-panel">
                  <h2>Current Blogs</h2>
                  <div className="admin-project-list">
                    {blogs.map((blogItem) => (
                      <article className="admin-project-item" key={blogItem._id || blogItem.id}>
                        <img src={blogItem.image} alt={blogItem.title} />
                        <div>
                          <h3>{blogItem.title}</h3>
                          <p>{blogItem.category} | {blogItem.date} | Order: {blogItem.sortOrder}</p>
                          <p className="text-muted small mb-2">
                            {blogItem.excerpt
                              ? `${blogItem.excerpt.slice(0, 120)}${blogItem.excerpt.length > 120 ? '...' : ''}`
                              : 'No short description added yet.'}
                          </p>
                          <span className={blogItem.isActive ? 'status-active' : 'status-hidden'}>
                            {blogItem.isActive ? 'Visible' : 'Hidden'}
                          </span>
                        </div>
                        <div className="admin-project-actions">
                          <button className="btn btn-sm btn-outline-dark" onClick={() => handleBlogEdit(blogItem)}>Edit</button>
                          <button className="btn btn-sm btn-outline-danger" onClick={() => handleBlogDelete(blogItem._id || blogItem.id)}>Delete</button>
                        </div>
                      </article>
                    ))}

                    {blogs.length === 0 && <p className="text-muted mb-0">No blogs added yet.</p>}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}

export default AdminDashboard
