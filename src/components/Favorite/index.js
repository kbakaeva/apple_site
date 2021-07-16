import React from 'react'
import './Favorite.css'
import ul from '../../images/ul.png'
import photo from '../../images/macbook.jfif'
import photo1 from '../../images/iphone.jpg'

export default function Favorite(props) {
    return (
        <div>
                       {props.favoriteOpen &&
<div className='wrapper' id='wrapper'> 
{/* // onClick={props.bagClose}> */}
<div className='container'>
    <h3>Favorite things</h3>
    <div className='bagfirstline'>
    <img src={ul} alt='img' className='ul'/>
    <img src={photo} className='bagshoot'/>
    <div className='bagwords'>
        <h5>13-inch MacBook Pro - Space Gray</h5>
        <p>Show product details</p>
    </div>
   
    <div className='favoriteprice'>
    <h5>$ 1999</h5>
    <button className='addtobag'>Add to Bag</button>
    </div>
    </div>
    <div className='bagfirstline'>
    <img src={ul} alt='img' className='ul'/>
    <img src={photo1} className='bagshoot'/>
    <div className='bagwords'>
        <h5>Iphone Xmax</h5>
        <p>Show product details</p>
    </div>
    <div className='favoriteprice'>
    <h5>$ 1200</h5>
    <button className='addtobag'>Add to Bag</button>
    </div>
    </div>
    <div className='buttons'>
    <button className='go-btn'
    onClick={props.favoriteClose}
    >Back</button>
    <button className='go-btn'
    onClick={()=>{
        props.favoriteOpen(false)
        props.bagOpen(true)
    }}
    >Go to Bag</button>
    </div>
</div>
</div>
           }
        </div>
    )
}
