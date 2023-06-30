import React, { useState } from 'react'
import validator from 'validator'

export default function Contact() {

  const [user, setUser] = useState({
    fname:'',
    lname:'',
    email: '',
    phone:'',
    issueMsg: ''
  })

  const handleInputs = (e)=>{
    const name = e.target.name;
    const value = e.target.value;
    setUser({...user, [name]:value});
  }

 
    



  const handleSubmit = async (e)=>{
    try {
      e.preventDefault();
      const {fname,lname,email,phone,issueMsg} = user;

      const targetURL = 'http://localhost:4000/contact'
        if(!validator.isEmail(email)){
          window.alert('Invalid Email');
        }

      const res = await fetch(targetURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
          fname,
          lname,
          email,
          phone,
          issueMsg
        }),
      })

      if (res.status === 201 ) {
        window.alert('Form Submitted');
    } 

    } catch (error) {
      console.log(error);
    }
  }



  return (
    <div>

    
      <div className='contact-main-cont'>
        <div className='contact-img-cont'> 
          {/* <img src={CONTACT} className='contact-img' alt='contact-img'/> */}
        </div>
        <div className='contact-text-cont'>
          <div className='contact-head-cont'>
            <h3 className='contact-head'>GET IN TOUCH</h3>
            <p className='contact-text'>Feel free to contact us</p>

          </div>
          <div className='row'>
            <div className='contact-input-cont' style={{display:'flex'}}>
              <input style={{width: '50%'}} type='text' className='contact-input' onChange={handleInputs} value={user.fname} name='fname' placeholder='First Name' required={true}/>
              <input style={{width: '50%', marginRight:'0px'}} type='text' className='contact-input' onChange={handleInputs} value={user.lname} name='lname' placeholder='Last Name' required={true}/>
            </div>
            <div className='contact-input-cont'>
            <input style={{width: '100%'}} type='email' className='contact-input' onChange={handleInputs} value={user.email} name='email' placeholder='Email' required={true}/>
            </div>
            <div className='contact-input-cont'>            
              <input style={{width: '100%'}} type='phone' className='contact-input' onChange={handleInputs} value={user.phone} name='phone' placeholder='Phone' required={true}/>
            </div>
            <div className='contact-input-cont'>
              <textarea style={{width: '100%'}} rows="4" cols="50" className='contact-input' onChange={handleInputs} value={user.issueMsg} name='issueMsg' placeholder='Describe your Issue'/>
            </div>
          </div>
          <div className='contact-btn-cont'>
            <button type='submit' onClick={handleSubmit} className='contact-btn'>SEND</button>
          </div>
        </div>
      </div>
    </div>
  )
}
