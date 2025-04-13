import '/public/common.css'
import './Header.css'

export default function Header() {
    return (
        <header>
            <div id="link-to-index"
                onMouseEnter={(event) => {
                    for (let i = 0; i < event.currentTarget.children.length; i++) {
                        event.currentTarget.children[i].classList.add("biggerOnHover");
                    }
                }}

                onMouseLeave={(event) => {
                    for (let i = 0; i < event.currentTarget.children.length; i++) {
                        event.currentTarget.children[i].classList.remove("biggerOnHover");
                    }
                }}
            >
                <h1 className="rampart-one-regular">E</h1>
                <h1 className="rampart-one-regular">J</h1>
            </div>
            <div id="link-navigator">
                <a className="offside-regular" href="#about">About</a>
                <a className="offside-regular" href="#project-presenter">Work</a>
                <a className="offside-regular" href="#contact">Contact</a>
            </div>
            <div id="color-changer" style={{opacity: "0"}}>
                <img width="64" height="64" src="https://img.icons8.com/glyph-neue/64/FFFFFF/contrast.png" alt="O"/>
            </div>
        </header>
    );
}