$(document).ready(function()
{
    $nav=$('.nav');
    $toggleCollapse=$('.toggle-collpase');

    $toggleCollapse.click(function(){
        $nav.$toggleClass('collpase');
    })

    //click to scroll top
    $('.move-up span').click(function(){
        $('html,body').animate({
            scrollTop:0
        },1000);
    })
})
