import ContactForm from "../components/ContactForm"

const Contact = () => {
    return (
        <div>
            <h2 id="about">Contact Me</h2>
            <section className="form">
                <p>Email: <a href="mailto:tomas.enrique.diaz@gmail.com" target="_blank" rel="noreferrer noopener">tomas.enrique.diaz@gmail.com</a></p>
                <p>GitHub: <a href="https://github.com/tomasdiaz83" target="_blank" rel="noreferrer noopener">https://github.com/tomasdiaz83</a></p>
                <p>LinkedIn: <a href="https://www.linkedin.com/in/tomasenriquediaz/" target="_blank" rel="noreferrer noopener">https://www.linkedin.com/in/tomasenriquediaz/</a></p>
            </section>
            {/* <ContactForm /> */}
        </div>
    )
}

{/* <a href="mailto:tomas.enrique.diaz@gmail.com" target="_blank" rel="noreferrer noopener">Email</a> */}

export default Contact