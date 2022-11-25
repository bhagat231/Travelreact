import React from 'react'
import { Link } from 'react-router-dom'
import Product from '../Data/Product'



export default function Desti() {
  var three=Product.filter((q)=>q.cat==51)
  return (
<>
<div className='container py-2'>
  <div className='simple'>
  <h2>your destination is our motto:</h2>
  </div>
  <div className='row'>
    {three.map((x)=>(
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
