import profileImg from '../../assets/images/profile.png';

const Header = () => {
    return (
        <header>
            <div className="w-4/5 mx-auto flex justify-between items-center py-8 mt-5 font-bold text-4xl border-b border-mainHeading/15">
                <h1 className='text-mainHeading font-bold text-3xl'>
                    <a href="#">
                        Knowledge Cafe
                    </a>
                </h1>

                <div>
                    <a href="#">
                        <img src={profileImg} alt="Profile image" title='Profile image' />
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;