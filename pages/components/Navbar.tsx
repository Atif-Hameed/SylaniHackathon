import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
import React from 'react';



const navbar = () =>{
  return(
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-danger g-0 fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Event Planner</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse ms-5 text-color" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">

                <a className="nav-link active" aria-current="page" href="#Home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Blog</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">Events</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="#">PortFolio</a>
              </li>
            </ul>
          </div>
          <div className="d-flex">
            <Link href="../Home/Signin"><button type='button' className='btn btn-danger border fs-5 fw-bold'>Sign In</button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
export default navbar