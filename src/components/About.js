import image from '../assets/Images/Alchemist.jpg'

const About = () => {
    return (
        // Avatar and biographical data
        <div>
            <h2 id="about">About</h2>

            <section class="bio">

                <img class="img" src={image} alt="A depiction of an old man with alchemical equipment looking up to heaven - The author claiming association with the Islamic hermeticist Ibn Jabr" />

                <div class="about">
                    <h2>Bio</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis eligendi ut culpa, ullam incidunt rem a atque natus excepturi cum voluptates aut labore fugiat, aliquam laborum iure id esse et!</p>
                </div>

            </section>
        </div>
    )
}

export default About