import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { unSplashData, pixelsVideos, tenorGifs } from "../../shared/apis/apis";
import { setError, setLoader, setResults } from "../../store/slices/searchSlice";
import Card from "./Card";

const ImageGrid = () => {
  const dispatch = useDispatch();
  const { activeTab, error, loader, query, results } = useSelector(
    (state) => state.search
  );

  const getData = async () => {
    if(!query) return;
    try {
      let data = [];
      dispatch(setLoader(true));
      switch (activeTab) {
        case "Images": {
          const response = await unSplashData(query);
          data = response?.results?.map((item) => ({
            id: item.id,
            type: "photo",
            title: item.alt_description,
            thumbnail: item.urls.small,
            src: item.urls.full,
            url: item.links.html,
          }));
          break;
        }
        case "Videos": {
          const response = await pixelsVideos(query);
          data = response.videos.map((item) => ({
            id: item.id,
            type: "video",
            title: item.user.name || "video",
            thumbnail: item.image,
            src: item.video_files[0].link,
            url: item.url,
          }));
          break;
        }
        case "GIFS": {
          const response = await tenorGifs(query);
          data = response.results.map((item) => ({
            id: item.id,
            title: item.title || "GIF",
            type: "gif",
            thumbnail: item.media_formats.tinygif.url,
            src: item.media_formats.gif.url,
            url: item.url,
          }));
          break;
        }
      }
      dispatch(setLoader(false));
      dispatch(setResults(data));
    } catch (error) {
      dispatch(setError(error));
    }
  };

  useEffect(() => {
    getData();
  }, [activeTab, query]);

  if(error){
    return <div className="text-red-500">Error fetching data: {error?.message}</div>;
  }
  if(loader){
    return <div className="text-white">Loading...</div>;
  }
  return (
    <div className="flex justify-between w-full flex-wrap gap-6 overflow-auto px-10">
      {results.map((item, idx) => {
        return (
          <div key={idx}>
            <Card item={item} />
          </div>
        );
      })}
    </div>
  );
};

export default ImageGrid;
