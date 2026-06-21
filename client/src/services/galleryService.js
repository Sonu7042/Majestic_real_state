import { apiUrl, assetUrl } from '../config/api'

const normalizeGalleryImage = (item) => ({
  ...item,
  id: item?._id || item?.id || '',
  image: assetUrl(item?.image),
  title: item?.title || 'Gallery image',
  sortOrder: item?.sortOrder || 0,
  isActive: item?.isActive !== false,
})

const request = async (path, options = {}) => {
  const response = await fetch(apiUrl(path), { cache: 'no-store', ...options })
  const data = await response.json()
  if (!response.ok) throw new Error(data?.message || 'Unable to manage gallery images')
  return data
}

export const fetchPublicGalleryImages = async () => {
  const data = await request('/api/gallery-images')
  return Array.isArray(data) ? data.map(normalizeGalleryImage) : []
}

export const fetchAdminGalleryImages = async (token) => {
  const data = await request('/api/admin/gallery-images', {
    headers: { Authorization: `Bearer ${token}` },
  })
  return Array.isArray(data) ? data.map(normalizeGalleryImage) : []
}

export const saveGalleryImage = async (token, id, formData) => normalizeGalleryImage(
  await request(`/api/admin/gallery-images${id ? `/${id}` : ''}`, {
    method: id ? 'PUT' : 'POST',
    headers: { Authorization: `Bearer ${token}` },
    body: formData,
  })
)

export const deleteGalleryImage = (token, id) => request(`/api/admin/gallery-images/${id}`, {
  method: 'DELETE',
  headers: { Authorization: `Bearer ${token}` },
})
