// import React, {useState, useEffect} from 'react'

// const FetchComponent = () => {
//     const [data, setData] = useState([])

//     useEffect(() => {
//         fetch('https://jsonplaceholder.typicode.com/photos')
//      .then(response => response.json())
//      .then((data) => { setData(data);})
//     }, [])

//   return (
   
//     <div>
// {data.splice(0, 20).map((photo) => {
//     <>
//     <h4>{photo.id}</h4>
//     <img src={photo.url} alt="" />
//     <h5>{photo.title}</h5>
//     </>

// })}
//     </div>
//   )
// }

// export default FetchComponent

import React, { useState, useEffect } from 'react';

const FetchComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <div className='fetch-info'>
      {data.slice(0, 20).map((photo) => (
        <div key={photo.id}>
          <h4>{photo.id}</h4>
          <img src={photo.url} alt="" />
          <h5>{photo.title}</h5>
        </div>
      ))}
    </div>
  );
};

export default FetchComponent;
