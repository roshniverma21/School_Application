//var popupDiv = "<div id='popupdiv' class ='col-md-12 col-sm-12 col-xs-12 popupDiv'></div>";
//function addpopup()
//{
////               popupDiv += '<div class="loader" id="popupdiv">';
////               popupDiv += '<div class="face face1">';
////               popupDiv += '<div class="circle"></div>';
////               popupDiv += '</div>';
////               popupDiv += '<div class="face face2">';
////               popupDiv += '<div class="circle"></div>';
////               popupDiv += '</div>';
////               popupDiv += '</div>';
//     $(popupDiv).appendTo("body");   
////document.write(popupDiv);
//}
//function removepopup()
//{
//    $("#popupdiv").css("display","none");
//}
var popupDiv = "<div id='popupdiv' class ='col-md-12 col-sm-12 col-xs-12 popupDiv'></div>";
function addpopup()
{
    $(popupDiv).appendTo("body");
}
function removepopup()
{
    $("#popupdiv").css("display","none");
}