import { useEffect } from "react";
import { RootState, store, youtubeActions } from "../store";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import SearchCard from "../components/SearchCard";
import { HomePageVideos } from "../Types";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "../components/Spinner";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getSearchPageVideos } from "../store/reducers/getSearchPageVideos";

const Search = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const videos = useSelector((state: RootState) => {
    return state.youtubeApp.videos;
  });
  const searchTerm = useSelector((state: RootState) => {
    return state.youtubeApp.searchTerm;
  });

  useEffect(() => {
    dispatch(youtubeActions.clearVideos());
    if (searchTerm === "") navigate('/');
    else store.dispatch(getSearchPageVideos(false));
  }, [dispatch, navigate, searchTerm]);

  return (
    <div className="max-h-screen overflow-hidden">
      <div style={{ height: "7.5vh" }}>
        <Navbar />
      </div>
      <div className="flex" style={{ height: "92.5vh" }}>
        <Sidebar />
        {videos.length ?
          <div className="py-8 pl-8 flex flex-col gap-5 w-full">
            <InfiniteScroll dataLength={videos.length} next={() => store.dispatch(getSearchPageVideos(true))} hasMore={videos.length < 500} loader={<Spinner />} height={600}>
              {videos.map((item: HomePageVideos, index: number) => {
                return (
                  <div className="my-5" key={index} >
                    <SearchCard data={item} />
                  </div>
                );
              })}
            </InfiniteScroll>
          </div>
          : <Spinner />}
      </div>
    </div>
  );
}

export default Search;