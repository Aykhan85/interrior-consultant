const Header = ({ toggle, setToggle }) => {
    return (
        <header>
            <div className="header__container">
                <div className="logo">
                    <h3>THIS INTERRIOR</h3>
                </div>
                <nav className={toggle ? 'active' : ''}>
                    <ul className="hamburger-menu">
                        <li className="hamburger-list">
                            <a href="#">Home</a>
                        </li>
                        <li className="hamburger-list">
                            <a href="#">Collection</a>
                        </li>
                        <li className="hamburger-list">
                            <a href="#">About</a>
                        </li>
                        <li className="hamburger-list">
                            <a href="#">Contact</a>
                        </li>
                    </ul>
                </nav>

                <div className="header-hamburger" onClick={() => setToggle(prev => !prev)}>
                    <div className={toggle ? 'line1 active' : 'line1'}></div>
                    <div className={toggle ? 'line2 active' : 'line2'}></div>
                    <div className={toggle ? 'line3 active' : 'line3'}></div>
                </div>




            </div>
        </header>
    )
}

export default Header