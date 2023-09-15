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

    const newCredits = [...credits, course];
    setCredits(newCredits);

    const newPrice = (price + course.price);
    setPrice(newPrice);
    console.log(newPrice);
  }

  return (
    <>      
      <div className='px-20 bg-[#F3F3F3]'>
        <Header></Header>
        <div className='flex justify-between'>
          <div>
              <Courses handleAddToCredits={handleAddToCredits}></Courses>            
          </div>
          <div className=''>
            <Credits remainingTime={remainingTime} credits={credits} readingTime={readingTime} price={price}></Credits>
          </div>         
        </div>

      </div>
    </>
  )
}

export default App