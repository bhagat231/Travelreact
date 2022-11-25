import React from 'react'
import * as mdb from 'mdb-ui-kit'; // lib
import { Input } from 'mdb-ui-kit'; // module
import { Routes, Route, Link } from "react-router-dom";
import Home from '../Pages/Home';
import Cat from '../Pages/Cat';
import Single from '../Pages/Single';
import Data from '../Data/Data';
import Bhutan from '../Pages/Bhutan';
import Travel from '../Pages/Travel';
import Desti from '../Pages/Desti';
import Error from '../Pages/Error';
import About from '../Pages/About';
import Help from '../Pages/Help';


export default function Header() {
  return (
    <>
<nav className="navbar navbar-expand-lg bg-info navbar-info">
  <div className="container">
    <Link className="navbar-brand" to="/"><img width="100" src='https://www.nepaltourstravel.com/themes/images/logo.svg'/></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        {Data.map((z)=>(
        <li className="nav-item">
         <Link className="nav-link active" aria-current="page" to={`/cat/${z.id}`}>{z.catName}</Link>

        </li>
        ))}
        <li className="nav-item">
          <Link className="nav-link" to="/Bhu">BHUTAN</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            TRAVEL INFO
          </a>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item link-dark" to="/tra">NEPAL INFO</Link></li>
            <li><Link className="dropdown-item" to="/tra">BHUTAN INFO</Link></li>
            <li><Link className="dropdown-item" to="/tra">INDIA INFO</Link></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
          data-mdb-toggle="dropdown" aria-expanded="false">
          COMPANY INFO
        </a>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <li>
            <Link class="dropdown-item" to="/abt">ABOUT US</Link>
          </li>
          <li>
            <Link class="dropdown-item" to="/abt">CONTACT US</Link>
          </li>
          <li>
            <Link class="dropdown-item" to="#">
              TRAVEL INFO 
            </Link>
            <ul class="dropdown-menu dropdown-submenu">
              <li>
                <a class="dropdown-item" href="#">PRIAVTE BUS</a>
              </li>
              <li>
                <a class="dropdown-item" href="#">GOVERNMENT BUS</a>
              </li>
              <li>
                <a class="dropdown-item" href="#">TICKET &raquo; </a>
                <ul class="dropdown-menu dropdown-submenu">
                  <li>
                    <a class="dropdown-item" href="#">BUS TICKET</a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">AIR WAYS </a>
                  </li>
                </ul>
              </li>
              <li>
                <a class="dropdown-item" href="#">HIRE BUS</a>
              </li>
            </ul>
          </li>
          
        </ul>
      </li>
      <li className="nav-item">
          <Link className="nav-link" to="/hel">HELP COUNTER</Link>
        </li>
      </ul>
      <div className='abc mt-4 me-2'>
        <p className='text-light'>Call us, we’re at your service</p>
        <div className=' d-flex '>
        <p className='mt-1'><i class="bi bi-whatsapp text-light"></i></p>
        <p className='mt-2 ms-2 text-light'>977 9851035823</p>
        </div>
      </div>
      <button className='btn btn-info text-dark bg-dark '><Link className='link-light' to="/hel">inquiry Now</Link></button>
      <button className='btn btn-info mx-2 text-dark bg-dark'><i class="bi bi-search text-light"></i></button>
    </div>
  </div>
</nav>
<div className='container-fluid border-bottom pb-5 '>
    <div className='row'>
        <div className='col-lg-12'>
            <img className='bcd' src='https://www.nepaltourstravel.com/themes/images/home-banner.svg'/>
            <h1 className='kkk'><p className='fs-1'>Everest Base Camp Helicopter<br/> Tour with Landing Cost</p></h1>
            <div className='ggg'>
            <button className='btn btn-info rounded-pill'><Link className='link-dark' to="/desti">Destination</Link></button>
            <button className='btn btn-info rounded-pill mx-2'><Link className='link-dark' to="/desti">activites</Link></button>
            <button className='btn btn-info rounded-pill mx-2'><Link className='link-dark' to="/desti">Duration</Link></button>
            <button className='btn btn-info rounded-pill '><Link className='link-dark' to="/desti">find your trip</Link></button>
            </div>
            <div>
                <div className='hhh d-flex  '>
                <p>Recommended <br/>on Tripadvisor</p>
                <div className='border-start lll mb-1'>
                <p className='ms-2'>tripadvisor <br/>325+ excellent reviews</p>
                </div>
                </div>
            </div>
        </div>
    </div>
</div>
<Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cat/:cid" element={<Cat />} />
        <Route path="/details/:id" element={<Single />} />
        <Route path="/Bhu" element={<Bhutan />} />
        <Route path="/tra" element={<Travel />} />
        <Route path="/desti" element={<Desti />} />
        <Route path="/err" element={<Error />} />
        <Route path="/abt" element={<About />} />
        <Route path="/hel" element={<Help />} />

      
      </Routes>






    </>
  )
}
