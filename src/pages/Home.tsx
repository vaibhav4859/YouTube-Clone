import { useEffect } from "react";
import { store } from "../store";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Card from "../components/Card";
import { getHomePageVideos } from "../store/reducers/getHomePageVideos";
import { HomePageVideos } from "../Types";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "../components/Spinner";

const Home = () => {
  const dispatch = useAppDispatch();
  let videos: HomePageVideos[] = [];
  // console.log(videos.length);

  useEffect(() => {
    const load = async () => {
      await store.dispatch(getHomePageVideos(false));
      videos = store.getState().youtubeApp.videos;
      console.log(videos);
    }
    load();
  }, []);

  return (
    <div className="max-h-screen overflow-hidden">
      <div style={{ height: "7.5vh" }}>
        <Navbar />
      </div>
      <div className="flex" style={{ height: "92.5vh" }}>
        <Sidebar />
        {/* {videos.length ?
          <InfiniteScroll
            dataLength={videos.length}
            next={() => dispatch(getHomePageVideos(true))}
            hasMore={videos.length < 500}
            loader={<Spinner />}
            height={650}
          >
            <div className="grid gap-y-14 gap-x-8 grid-cols-4 p-8">
              {videos.map((item: HomePageVideos) => {
                return <Card data={item} key={item.videoId} />;
              })}
            </div>
          </InfiniteScroll>
          : <Spinner />} */}
      </div>
    </div>
  );
}

export default Home;