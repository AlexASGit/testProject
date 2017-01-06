/**
 * Created by l2776 on 2016/12/20.
 */
$(function(){
    var getWidth = document.body.clientWidth;
    $("#flag_img_box").slidesjs({
        width: getWidth,
        height: getWidth*0.8,
        navigation: false,
        pagination: {
            active: false,
            effect: "slide"
        },
        callback: {
            start:function(number){
                $("#flag_point_box div").eq(number-1).attr("class","opint_normal_a")
            },
            complete: function(number) {
                $("#flag_point_box div").eq(number-1).attr("class","opint_active_a")
            }
        }
    });
});
