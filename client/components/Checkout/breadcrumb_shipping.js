import React, { Component } from 'react'
import { Link } from 'react-router'

const breadcrumb_shipping = () => {
  return (
    <ul className="list-unstyled list-inline">
      <li className="breadcrumb__item breadcrumb__item--completed">
        <Link className="breadcrumb__link" to="cart">Cart</Link>
      </li>
      <li className='text-info breadcrumb-arrow'> > </li>
      <li className="breadcrumb__item breadcrumb__item--current">
        <Link className="breadcrumb__link" to="checkout">Customer information</Link> >
        </li>
        <li className='text-info breadcrumb-arrow'> > </li>
        <li className="breadcrumb__item breadcrumb__item--blank">
          Shipping method >
        </li>
        <li className='text-info breadcrumb-arrow'> > </li>
        <li className="breadcrumb__item breadcrumb__item--blank">
          Payment method
        </li>
      </ul>
    )
  }

  export default breadcrumb_shipping
