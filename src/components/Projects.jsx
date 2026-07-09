import Icecream from "../assets/image/icecream.png"
import fabrication from "../assets/image/fabrication.png"
import netflix from "../assets/image/netflix.PNG"

export const Projects = () => {
    const projectList = [
        {
            title: "Netflix website",
            desc: "A Full stack web application with MERN technologies .",
            image: netflix,
            live: "https://netflix-clone-frontend-ecru.vercel.app/",
        },
        {
            title: "Fabrication web application",
            desc: "A responsive frontend web app with interactive menu, clean user interface.",
            image: fabrication,
            live: "https://fabrication-eight.vercel.app/",
        },
        {
            title: "Ice cream Website",
            desc: "A responsive frontend web app with interactive menu, clean user interface.",
            image: Icecream,
            live: "https://ice-cream-delta-two.vercel.app/",
        },
    ];
    const displayProjects = [...projectList];

    return (
        <section className="projects-section" id="project">
            <h2 className="projects-title" data-aos="fade-up" data-aos-delay="100" ><span>MY</span> PROJECTS</h2>

            <div className="projects-grid">
                {displayProjects.map((project, index) => (
                    <div className="project-card" key={index} data-aos="fade-up" data-aos-delay="300">
                        <div className="project-image-container">
                            <img src={project.image} alt={project.title} />
                        </div>
                        <div className="project-info">
                            <h3>{project.title}</h3>
                            <p>{project.desc}</p>
                            <div className="project-links">
                                <a href={project.live} className="link-item">View Live Demo</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;