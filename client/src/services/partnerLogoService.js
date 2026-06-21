import { apiUrl, assetUrl } from '../config/api'

export const normalizePartnerLogo = (partnerLogo) => {
  const id = partnerLogo?._id || partnerLogo?.id || ''
  const logoUrl = assetUrl(partnerLogo?.logo) || ''

  return {
    ...partnerLogo,
    id,
    logo: logoUrl,
    name: partnerLogo?.name || 'Partner',
    bg: partnerLogo?.bg || 'white',
    sortOrder: partnerLogo?.sortOrder || 0,
    isActive: partnerLogo?.isActive !== false,
  }
}

export const fetchPublicPartnerLogos = async () => {
  const response = await fetch(apiUrl('/api/partner-logos'), { cache: 'no-store' })
  const data = await response.json()

  if (!response.ok) {
    throw new Error(data?.message || 'Unable to load partner logos')
  }

  return Array.isArray(data) ? data.map((logo) => normalizePartnerLogo(logo)) : []
}

export const fetchAdminPartnerLogos = async (token) => {
  const response = await fetch(apiUrl('/api/admin/partner-logos'), {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    cache: 'no-store',
  })
  const data = await response.json()

  if (!response.ok) {
    throw new Error(data?.message || 'Unable to load partner logos')
  }

  return Array.isArray(data) ? data.map((logo) => normalizePartnerLogo(logo)) : []
}

export const createPartnerLogo = async (token, formData) => {
  const response = await fetch(apiUrl('/api/admin/partner-logos'), {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  })
  const data = await response.json()

  if (!response.ok) {
    throw new Error(data?.message || 'Unable to add partner logo')
  }

  return normalizePartnerLogo(data)
}

export const updatePartnerLogo = async (token, id, formData) => {
  const response = await fetch(apiUrl(`/api/admin/partner-logos/${id}`), {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  })
  const data = await response.json()

  if (!response.ok) {
    throw new Error(data?.message || 'Unable to update partner logo')
  }

  return normalizePartnerLogo(data)
}

export const deletePartnerLogo = async (token, id) => {
  const response = await fetch(apiUrl(`/api/admin/partner-logos/${id}`), {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  const data = await response.json()

  if (!response.ok) {
    throw new Error(data?.message || 'Unable to delete partner logo')
  }

  return data
}
