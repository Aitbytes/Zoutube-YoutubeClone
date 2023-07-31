import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
// import MoreVertIcon from "@mui/icons-material/MoreVert";
import Skeleton from "@mui/material/Skeleton";

interface MediaProps {
  loading?: boolean;
  title: string;
  channelTitle: string;
  description: string;
  thumbnailURL: string;
}

function Media(props: MediaProps) {
  const { loading = false } = props;
  const { title, channelTitle, description, thumbnailURL } = props;

  return (
    <Card sx={{ maxWidth: 345, m: 2 }}>
      <CardHeader
        title={
          loading ? (
            <Skeleton
              animation="wave"
              height={10}
              width="80%"
              style={{ marginBottom: 6 }}
            />
          ) : (
            channelTitle
          )
        }
        subheader={
          loading ? (
            <Skeleton animation="wave" height={10} width="40%" />
          ) : (
            title
          )
        }
      />
      {loading ? (
        <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />
      ) : (
        <CardMedia
          component="img"
          height="140"
          image={thumbnailURL}
          alt={description}
        />
      )}
      <CardContent>
        {loading ? (
          <React.Fragment>
            <Skeleton
              animation="wave"
              height={10}
              style={{ marginBottom: 6 }}
            />
            <Skeleton animation="wave" height={10} width="80%" />
          </React.Fragment>
        ) : (
          <Typography variant="body2" color="text.secondary" component="p">
            {description}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
}

function VideoList({ videoList }) {
  console.log(videoList);

  return videoList.map((item) => (
    <Media
      title={item.snippet.title}
      channelTitle={item.snippet.channelTitle}
      description={item.snippet.description}
      thumbnailURL={item.snippet.thumbnails.high.url}
      key={item.id.videoId}
    />
  ));
}

export default VideoList;
