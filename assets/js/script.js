var hour;
// Different id for time block
var id09 = $("#09");
var id10 = $("#10");
var id11 = $("#11");
var id12 = $("#12");
var id13 = $("#13");
var id14 = $("#14");
var id15 = $("#15");
var id16 = $("#16");
var id17 = $("#17");



var textAreaEl = $("textarea");

var saveButtonEl = $(".saveBtn");
// time_block array to store objects with properties value and id
var time_block = [{value: 09, id : id09, idstr:"09"},
    {value: 10, id : id10, idstr:"10"},
    {value: 11, id : id11, idstr:"11"},
    {value: 12, id : id12, idstr:"12"},
    {value: 13, id : id13, idstr:"13"},
    {value: 14, id : id14, idstr:"14"},
    {value: 15, id : id15, idstr:"15"},
    {value: 16, id : id16, idstr:"16"},
    {value: 17, id : id17, idstr:"17"}];


    for(var i=0; i < time_block.length; i++){
        var storedData = localStorage.getItem(time_block[i].idstr);
        $("#" + time_block[i].idstr).val(storedData);
    
    }
    
    

//Executed when window loads
$(document).ready(function(){

    $("#date").text(moment().format("dddd, MMM Do, h:mm a"));
    var hour = moment().format("HH");
    console.log(hour);
    //let timeNow = moment();
         
    for(var i = 0; i < time_block.length; i++){
        if(hour > time_block[i].value){
            time_block[i].id.addClass("past");
        }
    };
    for(var k = 0; k < time_block.length; k++){
        if(hour == time_block[k].value){
            time_block[k].id.addClass("present");
        }
    };
    for(var a = 0; a < time_block.length; a++){
        if(hour < time_block[a].value){
            time_block[a].id.addClass("future");
        }
    };


});

saveButtonEl.on('click',function(){

    var currentId = $(this).prev().attr("id");
    
    var data = $("#" + currentId).val();
    console.log(data);
    localStorage.setItem(currentId,data);
    //console.log(textAreaEl);
     
    console.log("click");
});

$("#reset").on("click",function(){
    localStorage.clear();
    for(var i=0; i < time_block.length; i++){
        $("#" + time_block[i].idstr).val("");
    
    }
    

})

