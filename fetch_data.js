// Fetch API
// 1 - Fetch API << GET >> Get Data From API - جلب البيانات
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

// 2 - Fetch API << POST >>
// This POST Type request Used to send data to a server
// This method is typically used when you need to create or delete or update resources on the Server-Side
// Example:
// JAVASCRIPT << Front-End Language >>
let data = {
  username: "Mohamed Nour Abdo",
  email: "abdonoor684@gmail.com",
};
fetch("api.php", {
  method: "POST",
  body: JSON.stringify(data),
  headers: { "Content-Type": "application/json" },
});
// PHP << Back-End Language >>
/*
<?php
    لكي يستلم الباك ايند البيانات المرسلة
    $data = file_get_contents("php://input");
    print_r($data);
?>
*/

// Example:
// PHP << Back-End Language >>
/*
<?php
    لكي يستلم الباك ايند البيانات المرسلة
    $data = file_get_contents("php://input");
    print_r(json_encode(array("message"=>"Successful Connection")));
?>
*/
// JAVASCRIPT << Front-End Language >>
fetch("api.php", {
  method: "POST",
  body: JSON.stringify(data),
  headers: { "Content-Type": "application/json" },
})
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    console.log(data.message);
  })
  .catch((error) => {
    console.log(error);
  });

// اذا كان الاي بي اي موجود على موقع على النت فيجب وضع التعليمة التالية
// credentials: "same-origin"
// Example:
fetch("https://api.github.com/users/nourmohamd/repos", {
  credentials: "same-origin", // HERE
  method: "POST",
  body: JSON.stringify(data),
  headers: { "Content-Type": "application/json" },
})
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    console.log(data.message);
  })
  .catch((error) => {
    console.log(error);
  });

// دائماً عند الباك ايند يجب بالبداية وضع السماحيات الخاصة بالاي بي اي
/*
URL For Learn API In PHP: https://developer.okta.com/blog/2019/03/08/simple-rest-api-php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: OPTIONS,GET,POST,PUT,DELETE");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
*/

// 3 - Form By API - formData
// نفل البيانات من فورم إلى الاي بي اي
// HTML
/*
<form method="POST">
  Username : <input type="text" name="name" id="" />
  <br />
  Email :
  <input type="email" name="email" id="" />
  <br/>
  <button type="submit">Login</button>
</form>
*/
// JavaScript
let form1 = document.forms[0];
form1.addEventListener("submit", function (e) {
  e.preventDefault();
  let data = new FormData(form1);
  fetch("index.php", {
    method: "POST",
    body: data,
  })
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
});
// PHP
/*
<?php
  header("Access-Control-Allow-Origin: *");
  header("Content-Type: application/json; charset=UTF-8");
  header("Access-Control-Allow-Methods: OPTIONS,GET,POST,PUT,DELETE");
  header("Access-Control-Max-Age: 3600");
  header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
  $data = file_get_contents("php://input");
  print_r($_POST);
  الافضل ان ترجع الرد كهيئة جيسون ليسهل التعامل معه في جهة العميل
  print_r(json_encode(array("email" => $_POST["email"])))
  print_r(json_encode(array("email" => "Good Operation Add An Email: ".$_POST["email"])));
?>
*/
// new formData(Form Element)
// FormData Methods :
/*
  1 - FormData.append("Key", "Value"); ===> Add New Key:Value To Form
  2 - FormData.delete("Key"); ===> For Remove One Key|Value In Form
  3 - FormData.get("Key"); ===> For Return Value Of Key Inside It
  4 - FormData.getAll(); ===> Get All Values For Key
  5 - FormData.has("Key"); ===> Check About Key
  6 - FormData.keys(); ===> Iterate About All Keys
  7 - FormData.values(); ===> Iterate About All Values
  8 - FormData.set(); ===> Set or Update Key in formData

*/
// Example:
let form2 = document.forms[0];
form1.addEventListener("submit", function (e) {
  e.preventDefault();
  let data = new FormData(form2);
  // ------------------------------------
  data.append("color", "orange");
  data.delete("color");
  data.get("color"); // ===> null
  data.getAll("color"); // Get All Keys Had Same Key And Diffrent Values
  data.has("color"); // true | false
  data.set("name", "Mohamed Nour"); // For Create A New Key & Value
  // ------------------------------------
  fetch("index.php", {
    method: "POST",
    body: data,
  })
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
});
// Example << Important >>
// HTML
/*
<form method="POST" enctype="multipart/form-data">
  File<< CV >> : <input type="file" name="name" id="" />
  Email :<input type="email" name="email" id="" />
  <button type="submit" name="send">Login</button>
</form>
*/
// JavaScript
let form3 = document.forms[0];
form1.addEventListener("submit", function (e) {
  e.preventDefault();
  let data = new FormData(form3);
  fetch("index.php", {
    method: "POST",
    body: data,
  });
});
// PHP
/*
<?php
  header("Access-Control-Allow-Origin: *");
  header("Content-Type: application/json; charset=UTF-8");
  header("Access-Control-Allow-Methods: OPTIONS,GET,POST,PUT,DELETE");
  header("Access-Control-Max-Age: 3600");
  header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
  $data = file_get_contents("php://input");
  // move_uploaded_file("From", "To");
  move_uploaded_file($_FILES['file1']['tmp_name'], $_FILES['file1']['name']);
?>
*/
// When You Want To Send File,It Will Save In The Same Directory For Project
