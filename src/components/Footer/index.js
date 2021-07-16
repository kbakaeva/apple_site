import React from 'react'
import facebook from '../../images/Facebook-2.svg'
import instagram from '../../images/Instagram-2.svg'
import whatsapp from '../../images/whatsapp.svg'
import './footer.css'
export default function Footer() {
    return (
        <div className='footer'>
            <div className='footerInfo'>
            <div className='line2'>
                <div className='side'>
                    <p className='chapter'>Location</p>
                    <p className='adress'>T7/6 Aaly Tokombaev Street Bishkek <br/> Kyrgyz Republic 720060</p>
                    <p className='adress'>27/A6 Mississi Street California <br/> United State 900001</p>
                </div>
                <div className='side'>
                    <p className='chapter'>Contact</p>
                    <p>Tel.: +996 (312) 915000 </p>
                    <p>Tel.: +8873(239)28764838929</p>
                    <p>Email: applestore@gmail.com</p>
                </div>
                <div className='side'>
                    <p className='chapter'>Delivery</p>
                    <p>Returns Exchage</p>
                    <p>Help</p>
                    <p>Contact us</p>
                </div>
                <div className='social'>
                <p className='chapter'>On social media</p>
                 <img className='socialIcon' src={facebook}/>
                 <p className='social-text'>applestore_global</p>
                <img className='socialIcon' src={instagram}/>
                <p className='social-text'>@applestore_global_usa</p>
                <img className='socialIcon' src={whatsapp}/>
                <p className='social-text wh'>+996555666777</p> <br/>
                <p className='social-text wh'>+8882931948476</p>
                </div>
            </div>
            </div>
        </div>
    )
}