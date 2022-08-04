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

// time_block array to store objects with properties value and id
var time_block = [{value: 09, id : id09},
    {value: 10, id : id10},
    {value: 11, id : id11},
    {value: 12, id : id12},
    {value: 13, id : id13},
    {value: 14, id : id14},
    {value: 15, id : id15},
    {value: 16, id : id16},
    {value: 17, id : id17}];

//Executed when window loads
$(document).ready(function(){

    $("#date").text(moment().format("dddd, MMM Do, h:mm a"));
    var hour = moment().format("HH");
    console.log(hour);
    let timeNow = moment();
         
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
function storeData(){
    localStorage.setItem('textarea',)
}


