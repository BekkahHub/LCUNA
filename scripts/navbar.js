const navBar = `    
<link rel="stylesheet" href="../styles/nav.css">
<nav>
<div class="navbar">
  <i class='bx bx-menu'></i>
  <div class="logo"><a href="/index.html">
  <img src="../images/LOGO.svg" alt="">
  </a></div>
  <div class="nav-links">
    <div class="sidebar-logo">
      <span class="logo-name">LCUNA</span>
      <i class='bx bx-x' ></i>
    </div>
    <ul class="links">
      <li>
        <a href="#">About</a>
        <i class='bx bxs-chevron-down about-arrow arrow  '></i>
        <ul class="htmlCss-sub-menu-1 sub-menu">
          <li><a href="../pages/history.html">History of LCUNA</a></li>
          <li><a href="../pages/about.html">Roles of LCUNA</a></li>
          <li><a href="#">Leadership Board</a></li>    
          <li><a href="#">Register Credit Union</a></li>    
          <li><a href="#">Credit Union Policy</a></li>    
          <li><a href="#">Loan Marketplace</a></li>    
        </ul>
      </li>
      <li>
        <a href="#">Register</a>
        <i class='bx bxs-chevron-down htmlcss-arrow arrow  '></i>
        <ul class="htmlCss-sub-menu sub-menu">
          <li><a href="../pages/register.html">Register</a></li>
          <li><a href="#">Register a Credit Union</a></li>
          <li><a href="#">Registeration Guidelines</a></li>
          <li><a href="#">Download Forms</a></li>
          <li><a href="#">Downloads Document</a></li>
        </ul>
      </li>
      <li>
        <a href="#">Media</a>
        <i class='bx bxs-chevron-down js-arrow arrow '></i>
        <ul class="js-sub-menu sub-menu">
          <li><a href="#">Blogs</a></li>
          <li><a href="#">News</a></li>
          <li><a href="#">Picture Gallery</a></li>
          <li><a href="#">Video Gallery</a></li>
          <li><a href="#">Events</a></li>
        </ul>
      </li>
      <li><a href="../pages/FAQ.html">FAQ</a></li>
      <li><a href="../pages/contact.html">Contact</a></li>
    </ul>
  </div>
  
</div>
</nav>

<script src="../scripts/menu.js"></script>
`;

reuse("nav-bar", navBar, false, true);
