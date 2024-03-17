import React from 'react'


const Card = ({img, title, url, text}) => {
  return (
    <div className='grid'>
        <div className='cards'>
          <img src={img} alt={title} id='img' className='card-image'/>
          <h2>{title}</h2>
          <p>{text}</p>
          <a href={url} target="_blank">Live!</a>
        </div>
    </div>
  )
}

export default Card