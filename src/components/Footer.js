import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
    return(
        <div>
            <footer className="endFooter">
                <div className='socialLinks'>
                    <a href="https://github.com/tomasdiaz83" target="_blank" rel="noreferrer noopener"><FaGithub /></a>
                    <a href="https://www.linkedin.com/in/tomasenriquediaz/" target="_blank" rel="noreferrer noopener"><FaLinkedin /></a>
                </div>
            </footer>
        </div>
    )
}

export default Footer