import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/Course";
import PropTypes from 'prop-types';

const Courses = ({handleAddToCredits}) => {
    const [courses, setCourses] = useState([]);

    useEffect( () =>{
        fetch('course.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[])

    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 lg:gap-8 md:gap-0 justify-around">
            {                
                courses.map(course => <Course key={course.id} course = {course} handleAddToCredits = {handleAddToCredits}></Course>)
            }
        </div>
    );
};

Courses.propTypes = {
    handleAddToCredits: PropTypes.func
}

export default Courses;