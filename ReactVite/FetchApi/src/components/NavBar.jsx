import '../css/NavBar.scss'

function NavBar() {
    return ( 
        <>
        <div className='Main-Container'>
            <nav>
                <div className="wrapper">
                    <div className="logo">
                    <a href="https://github.com/0MeMo07"><img src="https://github.githubassets.com/favicons/favicon-dark.png" style={{padding:"10px"}}/>0MeMo07</a>
                    </div>
                    <input type="radio" name="slider" id="menu-btn" />
                    <input type="radio" name="slider" id="close-btn" />
                    <ul className="nav-links">
                    <label htmlFor="close-btn" className="btn close-btn">
                        <i className="fas fa-times" />
                    </label>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="https://github.com/0MeMo07/Photo-Search">About</a>
                    </li>
                    {/* <li>
                        <a href="#" className="desktop-item">
                        Dropdown Menu
                        </a>
                        <input type="checkbox" id="showDrop" />
                        <label htmlFor="showDrop" className="mobile-item">
                        Dropdown Menu
                        </label>
                        <ul className="drop-menu">
                        <li>
                            <a href="#">Drop menu 1</a>
                        </li>
                        <li>
                            <a href="#">Drop menu 2</a>
                        </li>
                        <li>
                            <a href="#">Drop menu 3</a>
                        </li>
                        <li>
                            <a href="#">Drop menu 4</a>
                        </li>
                        </ul>
                    </li> */}
                
                    <li>
                        <a href="https://unsplash.com/documentation">Feedback</a>
                    </li>
                    </ul>
                    <label htmlFor="menu-btn" className="btn menu-btn">
                    <i className="fas fa-bars" />
                    </label>
                </div>
                </nav>
            </div>

        </>
     );
}

export default NavBar;