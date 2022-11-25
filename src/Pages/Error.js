import React from 'react'
import { Link } from 'react-router-dom'


export default function Error() {
  return (
    <>
    <p className='text-center fs-6 fw-bolder'>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
    <button className='btn btn-info text-white who '><Link className='link-light' to="/">GO TO HOMEPAGE</Link></button>
    </>
  )
}
