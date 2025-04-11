import '/public/common.css'
import './EmailDisplayer.css'

import { useState } from 'react';

export default function EmailDisplayer({timers}) {
    const MY_EMAIL = "esteban-jean.pro@hotmail.com";
    const lengthState = useState(0);

    function enterMailEvent() {
        const MAIL_DISPLAY = document.getElementById("email-displayer");
        const mailParagraph = MAIL_DISPLAY.querySelector("p");

        if (timers.mailErasing || mailParagraph.style.display === 'none') {
            clearInterval(timers.mailErasing);
        }
        
        MAIL_DISPLAY.querySelector('img').src = 'https://img.icons8.com/ios-filled/100/FFFFFF/letter-with-email-sign.png';
        mailParagraph.style.display = 'block';
    
        timers.mailEntering = setInterval(() => {
            mailParagraph.innerHTML = MY_EMAIL.slice(0, lengthState[0]);
            
            if (mailParagraph.innerHTML.length === MY_EMAIL.length) {
                clearInterval(timers.mailEntering);
            }
    
            //currentLength++;
            lengthState[0]++;
        }, 75);
    }
    
    function eraseMailEvent() {
        const MAIL_DISPLAY = document.getElementById("email-displayer");
        const mailParagraph = MAIL_DISPLAY.querySelector("p");

        if (timers.mailEntering || mailParagraph.style.display === 'block') {
            clearInterval(timers.mailEntering);
        }
    
        timers.mailErasing = setInterval(() => {
            //currentLength--;
            lengthState[0]--;
    
            mailParagraph.innerHTML = mailParagraph.innerHTML.slice(0, lengthState[0]);
    
            if (mailParagraph.innerHTML.length <= 0) {
                mailParagraph.style.display = 'none';
                MAIL_DISPLAY.querySelector('img').src = 'https://img.icons8.com/ios-filled/100/FFFFFF/secured-letter--v1.png';
                clearInterval(timers.mailErasing);
            }
        }, 20);
    }

    return (
        <div
            id="email-displayer"
            className="column-direction"
            style={{alignItems: "center"}}

            title="Hi, I'm the website. Click me to send my maker an email."
            onMouseEnter={enterMailEvent}
            onMouseLeave={eraseMailEvent}
        >
            <img width="100" height="100" src="https://img.icons8.com/ios-filled/100/FFFFFF/secured-letter--v1.png" />
            <p className="offside-regular" style={{display: "none"}}></p>
        </div>
    );
}