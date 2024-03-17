import React from 'react'


const Contact = () => {
  return (
    <div id='contactdiv'>
      <form action="https://formsubmit.co/balcika44@gmail.com" method="POST">
        <input className='init' type="text" name="name" id="nameinput" required placeholder='Név'  />
        <input className='init' type="email" name="email" id="emailinput" required placeholder='Email'/>
        <textarea className='init' name="message" id="textarea" cols="30" rows="10" required placeholder='Üzenet'></textarea>
        <button type="submit" id='btn'>Küldés</button>
      </form>
    </div>
  )
}

export default Contact