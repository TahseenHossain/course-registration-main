import PropTypes from 'prop-types';
import { BiDollar } from 'react-icons/bi';
import { FiBookOpen } from 'react-icons/fi';

const Course = ({course,handleAddToCredits}) => {
    const {title, cover, description, price, credit} = course;



    return (
        <div className='bg-white p-4 mb-6 rounded-xl'>
            <img className='w-72 h-36 rounded-lg' src={cover} alt={`Cover Picture of ${title}`} />
            <h3 className='text-lg pt-4 pb-3'>{title}</h3>
            <h5 className='text-sm w-72 pb-5'>{description}</h5>
            <div className='flex justify-between text-[#1C1B1B99] text-base font-medium'>
                <div className='flex'>
                    <button className='w-6 h-6 text-black'><BiDollar></BiDollar></button>
                    <p>Price: {price}</p>
                </div>
                <div className='flex'>
                    <button className='w-6 h-6 text-black'><FiBookOpen></FiBookOpen></button>
                    <p>Credit: {credit} hr</p> 
                </div>                             
            </div>
            <button onClick={() => handleAddToCredits(course)} className='mt-6 w-72 h-10 rounded-lg bg-[#2F80ED] text-white'>Select</button>
        </div>
    );
};

Course.propTypes = {
    course: PropTypes.object.isRequired,
    handleAddToCredits: PropTypes.func
}
export default Course;