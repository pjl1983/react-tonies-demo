import React, {useContext} from 'react';
import {Tonies} from "./tonie-list";
import {WishlistContext} from "./WishlistContext";

export const TonieList = () => {
  const [wishlist, setWishlist] = useContext(WishlistContext);

  function addToWishList(tonie) {
    setWishlist(() => [...wishlist, tonie]);
  }

  const tonies = Tonies.map((tonie, index) =>
    (
      <div key={index} className={'col-12 col-md-4 text-center my-3'}>
        <div className={'card'}>
          <img src={tonie.image} className="card-img-top"
               alt="Tonies"/>
          <div className={'card-body d-flex flex-column'}>
            <h5 className={'card-title'}>{tonie.title}</h5>
            <p className={'card-title mb-auto'}>{tonie.author}</p>
            <div className={'d-flex align-items-center'}>
              <h5 className={'me-auto'}>{tonie.price}</h5>
              <button className={'btn btn-outline-secondary'} type="submit" onClick={() => {addToWishList(tonie)}}>Add to wishlist &nbsp;
                <i className={'fa fa-gift'}/>
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );

  return (
    <div className={'container'}>
      <div className={'row'}>
        {tonies}
      </div>
    </div>
  )
};
