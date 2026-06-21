import React, { useCallback, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import EnquiryModal from '../common/EnquiryModal'

const Layout = ({ children }) => {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false)
  const { pathname, search } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [pathname, search])

  const openEnquiry = useCallback(() => {
    setIsEnquiryOpen(true)
  }, [])

  const closeEnquiry = useCallback(() => {
    setIsEnquiryOpen(false)
  }, [])

  return (
    <>
      <Navbar onEnquiryClick={openEnquiry} />
      <main>{children}</main>
      <button type="button" className="global-enquiry-button " onClick={openEnquiry}>
        Enquiry Now
      </button>
      <EnquiryModal isOpen={isEnquiryOpen} onClose={closeEnquiry} variant="compact" />
      <Footer />
    </>
  )
}

export default Layout
