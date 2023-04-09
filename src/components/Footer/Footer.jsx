import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">

      <div className="footer-col">
        <h3 className="footer-title">About us</h3>
        <div className="footer-link">
          <a href="/">Newsroom</a>
        </div>
        <div className="footer-link">
          <a href="/">Careers</a>
        </div>
        <div className="footer-link">
          <a href="/">Sustainability</a>
        </div>
        <div className="footer-link">
          <a className="contact-phone">
            <ion-icon class="phone-icon" name="call-outline"></ion-icon>
            <span>(123)-456-789</span>
          </a>
        </div>
        <div className="footer-link">
          <a className="contact-email">
            <ion-icon class="email-icon" name="mail-outline"></ion-icon>
            <span>sneaker@gmail.com</span>
          </a>
        </div>
        {/* <div className="footer-link social-icons">
          <a>
            <ion-icon class="social-icon" name="logo-instagram"></ion-icon>
          </a>
          <a>
            <ion-icon class="social-icon" name="logo-facebook"></ion-icon>
          </a>
          <a>
            <ion-icon class="social-icon" name="logo-twitter"></ion-icon>
          </a>
        </div> */}
      </div>

      <div className="footer-col">
        <h3 className="footer-title">Help and Contact</h3>
        <div className="footer-link">
          <a href="/">Track your package</a>
        </div>
        <div className="footer-link">
          <a href="/">Delivery information</a>
        </div>
        <div className="footer-link">
          <a href="/">Find the right size</a>
        </div>
        <div className="footer-link">
          <a href="/">Subscribe to our newsletter</a>
        </div>
        <div className="footer-link">
          <a href="/">Report a damaged item</a>
        </div>
        <div className="footer-link">
          <a href="/">Return an order</a>
        </div>
        <div className="footer-link">
          <a href="/">Report a vulnerability</a>
        </div>
      </div>

      <div className="footer-col">
        <h3 className="footer-title">Gift Cards</h3>
        <div className="footer-link">
          <a href="/">About gift cards and vouchers</a>
        </div>
        <div className="footer-link">
          <a href="/">Buy Gift Cards</a>
        </div>
        <div className="footer-link">
          <a href="/">Redeem a Gift Card</a>
        </div>
        <div className="footer-link">
          <a href="/">Corporate Gift Cards</a>
        </div>
      </div>

      <div className="footer-col">
        <h3 className="footer-title">Subscription</h3>
        <p className="footer-subscribe">Subscribe your email adress for lastest news & updates.</p>

        <input className="footer-input" type="email" placeholder="Enter Email Address"></input>
        <button className="btn-footer" type="submit">Submit</button>
      </div>
    </div>
  );
};

export default Footer;
