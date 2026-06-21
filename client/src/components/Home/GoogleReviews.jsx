import React from 'react';

const GoogleReviews = () => {
    const reviews = [
        [
            {
                name: "Renu Singh",
                avatar: "R",
                time: "2 days ago",
                text: "Had a great experience dealing with Mr. Ashish at Majestic Landbase while purchasing my home at Silverglades. He made sure every detail was explained clearly and helped me get the best deal without any stress.",
                verified: true
            },
            {
                name: "Priyanka Yadav",
                avatar: "P",
                time: "1 week ago",
                text: "Majestic Landbase is the most trustworthy real estate advisor in Gurgaon. Mr. Ashish Asthana helped me in my investment in DLF. The team is very supportive and professional.",
                verified: true
            },
            {
                name: "Manisha Ghosh",
                avatar: "M",
                time: "2 weeks ago",
                text: "Most Transparent Real Estate Company. Humble and honest people.",
                verified: true
            }
        ],
        [
            {
                name: "Shantanu Kumar",
                avatar: "S",
                time: "3 weeks ago",
                text: "I had an excellent experience working with Majestic Landbase. The team was professional, knowledgeable, and incredibly responsive throughout the entire process. They guided me step by step, whether it was scheduling viewings, answering my questions, or helping with paperwork.",
                verified: true
            },
            {
                name: "Shashank Aggarwal",
                avatar: "S",
                time: "1 month ago",
                text: "When it is about buying a property in Gurgaon, it’s always been Majestic Landbase for me. I have done two deals with Mr. Ashish Asthana; I must say the dealing has been very transparent and professionally driven.",
                verified: true
            },
            {
                name: "Piyush Sharma",
                avatar: "P",
                time: "1 month ago",
                text: "I have been in contact with Majestic Landbase for my real estate dealings. Mr. Ashish Asthana helped in investing in the most promising projects in Gurgaon. The team has been instrumental in making the entire purchase process super smooth for me.",
                verified: true
            }
        ],
    ];

    return (
        <section className="google-reviews-section py-5 bg-putty">
            <div className="container">
                <div className="text-center mb-5" data-aos="fade-up">
                    <h2 className="fw-bold mb-2">Google Reviews</h2>
                    <p className="text-muted mb-0">What our clients say about us</p>
                </div>
                {/* <div className="google-reviews-header" data-aos="fade-up">
                    <div className="google-rating">
                        <div className="rating-number">5.0</div>
                        <div>
                            <div className="rating-stars">
                                <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                            </div>
                            <div className="review-count">119 reviews on Google</div>
                        </div>
                    </div>
                    <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer" className="btn-google-review">
                        <i className="fab fa-google me-2"></i>Review us on Google
                    </a>
                </div> */}

                <div id="googleReviewsCarousel" className="carousel slide" data-bs-ride="carousel" data-aos="fade-up" data-aos-delay="100">
                    <div className="carousel-inner">
                        {reviews.map((slide, slideIndex) => (
                            <div className={`carousel-item ${slideIndex === 0 ? 'active' : ''}`} key={slideIndex}>
                                <div className="row g-4">
                                    {slide.map((review, index) => (
                                        <div className="col-lg-4" key={index}>
                                            <div className="google-review-card">
                                                <div className="reviewer-header">
                                                    <div className="reviewer-avatar">{review.avatar}</div>
                                                    <div className="reviewer-info">
                                                        <h6>
                                                            {review.name} {review.verified && <i className="fas fa-check-circle verified-badge"></i>}
                                                        </h6>
                                                        <span className="review-time">{review.time}</span>
                                                    </div>
                                                </div>
                                                <div className="review-stars">
                                                    {[1, 2, 3, 4, 5].map(star => <i className="fas fa-star" key={star}></i>)}
                                                </div>
                                                <p className="review-text">{review.text}</p>
                                                <div className="google-brand">
                                                    <i className="fab fa-google google-icon me-1"></i>
                                                    Posted on Google
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="d-flex justify-content-center mt-4 gap-3">
                        <button className="btn btn-secondary rounded-circle p-2" type="button"
                            data-bs-target="#googleReviewsCarousel" data-bs-slide="prev"
                            style={{ width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <i className="fas fa-arrow-left"></i>
                        </button>
                        <button className="btn btn-secondary rounded-circle p-2" type="button"
                            data-bs-target="#googleReviewsCarousel" data-bs-slide="next"
                            style={{ width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <i className="fas fa-arrow-right"></i>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GoogleReviews;
