import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterestP,
  FaGoogle,
  FaYoutube,
  FaTelegramPlane,
  FaEnvelope,
} from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>Hobbycue</h3>
        <ul>
          <li>
            <a href="#about">About Us</a>
          </li>
          <li>
            <a href="#services">Our Services</a>
          </li>
          <li>
            <a href="#work">Work with Us</a>
          </li>
          <li>
            <a href="#faq">FAQ</a>
          </li>
          <li>
            <a href="#contact">Contact Us</a>
          </li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>How Do I</h3>
        <ul>
          <li>
            <a href="#signup">Sign Up</a>
          </li>
          <li>
            <a href="#add-listing">Add a Listing</a>
          </li>
          <li>
            <a href="#claim">Claim Listing</a>
          </li>
          <li>
            <a href="#post-query">Post a Query</a>
          </li>
          <li>
            <a href="#add-blog">Add a Blog Post</a>
          </li>
          <li>
            <a href="#queries">Other Queries</a>
          </li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Quick Links</h3>
        <ul>
          <li>
            <a href="#listings">Listings</a>
          </li>
          <li>
            <a href="#blogs">Blog Posts</a>
          </li>
          <li>
            <a href="#shop">Shop / Store</a>
          </li>
          <li>
            <a href="#community">Community</a>
          </li>
        </ul>
      </div>
      <div className="footer-section social-invite">
        <div className="social-media">
          <h3>Social Media</h3>
          <div className="social-media-bar">
            <FaFacebookF className="social-icon" />
            <FaTwitter className="social-icon" />
            <FaInstagram className="social-icon" />
            <FaPinterestP className="social-icon" />
            <FaGoogle className="social-icon" />
            <FaYoutube className="social-icon" />
            <FaTelegramPlane className="social-icon" />
            <FaEnvelope className="social-icon" />
          </div>
          {/* <ul>
            <li>
              <a href="#facebook">Facebook</a>
            </li>
            <li>
              <a href="#twitter">Twitter</a>
            </li>
            <li>
              <a href="#instagram">Instagram</a>
            </li>
            <li>
              <a href="#pinterest">Pinterest</a>
            </li>
            <li>
              <a href="#youtube">YouTube</a>
            </li>
            <li>
              <a href="#linkedin">LinkedIn</a>
            </li>
            <li>
              <a href="#email">Email</a>
            </li>
            <li>
              <a href="#telegram">Telegram</a>
            </li>
          </ul> */}
        </div>
        <div className="invite-friends">
          <h3>Invite Friends</h3>
          <form>
            <input type="email" placeholder="Email ID" />
            <button type="button">Invite</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; Purple Cues Private Limited</p>
        {/* <div className="footer-wrapper d-flex align-items-center justify-content-center"></div> */}
      </div>
    </footer>
  );
};

export default Footer;
