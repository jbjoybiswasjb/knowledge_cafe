import { useState } from "react";
import Blogs from "../Blogs/Blogs";
import Bookmarks from "../Bookmartks/Bookmarks";

const Main = () => {

    const [bookmarks, setBookmarks] = useState([]);

    const handleAddToBookmarks = (blog) => {
        const newBookmarks = [...bookmarks, blog];
        setBookmarks(newBookmarks);
    }

    return (
        <main>
            <div className="w-4/5 mx-auto my-8">
                <div className="flex flex-col md:flex-row gap-6 justify-between">
                    
                    <Blogs
                        handleAddToBookmarks={handleAddToBookmarks}
                    ></Blogs>
                    <Bookmarks
                        bookmarks={bookmarks}
                    ></Bookmarks>

                </div>
            </div>
        </main>
    );
};

export default Main;