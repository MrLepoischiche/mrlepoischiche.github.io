import '/public/common.css'
import './ProjectDisplayer.css';
import { useState, useEffect } from 'react';


function NavigationButton({imgLink, clickHandler}) {
    return (
        <img width="50" height="50" src={imgLink} onClick={clickHandler} />
    );
}


export default function ProjectDisplayer({ techs }) {
    const [myProjects, setMyProj] = useState([]);
    const [projIndex, setProjIndex] = useState(0);

    async function FetchMyProjects() {
        try {
            let projectsArray;
            
            const projResp = await fetch('/data/projects.json',
                {
                    headers : { 
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    }
                }
            );

            await projResp.json().then(projects => {projectsArray = projects});
            setMyProj(projectsArray);
        } catch (error) {
            console.warn(error, "error");
        }
    };

    useEffect(() => {
        FetchMyProjects();
    }, []);

    function prevProject() {
        if (projIndex === 0) {
            setProjIndex(myProjects.length - 1);
            return;
        }

        setProjIndex(projIndex - 1);
    }

    function nextProject() {
        if (projIndex === myProjects.length - 1) {
            setProjIndex(0);
            return;
        }

        setProjIndex(projIndex + 1);
    }

    let techsObj = Object.fromEntries(techs);

    return (
        <div id="project-presenter" className="column-direction">
            <p id="projects" className="audiowide-regular">My Projects</p>
            <div>
                <NavigationButton imgLink="https://img.icons8.com/ios/50/FFFFFF/back--v1.png" clickHandler={prevProject} />

                {
                    myProjects.length > 0 ? (
                        <div id='project-container' className='column-direction'>
                            <img
                                className='offside-regular'
                                src={myProjects[projIndex].img_location ? (myProjects[projIndex].img_location) : null}
                                alt='No visual yet... Stay tuned!'
                            />
                            <p className='oregano-regular'><strong>{myProjects[projIndex].name}</strong></p>
                            <p className='oregano-regular'>{myProjects[projIndex].description}</p>

                            <div>
                                {myProjects[projIndex].icons.map(icon => 
                                    <img key={icon} width="64" height="64" src={(Object.hasOwn(techsObj, icon)) ? techsObj[icon].link : 'null'} />
                                )}
                            </div>

                            <a className='oregano-regular' href={myProjects[projIndex].github_link}>Click here to Access Repo</a>
                        </div>
                    )
                    :
                    <p className='oregano-regular'>Projects not loaded.</p>
                }
                
                <NavigationButton imgLink="https://img.icons8.com/ios/50/FFFFFF/forward--v1.png" clickHandler={nextProject} />
            </div>
        </div>
    );
}