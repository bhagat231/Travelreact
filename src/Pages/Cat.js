import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Product from '../Data/Product';
import Data from '../Data/Data'


export default function Cat() {
 let{cid}=useParams();
 var displayPost=Product.filter((q)=>q.cat==cid);
 var two=Product.filter((q)=>q.cat==50)
  return (
    <>
  
   <div className='container py-5'>
    
        <div className='row text-center shadow p-3 mb-5 bg-body rounded'>
            {displayPost.map((x)=>(
            <div className='col-lg-4'>
  <Link to={`/details/${x.id}`}>  <img className='dog zoom' src={x.img} alt="hello"/></Link>
    <h5 className='owl py-2'><Link className='link-dark' to={`/details/${x.id}`}>{x.title}</Link></h5>
    
            </div>
            ))}
        </div>
    </div>

 <div className='container'>
  <div className='row shadow p-3 mb-5 bg-body rounded'>
    {displayPost.slice(3,4).map((z)=>(
    <div className='col-lg-12'>
  <ul className="list-group">
    <h2 className='text-center text-dark fw-bolder py-3'>offer we provides you</h2>
  <li className="list-group-item"><h5>{z.subt}</h5></li>
  <li className="list-group-item"><h5>{z.title1}</h5></li>
  <li className="list-group-item"><h5>{z.desc1}</h5></li>
  <li className="list-group-item"><h5>{z.desc2}</h5></li>
  <li className="list-group-item"><h5>And a fifth one</h5></li>
</ul>

    </div>
    ))}
  </div>
  </div>   

  {/* similar way */}
  <div className="container py-3">
    <div className='simple'>
        <h2 className='fw-bold'>similar trip</h2>
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
    </>
  )
}

