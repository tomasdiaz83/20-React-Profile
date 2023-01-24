import projects from '../data/projects'
//import ProjCard from './ProjCard'

const Project = () => {

    let id = 0;
    
    const projCards = projects.map(project => {
        const { title, info, repo, site, image } = project 

        id++;

        if (id === 1) {
            return (
                <section className="proj-card proj-1" key = {id}>
                    <div className="proj-card-inner">
                        <div className="proj-card-front">
                            <h3>{title}</h3>
                                <img src={image} alt='The app in action' className="imgFit" />
                        </div>
                        <div className="proj-card-back">
                            <h3>{title}</h3>
                            <p className='info'>{info}</p>
                            <a className='link' href= {repo} target="_blank" rel="noreferrer noopener">GitHub Repo</a>
                            <br/><br/>
                            <a className='link' href= {site} target="_blank" rel="noreferrer noopener">Deployed Site</a>
                        </div>
                    </div>
                </section>
            )
        } else {
            return (
                <section className="proj-card" key = {id}>
                    <div className="proj-card-inner">
                        <div className="proj-card-front">
                            <h3>{title}</h3>
                                <img src={image} alt='The app in action' className="imgFit" />
                        </div>
                        <div className="proj-card-back">
                            <h3>{title}</h3>
                            <p className='info'>{info}</p>
                            <a className='link' href= {repo} target="_blank" rel="noreferrer noopener">GitHub Repo</a>
                            <br/><br/>
                            {site ? (
                                <a className='link' href= {site} target="_blank" rel="noreferrer noopener">Deployed Site</a>
                            ) : (<br/>)}
                        </div>
                    </div>
                </section>
            )
        }
    })
    
    return (
        <div>
            <h2 id="projects">Projects</h2>
            <div className="projects">
                {projCards}
            </div>
        </div>
    )
}

export default Project