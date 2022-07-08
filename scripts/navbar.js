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
                <a class="menu">About Us</a>
                <div class="dropdown">
                    <div class="dropmenu">
                        <a href="../pages/history.html">History of LCUNA</a>
                    </div>
                    <div class="dropmenu">
                        <a hr>Roles of LCUNA</a>
                    </div>
                    <div class="dropmenu">
                        <a>Organogram of LCUNA</a>
                    </div>
                    <div class="dropmenu">
                        <a>Leadership Board</a>
                    </div>
                    <div class="dropmenu">
                        <a>Registered Credit Unions</a>
                    </div>
                    <div class="dropmenu">
                        <a>Loan Marketplace</a>
                    </div>
                </div>
            </li>
            <li>
                <a class="menu">Registrations</a>
                <div class="dropdown">
                    <div class="dropmenu">
                        <a href="../pages/registrationguide.html"> Register</a>
                    </div>
                    <div class="dropmenu">
                        <a>Register a Credit Union</a>
                    </div>
                    <div class="dropmenu">
                        <a>Register Guidelines</a>
                    </div>
                    <div class="dropmenu">
                        <a>Download Forms</a>
                    </div>
                    <div class="dropmenu">
                        <a>Download Document</a>
                    </div>
                </div>
            </li>
            <li>
                <a class="menu" >Media</a>
                <div class="dropdown">
                    <div class="dropmenu">
                        <a> Blogs</a>
                    </div>
                    <div class="dropmenu">
                        <a>News</a>
                    </div>
                    <div class="dropmenu">
                        <a>Picture Gallery</a>
                    </div>
                    <div class="dropmenu">
                        <a>Video Gallery</a>
                    </div>
                    <div class="dropmenu">
                        <a>Events</a>
                    </div>
                    <div class="dropmenu">
                        <a>Downloads</a>
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
                <a href="../pages/contact.html">Contact Us</a>
            </li>
        </ul>
    </nav>
  
</header>
    </div>
`;

reuse("nav-bar", navbar, false, true);
