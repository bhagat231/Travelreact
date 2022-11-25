import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Product from '../Data/Product';
import Data from '../Data/Data'


export default function Single() {
 let{id}=useParams();
 var abc = Product.find((q)=>q.id==id);
 var two=Product.filter((q)=>q.cat==50)
 var cdf = Product.filter((q)=>q.id==id);
  return (
    <>
        <div className='same'>
          {cdf.slice(0,5).map((x)=>(
     <h2><p>Hurry up!!!</p>{x.wow}</h2>
     ))}
</div>
  <div className='container py-3 text-center'>
    <div className='row justify-content-center shadow p-3 mb-5 bg-body rounded'>
    <h1 className="card-title py-2 text-dark fw-bolder">{abc.title}</h1>
  <div className="card" style={{width: '50rem'}}>
  <img src={abc.img} className="card-img-top " alt="..." />
  <div className="card-body text-center">
    <h5 className="card-title">{abc.desc}</h5>
  </div>
</div>

    </div>
  </div>

  {/* similar trip */}
  <div className="container py-3">
        <h2 className='fw-bold'>similar trip</h2>
        <div className="row text-centershadow p-3 mb-5 bg-body rounded">
          {two.map((x) => (
            <div className="col-lg-4">
    <div className="card" style={{width: '25rem'}}>
 <Link to={`/details/${x.id}`}> <img src={x.img} className="card-img-top dog" alt="..." /></Link>
  <div className="card-body">
    <h3 className="card-title owl"><Link className='link-dark' to={`/details/${x.id}`}>{x.title}</Link></h3>
  </div>
</div>

            </div>
          ))}
        </div>
      </div>
    
    </>
  )
}
