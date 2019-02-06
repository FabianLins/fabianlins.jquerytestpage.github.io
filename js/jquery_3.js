$(document).ready(function() {
    if(localStorage.getItem("picture_array_localstorage")!=null){
        picture_array_string=localStorage.getItem("picture_array_localstorage");
        if(picture_array_string===""){
            window.location.href = "page2.html";
        }
        else{
            if(picture_array_string.length===1){
                $("#gallery_picture"+picture_array_string).removeClass("none");
            }
            else{
                picture_array_string_no_comma=picture_array_string.replace(",",""); 
                for (var i = 0; i < picture_array_string_no_comma.length; ++i) {
                    var current_gallery_picture=picture_array_string_no_comma.substring(i,i+1);
                    $("#gallery_picture"+current_gallery_picture).removeClass("none");
                }
            }
        }
    } 
    else{
        window.location.href = "page2.html";
    }

	$("#page2_next").click(function(){
		if (picture_counter>=min_selected_pictures){
			window.location.href = "page3.html";
		}
		else {
            if (min_selected_pictures===1){
                alert("You have to select at least 1 picture!");
            }
            else {
                alert("You have to select at least "+min_selected_pictures+" pictures!");
            }
        	var animation_name="animated shake";
            var animation_end="webkitAnimationEnd mozAnimationEnd msAnimationEnd oAnimationEnd animationEnd";
    	    $("#gallery_pictures_box").addClass(animation_name).one(animation_end, function(){
        	$(this).removeClass(animation_name);
		});
		}
    });
    
    $("#page3_previous").click(function(){
        window.location.href = "page2.html";
    });

    $("#page3_welcome").append(localStorage.getItem("your_name_localstorage")+"!");

    $("#page3_welcome_text").append(localStorage.getItem("your_name_localstorage")+".");

    $("#page2_previous").click(function(){
        window.location.href = "../index.html";
    });

    $(".button_unactive").click(function(){
        var animation_name="animated shake";
        var animation_end="webkitAnimationEnd mozAnimationEnd msAnimationEnd oAnimationEnd animationEnd";
            $("#box").addClass(animation_name).one(animation_end, function(){
                $(this).removeClass(animation_name);
            });
        });
    
});