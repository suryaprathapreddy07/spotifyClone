const client_id = "2d62a5c3c4f744fab5b907d1f83361a2";
// const client_id='f47bcfded9fb4ca4a1adb8d7060aa408';
const redirect_uri = "http://localhost:3000";
const authEndpoint = "https://accounts.spotify.com/authorize";
const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const loginurl = `${authEndpoint}?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;

// logic to get access token from the url in search tab
export const getToken = function () {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      let parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
      return initial;
    },{});
};
