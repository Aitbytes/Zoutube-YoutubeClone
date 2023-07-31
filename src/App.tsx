import { useState } from "react";
import { Grid } from "@mui/material";
import youtube from "./API/youtube.js";
import { SearchBar, VideoList, VideoDetails, Video } from "./Components";

function App() {
  const [videoList, setVideoList] = useState([]);
  const [youtubeID, changeYoutubeID] = useState("N_gcxXeGumE");

  async function handleSubmit(Term: string) {
    const response = await youtube.get("search", { params: { q: Term } });
    console.log({ q: Term });
    setVideoList(response.data.items);
  }
  function handleClick(id: string) {
    changeYoutubeID(id);
    console.log(id);
  }

  return (
    <Grid justifyItems={"center"} container spacing={16}>
      <Grid item xs={12}>
        <Grid container spacing={12}>
          <Grid item xs={12}>
            <SearchBar onFormSubmit={handleSubmit} />
          </Grid>
          <Grid className="view" item xs={8}>
            <VideoDetails videoID={youtubeID} />
          </Grid>
          <Grid className="sideBar" item xs={4}>
            <VideoList videoList={videoList} handleClick={handleClick} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
