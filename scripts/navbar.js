const navbar = `    
<link rel="stylesheet" href="../styles/nav.css">
    <div class="navbar">
    <header>
    <a class="logo" href="/index.html">
        <img src="../images/LOGO.png" alt="logo">
    </a>
    <nav>
        <div class="menu-button">
            <div class="menu-line"></div>
            <div class="menu-line"></div>
            <div class="menu-line"></div>
        </div>
        <ul>
            <li>
                <a >About</a>
                <div class="dropdown">
                    <div class="dropmenu">
                        <p>History of LCUNA</p>
                    </div>
                    <div class="dropmenu">
                        <p>Roles of LCUNA</p>
                    </div>
                    <div class="dropmenu">
                        <p>Organogram of LCUNA</p>
                    </div>
                    <div class="dropmenu">
                        <p>Leadership Board</p>
                    </div>
                    <div class="dropmenu">
                        <p>Registered Credit Unions</p>
                    </div>
                    <div class="dropmenu">
                        <p>Loan Marketplace</p>
                    </div>
                </div>
            </li>
            <li>
                <a >Registrations</a>
                <div class="dropdown">
                    <div class="dropmenu">
                        <p> Register</p>
                    </div>
                    <div class="dropmenu">
                        <p>Register a Credit Union</p>
                    </div>
                    <div class="dropmenu">
                        <p>Register Guidelines</p>
                    </div>
                    <div class="dropmenu">
                        <p>Download Forms</p>
                    </div>
                    <div class="dropmenu">
                        <p>Download Document</p>
                    </div>
                </div>
            </li>
            <li>
                <a >Media</a>
                <div class="dropdown">
                    <div class="dropmenu">
                        <p> Blogs</p>
                    </div>
                    <div class="dropmenu">
                        <p>News</p>
                    </div>
                    <div class="dropmenu">
                        <p>Picture Gallery</p>
                    </div>
                    <div class="dropmenu">
                        <p>Video Gallery</p>
                    </div>
                    <div class="dropmenu">
                        <p>Events</p>
                    </div>
                    <div class="dropmenu">
                        <p>Downloads</p>
                    </div>
                </div>
            </li>
            <li>
            <a href="../pages/FAQ.html">FAQ</a>
        </li>
        <li>
            <a href="../pages//history.html">History</a>
        </li>
        <li>
            <a href="../pages/contact.html">Contact</a>
        </li>
        </ul>
    </nav>
</header>
    </div>
`;

reuse("nav-bar", navbar, false, true);
