import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = () => {

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
                        >

                        </Blog>
                    )
                }
            </div>
        </section>
    );
};

export default Blogs;