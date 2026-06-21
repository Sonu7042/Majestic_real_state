import { apiUrl, assetUrl } from '../config/api'

export const fallbackBlogImage =
  'https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200&auto=format&fit=crop'

export const formatBlogDate = (date) => {
  if (!date) return ''

  const parsedDate = new Date(date)
  if (Number.isNaN(parsedDate.getTime())) return date

  return parsedDate.toLocaleDateString('en-US', {
    month: 'long',
    day: '2-digit',
    year: 'numeric',
  })
}

export const dateInputValue = (date) => {
  if (!date) return ''

  const parsedDate = new Date(date)
  if (Number.isNaN(parsedDate.getTime())) return ''

  return parsedDate.toISOString().slice(0, 10)
}

export const normalizeBlog = (blog) => {
  const id = blog?._id || blog?.id || ''
  const image = assetUrl(blog?.image) || fallbackBlogImage
  const excerpt = blog?.excerpt || (blog?.content ? `${blog.content.slice(0, 140)}${blog.content.length > 140 ? '...' : ''}` : '')

  return {
    ...blog,
    id,
    image,
    title: blog?.title || 'Insight & Blog',
    desc: excerpt,
    excerpt,
    content: blog?.content || '',
    category: blog?.category || 'Insights & Blogs',
    date: formatBlogDate(blog?.date || blog?.createdAt),
    dateValue: dateInputValue(blog?.date || blog?.createdAt),
    sortOrder: blog?.sortOrder || 0,
    isActive: blog?.isActive !== false,
  }
}

export const fetchPublicBlogs = async () => {
  const response = await fetch(apiUrl('/api/blogs'), { cache: 'no-store' })
  const data = await response.json()

  if (!response.ok) {
    throw new Error(data?.message || 'Unable to load blogs')
  }

  return Array.isArray(data) ? data.map((blog) => normalizeBlog(blog)) : []
}

export const fetchPublicBlogById = async (id) => {
  const response = await fetch(apiUrl(`/api/blogs/${id}`), { cache: 'no-store' })
  const data = await response.json()

  if (!response.ok) {
    throw new Error(data?.message || 'Blog not found')
  }

  return normalizeBlog(data)
}

export const fetchAdminBlogs = async (token) => {
  const response = await fetch(apiUrl('/api/admin/blogs'), {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    cache: 'no-store',
  })
  const data = await response.json()

  if (!response.ok) {
    throw new Error(data?.message || 'Unable to load blogs')
  }

  return Array.isArray(data) ? data.map((blog) => normalizeBlog(blog)) : []
}

export const createBlog = async (token, formData) => {
  const response = await fetch(apiUrl('/api/admin/blogs'), {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  })
  const data = await response.json()

  if (!response.ok) {
    throw new Error(data?.message || 'Unable to add blog')
  }

  return normalizeBlog(data)
}

export const updateBlog = async (token, id, formData) => {
  const response = await fetch(apiUrl(`/api/admin/blogs/${id}`), {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  })
  const data = await response.json()

  if (!response.ok) {
    throw new Error(data?.message || 'Unable to update blog')
  }

  return normalizeBlog(data)
}

export const deleteBlog = async (token, id) => {
  const response = await fetch(apiUrl(`/api/admin/blogs/${id}`), {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  const data = await response.json()

  if (!response.ok) {
    throw new Error(data?.message || 'Unable to delete blog')
  }

  return data
}
