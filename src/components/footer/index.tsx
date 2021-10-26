import '../../assets/css/all.min.css';
import '../../assets/css/simple-line-icons.min.css';

const Footer = () => {
    return (
        <footer className="footer bg-dark">
        <div className="container">
          <div className="footer-middle">
            <div className="row">
              <div className="col-md-5 col-lg-3">
                <div className="widget widget-contact-info">
                  <h4 className="widget-title">Contact Info</h4>
                  <ul className="contact-info">
                    <li>
                      <i className="icon-direction"></i
                      ><span className="contact-info-label">Address</span>123
                      Street Name, City, England
                    </li>
                    <li>
                      <i className="icon-phone-1"></i
                      ><span className="contact-info-label">Phone</span>Toll Free
                      <a href="tel:">(123) 456-7890</a>
                    </li>
                    <li>
                      <i className="icon-envolope"></i
                      ><span className="contact-info-label">Email</span>
                      <a href="mailto:mail@example.com">mail@example.com</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-7 offset-lg-1 col-lg-8">
                <div className="row">
                  <div className="col-sm-5 col-md-5 col-lg-3">
                    <div className="widget">
                      <h4 className="widget-title">Account</h4>
                      <ul className="links">
                        <li>
                          <a href="/react/porto/demo11/pages/about-us/"
                            >About us</a
                          >
                        </li>
                        <li>
                          <a href="/react/porto/demo11/pages/contact-us/"
                            >Contact us</a
                          >
                        </li>
                        <li>
                          <a href="/react/porto/demo11/pages/account/"
                            >My Account</a
                          >
                        </li>
                        <li><a href="#">Order history</a></li>
                        <li><a href="#">Advanced search</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-sm-7 col-md-7 col-lg-4">
                    <div className="widget">
                      <h4 className="widget-title">MAIN FEATURES</h4>
                      <ul className="links">
                        <li><a href="#">Supper Fast React Template</a></li>
                        <li><a href="#">1st Fully working Ajax Theme</a></li>
                        <li><a href="#">36 Unique Shop Layouts</a></li>
                        <li><a href="#">Powerful Admin Panel</a></li>
                        <li><a href="#">Mobile &amp; Retina Optimized</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-12 col-lg-5">
                    <div className="widget widget-newsletter">
                      <h4 className="widget-title">Newsletter</h4>
                      <p className="mb-2 mr-3">
                        Get all the latest information on Events, Sales and
                        Offers. Sign up for newsletter today.
                      </p>
                      <form action="#">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email address..."
                          required
                        /><input type="submit" className="btn" value="GO" />
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="
              footer-bottom
              d-flex
              flex-column flex-lg-row
              align-items-sm-center
            "
          >
            <p className="footer-copyright mb-lg-0">
              © Porto eCommerce. 2021. All Rights Reserved
            </p>
            <div className="social-icons ml-lg-auto mr-1">
              <a
                className="social-icon social-facebook icon-facebook"
                href="#"
              ></a
              ><a className="social-icon social-twitter icon-twitter" href="#"></a
              ><a
                className="social-icon social-linkedin fab fa-linkedin-in"
                href="#"
              ></a>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;