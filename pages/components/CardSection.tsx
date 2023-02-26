import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

const Cards = () =>{
    return(
        <>
        <div className='container-fluid section3 my-5'>
        <div className="container py-1">
          <h1 className='heading3 text-center fs-1'>We are a full-service catering company located in Lahore</h1>
          <div className="row col-12 mx-5">
            <div className="card col-3 px-5 py-5 mx-5 my-2">
              <i className="bi bi-gift-fill card-img-top card-img"></i>
              <div className="card-body">
                <div className="card-title text-center"><h4>Anniversaries</h4></div>
              </div>
              <div className="card-text text-center fs-5"><p>We are 100% committed
                to quality service.</p></div>
              <a href="#" className='text-center'>Learn more</a>
            </div>
            <div className="card col-3 px-5 py-5 mx-5 my-2">
              <i className="bi bi-cup-straw card-img-top card-img fs-1"></i>
              <div className="card-body">
                <div className="card-title text-center"><h4>Corporate Parties</h4></div>
              </div>
              <div className="card-text text-center fs-5"><p>Make Your Corporate Events Memorable with G.N Caterers</p></div>
              <a href="#" className='text-center'>Learn more</a>
            </div>
            <div className="card col-3 px-5 py-5 mx-5 my-2">
              <i className="bi bi-house-heart card-img-top card-img"></i>
              <div className="card-body">
                <div className="card-title text-center"><h4>Weddings</h4></div>
              </div>
              <div className="card-text text-center fs-5"><p>This Special Event Needs Special Event Organizers</p></div>
              <a href="#" className='text-center'>Learn more</a>
            </div>
            <div className="card col-3 px-5 py-5 mx-5 my-2">

              <i className="bi bi-boombox-fill card-img-top card-img"></i>
              <div className="card-body">
                <div className="card-title text-center"><h4>Music Party</h4></div>
              </div>
              <div className="card-text text-center fs-5"><p>This Event comes once in a Year. Make it special with G.N Caterers</p></div>
              <a href="#" className='text-center'>Learn more</a>
            </div>
            <div className="card col-3 px-5 py-5 mx-5 my-2">
              <i className="bi bi-arrow-through-heart card-img-top card-img fs-1"></i>
              <div className="card-body">
                <div className="card-title text-center"><h4>Valentien Party</h4></div>
              </div>
              <div className="card-text text-center fs-5"><p>Make Your Corporate Events Memorable with G.N Caterers</p></div>
              <a href="#" className='text-center'>Learn more</a>
            </div>
            <div className="card col-3 px-5 py-5 mx-5 my-2">
              <i className="bi bi-envelope-paper-heart-fill card-img-top card-img"></i>
              <div className="card-body">
                <div className="card-title text-center"><h4>Love Letters</h4></div>
              </div>
              <div className="card-text text-center fs-5"><p>This Special Event Needs Special Event Organizers</p></div>
              <a href="#" className='text-center'>Learn more</a>
            </div>
          </div>
          <div className='mt-5  d-flex justify-content-center'>
            <button type='button' className='btn btn-danger text-center my-5 fs-4'>Explore more</button>
          </div>
        </div>
      </div>
        </>
    );
}
export default Cards