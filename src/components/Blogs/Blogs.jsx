import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({handleAddToBookmarks, handleSpentTimeOnRead}) => {
    // State data.
    const [blogs, setBlogs] = useState([]);

    // Load data.
    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, []);

    return (
        <section className="w-full md:w-2/3">
            <div>
                {
                    blogs.map(blog =>
                        <Blog
                            key={blog?.id}
                            blog={blog}
                            handleAddToBookmarks={handleAddToBookmarks}
                            handleSpentTimeOnRead={handleSpentTimeOnRead}
                        >

                        </Blog>
                    )
                }
            </div>
        </section>
    );
};


Blogs.propTypes = {
    handleAddToBookmarks: PropTypes.func.isRequired,
    handleSpentTimeOnRead: PropTypes.func.isRequired,
}

export default Blogs;