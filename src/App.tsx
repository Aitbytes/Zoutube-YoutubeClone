import { useState } from "react";
import { Grid } from "@mui/material";
import youtube from "./API/youtube.js";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Grid justifyItems={"center"} container spacing={16}>
      <Grid item xs={12}>
        head
        <Grid container spacing={16}>
          <Grid item xs={12}>
            {/*Search bar */}
          </Grid>
          <Grid className="view" item xs={9}>
            shouders
          </Grid>
          <Grid className="sideBar" item xs={3}>
            knees
          </Grid>
          <Grid className="footer" item xs={12}>
            toes
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
