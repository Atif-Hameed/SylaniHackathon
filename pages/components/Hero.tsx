
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';
// import heroImage from '../../public/hero-image.jpg';
import heroImage from '../../public/hero-image.jpg';

const hero = () =>{
  return(
    <>
    <div className=''>
        <div className='black'>
          <div className='text-container'>
            <h1 className='title'>We Will Organize <br /> Your Event</h1>
            <button type='button' className='btn btn-danger py-2 px-5 subtitle fs-4 fw-bold'>Explore Us</button>
          </div>
        </div>
      </div>

      {/* Hero  */}
      <div id='Home'>
        <main>
          <div className="row">
            <div className="col">
              <Image
                src={heroImage}
                alt="Hero image"
                // layout="responsive"
                width={1590}
                height={700}
              />
            </div>
          </div>
        </main>
      </div>

    </>
  );
}
export default hero

//                  Drop Down
// <div className="dropdown">
//   <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
//     Services
//   </button>
//   <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
//     <li><a className="dropdown-item" href="#">Wedding Decorations</a></li>
//     <li><a className="dropdown-item" href="#">Wedding House Decorations</a></li>
//     <li><a className="dropdown-item" href="#">Wedding Room Decration</a></li>
//     <li><a className="dropdown-item" href="#">Wedding Cake Decoration</a></li>
//     <li><a className="dropdown-item" href="#">Wedding Car Decorations</a></li>
//   </ul>
// </div>