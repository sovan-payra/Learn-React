import React from 'react'

const Card = (props) => {
  return (
    <div className='card'>
        <img src={props.img} alt="" />
        <h1>{props.user}, {props.age}</h1>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quia modi fugit, placeat nihil dignissimos nemo. Repellendus impedit, optio molestiae officia ipsam quaerat.</p>
        <button>View Profile</button>
    </div>
  )
}

export default Card