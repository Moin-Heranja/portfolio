const Contact = () => {
    return (
        <section className="contact-container" id="contact">
            <div className="contact-glass-card" data-aos="fade-up" data-aos-delay="100">
                <div className="contact-info">
                    <h1>Schedule a call with me to see how <span className="highlight-text">I can help you.</span></h1>
                    <p className="sub-text">I am a beginner full stack developer, ready to learn and build clean and responsive websites.</p>

                    <div className="info-items">
                        <div className="info-item">
                            <div className="icon-circle"><i className="fas fa-envelope"></i></div>
                            <div>
                                <p className="label">E-mail :</p>
                                <p className="value">moinheranja97@gmail.com</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="icon-circle"><i class="bi bi-telephone-fill"></i></div>
                            <div>
                                <p className="label">Contact :</p>
                                <p className="value">+91 98240 28784</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="icon-circle"><i className="fas fa-map-marker-alt"></i></div>
                            <div>
                                <p className="label">Location :</p>
                                <p className="value">Rajkot, Gujarat, India</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="contact-form-wrapper">
                    <h2 className="form-title"><span className="highlight-text">CONTACT</span> ME</h2>
                    <form className="actual-form">
                        <div className="form-row">
                            <input type="text" placeholder="Your Name" />
                            <input type="email" placeholder="Your Email" />
                        </div>
                        <div className="form-row">
                            <input type="text" placeholder="Phone Number" />
                            <input type="text" placeholder="Subject" />
                        </div>
                        <textarea placeholder="Your Message"></textarea>
                        <button type="submit" className="send-btn">
                            Send Message <i className="fas fa-arrow-right"></i>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;