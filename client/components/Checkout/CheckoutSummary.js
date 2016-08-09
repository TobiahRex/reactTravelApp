import React, { Component } from 'react'

// TODO render summary of charges to DOM using this.props

export default class CheckoutSummary extends Component {
  render() {
    let { cartInfo } = this.props
    return (
      <div id="checkout-sidebar" className="well sidebar col-xs-6 col-xs-offset-1">
        <div className="sidebar_header"></div>
        <div className="sidebar_content">
          <div className="order-summary">
            <h4>Order Summary</h4>
            <div className="order-summary-sections">
              <div className="order-summary-products">
                <div className="order-summary-section-content">
                  <table>
                    <caption className="visually-hidden">Checkout Cart</caption>
                    <thead>
                      <tr className="visually-hidden">
                        <th className="text-center visually-hidden col-xs-2">Image</th>
                        <th className="text-center visually-hidden">Description</th>
                        <th className="text-center visually-hidden">Quantity</th>
                        <th className="text-center visually-hidden">Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="order-summary-product-row">
                        <td className="order-summary-product-image text-center">image here</td>
                        <td className="order-summary-product-description text-center">description</td>
                        <td className="order-summary-product-description text-center">qty</td>
                        <td className="order-summary-product-description text-center">price</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="order-summary-discount">
                <form className="order-summary-discount-form form-group" action="">
                  <div className="order-summary-discount-input col-xs-8">
                    <input className="form-control" type="text" placeholder="Discount" id="checkout-reduction code"/>
                  </div>
                  <div className="order-summary-discount-apply-button col-xs-4">
                    <button className="form-control order-summary-discount-apply btn btn-default">Apply</button>
                  </div>
                </form>
              </div>
              <div className="order-summary-total">
                <table className="col-xs-12 order-summary-table">
                  <caption className="visually-hidden">Cost summary</caption>
                  <thead>
                    <tr>
                      <th className="col-xs-9"><span className="visually-hidden">Description</span></th>
                      <th className=""><span className="visually-hidden">Price</span></th>
                    </tr>
                  </thead>
                  <tbody className="order-summary-tbody">
                    <tr className="order-summary-subtotal">
                      <td className="order-summary-name">Subtotal</td>
                      <td className="order-summary-price">
                        <span className="order-summary-emphasis" data-checkout-subtotal-price-target="8380">$83.80</span>
                      </td>
                    </tr>


                    <tr className="order-summary--shipping">
                      <td className="order-summary-name">Shipping</td>
                      <td className="order-summary__price">
                        <span className="order-summary-emphasis" data-checkout-total-shipping-target="0">—</span>
                      </td>
                    </tr>

                    <tr className="order-summary--taxes " data-checkout-taxes="">
                      <td className="order-summary-name">Taxes</td>
                      <td className="order-summary-price">
                        <span className="order-summary-emphasis" data-checkout-total-taxes-target="755">$7.55</span>
                      </td>
                    </tr>

                  </tbody>
                  <tfoot className="order-summary-table__footer">
                    <tr className="order-summary">
                      <td className="order-summary-name payment-due-label">
                        <span className="payment-due-label-total">Total</span>
                      </td>
                      <td className="order-summary-price payment-due">
                        <span className="payment-due-currency">YEN</span>
                        <span className="payment-due-price" data-checkout-payment-due-target="9135"> 91.35</span>
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
