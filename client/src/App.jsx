import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Properties from './pages/Properties'
import AdminDashboard from './pages/AdminDashboard'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import EnquiryForm from './pages/EnquiryForm'
import PropertyDetails from './pages/PropertyDetails'
import Layout from './components/layout/Layout'
import BlogCards from './pages/BlogCards'
import BlogDetails from './pages/BlogDetails'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsConditions from './pages/TermsConditions'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/index-2.html" element={<Home />} /> 
          <Route path="/properties" element={<Properties />} />
          <Route path="/property-detail/:id" element={<PropertyDetails />} />
          <Route path="/property-detail.html" element={<PropertyDetails />} /> 
          <Route path="/about" element={<About />} />
          <Route path="/our-story.html" element={<About />} />
          <Route path="/services" element={<Services />} /> 
          <Route path="/investment-sales-advisory.html" element={<Services />} /> 
          <Route path="/property-management.html" element={<Services />} />
          <Route path="/land-acquisition.html" element={<Services />} />
          <Route path="/nri-advisory.html" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contact.html" element={<Contact />} />
          <Route path="/enquiry" element={<EnquiryForm />} />
          <Route path="/enquiry.html" element={<EnquiryForm />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/property-detail.html" element={<PropertyDetails />} />
          <Route path="/blogs" element={<BlogCards />} />
          <Route path="/blog" element={<BlogDetails />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/privacy-policy.html" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/terms-conditions.html" element={<TermsConditions />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
