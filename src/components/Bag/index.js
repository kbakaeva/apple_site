import React from 'react'
import './Bag.css'
import ul from '../../images/ul.png'
import photo from '../../images/macbook.jfif'
import photo1 from '../../images/iphone.jpg'

export default function Bag(props) {
    const [count, setCount] = React.useState(0)
    const [count1, setCount1] = React.useState(0)

if (count<0)setCount(0)  
if (count1<0)setCount1(0)  
    return (
        <div>
           {props.bagOpen &&
<div className='wrapper' id='wrapper'> 
{/* // onClick={props.bagClose}> */}
<div className='container'>
    <h3>Shopping card</h3>
    <div className='bagfirstline'>
    <img src={ul} alt='img' className='ul'/>
    <img src={photo} className='bagshoot'/>
    <div className='bagwords'>
        <h5>13-inch MacBook Pro - Space Gray</h5>
        <p>Show product details</p>
    </div>
    <div className='bagpiece'>
    <button className='plus' onClick={()=>setCount(count-1)}>-</button>
    <h5>{count}</h5>
<button className='plus1' onClick={()=>setCount(count+1)}>+</button>
        
        
    </div>
    <h5>$ 1999</h5>
    </div>
    <div className='bagfirstline'>
    <img src={ul} alt='img' className='ul'/>
    <img src={photo1} className='bagshoot'/>
    <div className='bagwords'>
        <h5>Iphone Xmax</h5>
        <p>Show product details</p>
    </div>
    <div className='bagpiece'>
    <button className='plus' onClick={()=>setCount1(count1-1)}>-</button>
    <h5>{count1}</h5>
    <button className='plus1' onClick={()=>setCount1(count1+1)}>+</button>
    </div>
    <h5>$ 1200</h5>
    </div>
    <div className='buttons'>
    <button className='glow-on-hover'
    onClick={props.bagClose}
    >Back</button>
    <button className='glow-on-hover'
    onClick={()=>{
        props.bagOpen(false)
        props.payOpen(true)
    }}
    >Buy</button>
    </div>
</div>
</div>
           }
        </div>
    )
}

