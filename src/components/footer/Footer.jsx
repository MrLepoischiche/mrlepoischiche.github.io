import '/public/common.css'
import './Footer.css'

import SocialDisplayer from './SocialDisplayer';

export default function Footer({timers}) {
    return (
        <div className="column-direction">
            <div style={{height: "50vh", backgroundImage: "linear-gradient(180deg, black, var(--element-background))"}}></div>
            <footer id="contact" className="column-direction">
                <div>
                    <h1 className="rampart-one-regular really-big-letters floating">E</h1>
                    <h1 className="rampart-one-regular really-big-letters floating">J</h1>
                </div>

                <div className="column-direction" style={{rowGap: "2cm"}}>
                    <SocialDisplayer
                        id="email-displayer"
                        title="Click me to send my maker an email!"
                        displayedText="esteban-jean.pro@hotmail.com"
                        isIconSwap={true}
                        defaultIcon="https://img.icons8.com/ios-filled/100/FFFFFF/secured-letter--v1.png"
                        swapperIcon="https://img.icons8.com/ios-filled/100/FFFFFF/letter-with-email-sign.png"
                        clickHandler={() => {
                            window.location.href = "mailto:esteban-jean.pro@hotmail.com";
                        }}
                        timers={timers}
                    />

                    <SocialDisplayer
                        id="linkedin-displayer"
                        title="Click me to go to my maker's LinkedIn page!"
                        displayedText="@newjeanesteban"
                        isIconSwap={false}
                        defaultIcon="https://img.icons8.com/ios-filled/100/FFFFFF/linkedin.png"
                        swapperIcon=""
                        clickHandler={() => {
                            window.open("https://linkedin.com/in/newjeanesteban/", "_blank").focus();
                        }}
                        timers={timers}
                    />

                    <SocialDisplayer
                        id="github-displayer"
                        title="Click me to go to my maker's GitHub page!"
                        displayedText="@MrLepoischiche"
                        isIconSwap={false}
                        defaultIcon="https://img.icons8.com/ios-filled/100/FFFFFF/github.png"
                        swapperIcon=""
                        clickHandler={() => {
                            window.open("https://github.com/MrLepoischiche", "_blank").focus();
                        }}
                        timers={timers}
                    />
                </div>

                <p id='disclaimer' className="offside-regular">
                    Certified 0% AI. Everything is made with my own two hands!
                </p>
            </footer>
        </div>
    );
}