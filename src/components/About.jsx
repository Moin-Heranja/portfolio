import { useState, useEffect } from "react";
import Photo from "../assets/image/photo.jpeg"

const skills = ["React.js", "JavaScript", "HTML", "CSS", "TypeScript","Node.js", "Express", "MongoDB", "Git", "Postman", "Bootstrap"];

const AboutMe = () => {
    const [activeSkill, setActiveSkill] = useState(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <section className="about-root" id="about">
                <div className={`about-inner ${visible ? "visible" : ""}`}>
                    <div className="left-col">
                        <h2 className="about-title" data-aos="fade-up" data-aos-delay="100" ><span>ABOUT</span> ME</h2>
                        <h2 className="big-title" data-aos="fade-up" data-aos-delay="100">
                            Learning to build<br />
                            full stack web <em>passion.</em>
                        </h2>
                        <p className="about-bio" data-aos="fade-up" data-aos-delay="100">
                            Hi, I'm <strong>Moin</strong> — a passionate Full Stack Developer learner
                            focused on creating modern and responsive web applications. I have completed HTML, CSS,
                            JavaScript, React.js, Node.js, Express,js, MongoDB, and NoSQL fundamentals. I enjoy building clean
                            UI designs and improving my frontend and backend development skills through real projects and continuous learning.
                        </p>
                        <div className="skills-row" data-aos="fade-up" data-aos-delay="100" >
                            {skills.map((s) => (
                                <span
                                    key={s}
                                    className={`skill-pill ${activeSkill === s ? "active" : ""}`}
                                    onMouseEnter={() => setActiveSkill(s)}
                                    onMouseLeave={() => setActiveSkill(null)}
                                >
                                    {s}
                                </span>
                            ))}
                        </div>
                        <div className="cta-row">
                            <button className="about-btn" data-aos="fade-up" data-aos-delay="100" >View Projects →</button>
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="right-col">
                        <div className="photo-frame">
                            <div className="corner corner-tl" />
                            <div className="corner corner-tr" />
                            <div className="corner corner-bl" />
                            <div className="corner corner-br" />

                            <div className="photo-shadow-card" />

                            <img
                                src={Photo}
                                alt="Moin - Frontend Developer"
                                className="photo-img"
                                data-aos="zoom-in" data-aos-delay="200"
                            />

                            <div className="stat-card stat-card-a">
                                <div className="stat-num">FRESHER </div>
                                <div className="stat-label">DEVELOPER</div>
                            </div>

                            <div className="stat-card stat-card-b">
                                <div className="stat-num">3+</div>
                                <div className="stat-label">MINI PROJECTS</div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
};

export default AboutMe;
