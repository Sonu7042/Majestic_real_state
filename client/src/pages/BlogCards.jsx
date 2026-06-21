import React, { useEffect, useState } from "react";
import { CalendarDays, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { fetchPublicBlogs } from "../services/blogService";

export const fallbackBlogs = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=1200&auto=format&fit=crop",
    date: "May 01, 2026",
    title:
      "Key Reasons M3M Elie Saab is a Smart Real Estate Investment in Gurugram",
    desc:
      "Gurugram continues to dominate India’s luxury real estate market, attracting investors, NRIs, and ...",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
    date: "April 24, 2026",
    title:
      "How Oberoi Three Sixty North Can Deliver Strong Returns in the Coming Years",
    desc:
      "The real estate market in Gurugram has consistently attracted investors looking for both stability a...",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200&auto=format&fit=crop",
    date: "April 24, 2026",
    title:
      "Gurgaon’s Next Iconic Address: Oberoi Three Sixty North",
    desc:
      "In a city where luxury living is constantly being redefined, Oberoi Three Sixty North emerges as a s...",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=1200&auto=format&fit=crop",
    date: "April 23, 2026",
    title:
      "Why Sector 36A Is Emerging Because of Krisumi Waterfall Residences",
    desc:
      "The real estate landscape of Gurgaon is constantly evolving, with new micro-markets gaining traction...",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=1200&auto=format&fit=crop",
    date: "April 23, 2026",
    title:
      "Ready to Move Luxury Apartments in Gurgaon 2026: Why Krisumi Waterfall Residences Is a Rare Find",
    desc:
      "Looking for ready-to-move luxury flats in Gurgaon under budget ? Krisumi Waterfall Residences in Sec...",
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop",
    date: "April 22, 2026",
    title:
      "Sector 71 SPR Gurgaon: Why It's the City's Most Expensive Address",
    desc:
      "Sector 71 on SPR has seen 175% price growth in 3 years and circle rate hikes of 50%. Discover why it...",
  },
];

const BlogCards = () => {
  const [blogs, setBlogs] = useState(fallbackBlogs);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadBlogs = async () => {
      try {
        const data = await fetchPublicBlogs();
        setBlogs(data.length > 0 ? data : fallbackBlogs);
        setError("");
      } catch (loadError) {
        setError(loadError.message || "Unable to load blogs");
        setBlogs(fallbackBlogs);
      }
    };

    loadBlogs();
  }, []);

  return (
    <div className="blog-page">
      {/* HERO */}
      <section className="blog-hero">
        <div className="overlay"></div>

        <div className="hero-content container" data-aos="zoom-in">
          <h1>INSIGHT & BLOG</h1>

          <div className="breadcrumb">
            <span>Home</span>
            <span className="dot"></span>
            <span className="active">Insight & Blog</span>
          </div>
        </div>
      </section>

      {/* BLOGS */}
      <section className="blogs-section">
        <div className="blogs-container container">
          {error && <p className="text-muted text-center mb-4">{error}</p>}
          <div className="blogs-grid" data-aos="fade-up">
            {blogs.map((blog, index) => (
              <Link to={`/blog/${blog.id}`}
                className="blog-card"
                key={blog.id}
                
                data-aos="fade-up"
                data-aos-delay={(index % 3) * 100}
              >
                
                {/* Image */}
                <div className="blog-image-wrapper">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="blog-image"
                  />
                </div>

                {/* Content */}
                <div className="blog-content">
                  
                  {/* Date */}
                  <div className="blog-date">
                    <CalendarDays size={14} />
                    <span>{blog.date}</span>
                  </div>

                  {/* Title */}
                  <h2 className="blog-title">{blog.title}</h2>

                  {/* Desc */}
                  <p className="blog-desc">{blog.desc}</p>

                  {/* Button */}
                  <span className="read-btn">
                    READ MORE
                    <ArrowRight size={16} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogCards;
