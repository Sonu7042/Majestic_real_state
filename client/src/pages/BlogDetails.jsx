import React, { useEffect, useRef, useState } from "react";
import {
  CalendarDays,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";
import emailjs from "@emailjs/browser";
import {
  fetchPublicBlogById,
  fetchPublicBlogs,
} from "../services/blogService";
import { fallbackBlogs } from "./BlogCards";

const relatedBlogs = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=500&auto=format&fit=crop",
    title:
      "How Oberoi Three Sixty North Can Deliver Strong Returns in the Coming Years",
    date: "April 24, 2026",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=500&auto=format&fit=crop",
    title:
      "Gurgaon’s Next Iconic Address: Oberoi Three Sixty North",
    date: "April 24, 2026",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=500&auto=format&fit=crop",
    title:
      "Why Sector 36A Is Emerging Because of Krisumi Waterfall Residences",
    date: "April 23, 2026",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=500&auto=format&fit=crop",
    title:
      "Ready to Move Luxury Apartments in Gurgaon 2026",
    date: "April 23, 2026",
  },
];

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(fallbackBlogs[0]);
  const [relatedBlogItems, setRelatedBlogItems] = useState(relatedBlogs);
  const [error, setError] = useState("");
  const [isSending, setIsSending] = useState(false);
  const enquiryForm = useRef(null);

  useEffect(() => {
    const loadBlog = async () => {
      try {
        const blogs = await fetchPublicBlogs();
        const selectedBlog = id
          ? await fetchPublicBlogById(id)
          : blogs[0] || fallbackBlogs[0];
        const relatedItems = blogs
          .filter((item) => item.id !== selectedBlog.id)
          .slice(0, 4);

        setBlog(selectedBlog);
        setRelatedBlogItems(relatedItems.length > 0 ? relatedItems : relatedBlogs);
        setError("");
      } catch (loadError) {
        const fallbackBlog = id
          ? fallbackBlogs.find((item) => String(item.id) === String(id)) || fallbackBlogs[0]
          : fallbackBlogs[0];

        setBlog(fallbackBlog);
        setRelatedBlogItems(relatedBlogs);
        setError(loadError.message || "Unable to load blog");
      }
    };

    loadBlog();
  }, [id]);

  const renderBlogContent = () => {
    if (!blog || !blog.content) return null;
    const hasHtml = /<[a-z][\s\S]*>/i.test(blog.content);
    if (hasHtml) {
      return <div dangerouslySetInnerHTML={{ __html: blog.content }} />;
    }
    return blog.content
      .split(/\n{2,}/)
      .map((block) => block.trim())
      .filter(Boolean)
      .map((block, index) => <p key={index}>{block}</p>);
  };

  const sendEnquiry = (event) => {
    event.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        "service_dd8gt2f",
        "template_fld37mu",
        enquiryForm.current,
        "WaMt-T544Nf-Uv_ua"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          enquiryForm.current.reset();
        },
        (sendError) => {
          console.log(sendError.text);
          alert("Failed to send message.");
        }
      )
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <div className="blog-page">
      {/* HERO */}
      <section className="blog-hero">
        <div className="overlay"></div>

        <div className="hero-content container" data-aos="zoom-in">
          <h1>BLOG DETAILS</h1>

          <div className="breadcrumb">
            <Link to="/" className="breadcrumb-link">
              Home
            </Link>
            <span className="dot"></span>
            <Link to="/blogs" className="breadcrumb-link">
              Insight & Blog
            </Link>
            <span className="dot"></span>
            <span className="active">Blog Details</span>
          </div>
        </div>
      </section>

      <section className="blog-details-page">
        <div className="blog-details-container container">

          {/* LEFT CONTENT */}
          <div className="blog-left" data-aos="fade-up">

            {/* TOP META */}
            <div className="blog-meta">
              <div className="meta-date">
                <CalendarDays size={13} />
                <span>{blog.date}</span>
              </div>

              <span className="meta-category">
                {blog.category}
              </span>
            </div>

            {/* TITLE */}
            <h1 className="blog-main-title">
              {blog.title}
            </h1>

            {/* SUB TEXT */}
            <p className="blog-subtitle">
              {blog.excerpt || blog.desc}
            </p>

            {error && <p className="text-muted mb-3">{error}</p>}

            {/* MAIN IMAGE */}
            <img
              src={blog.image}
              alt={blog.title}
              className="main-blog-image"
            />

            {/* CONTENT */}
            <div className="blog-content-area">
              {blog.content ? renderBlogContent() : (
                <>
                  <p>
                    Among the newest premium developments,
                    <strong> M3M Elie Saab Residences </strong>
                    has emerged as a standout project that blends
                    <strong>
                      {" "}
                      designer luxury with strong investment
                      potential.
                    </strong>
                  </p>

                  <p>
                    But what makes this project a smart investment in 2026?
                    Let’s break down the key reasons.
                  </p>

                  <h2>1. Branded Residences with Global Appeal</h2>

                  <p>
                    One of the biggest USPs of this project is its
                    collaboration with globally renowned designer
                    <strong> Elie Saab.</strong>
                  </p>

                  <ul>
                    <li>Designer interiors inspired by global fashion aesthetics</li>
                    <li>Premium finishes and curated living spaces</li>
                    <li>Strong brand recall in international markets</li>
                  </ul>

                  <p>
                    Branded residences often command
                    <strong>
                      {" "}
                      higher resale value and premium pricing
                    </strong>
                    , making them a smart long-term investment.
                  </p>

                  <h2>2. Strategic Location on Dwarka Expressway</h2>

                  <p>
                    Location plays a crucial role in real estate success,
                    and <strong>M3M Elie Saab</strong> benefits from its
                    presence on <strong>Dwarka Expressway.</strong>
                  </p>

                  <h3>Location Advantages:</h3>

                  <ul>
                    <li>Seamless connectivity to Delhi</li>
                    <li>Close proximity to IGI Airport</li>
                    <li>Easy access to Cyber City & business hubs</li>
                    <li>Upcoming metro corridor boosting future value</li>
                  </ul>

                  <h2>3. High Appreciation Potential</h2>

                  <p>
                    Dwarka Expressway is witnessing rapid infrastructure
                    development, which directly impacts property prices.
                  </p>

                  <ul>
                    <li>Increasing demand from end users and investors</li>
                    <li>Limited luxury inventory driving price growth</li>
                    <li>Upcoming commercial hubs enhancing value</li>
                  </ul>

                  <h2>4. Low-Density, High-Exclusivity Living</h2>

                  <ul>
                    <li>Limited number of units</li>
                    <li>Spacious layouts with privacy</li>
                    <li>Premium elite community</li>
                  </ul>

                  <h2>5. Strong Developer Reputation</h2>

                  <p>
                    The project is developed by
                    <strong> M3M India</strong>, known for delivering
                    high-end residential and commercial developments.
                  </p>

                  <ul>
                    <li>Proven track record</li>
                    <li>Timely delivery reputation</li>
                    <li>Premium project portfolio</li>
                  </ul>

                  <h2>6. Premium Lifestyle & Amenities</h2>

                  <ul>
                    <li>Luxury clubhouse & wellness spaces</li>
                    <li>Landscaped greens & open areas</li>
                    <li>High-end security systems</li>
                    <li>Smart home features</li>
                  </ul>

                  <h2>7. Strong Demand from NRIs & Investors</h2>

                  <ul>
                    <li>High demand among NRIs</li>
                    <li>Premium rental potential</li>
                    <li>Better liquidity in resale market</li>
                  </ul>

                  <h2>8. Future Growth of Gurugram Real Estate</h2>

                  <ul>
                    <li>Expanding corporate hubs</li>
                    <li>Infrastructure upgrades</li>
                    <li>Increasing luxury housing demand</li>
                  </ul>

                  <h2>Final Thoughts</h2>

                  <p>
                    <strong>M3M Elie Saab Gurgaon</strong> is not just
                    another residential project — it’s a
                    <strong>
                      {" "}
                      strategic investment opportunity
                    </strong>{" "}
                    that combines:
                  </p>

                  <ul>
                    <li>Designer luxury</li>
                    <li>Prime location</li>
                    <li>Strong ROI potential</li>
                  </ul>
                </>
              )}

              <Link to="/blogs" className="back-btn">
                BACK TO INSIGHT & BLOG
              </Link>
            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="blog-sidebar" data-aos="fade-up" data-aos-delay="100">

            {/* FORM */}
            <div className="enquiry-box" data-aos="fade-up" data-aos-delay="150">
              <h3>Quick Enquiry</h3>

              <form ref={enquiryForm} onSubmit={sendEnquiry}>
                <input type="hidden" name="to_name" value="Majestic Landbase" />
                <input type="hidden" name="to_email" value="ashish@majesticlandbase.com" />
                <input type="hidden" name="enquiry_type" value="Blog Quick Enquiry" />
                <input type="hidden" name="blog_title" value={blog.title || "Blog Details"} />

                <input type="text" name="from_name" placeholder="Your Name" required />
                <input type="email" name="from_email" placeholder="Your Email" required />
                <input
                  type="tel"
                  name="from_number"
                  placeholder="Phone Number"
                  inputMode="numeric"
                  pattern="[0-9]{10}"
                  minLength="10"
                  maxLength="10"
                  title="Please enter a 10 digit mobile number"
                  required
                />

                <textarea
                  name="from_message"
                  rows="3"
                  placeholder="Message"
                ></textarea>

                <button type="submit" disabled={isSending}>
                  {isSending ? "SENDING..." : "SEND MESSAGE"}
                </button>
              </form>
            </div>

            {/* RELATED BLOGS */}
            <div className="related-box" data-aos="fade-up" data-aos-delay="200">
              <h3>Related Insight & Blog</h3>

              {relatedBlogItems.map((item, index) => (
                <div
                  className="related-item"
                  key={item.id}
                  data-aos="fade-up"
                  data-aos-delay={250 + index * 75}
                >
                  <img src={item.image} alt={item.title} />

                  <div className="related-content">
                    <Link to={`/blog/${item.id}`}>
                      <h4>{item.title}</h4>
                    </Link>
                    <span>{item.date}</span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogDetails;
