import PropTypes from 'prop-types';
import Credit from '../Credit/Credit';

const Credits = ({credits, remainingTime, readingTime, price}) => {
    
    return (
        <div className='p-6 bg-white rounded-xl'>
            <h2 className='text-xl font-bold border-b-2 border-amber text-[#2F80ED] pb-4'>Credit Hour Remaining {remainingTime} hr</h2>
            <h2 className='text-xl font-bold py-4'>Course Name</h2>
            <div className='text-[#1C1B1B99] text-sm font-normal mb-6 border-b-2 pb-6'>
                {
                    credits.map(credit => <Credit key={credit.id} credit={credit}></Credit>) 
                }
            </div>
            <h3 className='text-sm font-medium mb-6 border-b-2 pb-6'>Total Credit Hour : {readingTime}</h3>
            <h3 className='text-sm font-medium'>Total Price : {price} USD</h3>
        </div>
    );
};

Credits.propTypes = {
    credits: PropTypes.array,
    remainingTime: PropTypes.number,
    readingTime: PropTypes.number,
    price: PropTypes.number
}
export default Credits;