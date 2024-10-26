import { useState } from "react";

const Blogs = () => {

    // State data.
    const [blogs, setBlogs] = useState([]);

    // Load data.
    fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))

    return (
        <div className="w-full md:w-2/3">
            Blogs{blogs.length}
        </div>
    );
};

export default Blogs;