import './App.css'
import Header from './Components/Header/Header'
import Courses from './Components/Courses/Courses'
import Credits from './Components/Credits/Credits'
import { useState } from 'react'


function App() {
  const [credits, setCredits] = useState([]);
  const [remainingTime, setRemainingTime] = useState(20);
  const [readingTime, setReadingTime] = useState(0);
  const [price, setPrice] = useState(0);

  const handleAddToCredits = course =>{
    const newRemainingTime = (remainingTime - course.credit);
    const newReadingTime = (readingTime + course.credit);

    if (course.selected) {
      return alert('You have already taken this course. Please select another');
    }

    if (newRemainingTime < 0 || newReadingTime > 20) {
      return alert('You have exceeded the credit limit');
    }

    course.selected = true;
    setRemainingTime(newRemainingTime);  
    setReadingTime(newReadingTime);

    const newPrice = (price + course.price);
    setPrice(newPrice);
    console.log(newPrice);
    
    const newCredits = [...credits, course];
    setCredits(newCredits);

  }

  return (
    <>      
      <div className='px-12 lg:px-16 md:pl-10 bg-[#F3F3F3]'>
        <Header></Header>
        <div className='flex flex-col-reverse md:flex-col lg:flex-row  lg:justify-between'>
          <div>
              <Courses handleAddToCredits={handleAddToCredits}></Courses>            
          </div>
          <div className='md:mr-10 lg:mr-0 mb-20'>
            <Credits remainingTime={remainingTime} credits={credits} readingTime={readingTime} price={price}></Credits>
          </div>         
        </div>

      </div>
    </>
  )
}

export default App
