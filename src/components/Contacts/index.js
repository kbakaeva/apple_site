import React from 'react'
import photous from '../../images/Aig.jpg'
import photous1 from '../../images/K.jpg'
import photous2 from '../../images/J.jpg'
import photous3 from '../../images/Aim.jpg'
import photous4 from '../../images/a.jpg'
import photous5 from '../../images/t.jpg'
import './contacts.css'

export default function Contacts(props) {
    return (
        <div>
            {props.contactsOpen &&
<div className='wrapper' id='wrapper'
onClick={props.contactsClose}>
<h2 className='about-contacts'>About Developers</h2>
<div className='Contactscontainer'>

<div className='contacts'>
<img src={photous} alt='img' className='photous'/>
<h5>Aigerim</h5>
<p>Front-end developer</p>

</div>
<div className='contacts'>
<img src={photous1} alt='img' className='photous'/>
<h5>Kanysh</h5>
<p>Front-end developer</p>

</div>
<div className='contacts'>
<img src={photous2} alt='img' className='photous'/>
<h5>Zhanyl</h5>
<p>Front-end developer</p>

</div>
<div className='contacts a'>
<img src={photous3} alt='img' className='photous'/>
<h5>Aimira</h5>
<p>Back-end developer</p>
</div>
<div className='contacts a'>
<img src={photous4} alt='img' className='photous'/>
<h5>Azatbek</h5>
<p>Back-end developer</p>
</div>
<div className='contacts a'>
<img src={photous5} alt='img' className='photous'/>
<h5>Timur</h5>
<p>Back-end developer</p>



</div>
<div className='belek'>
<p className='belek'>If you would like to cooperate with us<br/>here is our contacts</p>
<h2>Belek</h2>
<p> Tel.: +996500800588     Email:  <span>itcampkyrgyzstan@gmail.com</span></p>
</div>

</div>
 </div> }
        </div>
    )
}
