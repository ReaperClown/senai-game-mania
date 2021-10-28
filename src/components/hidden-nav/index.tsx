import "../../assets/css/all.min.css";
import "../../assets/css/simple-line-icons.min.css";

const HiddenNav = () => {
  return (
    <div className="header-transparent">
      <div className="sticky-wrapper">
        <div className="header-middle sticky-header fixed">
          <div className="container header-box">
            <div className="header-left">
              <button className="mobile-menu-toggler" type="button">
                <i className="fas fa-bars"></i>
              </button>
              <a className="logo" href="/react/porto/demo11/">
                <img src="../../assets/img/flags.png" alt="Porto Logo" />
              </a>
            </div>
            <div className="header-right">
              <div
                className="
                header-icon
                header-search
                header-search-inline
                header-search-category
                d-none d-sm-block
                border-left-0
                mb-0
              "
              >
                <a href="#" className="search-toggle" role="button">
                  <i className="icon-magnifier"></i>
                </a>
                <form action="#" method="get">
                  <div className="header-search-wrapper">
                    <input
                      type="search"
                      className="form-control bg-transparent"
                      placeholder="Search Products..."
                      required
                    />
                    <button
                      className="
                      btn
                      icon-magnifier
                      bg-transparent
                      border-left-0
                    "
                      title="search"
                      type="submit"
                    ></button>
                    <div className="live-search-list"></div>
                  </div>
                </form>
              </div>
              <a
                className="header-icon header-icon-user"
                href="/react/porto/demo11/pages/login/"
              >
                <i className="icon-user-2"></i>
              </a>
              <a
                className="header-icon"
                href="/react/porto/demo11/pages/wishlist/"
              >
                <i className="icon-wishlist-2"></i>
              </a>
              <div className="dropdown cart-dropdown">
                <a
                  href="#"
                  title="Cart"
                  className="
                  dropdown-toggle dropdown-arrow
                  cart-toggle
                  d-flex
                  align-items-center
                "
                >
                  <i className="minicart-icon"></i>
                  <span className="cart-count badge-circle">0</span>
                </a>
                <div className="cart-overlay"></div>
                <div className="dropdown-menu mobile-cart">
                  <a href="#" title="Close (Esc)" className="btn-close">
                    ×
                  </a>
                  <div className="dropdownmenu-wrapper">
                    <div className="dropdown-cart-header">Carrinho</div>
                    <p className="pt-3 mt-2">No products in the cart.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HiddenNav;
