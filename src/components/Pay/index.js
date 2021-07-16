import React from "react";
import "./Pay.css";

export default function Pay(props) {
  return (
    <div>
      {props.payOpen && (
        <div className="wrapper" id="wrapper">
          <div className="container">
            <h3>Payment</h3>
            <div className='pay'>
            <div className="payblock1">
              <h4>Account number</h4>
              <h4>Total </h4>
              <h4>Choose a payment method</h4>
            </div>
            <div className="payblock2">
              <h4>12345</h4>
              <h4>$1999</h4>
              <div className="payline">
                <div className="paylineblock1">
                  <div className="visa">
                    
                  </div>
                  <div className="visa">
                   
                  </div>
                  <div className="visa">
                   
                  </div>
                  <div className="visa">
                   
                  </div>
                </div>
                <div className="paylineblock2">
                  <p>Cardholder’s name</p>
                  <input
                    className="clientname"
                    type="text"
                    placeholder="                          enter your name"
                  />
                  <p>Card number</p>
                  <input
                    className="clientname"
                    type="number"
                    placeholder="                          enter cards number"
                  />
                  <div className="paylineblock3">
                    <div className="paylineblock4">
                      <p>Exp.date</p>
                      <input className="clientcard" type="number" />
                    </div>
                    <div className="paylineblock4">
                      <p>CVV/CVC*</p>
                      <input className="clientcard" type="number" />
                    </div>
                  </div>
                  <button className='payment'>Pay</button>
                </div>
              </div>
            </div>
            </div>
            <button className='gog'
            onClick={props.payClose}
            >CLOSE</button>
          </div>
        </div>
      )}
    </div>
  );
}
