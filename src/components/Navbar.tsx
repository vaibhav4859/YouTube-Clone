import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { TiMicrophone } from "react-icons/ti";
import { BsYoutube, BsCameraVideo, BsBell } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoAppsSharp } from "react-icons/io5";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState, store, youtubeActions } from "../store";
import { getSearchPageVideos } from "../store/reducers/getSearchPageVideos";

const Navbar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const searchTerm = useSelector((state: RootState) => state.youtubeApp.searchTerm);
    const handleSearch = (event: any) => {
        event.preventDefault();
        if (location.pathname !== "/search") navigate("/search");
        else {
            dispatch(youtubeActions.clearVideos());
            store.dispatch(getSearchPageVideos(false));
        }
    }
    return (
        <div className="flex justify-between items-center  px-14 h-14 bg-[#212121] opacity-95 sticky top-0 z-50">
            <div className="flex gap-8 items-center text-2xl cursor-pointer">
                <div>
                    <GiHamburgerMenu />
                </div>
                <Link to="/">
                    <div className="flex gap-1 items-center justify-center">
                        <BsYoutube className="text-3xl text-red-600" />
                        <span className="text-xl font-medium">YouTube</span>
                    </div>
                </Link>
            </div>
            <div className="flex items-center justify-center gap-5">
                <form onSubmit={handleSearch}>
                    <div className="flex bg-zinc-900 items-center h-10 px-4 pr-0">
                        <div className="flex gap-4 items-center pr-5">
                            <div>
                                <AiOutlineSearch className="text-xl" />
                            </div>
                            <input type="text" className="w-96 bg-zinc-900 focus:outline-none border-none" value={searchTerm} onChange={e => dispatch(youtubeActions.changeSearchTerm(e.target.value))} />
                            <AiOutlineClose className={`text-xl cursor-pointer ${!searchTerm ? "invisible" : "visible"}`} onClick={() => dispatch(youtubeActions.clearSearchTerm())}/>
                        </div>
                        <button className="h-10 w-16 flex items-center justify-center bg-zinc-800">
                            <AiOutlineSearch className="text-xl" />
                        </button>
                    </div>
                </form>
                <div className="text-xl p-3 bg-zinc-900 rounded-full cursor-pointer">
                    <TiMicrophone />
                </div>
            </div>
            <div className="flex gap-5 items-center text-xl ">
                <BsCameraVideo className="cursor-pointer" />
                <IoAppsSharp className="cursor-pointer" />
                <div className="relative cursor-pointer">
                    <BsBell />
                    <span className="absolute bottom-2 left-2 text-xs bg-red-600 rounded-full px-1">9+</span>
                </div>
                <img src="https://w0.peakpx.com/wallpaper/550/527/HD-wallpaper-whatsapp-paper-black-background-thumbnail.jpg" className="w-9 h-9 rounded-full cursor-pointer" alt="logo" />
            </div>
        </div>
    );
}

export default Navbar;