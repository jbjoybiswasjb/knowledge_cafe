import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div className='bg-white rounded-lg p-5 mb-4'>
            <h3 className='text-mainHeading text-lg font-semibold'>{title}</h3>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.object.isRequired,
};

export default Bookmark;