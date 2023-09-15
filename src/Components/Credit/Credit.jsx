import PropTypes from 'prop-types';

const Credit = ({credit}) => {
    const {title} = credit;
    return (
        <div>
            <h3>{title}</h3>
        </div>
    );
};

Credit.propTypes = {
    credit: PropTypes.object
}
export default Credit;