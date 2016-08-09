import React, { Component } from 'react'
import { browserHistory, Link } from 'react-router'
import CartActions from '../../actions/CartActions'
import toastr from 'toastr'
import uuid from 'uuid'

export default class Mod extends Component {
  constructor(props) {
    super(props);

    this.productClicked = this.productClicked.bind(this);
    this.generateButtonType = this.generateButtonType.bind(this);
  }
  productClicked(mod, type) {
    if (!mod) return (console.error('No mod information found'));

    if (type === 'Add To Cart') {
      if (mod.cartQty) {
        mod.cartQty += 1;
      } else {
        mod.cartQty = 1;
      }
      CartActions.addLSCartItem(mod);
      return toastr.success(`${mod.title}as added to your cart`, 'Added To Cart');
    }
    return browserHistory.push(`mods/${mod._id}`);

  }
  generateButtonType(mod){
    if (mod.options.style.length || mod.options.colors.length || mod.options.sizes.length) {
      return 'Select Options'
    } else {
      return 'Add To Cart'
    }
  }
  render(){
    let buttonText = this.generateButtonType(this.props.mod);
    let { images, description, title, model } = this.props.mod;
    return (
      <div className="mod-card col-xs-12 row">
        <div className="mod-card-title col-xs-3">
          <h3>{title} <br /> {model}</h3>
          <img className=" col-xs-offset-1 thumbnail" id="mod-main-img" src={images[0]} role="presentation" />
        </div>
        <div className="mod-card-description col-xs-6">
          <p id="mod-main-desc" className="">
            {description}
          </p>
        </div>
        <div className="mod-card-button col-xs-3">
          <button className="add-mod-to-cart btn btn-primary btn-lg" onClick={ () => this.productClicked(this.props.mod, buttonText)}>{buttonText}</button>
        </div>
      </div>
    )
  }
}
