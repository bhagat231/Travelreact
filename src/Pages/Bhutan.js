import React from 'react'
import { Link } from 'react-router-dom'
import Product from '../Data/Product'



export default function Bhutan() {
  var four=Product.filter((q)=>q.cat==53)
  return (
   <>
  
   <div className='same'>
     <h2>welcome to the world</h2>
</div>
<div className='container py-5'>
  <div className='row shadow p-3 mb-5 bg-body rounded '>
    {four.map((x)=>(
    <div className='col-lg-4'>
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
