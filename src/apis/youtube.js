import axios from "axios";

const KEY = "AIzaSyCoB6R2r7zWFZx_C50_OpL2lTvO0F2oMdI";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
