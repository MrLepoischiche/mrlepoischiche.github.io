import '/public/common.css'

import CircularCursor from './components/circularCursor/CircularCursor';
import Header from './components/header/Header';
import Greeter from './components/greeter/Greeter';
import Footer from './components/footer/Footer';
import MainContent from './components/mainContent/MainContent';
import { useState, useEffect } from 'react';

function addScrollAppearEvent(timerObj) {

    // Scroll invitation fades in 5 seconds after page has loaded if user hasn't scrolled yet
    timerObj.scrollInvAppearTimeout = setTimeout(() => {
        timerObj.invitFadeInEffect = setInterval(
            () => {
                const SCROLL_INVIT = document.getElementById('scroll-inv');

                let opacity = Number(SCROLL_INVIT.style.opacity);
                if (opacity < 1) {
                    opacity += 0.1;
                    SCROLL_INVIT.style.opacity = String(opacity);
                } else {
                    clearInterval(timerObj.invitFadeInEffect);
                }
            }, 50
        );
    }, 5000);
}

function addScrollDisappearEvent(timerObj) {

    // If user scrolls, clear timeout and hide scroll invitation if necessary
    window.addEventListener('scroll', (event) => {
        if (event.timeStamp > 500) {
            clearTimeout(timerObj.scrollInvAppearTimeout);

            const SCROLL_INVIT = document.getElementById('scroll-inv');

            if (Number(SCROLL_INVIT.style.opacity) > 0) {
                timerObj.invitFadeOutEffect = setInterval(
                    () => {
                        let opacity = Number(SCROLL_INVIT.style.opacity);
                        if (opacity > 0) {
                            opacity -= 0.1;
                            SCROLL_INVIT.style.opacity = String(opacity);
                        } else {
                            clearInterval(timerObj.invitFadeOutEffect);
                        }
                    }, 50
                );
            }
        }
    });
}

export default function Page() {
    // Timed events (aka Intervals and Timeouts)
    let AllTimers = {};


    addScrollAppearEvent(AllTimers);
    addScrollDisappearEvent(AllTimers);

    const FLOATING_ELEMENTS = document.querySelectorAll('.floating');
    for (let i = 0; i < FLOATING_ELEMENTS.length; i++) {
        FLOATING_ELEMENTS[i].style.animation = `MoveUpDown 3s ${i/2}s ease infinite`;
    }
    

    // Techs' and Projects' data at page's root
    const [myTechs, setMyTechs] = useState([]);
        
    async function FetchMyTechs() {
        try {
            let techsObj;

            const techsResp = await fetch('/data/techs.json',
                {
                    headers : { 
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    }
                }
            );

            await techsResp.json().then(techs => {techsObj = Object.entries(techs)});
            setMyTechs(techsObj);
        } catch (error) {
            console.warn(error, "error");
        }
    };

    useEffect(() => {
        FetchMyTechs();
    }, []);

    // Whole page's content is returned to main.jsx
    return (
    <>
        <CircularCursor timers={AllTimers} />
        
        <Header/>
        <Greeter timers={AllTimers} />
        <MainContent timers={AllTimers} techs={myTechs} />
        <Footer timers={AllTimers} />
    </>
    );
}