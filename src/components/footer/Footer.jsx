import '/public/common.css'
import './Footer.css'

import SocialDisplayer from './SocialDisplayer';

export default function Footer({timers}) {
    return (
        <footer id="contact" className="column-direction">
            <div>
                <h1 className="rampart-one-regular really-big-letters floating">E</h1>
                <h1 className="rampart-one-regular really-big-letters floating">J</h1>
            </div>

            <div>
                <SocialDisplayer
                    id="email-displayer"
                    title="Click me to send my maker an email!"
                    displayedText="esteban-jean.pro@hotmail.com"
                    isIconSwap={true}
                    defaultIcon="https://img.icons8.com/ios-filled/100/FFFFFF/secured-letter--v1.png"
                    swapperIcon="https://img.icons8.com/ios-filled/100/FFFFFF/letter-with-email-sign.png"
                    timers={timers}
                />
            </div>

            <p className="offside-regular" style={{fontSize: "14pt"}}>
                Certified 0% AI. Everything is made with my own two hands!
            </p>
        </footer>
    );
}