import HiddenNav from "components/hidden-nav";
import "../../assets/css/all.min.css";
import "../../assets/css/simple-line-icons.min.css";

const NavBar = () => {
  return (
    <header className="header">
      <div className="header-top bg-dark text-white">
        <div className="container justify-content-center">
          <div className="header-left">
            <h5 className="top-notice mb-0 pl-0">
              Promoção especial de inauguração! 10% de desconto para novos
              usuários -<a href="/react/porto/demo11/shop/">Aproveite!</a>
            </h5>
          </div>
          <div className="header-right d-none d-sm-flex">
            <nav className="main-nav w-100 d-xl-block d-none">
              <ul className="menu sf-js-enabled sf-arrows">
                <li className="active home-menu">
                  <a href="/react/porto/demo11/">Início</a>
                </li>
                <li>
                  <a className="sf-with-ul" href="/react/porto/demo11/shop/">
                    Categorias
                  </a>
                  <div className="megamenu megamenu-fixed-width megamenu-3cols">
                    <div className="row">
                      <div className="col-lg-4">
                        <a className="nolink" href="#">
                          ELETRÔNICOS
                        </a>
                        <ul className="submenu">
                          <li>
                            <a href="/react/porto/demo11/shop/">
                              Computadores
                            </a>
                          </li>
                          <li>
                            <a href="/react/porto/demo11/shop/boxed-slider/">
                              Notebooks
                            </a>
                          </li>
                          <li>
                            <a href="/react/porto/demo11/shop/boxed-image/">
                              Consoles
                            </a>
                          </li>
                          <li>
                            <a href="/react/porto/demo11/shop/">Left Sidebar</a>
                          </li>
                          <li>
                            <a href="/react/porto/demo11/shop/right-sidebar/">
                              Realidade Virtual
                            </a>
                          </li>
                          <li>
                            <a href="/react/porto/demo11/shop/off-canvas/">
                              Hardware
                            </a>
                          </li>
                          <li>
                            <a href="/react/porto/demo11/shop/horizontal-filter-1/">
                              Smartwatch
                            </a>
                          </li>
                          <li>
                            <a href="/react/porto/demo11/shop/horizontal-filter-2/">
                              Celulares
                            </a>
                            <li>
                            <a href="/react/porto/demo11/shop/horizontal-filter-2/">
                              Acessórios
                            </a>
                            </li>
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-4">
                        <a className="nolink" href="#">
                          PERIFÉRICOS & OUTROS
                        </a>
                        <ul className="submenu">
                          <li>
                            <a href="/react/porto/demo11/shop/list/">
                              Mouse
                            </a>
                          </li>
                          <li>
                            <a href="/react/porto/demo11/shop/infinite-scroll/">
                              Teclado
                            </a>
                          </li>
                          <li>
                            <a href="/react/porto/demo11/shop/3cols/">
                              Fone de Ouvido / Headset
                            </a>
                          </li>
                          <li>
                            <a href="/react/porto/demo11/shop/4cols/">
                              Microfone
                            </a>
                          </li>
                          <li>
                            <a href="/react/porto/demo11/shop/5cols/">
                              Webcam
                            </a>
                          </li>
                          <li>
                            <a href="/react/porto/demo11/shop/6cols/">
                              Caixa de Som
                            </a>
                          </li>
                          <li>
                            <a href="/react/porto/demo11/shop/7cols/">
                              Cabos e Adaptadores
                            </a>
                          </li>
                          <li>
                            <a href="javascript:void(0)">
                              ...
                              </a>
                          </li>
                          <li>
                            <a href="/react/porto/demo11/shop/8cols/">
                              Jogos
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-4 p-0">
                        <div className="menu-banner">
                          <figure>
                            <img
                              src="../../assets/img/menu-banner-1.jpg"
                              alt="Menu banner"
                              width="300"
                              height="300"
                            />
                          </figure>
                          <div className="banner-content">
                            <h4>
                              <span>UP TO</span>
                              <br />
                              <b>50%</b>
                              <i>OFF</i>
                            </h4>
                            <a
                              className="btn btn-sm btn-dark"
                              href="/react/porto/demo11/shop/"
                            >
                              SHOP NOW
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <a
                    className="sf-with-ul"
                    href="/react/porto/demo11/product/default/men-glasses/"
                  >
                    Products
                  </a>
                  <div className="megamenu megamenu-fixed-width">
                    <div className="row">
                      <div className="col-lg-4">
                        <span className="nolink">PRODUCT PAGES</span>
                        <ul className="submenu">
                          <li>
                            <a href="/react/porto/demo11/product/default/women-black-dress/">
                              Simple Product
                            </a>
                          </li>
                          <li>
                            <a href="/react/porto/demo11/product/default/product-brown-bag/">
                              Variable Product
                            </a>
                          </li>
                          <li>
                            <a href="/react/porto/demo11/product/default/men-glasses/">
                              Sale Product
                            </a>
                          </li>
                          <li>
                            <a href="/react/porto/demo11/product/default/men-glasses/">
                              Feature &amp; On Sale
                            </a>
                          </li>
                          <li>
                            <a href="/react/porto/demo11/product/custom-tab/men-glasses/">
                              With Custom Tab
                            </a>
                          </li>
                          <li>
                            <a href="/react/porto/demo11/product/left-sidebar/product-brown-bag/">
                              With Left Sidebar
                            </a>
                          </li>
                          <li>
                            <a href="/react/porto/demo11/product/right-sidebar/product-brown-bag/">
                              With Right Sidebar
                            </a>
                          </li>
                          <li>
                            <a href="/react/porto/demo11/product/sticky-cart/men-glasses/">
                              Add Cart Sticky
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-4">
                        <span className="nolink">PRODUCT LAYOUTS</span>
                        <ul className="submenu">
                          <li>
                            <a href="/react/porto/demo11/product/extended/women-dress/">
                              Extended Layout
                            </a>
                          </li>
                          <li>
                            <a href="/react/porto/demo11/product/grid/women-dress/">
                              Grid Image
                            </a>
                          </li>
                          <li>
                            <a href="/react/porto/demo11/product/full-width/women-dress/">
                              Full Width Layout
                            </a>
                          </li>
                          <li>
                            <a href="/react/porto/demo11/product/sticky-info/women-dress/">
                              Sticky Info
                            </a>
                          </li>
                          <li>
                            <a href="/react/porto/demo11/product/sticky-both/women-dress/">
                              Left &amp; Right Sticky
                            </a>
                          </li>
                          <li>
                            <a href="/react/porto/demo11/product/transparent/product-brown-bag/">
                              Transparent Image
                            </a>
                          </li>
                          <li>
                            <a href="/react/porto/demo11/product/center/women-dress/">
                              Center Vertical
                            </a>
                          </li>
                          <li>
                            <a href="#">BUILD YOUR OWN</a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-4 p-0">
                        <div className="menu-banner menu-banner-2">
                          <figure>
                            <img
                              src="menu-banner-1.jpg"
                              alt="Menu banner"
                              width="380"
                              height="790"
                              className="product-promo"
                            />
                          </figure>
                          <i>OFF</i>
                          <div className="banner-content">
                            <h4>
                              <span>UP TO</span>
                              <br />
                              <b>50%</b>
                            </h4>
                          </div>
                          <a
                            className="btn btn-sm btn-dark"
                            href="/react/porto/demo11/shop/"
                          >
                            SHOP NOW
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <a className="sf-with-ul" href="#">
                    Pages
                  </a>
                  <ul>
                    <li>
                      <a href="/react/porto/demo11/pages/wishlist/">Wishlist</a>
                    </li>
                    <li>
                      <a href="/react/porto/demo11/pages/cart/">
                        Shopping Cart
                      </a>
                    </li>
                    <li>
                      <a href="/react/porto/demo11/pages/checkout/">Checkout</a>
                    </li>
                    <li>
                      <a href="/react/porto/demo11/pages/account/">Dashboard</a>
                    </li>
                    <li>
                      <a href="/react/porto/demo11/pages/about-us/">About Us</a>
                    </li>
                    <li>
                      <a href="/react/porto/demo11/pages/contact-us/">
                        Contact Us
                      </a>
                    </li>
                    <li>
                      <a href="/react/porto/demo11/pages/login/">Login</a>
                    </li>
                    <li>
                      <a href="/react/porto/demo11/pages/forgot-password/">
                        Forgot Password
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="blog-menu">
                  <a href="/react/porto/demo11/pages/blog/">Blog</a>
                </li>
              </ul>
            </nav>
            <div className="header-dropdowns text-upper">
              <div className="header-dropdown pl-2">
                <a href="#">USD</a>
                <div className="header-menu">
                  <ul>
                    <li>
                      <a href="#">EUR</a>
                    </li>
                    <li>
                      <a href="#">USD</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="header-dropdown pl-2">
                <a href="#">
                  <i className="flag-us flag"></i>ENG
                </a>
                <div className="header-menu">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="flag-us flag mr-2"></i>ENG
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="flag-fr flag mr-2"></i>FRA
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <HiddenNav />
    </header>
  );
};

export default NavBar;
