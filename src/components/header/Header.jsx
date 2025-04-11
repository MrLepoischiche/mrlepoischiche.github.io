import '/public/common.css'
import './Header.css'

export default function Header() {
    return (
        <header>
            <div id="link-to-index">
                <h1 className="rampart-one-regular floating">E</h1>
                <h1 className="rampart-one-regular floating">J</h1>
            </div>
            <div id="link-navigator">
                <a className="offside-regular" href="#about">About</a>
                <a className="offside-regular" href="#projects">Work</a>
                <a className="offside-regular" href="#contact">Contact</a>
            </div>
            <div id="color-changer" style={{opacity: "0"}}>
                <img width="64" height="64" src="https://img.icons8.com/glyph-neue/64/FFFFFF/contrast.png" alt="O"/>
            </div>
        </header>
    );
}