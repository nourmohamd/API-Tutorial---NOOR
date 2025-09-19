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

// 4 - Make API Give Me Results Automaticlly Without Any Button ( Refresh|Refetch_Data)
/*
  Only In JavaScript Put setInterval(function, timer)
  ===================================================
  setInterval(function() {
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
  }, 1000);
*/

// 5 - Controll With Number Of Result That Come From API TO Show It In User Interface
/*
fetch("https://api.github.com/users/nourmohamd/repos")
  .then((resolved) => {
    return resolved.json();
  })
  .then((data) => {
    // Either ===> For Get Only 5 Result
    for (let i = 0; i < 6; i++) {
      console.log(data[i].id);
    }
    // Or ===> Also For Get 5 Result
    for(let i in data) {
      if(i <= 5) {
        console.log(data[i].id);
      } else {
        break;
    }
  }
  })
  .catch((reason) => {
    console.log(reason);
  });
*/

// 6 - Get Result As Reverse Data From DataBase By API
/*
fetch("https://api.github.com/users/nourmohamd/repos")
  .then((resolved) => {
    return resolved.json();
  })
  .then((data) => {
    data.reverse();
    console.log(data);
  }
  })
  .catch((reason) => {
    console.log(reason);
});
*/

// 7 - Methods You Need It During Work With JSON
// All You Need To Know It About API in Back-End << Server - Side >>
// Methods Work With JSON
// Example:
// $json = '{"name":"Mohamed Nour", "age":"24"}';
// echo $json;
// 1 - Convertation Json To Object
// $data_not_json = json_decode($json);
// echo $data_not_json->name; // Mohamed Nour
// 2 - Convertation Json To Array
// $data_array = json_decode($json, true);
// echo $data_array["name"]; // Mohamed Nour
// 3 - Convertation Array Or Object To JSON
// $arr = array("username" => "Mohamed Nour", "age" => 24);
// $json2 = json_encode($arr);
// print_r($json2);
// Always Use print_r() For Print << JSON >>
// 4 - Type Of Error In JSON
// json_last_error(); ===> يستخدم بعد تعريف الجيسون مباشرة ولا يستقبل بارميتر
/*
The Number That Return From json_last_error
0 JSON_ERROR_NONE
1 JSON_ERROR_DEPTH
2 JSON_ERROR_STATE_MISMATCH
3 JSON_ERROR_CTRL_CHAR
4 JSON_ERROR_SYNTAX
5 JSON_ERROR_UTF8
6 JSON_ERROR_RECURSION
7 JSON_ERROR_INF_OR_NAN
8 JSON_ERROR_UNSUPPORTED_TYPE
*/
// Example:
// $json = '{"name":"Mohamed Nour", "age":"24"}';
// echo json_encode($json);
// $error = json_last_error();
// echo $error;

// 8 - Make A Search Box For Search About Data In DataBase
// This Idea Is Very Important Where You Don't Have API <GET>
/*
//////////// 1 - PHP
<?php
header("Access-Control-Allow-Origin: *");
  header("Content-Type: application/json; charset=UTF-8");
  header("Access-Control-Allow-Methods: GET");
  header("Access-Control-Max-Age: 3600");
  header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
  
  // Connect To DataBase
  $host = 'localhost';         // or your server IP
  $dbname = 'your_database';   // replace with your database name
  $user = 'your_username';     // replace with your DB username
  $pass = 'your_password';     // replace with your DB password
  $db = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $user, $pass);
  
  // Get Data From DataBase
  $sql = $db->prepare("SELECT * FROM `product`");
  $sql = $sql->fetchAll();
  print_r(json_encode($sql)); // Here in this line the server-side sends a data to client-side As ( Object Not Array )
  ?>
  //////////// 2 - HTML And JS
  <html>
    <head>
    </head>
    <body>
      <input type="search" name="value_search" class="A"/>
      <button type="button" id="btn">Search</button>
      <script>
        let btn = document.getElementById("btn");
        let value_search = document.getElementsByClassName("A")[0];
        btn.onclick = function() {
          fetch("file_api.php")
            .then(response => response.json())
            .then((data) => {
              data.forEach((el) => {
                if (el.content.includes(value_search.value)) { // optional: use includes instead of search
                  console.log(el.content);
                }
              });
            })
            .catch(error => console.error("Error fetching data:", error)); // optional: error handling
        };
      </script>
    </body>
  </html>
  
*/

// 9 - Make A Search Box For Search About Data In DataBase
// This Idea Is Very Important Where You Have API ( Put The Rules In API FILES For Search <POST>)
/*
//////////// 1 - PHP
<?php
  header("Access-Control-Allow-Origin: *");
  header("Content-Type: application/json; charset=UTF-8");
  header("Access-Control-Allow-Methods: POST");
  header("Access-Control-Max-Age: 3600");
  header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
  
  // Connect To DataBase
  $host = 'localhost';         // or your server IP
  $dbname = 'your_database';   // replace with your database name
  $user = 'your_username';     // replace with your DB username
  $pass = 'your_password';     // replace with your DB password
  $db = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $user, $pass);
  
  // Catch Data From Client-Side
  $data = file_get_contents("php://input");
  $data = json_decode($data);

  // Get Data From DataBase
  $sql = $db->prepare("SELECT * FROM `product` WHERE content LIKE :D");
  $s = "%".$data->value."%";
  $sql->bindParam("D", $s);
  $sql = $sql->fetchAll();
  print_r(json_encode($sql)); // Here in this line the server-side sends a data to client-side As ( Object Not Array )
  ?>
  //////////// 2 - HTML And JS
  <html>
    <head>
    </head>
    <body>
      <input type="search" name="value_search" class="A"/>
      <button type="button" id="btn">Search</button>
      <script>
        let btn = document.getElementById("btn");
        let value_search = document.getElementsByClassName("A")[0];
        btn.onclick = function() {
          fetch("file_api.php", {
          method: 'POST',
          body: JSON.stringify({value: value_search.value})
          })
            .then(response => response.json())
            .then((data) => {
              data.forEach((el) => {
                  console.log(el.content);
              });
            })
            .catch(error => console.error("Error fetching data:", error)); // optional: error handling
        };
      </script>
    </body>
  </html>
  
*/

// 10 - Types Of API
/*
1 - API ===> This type use for create a bride between client-side and server-side

2 - REST API ===> This type use for connect to database for make operation such as ( GET, POST, DELETE, ADD, PUT )

3 - RESTFULL API ===> This type use for connect to database for make operation such as ( GET, POST, DELETE, ADD, PUT )
*/
