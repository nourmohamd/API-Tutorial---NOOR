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
