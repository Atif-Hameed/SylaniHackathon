import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Image from 'next/image';
import f1 from '../../public/f1.jpg';


const MainSection = () =>{
    return(
        <>
        <div className='mt-5 container mb-5'>
        <h1 className="heading1 text-center mt-5">We specialize in corporate and private events</h1>
        <p className='paragraph1 text-center'>G.N Catering Company is a reputable, impeccable, trustworthy and qualified service provider whose excellence and prominence in catering and culinary for weddings, business events and other ceremonies has made it one of Pakistan's Catering Company.</p>
      </div>

      {/* Section 2 */}
      <div className=' container py-0 px-0 section1 '>
        {/* <h1 className='paragraph2 mx-5'>One Of The Best Event Organizer In Lahore
              Our Mission is to Make your Event Memorable</h1> */}
        <div className="row my-5">
          <div className='col-6'>
            <div>
              <h2 className='paragraph2 mt-5'><i className="bi bi-1-square-fill mx-4"></i>Best Catering Services in Lahore</h2>
              <p className='paragraph1 mx-5 my-3'>G.N Caterers is the Most trustworthy Catering Company in Lahore</p>

            </div>
            <div>
              <h2 className='paragraph2 mt-5'><i className="bi bi-2-square-fill mx-4"></i>G.N Caterers passion for food</h2>
              <p className='paragraph1 mx-5 my-3'>G.N Caterers prepare fresh and tasty food on each event.</p>
            </div>
            <div>
              <h2 className='paragraph2 mt-5'><i className="bi bi-3-square-fill mx-4"></i>G.N Never Compromise Quality</h2>
              <p className='paragraph1 mx-5 my-3'>Our chefs prepare food fresh each morning, never the day before.</p>
            </div>
          </div>
          <div className="col-6 py-3">
            <Image
              src={f1}
              alt="Hero image"
              // layout="responsive"
              width={595}
              height={435}
            />
          </div>
        </div>
      </div>
        </>
    );
}
export default MainSection


