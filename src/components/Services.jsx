import { FaGlobe, FaPalette, FaTools } from "react-icons/fa";
const Services = () => {
    const serviceData = [
        {
            icon: <FaGlobe />,
            title: "Custom Web App Development",
            description: "Building tailored web applications designed to meet your specific business needs and goals."
        },
        {
            icon: <FaPalette />,
            title: "Responsive UI/UX Design",
            description: "Crafting intuitive and engaging user interfaces that provide seamless experiences across all devices."
        },
        {
            icon: <FaTools />,
            title: "Website Maintenance",
            description: "Providing ongoing support and updates to ensure your website remains secure and up-to-date."
        }
    ];

    return (
        <section className="services-section" id="service">
            <h2 className="services-heading" data-aos="fade-up" data-aos-delay="100">SERVICES</h2>
            <h2 className="services-heading2" data-aos="fade-up" data-aos-delay="200">What I Provide For You</h2>

            <div className="services-container">
                {serviceData.map((item, index) => (
                    <div className="service-card" key={index} data-aos="fade-up" data-aos-delay="300">
                        <div className="icon-box">
                            <span>{item.icon}</span>
                        </div>
                        <h3 className="service-title">{item.title}</h3>
                        <p className="service-desc">{item.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;