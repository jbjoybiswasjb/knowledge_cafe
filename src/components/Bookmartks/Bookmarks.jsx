import PropTypes from 'prop-types';
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({bookmarks}) => {
    return (
        <section className="w-full md:w-1/3">
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