// Fetch API
// 1 - Get Data From API - جلب البيانات
// Syntax:
/*
fetch(URL)
.then(
(resolved) => {
        return resolved.json();
    }
)
.then(
    (data) => {console.log(data);}
)
.catch(
    (rejected) => {console.log(rejected);}
)
*/
fetch("https://api.github.com/users/nourmohamd/repos")
  .then((resolved) => {
    return resolved.json();
  })
  .then((data) => {
    for (let i = 0; i < data.length; i++) {
      console.log(data[i].id);
    }
  })
  .catch((reason) => {
    console.log(reason);
  });

// How can you get api from playlist on youtube channal:
// 1 - Go to https://developers.google.com/youtube/v3/docs/playlistItems/list#usage
// 2 - Make URL Same as down:
/*
https://www.googleapis.com/youtube/v3/playlistItems
?
part=snippet
&
playlistId=رابط السلسلة من اليوتيوب
&
maxResults=0-->50
&
key=key from << Console Developers Google >> ---> Build Project 
And Enable Youtube Api Then Create Credentials And Copy The Key

Example:
https://www.googleapis.com/youtube/v3/playlistItems?
part=snippet&playlistId=PLMTdZ61eBnyqzVhegrlKy38Zwzky-eugX&maxResults=29
&key=AIzaSyCXZ_AzTTpxS2ZALEmy_h7uUPphibYb7pc#
*/
