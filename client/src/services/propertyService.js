import { apiUrl, assetUrl } from '../config/api'

export const fallbackPropertyImage =
  'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'

export const normalizeProperty = (project, relatedProjects = []) => {
  const id = project?._id || project?.id || ''
  const mainImage = assetUrl(project?.image) || fallbackPropertyImage
  const galleryImages = Array.isArray(project?.galleryImages)
    ? project.galleryImages.map((image) => assetUrl(image)).filter(Boolean)
    : []
  const type = project?.type || project?.category || project?.badge || 'Property'

  return {
    ...project,
    id,
    image: mainImage,
    images: [mainImage, ...galleryImages],
    title: project?.title || 'Premium Property',
    location: project?.location || 'Location',
    type,
    category: project?.category || type,
    area: project?.area || 'On Request',
    price: project?.price || 'Price on Request',
    priceSubtext: project?.priceSubtext || 'Starting price. Taxes & charges extra.',
    badge: project?.badge || type,
    developer: project?.developer || 'Majestic Landbase',
    developerDescription: project?.developerDescription || 'Developer details will be updated soon.',
    description: project?.description || 'Property description will be updated soon.',
    experts: Array.isArray(project?.experts) ? project.experts : [],
    relatedProperties: relatedProjects.map((related) => normalizeProperty(related)),
  }
}

export const fetchPublicProperties = async () => {
  const response = await fetch(apiUrl('/api/signature-projects'), { cache: 'no-store' })
  const data = await response.json()

  if (!response.ok) {
    throw new Error(data?.message || 'Unable to load properties')
  }

  return Array.isArray(data) ? data.map((property) => normalizeProperty(property)) : []
}

export const fetchPublicPropertyById = async (id) => {
  const response = await fetch(apiUrl(`/api/signature-projects/${id}`), { cache: 'no-store' })
  const data = await response.json()

  if (!response.ok) {
    throw new Error(data?.message || 'Property not found')
  }

  return normalizeProperty(data)
}
