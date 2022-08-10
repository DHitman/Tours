import React, { useState, useEffect } from 'react'
import Loading from "./Loading"
import Tours from './Tours'
import "./tour.css"

const url = 'https://course-api.com/react-tours-project' // with this url we are getting the data from the api
function App() {
 // it is used to display the loading page 
   const [Loadings, setLoadings] = useState(true);
  //this state is used to display the data from the api
  const [tours, setTours] = useState([]);
  // with this ftn remove the tour from the webpage
  const removetour = (id) => { //here we have passed the id
    const newtour = tours.filter((tour) => tour.id !== id); //here we set the newtour if the tour id is not equal to id
    setTours(newtour)
  }
    
  const fetchtour = async () => {
    setLoadings(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoadings(false);
      setTours(tours);

    } catch (error) {
      setLoadings(false);
      console.log(error);
    }
  };
  useEffect(() => {
    fetchtour();
  }, [])
  if (Loadings) {
    return (<main>
      <Loading />
    </main>);
  }
  if(tours.length === 0){
    return(<main>No more tours</main>)
       
  }else{
    return <main>
    <Tours tours={tours} removetour={removetour} />
  </main>
  }
 
}

export default App

