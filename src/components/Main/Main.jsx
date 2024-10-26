import { useState } from "react";
import Blogs from "../Blogs/Blogs";
import Bookmarks from "../Bookmarks/Bookmarks";

const Main = () => {

    const [bookmarks, setBookmarks] = useState([]);

    const handleAddToBookmarks = (blog) => {
        const newBookmarks = [...bookmarks, blog];
        setBookmarks(newBookmarks);
    }

    const [totalReadingTime, setTotalReadingTime] = useState(0);

    const handleSpentTimeOnRead = (time, id) => {
        const newTotalReadingTime = totalReadingTime + time;
        setTotalReadingTime(newTotalReadingTime);

        const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
        setBookmarks(remainingBookmarks);
    }

    return (
        <main>
            <div className="w-4/5 mx-auto my-8">
                <div className="flex flex-col md:flex-row gap-6 justify-between">

                    <Blogs
                        handleAddToBookmarks={handleAddToBookmarks}
                        handleSpentTimeOnRead={handleSpentTimeOnRead}
                    ></Blogs>

                    <Bookmarks
                        bookmarks={bookmarks}
                        totalReadingTime={totalReadingTime}
                    ></Bookmarks>

                </div>
            </div>
        </main>
    );
};

export default Main;