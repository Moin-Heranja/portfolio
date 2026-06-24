const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer-section">
            <div className="footer-card">

                <h2 className="footer-logo">
                    Moin<span className="accent-text">.Heranja</span>
                </h2>

                <p className="footer-text">
                    Full Stack Developer Learner passionate about creating
                    modern and responsive web experiences.
                </p>

                <div className="social-icons">
                    <a href="https://www.instagram.com/moin._.9292/" className="social-link">
                        <i className="fa-brands fa-instagram"></i>
                    </a>

                    <a href="https://www.linkedin.com/in/heranja-moin-270a0734b/" className="social-link">
                        <i className="fa-brands fa-linkedin-in"></i>
                    </a>

                    <a href="https://github.com/Moin-Heranja" className="social-link">
                        <i className="fa-brands fa-github"></i>
                    </a>

                    <a href="https://web.whatsapp.com/" className="social-link">
                        <i className="fa-brands fa-whatsapp"></i>
                    </a>
                </div>

                <p className="copyright-text">
                    © {currentYear}
                    <span className="accent-text"> Moin</span>.
                    All rights reserved.
                </p>

            </div>
        </footer>
    );
};

export default Footer;