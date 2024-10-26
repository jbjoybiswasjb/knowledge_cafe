import Blogs from "../Blogs/Blogs";
import Bookmarks from "../Bookmartks/Bookmarks";

const Main = () => {
    return (
        <main>
            <div className="w-4/5 mx-auto my-8">
                <div className="flex flex-col md:flex-row gap-6 justify-between">
                    
                    <Blogs></Blogs>
                    <Bookmarks></Bookmarks>

                </div>
            </div>
        </main>
    );
};

export default Main;