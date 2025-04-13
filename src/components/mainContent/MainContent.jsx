import '/public/common.css'
import './MainContent.css'

import ProjectDisplayer from '../projectDisplay/ProjectDisplayer';


function SpecialtyCard({id, icon, name, techs}) {
    return (
        <div className="spe-card column-direction">
            <img src={`https://img.icons8.com/${icon}.png`} alt="Icon" />
            <h1 className="audiowide-regular">{name}</h1>
            <div>
                {
                    techs.map(([name, info]) => {
                        if (info.relevant && info.usedFor === id) {
                            return (<img key={name} width="64" height="64" src={info.link} />);
                        }
                    })
                }
            </div>
        </div>
    );
}

function SpecialtyCards({techs}) {
    return (
        <section id="spe-cards">
            <SpecialtyCard
                id="frontend"
                name="Front-end"
                icon="pastel-glyph/100/FFFFFF/code--v1"
                techs={techs}
            />

            <SpecialtyCard
                id="backend"
                name="Back-end / API"
                icon="pastel-glyph/100/FFFFFF/api--v1"
                techs={techs}
            />

            <SpecialtyCard
                id="data"
                name="Data Storage"
                icon="ios-filled/100/FFFFFF/database"
                techs={techs}
            />

            
        </section>
    );
}

export default function MainContent({timers, techs}) {
    return (
        <section id="content" className="column-direction">
            <div className="column-direction">
                <div id="about" className="text-block">
                    <h1 className="audiowide-regular" style={{fontSize: "28pt"}}>Practicing since <strong style={{fontSize: "42pt"}}>2018</strong></h1>

                    {/* Doesn't work */}
                    {techs ?
                        <SpecialtyCards techs={techs} />
                        :
                        <p>Techs not loaded.</p>
                    }

                    {techs ?
                        <div
                            className="column-direction"
                            style={{alignItems: "center", rowGap: "30px"}}
                        >
                            <p className="audiowide-regular">I adapt to all systems as well, whether it be OSs...</p>
                            <div 
                                style={{columnGap: "50px"}}
                            >
                                {techs.map(([name, info]) => {
                                    if (info.relevant && info.usedFor === "os") {
                                        return (<img key={name} width="64" height="64" src={info.link} />);
                                    }
                                })}
                            </div>
                            
                            <p className="audiowide-regular">...or IDEs</p>

                            <div
                                style={{columnGap: "50px"}}
                            >
                                {techs.map(([name, info]) => {
                                    if (info.relevant && info.usedFor === "ide") {
                                        return (<img key={name} width="64" height="64" src={info.link} />);
                                    }
                                })}
                            </div>
                        </div>
                        :
                        <p>Techs not loaded.</p>
                    }
                </div>

                <ProjectDisplayer techs={techs} />
            </div>
        </section>
    );
}