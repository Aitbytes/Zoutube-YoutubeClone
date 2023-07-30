import axios from "axios";
import "dotenv/config";

export default axios.create({
  baseURL: "youtube.googleapis.com",
  params: {
    part: "snippet",
    maxResults: 5,
    key: process.env.APIkey,
  },
});
