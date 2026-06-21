import { useEffect, useState } from 'react'
import { fetchPublicGalleryImages } from '../../services/galleryService'

const DynamicGallery = () => {
  const [images, setImages] = useState([])

  useEffect(() => {
    fetchPublicGalleryImages().then(setImages).catch(() => setImages([]))
  }, [])

  if (images.length === 0) return null

  return (
    <section className="dynamic-gallery py-5 bg-white">
      <div className="container">
        <div className="section-title text-center mb-4">
          <h2>Gallery</h2>
          <div className="separator mx-auto"></div>
        </div>
        <div className="row g-4">
          {images.map((item, index) => (
            <div className="col-md-4" key={item.id} data-aos="fade-up" data-aos-delay={index * 100}>
              <img className="dynamic-gallery-image" src={item.image} alt={item.title} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default DynamicGallery
