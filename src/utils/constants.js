export const BANNER_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/2e07bc25-8b8f-4531-8e1f-7e5e33938793/e4b3c14a-684b-4fc4-b14f-2b486a4e9f4e/IN-en-20240219-popsignuptwoweeks-perspective_alpha_website_small.jpg";

export const NETFLIX_TV_URL =
  "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png";

export const NETFLIX_TV_VIDEO_URL =
  "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v";

export const NETFLIX_MOBILE_URL =
  "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg";

export const NETFLIX_BOOK_URL =
  "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png";

export const ICON_GIF_URL =
  "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif";

export const CHILD_URL =
  "https://occ-0-4857-2186.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png?r=54d";

export const NETFLIX_DIWALI_URL =
  "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png";

export const DEWALI_VIDEO_URL =
  "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v";

export const AWATAR_URL = "https://avatars.githubusercontent.com/u/6759280?v=4";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer " + process.env.REACT_APP_TMDB_KEY,
  },
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";

export const SUPPORTED_LANGUAGES = [
  {identifier:"en",name:"English"},
  {identifier:"hindi",name:"Hindi"},

]

// export const OPENAI_KEY ="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"
 export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;
