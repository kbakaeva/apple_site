import React from 'react'
import './menu.css'

function Menu(props) {
    return (
        <div>
        {props.togleMenu && (      
        <div className='menu'> 
                <h2
                 onClick={props.togleMenu}
                 >Menu</h2>
                <ul>
                    <li>Contacts</li>
                    <li>Account</li>
                    <li>Basket</li>
                    <li>Favorite</li>
                </ul>
            </div>        
        )}  
    </div>
        
)}

export default Menu
  