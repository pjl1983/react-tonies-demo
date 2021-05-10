import React, {useContext} from 'react';
import {WishlistContext} from "./WishlistContext";

export const Navbar = () => {
  const [wishlist, setWishlist] = useContext(WishlistContext);
  const value = useContext(WishlistContext);
  const wishlistArray = value[0].map((tonie, index) =>
    (
      <ul key={index} className={'ps-0 list-container'}>
        <li className={'dropdown-item'}>
          <div className={'d-flex flex-row align-items-center'}>
            <div className={'me-auto'}>{tonie.title}</div>
            <div>{tonie.price}</div>
            <i onClick={() => {removeFromList(tonie)}} className="ms-2 text-danger fa fa-times"/>
          </div>
        </li>
      </ul>
    )
  );

  function navigateToTonies() {
    window.location.href = 'https://tonies.de/shop/tonies/';
  }

  function removeFromList(e) {
    const result = wishlist.filter(tonie => tonie.id !== e.id);
    setWishlist(() => result);
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <img onClick={navigateToTonies} src="https://tonies.de/assets/template/images/logo-tonies.svg"
             width={'100px'} className={'me-4'}/>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"/>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul className="navbar-nav me-auto">
            <li className="nav-item dropdown">
              <a className="nav-link " href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown"
                 aria-expanded="false">
                <i className="fa fa-list"/> Wishlist
                <span className="ms-2 badge rounded-pill bg-secondary">{wishlist.length}</span>
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li>
                  {wishlistArray}
                </li>
              </ul>
            </li>
          </ul>
          <h5 className="navbar-nav">
            <a className="nav-link active grey-font" aria-current="page"
               href="https://tonies.de/shop/tonies/">Shop</a>
          </h5>
        </div>
      </div>
    </nav>
  )
};
