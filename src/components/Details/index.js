import React, { useEffect, useState } from 'react'
import './details.css'
import heart from '../../images/heart.svg'

 function Details(props) {
const [product, setProduct]=useState()
useEffect(() => {
        setProduct(props?.productList)
}, [])
      
    return (
        <div>
{props.detailsOpen &&
<div className='wrapper2' id='wrapper2'
onClick={props.detailsClose}>
<div className='detail-block'>

{product&&product?

product && product?.map((el, index)=>{
        console.log('data',el)
        return(
         <div className='modal1' id='modal1' key={index}>
        <div className='detail-card1' id='detail-card1' onClick={()=>props.infoOpen(el?.id)}>
        <img alt='img' id='detailshoot' src={el?.image}/>
                <img className='like'  id='like' src={heart}/>
                <h3>{el?.title}</h3>
                <p>${el?.price}</p>
                <button id='detail-btn'>BUY</button>
        </div> 
        
        
</div>      
        )
}):<h5>empty</h5>
}
</div>
        </div>
}
        </div>
    )
}
export default Details