import React from 'react';
import Tour from './Tour';
const Tours = ({ tours , removetour }) => {
  return (
    <>
      <h2 className='text-center'>Tours</h2>
      <div>
        {tours.map((tour) => {
          return (
            <Tour
              key=
              {tour.id}
             {...tour}
             removetour={removetour}  >

            </Tour>
          )
        }
        )}
      </div>
    </>
  );
};

export default Tours;
