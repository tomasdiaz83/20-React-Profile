import image from '../assets/Images/Alchemist.jpg'

const About = () => {
    return (
        // Avatar and biographical data
        <div>
            <h2 id="about">About</h2>

            <section className="bio">

                <img className="img" src={image} alt="A depiction of an old man with alchemical equipment looking up to heaven - The author claiming association with the Islamic hermeticist Ibn Jabr" />

                <div className="about">
                    <h2>Bio</h2>
                    <p>I'm a Full Stack Developer, Educator, and Writer with a liberal arts background. I graduated from the University of St Thomas in Houston, TX where I received my BA and MA in Theological Studies. I have recently completed a Certificate in Full Stack Web Development from the University of Texas at Austin where I gained experience with a wide variety of industry-standard technologies, working in an agile and scrum environment, and learning best practices for mobile and desktop application. I currently freelance as a web developer. In my spare time, I teach, primarily in the humanities. </p>
                    <h2>Technical Skills</h2>
                    <ul>
                        <li>Languages: HTML, CSS, Javascript</li>
                        <li>DB Management: Mysql, Sequlize, MongoDB, Mongoose, GraphQL</li>
                        <li>Libraries: jQuery, React, Express, Bootstrap, Material UI, Tailwind</li>
                        <li>Other: Node, Git, Handlebars, Heroku, JWT, IndexedDB</li>
                    </ul>
                </div>

            </section>
        </div>
    )
}

export default About