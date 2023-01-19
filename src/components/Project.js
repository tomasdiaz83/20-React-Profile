import projects from '../data/projects'
//import ProjCard from './ProjCard'

const Project = () => {

    let id = 0;
    
    const projCards = projects.map(project => {
        const { title, info, repo, site, image } = project 

        id++;

        if (id === 1) {
            return (
                <section class="proj-card proj-1" key = {id}>
                    <div class="proj-card-inner">
                        <div class="proj-card-front">
                            <h3>{title}</h3>
                                <img src={image} alt='The app in action' class="imgFit" />
                        </div>
                        <div class="proj-card-back">
                            <h3>{title}</h3>
                            <p class='info'>{info}</p>
                            <a class='link' href= {repo} target="_blank" rel="noreferrer noopener">GitHub Repo</a>
                            <br/><br/>
                            <a class='link' href= {site} target="_blank" rel="noreferrer noopener">Deployed Site</a>
                        </div>
                    </div>
                </section>
            )
        } else {
            return (
                <section class="proj-card" key = {id}>
                    <div class="proj-card-inner">
                        <div class="proj-card-front">
                            <h3>{title}</h3>
                                <img src={image} alt='The app in action' class="imgFit" />
                        </div>
                        <div class="proj-card-back">
                            <h3>{title}</h3>
                            <p class='info'>{info}</p>
                            <a class='link' href= {repo} target="_blank" rel="noreferrer noopener">GitHub Repo</a>
                            <br/><br/>
                            {site ? (
                                <a class='link' href= {site} target="_blank" rel="noreferrer noopener">Deployed Site</a>
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
            <div class="projects">
                {projCards}
            </div>
        </div>
    )
}

export default Project