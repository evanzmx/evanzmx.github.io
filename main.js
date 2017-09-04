$(function(){
    if(localStorage.languaje === undefined){
        //Setting default languaje as Spanish
        localStorage.languaje = 'SPA';
    }
    getContent();
    
    $("#btnlang").click(function (e) {
        if (localStorage.languaje == 'SPA') {
            localStorage.languaje = 'ENG';
        } else {
            localStorage.languaje='SPA';
        }
        getContent();
    });
});


function getContent(){
    $.getJSON("content.json", function(data){
        $.each(data[localStorage.languaje], function(k,v){ //k as key, v as val
            $('#'+k).html(v);
        })
    })
}