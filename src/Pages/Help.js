import React from 'react'

export default function Help() {
  return (
    <>
    <div className='container justify-content-center py-5'>
        <div className='row'>
            <div className='col-lg-6'>
                <h4 className='text-dark fw-bolder'>Welcome Nepal Treks and Tours Pvt. Ltd.</h4>
                <p className='text-dark fw-bolder'>Address:</p>
                <p className='text-dark fw-bolder'>Chibahal Galli, Thamel Marg, Kathmandu, Nepal <br/>Post Box: 13626</p>
                <p className='text-dark fw-bolder'>Tel:<br/></p><p className='text-dark fw-bolder'>+977 1 4253677</p>
                <p className='text-dark fw-bolder'>Cell:<br/></p><p className='text-dark fw-bolder'>+977 9851035823 (Hari Khadka)</p>
                <p className='text-dark fw-bolder'>Email:<br/>welcomenepaltreks@gmail.com<br/>khadkasir@gmail.com</p>
                <p className='text-dark fw-bolder'>Web:<br/></p><p className='text-dark fw-bolder'>www.nepaltourstravel.com</p>
            </div>
            <div className='col-lg-6'>
        <div className='box shadow p-3 mb-5 bg-body rounded py-2'>
       <form>
        <h2>Send an Enquiry</h2>
  <div className="mb-3  ">
    <label htmlFor="exampleInputEmail1" className="form-label text-dark fw-bolder ">FULL NAME</label>
    <input type="email" className="form-control form-control form-control-sm" id="exampleInputEmail1" aria-describedby="emailHelp" />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label text-dark fw-bolder">EMAIL ADDRESS</label>
    <input type="password" className="form-control" id="exampleInputPassword1" />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label text-dark fw-bolder">PHONE NUMBER</label>
    <input type="password" className="form-control" id="exampleInputPassword1" />
  </div>
  <div class="form-group text-dark fw-bolder">
    <label for="exampleFormControlTextarea1 text-dark ">MESSAGE</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
  <button className='btn btn-info text-light bg-primary my-3'>send</button>
</form>
</div>

            </div>
        </div>
    </div>
      </>
  )
}

