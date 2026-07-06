import Watch from "../assets/image/Watch.png";
import food from "../assets/image/food.png";
import secure from "../assets/image/secure.png";
import product from "../assets/image/product.png";
import note from "../assets/image/note.png";
import Dashboard from "../assets/image/dashboard.png";
import Export from "../assets/image/export.png";
import Icecream from "../assets/image/icecream.png"
import fabrication from "../assets/image/fabrication.png"

const Projects = () => {
    const projectList = [
        {
            title: "Fabrication web app",
            desc: "A responsive frontend web app with interactive menu, clean user interface.",
            image: fabrication,
            live: "https://fabrication-eight.vercel.app/",
        },
        {
            title: "AN Global Exports",
            desc: "A modern exporting website with responsive design and stylish product showcase features.",
            image: Export,
            live: "https://www.anglobalexports.com/",
        },
        {
            title: "Ice cream Food web app",
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