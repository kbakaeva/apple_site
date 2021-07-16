import React, { useState } from 'react'
import Signin from '../Signin'
import account from '../../images/account.svg'
import bag from '../../images/bag.svg'
import favorite from '../../images/heart.svg'
import './header.css'
import Contacts from '../Contacts'

export default function Header(props) {
    const [signin, setSignin]= useState(false)
    const [contacts, setContacts]=useState(false)

  const signinOpen=()=>{
    setSignin(!signin)
  }
  const signinClose=()=>{
    if(signin !== false ){
        setSignin(false)
    }
  }

  const contactsOpen=()=>{
    setContacts(!contacts)
  }
  const contactsClose=()=>{
    if(contacts !== false ){
        setContacts(false)
    }
  }
    return (
        <div className='header'>
            <div className='headerIcons'>
            <div className="burger-menu">
            <input type="checkbox" id="menu_tonggle"/>
            <label for="menu_tonggle" className="menu_btn">
                <span></span>
            </label>
            
            <ul class="menu_box">
            <div className='menu'>
                    <h2>Menu</h2>
                    <li
                    onClick={contactsOpen}>Contacts</li>
                    <li
                    onClick={signinOpen}
                    >Account</li>
                    <li
                    onClick={props.bagOpen}
                    >Basket</li>
                    <li
                    onClick={props.favoriteOpen}
                    >Favorite</li>    </div>              
            </ul>
          
        </div>
        
            <div className='icons'>
                <img src={favorite}
                    onClick={props.favoriteOpen}/>
                <img src={bag}
                     onClick={props.bagOpen} />
                <img src={account}
                    onClick={signinOpen}
                />
            </div> 
            </div>
            {signin?<Signin
        signinClose={signinClose}
        signinOpen={signinOpen}
      />:null} 
      {contacts? <Contacts
          contactsClose={contactsClose}
          contactsOpen={contactsOpen}
      />:null}     
        </div>
    )
}
