const footer = ` 
<link rel="stylesheet" href="../styles/footer.css" />
<footer>
      <div class="footer">
        <div class="column">
          <h4>LCUNA</h4>
          <p>
            © 2022. LCUNA Limited <br />
            All rights reserved
          </p>
          <li class="socials">
            <a href=""
              ><img
                src="../images/Instagram.svg"
                alt="instagram"
                data-aos="fade-right"
            /></a>
            <a
              href="https://www.facebook.com/lcuna.2012/?_rdc=1&_rdr"
              target="_blank"
              ><img
                src="../images/Facebook.svg"
                alt="facebook"
                data-aos="fade-down"
            /></a>
            <a href=""
              ><img
                src="../images/Twitter.svg"
                alt="twitter"
                data-aos="fade-up"
            /></a>
            <a href=""
              ><img
                src="../images/LinkedIn.svg"
                alt="linkedIn"
                data-aos="fade-left"
            /></a>
          </li>
        </div>
        <div>
          <h4>Company</h4>
          <p><a href="./about.html">About Us</a></p>
          <p><a href="./gallery.html">Gallery</a></p>
          <p><a href="./FAQ.html.html">FAQ</a></p>
          <p><a href="./history.html">History</a></p>
        </div>

        <div>
          <h4>Links</h4>
          <p><a href="./contact.html">Contact</a></p>
          <p><a href="">Download Documents</a></p>
        </div>

        <div>
          <h4>Info</h4>
          <p>
            <a>
              Bob Taylor Road, Red-Light, <br />
              Paynesville, Monrovia, Liberia <br />
              +231 88 659 7949
            </a>
          </p>
        </div>
      </div>
    </footer>
`;

reuse("footer-component", footer, false, true);
