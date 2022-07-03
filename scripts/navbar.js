const navbar = `    
<link rel="stylesheet" href="../styles/nav.css">
    <div class="navbar">
    <header>
        <a class="logo" href="/index.html">
            <img src="../images/LOGO.png" alt="logo">
        </a>
        <nav>
        <ul>
        <li><a href="../pages/about.html">About Us</a></li>
        <li><a href="../pages/media.html">Media</a></li>
        <li><a href="../pages/FAQ.html">FAQ</a></li>
        <li><a href="../pages/history.html">History</a></li>
        <li><a href="../pages/blog.html">Blog</a></li>
        <li><a href="../pages/contact.html">Contact Us</a></li>
        </ul>
        </nav>
        <div class="menu-button">
            <div class="menu-line"></div>
            <div class="menu-line"></div>
            <div class="menu-line"></div>
        </div>
    </header>
    </div>
`;

reuse("nav-bar", navbar, false, true);
