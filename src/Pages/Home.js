import React from 'react'
import { Link } from 'react-router-dom'
import Product from '../Data/Product'


export default function Home() {
    var one=Product.filter((q)=>q.cat==1)
    var two=Product.filter((q)=>q.cat==50)
    var three=Product.filter((q)=>q.cat==51)
    var four=Product.filter((q)=>q.cat==52)


    
  return (
    <>
      <div className="container py-3">
        <div className='simple'>
        <h2 className='fw-bold'>Nepal Luxury Tours</h2>
        </div>
        <div className="row text-centershadow p-3 mb-5 bg-body rounded">
          {one.map((x) => (
            <div className="col-lg-4">
              <div className='row'>
  <div className="card" style={{width: '25rem'}}>
 <Link to={`/details/${x.id}`}> <img src={x.img} className="card-img-top dog zoom" alt="..." /></Link>
  <div className="card-body">
    <h5 className="card-title owl"><Link className='link-dark' to={`/details/${x.id}`}>{x.title}</Link></h5>
  </div>
</div>
</div>

            </div>
          ))}
        </div>
      </div>

   {/* most popular things to do in nepal */}
      <div className="container py-3">
        <div className='simple'>
        <h2 className='fw-bold'>Most Popular Things to Do in Nepal</h2>
        </div>
        <div className="row text-centershadow p-3 mb-5 bg-body rounded">
          {two.map((x) => (
            <div className="col-lg-4">
    <div className="card" style={{width: '25rem'}}>
 <Link to={`/details/${x.id}`}> <img src={x.img} className="card-img-top dog zoom" alt="..." /></Link>
  <div className="card-body">
    <h5 className="card-title owl"><Link className='link-dark' to={`/details/${x.id}`}>{x.title}</Link></h5>
  </div>
</div>

            </div>
          ))}
        </div>
      </div>

    {/* Nepal travel package   */}
    <div className="container py-3">
        <div className='d-flex justify-content-between py-2'>
          <div className='simple'>
        <h2 className='fw-bold'>Most Popular Places</h2>
        </div>
        {three. slice(0,1).map((k)=>(
        <button className='btn btn-info text-white'><Link to={`/cat/${k.cat}`}>6 Trip</Link></button>
        ))}
        </div>
        <div className="row text-center shadow p-3 mb-5 bg-body rounded">
          {three.map((x) => (
            <div className="col-lg-4">
    <div className="card" style={{width: '25rem'}}>
<Link to={`/details/${x.id}`}>  <img  src={x.img} className="card-img-top dog zoom" alt="..." /></Link>
  <div className="card-body">
    <h5 className="card-title owl"><Link className='link-dark' to={`/details/${x.id}`}>{x.title}</Link></h5>
  </div>
</div>

            </div>
          ))}
        </div>
      </div>

      {/* {travel style} */}
      <div className='container py-3'>
        <div className='simple'>
        <h2 className='fw-bold'>Travel Styles</h2>
        </div>
        <div className='row shadow p-3 mb-5 bg-body rounded'>
            <div className='col-lg-2 zoom'>
         <Link to="/err"><p className='fs-1 '><i class="bi bi-joystick "></i></p></Link> 
           <Link className='link-dark fw-bolder' to="/err"><p>Trekking in Nepal</p></Link> 
            </div>
            <div className='col-lg-2 zoom'>
           <Link to ="/err"><p className='fs-1 '><i class="bi bi-truck-front"></i></p></Link> 
             <Link className='link-dark fw-bolder' to="/err"><p>Tour in Nepal</p></Link> 
            </div>
            <div className='col-lg-2 zoom'>
             <Link to="/err"><p className='fs-1 '><i class="bi bi-car-front"></i></p></Link> 
            <Link className='link-dark fw-bolder' to="/err"><p>Jungle Safari in Nepal</p></Link>
            </div>
            <div className='col-lg-2 zoom'>
             <Link to="/err"><p className='fs-1 '><i class="bi bi-airplane-engines"></i></p></Link>
             <Link className='link-dark fw-bolder' to="/err"> <p>Rafting in Nepal</p></Link> 
            </div>
            <div className='col-lg-2 zoom'>
             <Link to="/err"><p className='fs-1 '><i class="bi bi-balloon-fill"></i></p></Link> 
             <Link className='link-dark fw-bolder'   to="/err">  <p>Adventure Tour in Nepal</p></Link> 
            </div>
            <div className='col-lg-2 zoom'>
            <Link to="/err">   <p className='fs-1 '><i class="bi bi-bank"></i></p></Link> 
             <Link className='link-dark fw-bolder' to="/err"> <p>Sightseeing Tour In Nepal</p></Link>  
            </div>
        </div>
      </div>

      {/* latest blog post */}
      <div className='container py-5'>
        <div className='simple'>
        <h2 className='fw-bold'>Latest Blog Posts</h2>
        </div>
        <div className='row shadow p-3 mb-5 bg-body rounded'>
            {four.map((x)=>(
            <div className='col-lg-4'>
  <div className="card" style={{width: '25rem'}}>
<Link to={`/details/${x.id}`}>  <img src={x.img} className="card-img-top dog zoom" alt="..." /></Link>
  <div className="card-body">
    <h5 className="card-title owl"><Link className='link-dark' to={`/details/${x.id}`}>{x.title}</Link></h5>
  </div>
</div>

            </div>
            ))}
        </div>
      </div>

      {/* Blog */}
      <div className='container'>
        <div className='row lh-1 shadow p-3 mb-5 bg-body rounded'>
            <div className='col-lg-9'>
                <p className='fw-bold'>Discover with</p>
                <p className='text-black fw-bolder fs-1'>Welcome Nepal Treks & Tours</p>
                <p className='fs-5'>Welcome Nepal Travel Tour Company always welcome to any Travel Agency, Tour agencies, Adventure<br/> Operator and travel related persons to work jointly in this field.</p>
                <p className='fw-bolder'>Four Strong Reasons to Hire a Best Nepal Tour Company to Make Nepal Tours</p>
                <p className='text-info'>Read more</p>
            </div>
            <div className='col-lg-3'>
                <img width="150" src='https://www.nepaltourstravel.com/themes/images/ta-travelers-choice.png'/>
            </div>
        </div>
      </div>

      {/* last section */}
      <div className='container py-5'>
        <div className='row shadow p-3 mb-5 bg-body rounded'>
            <div className='col-lg-3'>
                <h4 className='text-black fw-bolder'><i class="bi bi-justify"></i>Best Selection</h4>
                <p>Choose from dozens of expert-<br/>designed packages or customize<br/> your own to create your perfect<br/> adventure</p>
            </div>
            <div className='col-lg-3'>
                <h4 className='text-black fw-bolder'><i class="bi bi-list-ul"></i>Best Price Guarantee</h4>
                <p>Be assured that you are getting<br/> the best deals with no hidden<br/> costs or extra fees</p>
            </div>
            <div className='col-lg-3'>
                <h4 className='text-black fw-bolder'><i class="bi bi-list-stars"></i>Secure Payments</h4>
                <p>Book your trip with confidence<br/> knowing that our online payment<br/> system is safe and secure</p>
            </div>
            <div className='col-lg-3'>
                <h4 className='text-black fw-bolder'><i class="bi bi-list-check"></i>24/7 Support</h4>
                <p>We are here for you around the<br/> clock, just drop us a line on Viber,<br/> WhatsApp, or email us</p>
            </div>
        </div>
      </div>

      {/* last part */}
      <div className='container py-5'>
        <div className='row justify-content-center'>
            <div className='text-center mx-5 gap-2'>
            <img className='what ' src='https://www.nepaltourstravel.com/themes/images/google-review.png'/>
            <img className='what ' src='https://www.nepaltourstravel.com/themes/images/trip-review.png'/>
            <img className='what ' src='https://www.nepaltourstravel.com/themes/images/facebook-review.png'/>
            <img className='what ' src='https://www.nepaltourstravel.com/themes/images/trustpilot-review.png'/>
            </div>
       
        </div>
      </div>



   
    </>
  );
}
