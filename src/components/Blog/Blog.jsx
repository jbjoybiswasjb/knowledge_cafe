import PropTypes from 'prop-types';
import { CiBookmark } from "react-icons/ci";

const Blog = ({ blog, handleAddToBookmarks, handleSpentTimeOnRead }) => {
    const {
        cover_img,
        author_img,
        name,
        reading_time,
        title,
        posted_date,
        hash_tags,
    } = blog;

    const reading_time_number = parseInt(reading_time);

    return (
        <div>
            <div>
                <img src={cover_img} title={title} alt={`Title of cover phot ${title}`} className="rounded-lg" />
            </div>
            <div className="flex gap-4 items-center justify-between my-8">
                <div className="flex items-center gap-6">
                    <div className="w-16 h-16 rounded-full">
                        <img src={author_img} title={name} alt={`Title of author name ${name}`} className="rounded-full" />
                    </div>
                    <div>
                        <strong className="font-bold text-2xl">{name}</strong>
                        <p className="font-semibold text-base text-mainHeading/60">{posted_date}</p>
                    </div>
                </div>

                <div>
                    <span className="flex items-center font-medium text-xl text-mainHeading/60">{reading_time} min read
                        <button className="ml-4 hover:bg-slate-400 p-3 rounded-full text-2xl"
                            onClick={() => handleAddToBookmarks(blog)}
                        >
                            <CiBookmark />
                        </button>
                    </span>
                </div>

            </div>

            <h2 className="mb-6 text-4xl text-mainHeading font-bold">{title}</h2>

            <div className="mb-6 flex flex-wrap gap-2">
                {
                    hash_tags.map((hash_tag, index) =>
                        <span
                            className="mr-4 font-medium text-xl text-mainHeading/60 hover:underline"
                            key={index}
                        >
                            <a href="#">
                                {hash_tag}
                            </a>
                        </span>
                    )
                }
            </div>

            <button
                className="underline text-purple font-semibold text-xl"
                onClick={() => handleSpentTimeOnRead(reading_time_number)}
            >
                Mark as read
            </button>

            <hr className="my-10 text-mainHeading/10" />
        </div>
    );
};


Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmarks: PropTypes.func.isRequired,
    handleSpentTimeOnRead: PropTypes.func.isRequired,
}

export default Blog;