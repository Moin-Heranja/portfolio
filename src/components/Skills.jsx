import { Container, Row, Col, Card } from "react-bootstrap";
import html from "../assets/image/html.png";
import css from "../assets/image/css.webp";
import react from "../assets/image/React-icon.svg.png";
import node from "../assets/image/node.webp";
import express from "../assets/image/express.png";
import mongo from "../assets/image/mongodb.webp";
import git from "../assets/image/git.png";
import post from "../assets/image/post.webp";
import bootstrap from "../assets/image/botstrap.png";
import thunder from "../assets/image/thunderclient.png"

const Skills = () => {
    return (
        <section className="skills-section" id="skill">
            <h2 className="skills-title" data-aos="fade-up" data-aos-delay="100"><span>MY</span> SKILLS</h2>
            <p data-aos="fade-up" data-aos-delay="200">Technologies I am learning and working with</p>

            <Container>
                <Row className="g-5">

                    {/* Frontend */}
                    <Col md={4} data-aos="fade-up" data-aos-delay="300">
                        <Card className="skill-card">
                            <div className="imgs">
                                <img src={html} alt="" />
                                <img src={css} alt="" />
                                <img src={react} alt="" />
                            </div>
                            <Card.Body>
                                <h1>Frontend</h1>
                                <h3>
                                    React, Redux, HTML, CSS
                                </h3>
                                <p>Developing modern, interactive, and highly responsive user interfaces using current Frontend concepts and best practices.</p>
                            </Card.Body>
                        </Card>
                    </Col>

                    {/* Backend */}
                    <Col md={4} data-aos="fade-up" data-aos-delay="350">
                        <Card className="skill-card">
                            <div className="imgs">
                                <img src={node} alt="" />
                                <img src={express} alt="" />
                                <img src={mongo} alt="" />
                            </div>
                            <Card.Body>
                                <h1>Backend</h1>
                                <h3>
                                    Node.js, Express, MongoDB
                                </h3>
                                <p>Building scalable server-side applications, REST APIs, and managing NoSQL databases for seamless data handling.</p>
                            </Card.Body>
                        </Card>
                    </Col>

                    {/* Tools */}
                    <Col md={4} data-aos="fade-up" data-aos-delay="400">
                        <Card className="skill-card">
                            <div className="imgs">
                                <img src={git} alt="" />
                                <img src={post} alt="" />
                                <img src={thunder} alt=""/>                               
                            </div>
                            <Card.Body>
                                <h1>Tools & Frameworks</h1>
                                <h3>
                                    Git, Postman, thunderClient
                                </h3>
                                <p>Version control, API testing with Postman, and building responsive layouts using Bootstrap.</p>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>
            </Container>
        </section>

    );
};

export default Skills;