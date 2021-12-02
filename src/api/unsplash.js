import axios from "axios";

export default axios.create({
  baseUrl: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID UpJPc_NDebIGXHWun5WAKF7CJ81DpoQLE2leVPwKjLk",
  },
});
