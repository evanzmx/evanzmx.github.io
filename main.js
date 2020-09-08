$(function(){
    if(localStorage.languaje === undefined){
        //Setting default languaje as Spanish
        localStorage.languaje = 'ENG';
        $("#btn_download").attr({
            href: 'Oscar_Cruz_Resume.pdf',
            title: 'Oscar Cruz Resume'
        });
        $("#btn_download").text('Descarga una versión PDF.');
    }else if (localStorage.languaje == 'SPA') {
        $("#btn_download").attr({
            href: 'Oscar_Cruz_CV.pdf',
            title: 'Oscar Cruz CV'
        });
        $("#btn_download").text('Descarga una versión PDF.');
    }else if (localStorage.languaje == 'ENG') {
        $("#btn_download").attr({
            href: 'Oscar_Cruz_Resume.pdf',
            title: 'Oscar Cruz Resume'
        });
        $("#btn_download").text('Download a PDF version.');
    }
    getContent();
    
    $("#btnlang").click(function (e) {
        if (localStorage.languaje == 'SPA') {
            localStorage.languaje = 'ENG';
            $().text('Versión en Español');
            $("#btn_download").attr({
                href: 'Oscar_Cruz_Resume.pdf',
                title: 'Oscar Cruz Resume'
            });
            $("#btn_download").text('Download a PDF version.');
        } else {
            localStorage.languaje='SPA';
            $().text("English version");
            $("#btn_download").attr({
                href: 'Oscar_Cruz_CV.pdf',
                title: 'Oscar Cruz CV'
            });
            $("#btn_download").text('Descarga una versión PDF.');
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