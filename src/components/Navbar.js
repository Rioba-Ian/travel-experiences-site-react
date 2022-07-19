import world from "../images/Fill 213.png"

export default function Navbar() {
    return (
        <nav className="navbar">
            <header className="header">
                <img src={world} alt="wryctytk" className="world-img" />
                <p className="header-text">my travel journal</p>
            </header>
        </nav>
    )
}