$(document).ready(function(){
//This is for testing Internet Connection
connect();
//this is already member or not
if(localStorage.getItem("Clientid") != '' && localStorage.getItem("Password") != ''){
location.href="Dashboard.html";
}else{

}
   $("#login").on('submit', function(e){
      e.preventDefault();
      var fdata = $("#login").serialize();
      $.ajax({
         url:"http://pathgene.org/mobile/login.php",
         data:fdata,
         type:"post",
         beforeSend: function(){
           $("#wmsg").hide();
           $("#loader").show();
         },
         success: function(str){
           $("#loader").hide();
           if(str != "0"){
            $("#wmsg").hide();
            localStorage.setItem("Clientid",str.Clientid);
            localStorage.setItem("Password",str.Password);
            location.href="Dashboard.html";
           }else{
            $("#wmsg").show();
           }
         }
      });
   });
});
function connect(){
    $.ajax({
         url:"http://pathgene.org/mobile/Connect.php",
         type:"post",
         crossDomain:true,
         success: function(str){  },
         error: function(jqXHR, textStatus, errorThrown) {
           location.href="connection.html";
         }
      });
}
function logout(){
  localStorage.setItem("Clientid","");
  localStorage.setItem("Password","");
  location.href="index.html";
}