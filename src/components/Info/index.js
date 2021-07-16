import React, { useEffect, useState } from "react";

import "./info.css";
function Info(props) {
  const [info, setInfo] = useState();
  useEffect(() => {
    setInfo(props?.infolist)
}, [])
  return (
    <div>
      {props.infoOpen &&
        <div className="wrapper2" id="wrapper2">
              return (
                <div className="info-card">
                  <div className="info-card-block">
                    <div id="info-img">
                        <img src={info?.image} alt='img' className='infoshoot'/>
                    </div>
                    <h3 className="price">${info?.price}</h3>
                    <div className="text">
                      <h2>{info?.title}</h2>
                      <h3>Power. It’s in the Air.</h3>
                      <p>{info?.description}</p>
                    </div>
                  </div>
                  <div className="info-card-block2">
                  </div>
                  <button id="add">ADD TO BAG</button>
                  <button id="add"
                  onClick={props.infoClose}
                  >Close</button>
                </div>
              );
      
        </div>
      }
    </div>
  );
}
export default Info;
