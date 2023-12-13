import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <div className="container mt-5" >
        <hr></hr>
      <footer className="">
        <div className="row">
          <div className="col-6 col-md-2 mb-3">
            <h5>Most Used </h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><Link to="/simpleinterest" className="nav-link p-0 text-muted">Simple Interest</Link></li>
              <li className="nav-item mb-2"><Link to="/compoundinterest" className="nav-link p-0 text-muted">Compound Interest</Link></li>
              <li className="nav-item mb-2"><Link to="/amortizationschedule" className="nav-link p-0 text-muted">Amortization Schedule</Link></li>
              <li className="nav-item mb-2"><Link to="/bmicalculator" className="nav-link p-0 text-muted">Body Mass Index (BMI)</Link></li>
              <li className="nav-item mb-2"><Link to="/percentagecalculator" className="nav-link p-0 text-muted">Percentage Calculator</Link></li>              
            </ul>
          </div>

          <div className="col-6 col-md-2 mb-3">
            <h5>Recently Added</h5>
            <ul className="nav flex-column">
            <li className="nav-item mb-2">
                    <Link to="/agecalculator" className="nav-link p-0 text-muted">Age Calculator</Link>
                </li>
                <li className="nav-item mb-2">
                    <Link to="/timecalculator" className="nav-link p-0 text-muted">Time Calculator</Link>
                </li>

                <li className="nav-item mb-2">
                    <Link to="/randomnumber" className="nav-link p-0 text-muted">Random Number</Link>
                </li>

                <li className="nav-item mb-2">
                    <Link to="/timeperiod" className="nav-link p-0 text-muted">Time Period</Link>
                </li>

                <li className="nav-item mb-2">
                    <Link to="/randomnames" className="nav-link p-0 text-muted">Random Names</Link>
                </li>
            </ul>
          </div>

          {/* <div className="col-6 col-md-2 mb-3">
            <h5>Section 3</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><Link to="/simpleinterest" className="nav-link p-0 text-muted">Simple Interest</Link></li>
              <li className="nav-item mb-2"><Link to="/compoundinterest" className="nav-link p-0 text-muted">Compound Interest</Link></li>
              <li className="nav-item mb-2"><Link to="/amortizationschedule" className="nav-link p-0 text-muted">Amortization Schedule</Link></li>
              <li className="nav-item mb-2"><Link to="/bmicalculator" className="nav-link p-0 text-muted">Body Mass Index (BMI)</Link></li>
              <li className="nav-item mb-2"><Link to="/percentagecalculator" className="nav-link p-0 text-muted">Percentage Calculator</Link></li>              
            </ul>
          </div> */}

          <div className="col-md-5 offset-md-1 mb-3 pt-4">
            <form>
              <h5>Subscribe to our newsletter</h5>
              <p>Monthly digest of what's new and exciting from us.</p>
              <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
                <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
                <button className="btn btn-dark" type="button">Subscribe</button>
              </div>
            </form>
          </div>
          
        </div>

        <div className="d-flex flex-column flex-sm-row justify-content-between py-4  border-top">
          <p>&copy; 2022 Company, Inc. All rights reserved.</p>

          
          {/* <ul className="list-unstyled d-flex">
            <li className="ms-3"><a className="link-dark" href="#"><svg className="bi" width="24" height="24"><use xlinkHref="#twitter"/></svg></a></li>
            <li className="ms-3"><a className="link-dark" href="#"><svg className="bi" width="24" height="24"><use xlinkHref="#instagram"/></svg></a></li>
            <li className="ms-3"><a className="link-dark" href="#"><svg className="bi" width="24" height="24"><use xlinkHref="#facebook"/></svg></a></li>
          </ul> */}

          <ul className="list-unstyled d-flex">

            <li className="ms-3"><Link to="/" className="nav-link p-0 text-muted">Home</Link></li>
            <li className="ms-3"><Link to="/about" className="nav-link p-0 text-muted">About</Link></li>
            <li className="ms-3"><Link to="/faq" className="nav-link p-0 text-muted">FAQs</Link></li>
            <li className="ms-3"><Link to="/privacy-policy" className="nav-link p-0 text-muted">PrivacyPolicy</Link></li>
            <li className="ms-3"><Link to="/contact" className="nav-link p-0 text-muted">Contact</Link></li>
            {/* <li className="ms-3"><a className="link-dark" href="#"><svg className="bi" width="24" height="24"><use xlinkHref="#twitter"/></svg></a></li>
            <li className="ms-3"><a className="link-dark" href="#"><svg className="bi" width="24" height="24"><use xlinkHref="#instagram"/></svg></a></li>
            <li className="ms-3"><a className="link-dark" href="#"><svg className="bi" width="24" height="24"><use xlinkHref="#facebook"/></svg></a></li> */}
          </ul>


        </div>
      </footer>
    </div>
  );
};

export default Footer;
