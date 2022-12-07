$(document).ready(function(){
    $('.faq ').click(function(){
        $('p', this).toggle();
    });
    $('#ajout').click(function(){
        let question = $('#question').val();
        let reponse = $('#reponse').val();
        $('body').html($('body').html() + '<div class="faq"><h3>' + question + '</h3><p>' + reponse + '</p> </div');
    });
    $('button[name="joyeux"]').click(function(){
        $('.image').css('width','0%');
        $('.image').css('display','block');
        $('.image img').css('display','block');
        $('.image').animate({width:"100%",height:"auto"},5000);
    });
    $('.image img').click(function(){
        $(this).slideUp();
    });
    $('#btn_ajax').click(function(){
        //On charge notre fichier ajax et on l'insère dans content_ajax
        $('#content_ajax').load('assets/ajax/content.html');
    })
    $('.drag').draggable();
    //Datepicker (choisir la date)
    let dateFormat = 'dd/mm/yy',
    from = $('#datedebut').datepicker({
        defaultDate: '+1w',
        changeMonth: true,
        numberOfMonths: 2
    }).on("change",function(){
        to.datepicker("option","minDate",getDate(this));
    }),
    to = $('#datefin').datepicker({
        defaultDate: '+1w',
        changeMonth: true,
        numberOfMonths: 2
    }).on("change",function(){
        from.datepicker("option","maxDate",getDate(this));
    });
    function getDate(element){
        let date;
        try{
            date = $.datepicker.parseDate(dateFormat,element.value);
        }catch(error){
            date = null;
        }
        return date;
    }
});
//L'image va suivre la souris
// $(document).bind('mousemove',function(e){
//     $('#souris').text(e.pageX+","+e.pageY);
//     $('#img_souris').css('top',e.pageY);
//     $('#img_souris').css('left',e.pageX);
// });