import PropTypes from 'prop-types';
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks, totalReadingTime }) => {
    return (
        <section className="w-full md:w-1/3">
            <div className='p-5 rounded-lg bg-purple/10 border-purple border mb-6'>
                <h3 className='font-bold text-2xl text-purple text-center'>Spent time on read : {totalReadingTime} min</h3>
            </div>

            <div className="p-8 bg-mainHeading/5 rounded-lg">
                <h2 className="font-bold text-2xl text-mainHeading mb-4">
                    Bookmarked Blogs : {bookmarks.length}
                </h2>

                <div>
                    {
                        bookmarks.map(bookmark =>
                            <Bookmark
                                bookmark={bookmark}
                                key={bookmark?.id}
                            ></Bookmark>
                        )
                    }
                </div>
            </div>
        </section>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired,
};

export default Bookmarks;