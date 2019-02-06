$(document).ready(function() {
    if (localStorage.getItem("your_name_localstorage")===null){
        window.location.href = "../index.html";
    }
    max_selected_pictures=2;
    min_selected_pictures=1;
    if(min_selected_pictures>max_selected_pictures){
        min_selected_pictures=max_selected_pictures;
    }
    number_of_pictures=$('.gallery_pictures').length;
    var animation_name="animated slideInLeft";
    var animation_end="webkitAnimationEnd mozAnimationEnd msAnimationEnd oAnimationEnd animationEnd";
    for (var i = 0; i < number_of_pictures; ++i) {
        window["picture"+(i+1).toString()]=0;
    }
    if(localStorage.getItem("picture_array_localstorage")!=null){
        picture_array_string=localStorage.getItem("picture_array_localstorage");
        if(picture_array_string===""){
            picture_counter=0;
            picture_array=[];
        }
        else{
            picture_array=picture_array_string.split(",");
            picture_counter=picture_array.length;
        for (var i = 0; i < max_selected_pictures; ++i) {
            window["picture"+(picture_array[max_selected_pictures-1-i])]=1;
            $("#gallery_picture"+(picture_array[max_selected_pictures-1-i])).css("opacity", "0.4");
            $("#gallery_picture"+(picture_array[max_selected_pictures-1-i])).css("background-color", "rgba(0, 0, 0, 0.1)");            
        }
    }
} 
    else{
        picture_array=[];
        picture_counter=0;
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
    
    $("#page2_previous").click(function(){
        window.location.href = "../index.html";
    });

    $(".fade_in_class").append(" "+localStorage.getItem("your_name_localstorage")+"!");
    $(".fade_in_class").addClass(animation_name).one(animation_end, function(){
        $(this).removeClass(animation_name);
    });

    $("#page2_previous").click(function(){
        window.location.href = "../index.html";
    });
    $("#image_counter").append(picture_counter.toString());
    
    
    $(".gallery_pictures").hover(function(){
        var div_id_gallery=$(this).attr('id');
        var div_id_gallery_number=div_id_gallery.substring(div_id_gallery.length-1,div_id_gallery.length);
        var current_picture= "picture"+div_id_gallery_number;
        if (window[current_picture]===0) {
            $(this).css("opacity", "0.7");
        }
    });

    $(".gallery_pictures").mouseout(function(){
        var div_id_gallery=$(this).attr('id');
        var div_id_gallery_number=div_id_gallery.substring(div_id_gallery.length-1,div_id_gallery.length);
        var current_picture= "picture"+div_id_gallery_number;
        if (window[current_picture]===0) {
            $(this).css("opacity", "1");
        }
    });

    $(".gallery_pictures").click(function(){
        var div_id_gallery=$(this).attr('id');
        var div_id_gallery_number=div_id_gallery.substring(div_id_gallery.length-1,div_id_gallery.length);
        var current_picture= "picture"+div_id_gallery_number;
        if(picture_counter<max_selected_pictures) {
            if (window[current_picture]===0) {
                picture_counter+=1;
                var image_counter_string=$("#image_counter").text();
                var image_counter_current_number=image_counter_string.substring(image_counter_string.length-1,image_counter_string.length);
                $("#image_counter").text(function () {
                    return $(this).text().replace(image_counter_current_number, parseInt(picture_counter)); 
                });
                window[current_picture]=1;
                $(this).css("opacity", "0.4");
                $(this).css("background-color", "rgba(0, 0, 0, 0.1)");
                picture_array.push(div_id_gallery_number);
                localStorage.setItem("picture_array_localstorage",picture_array);
            }
            else {
                picture_counter-=1;
                window[current_picture]=0;
                var image_counter_string=$("#image_counter").text();
                var image_counter_current_number=image_counter_string.substring(image_counter_string.length-1,image_counter_string.length);
                $("#image_counter").text(function () {
                    return $(this).text().replace(image_counter_current_number, parseInt(picture_counter)); 
                });
                $(this).css("background-color", "transparent");
                $(this).css("opacity", "0.7");
                console.log(picture_array);
                var index = picture_array.indexOf(div_id_gallery_number);
                if (index > -1) {
                    picture_array.splice(index, div_id_gallery_number);
                }
                localStorage.setItem("picture_array_localstorage",picture_array);
            }
        }
        else {
            if (window[current_picture]===1) {
                picture_counter-=1;
                window[current_picture]=0;
                $(this).css("background-color", "transparent");
                $(this).css("opacity", "0.7");
                var image_counter_string=$("#image_counter").text();
                var image_counter_current_number=image_counter_string.substring(image_counter_string.length-1,image_counter_string.length);
                $("#image_counter").text(function () {
                    return $(this).text().replace(image_counter_current_number, parseInt(picture_counter)); 
                });
                console.log(picture_array);
                var index = picture_array.indexOf(div_id_gallery_number);
                if (index > -1) {
                    picture_array.splice(index, div_id_gallery_number);
                }
                localStorage.setItem("picture_array_localstorage",picture_array);
            }
            else {
                alert("You have already selected "+max_selected_pictures+" pictures!");
                var animation_name="animated shake";
				var animation_end="webkitAnimationEnd mozAnimationEnd msAnimationEnd oAnimationEnd animationEnd";
					$("#gallery_pictures_box").addClass(animation_name).one(animation_end, function(){
						$(this).removeClass(animation_name);
					});
            }
        }
    });

});