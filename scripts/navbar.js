const navbar = `    
<link rel="stylesheet" href="../styles/nav.css">
    <div class="navbar">
    <header>
        <a class="logo" href="/index.html">
            <img src="../images/LOGO.png" alt="logo">
        </a>
        <nav>
        <ul>
        <li><div class="dropdown">
        <button onclick="myFunction()" class="dropbtn">About</button>
        <div id="myDropdown" class="dropdown-content">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </div></li>
        <li><div class="dropdown">
        <button onclick="myFunction()" class="dropbtn">Registration</button>
        <div id="myDropdown" class="dropdown-content">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div></li>
        <li><div class="dropdown">
        <button onclick="myFunction()" class="dropbtn">Media</button>
        <div id="myDropdown" class="dropdown-content">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div></li>
        <li><a href="../pages/FAQ.html">FAQ</a></li>
        <li><a href="../pages/contact.html">Contact</a></li>
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
