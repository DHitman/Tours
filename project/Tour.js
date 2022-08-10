import React, { useState } from 'react';

const Tour = ({id,image,info,price,removetour,name}) => {
  const [readmore, setReadmore] = useState(false)


  return (
    <>


      <article className='single-tour'>
        <img src={image} alt="imag" />
        <footer>
          <div className="tour-info  ">
            <h4>{name}</h4>
            <h4 className='tour-price'>${price}</h4>
          </div>
          <p>{readmore ? info : `${info.substring(0, 199)}`}... <button onClick={() => setReadmore(!readmore)}>{readmore ? "show less" : "show more"}</button> </p>
          <button className='delete-btn' onClick={()=>removetour(id)}>Not Interested</button>
        </footer>
      </article>


    </>


  );
};

export default Tour;
