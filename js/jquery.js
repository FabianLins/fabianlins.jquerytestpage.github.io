$(document).ready(function() {
	your_name="";
	if(localStorage.getItem("your_name_localstorage")!=null){
		your_name=localStorage.getItem("your_name_localstorage");
	}
	letterRegex = new XRegExp("^\\p{L}*$");
	
	$("#index_next").click(function(){
		if (your_name===""){
			alert("Please enter your name before you continue!");
			var animation_name="animated shake";
			var animation_end="webkitAnimationEnd mozAnimationEnd msAnimationEnd oAnimationEnd animationEnd";
				$("#name_submit").addClass(animation_name).one(animation_end, function(){
					$(this).removeClass(animation_name);
				});
		}
		else {
			window.location.href = "html/page2.html";
		}
	});
	
	$("#name_submit").click(function(){
		var form_content=$("#name_form").val();

		if (letterRegex.test(form_content)) {
			if (form_content.length<=1) {
				alert("Your name needs at least two characters!");
				var animation_name="animated shake";
				var animation_end="webkitAnimationEnd mozAnimationEnd msAnimationEnd oAnimationEnd animationEnd";
					$("#name_form").addClass(animation_name).one(animation_end, function(){
						$(this).removeClass(animation_name);
					});
			}

			else if (form_content.slice(0,1) === form_content.slice(0,1).toUpperCase()){
				if (form_content.slice(1,form_content.length).toLowerCase() != form_content.slice(1,form_content.length)) {
					alert("Your name can only contain an upper letter at the start");
					var animation_name="animated shake";
					var animation_end="webkitAnimationEnd mozAnimationEnd msAnimationEnd oAnimationEnd animationEnd";
						$("#name_form").addClass(animation_name).one(animation_end, function(){
							$(this).removeClass(animation_name);
						});

				}
				else {
					your_name=form_content;
					alert("Your name is saved now, "+your_name+".\nIf you have made a mistake, feel free to change it.");
					localStorage.setItem("your_name_localstorage", your_name);
					var animation_name="animated shake";
					var animation_end="webkitAnimationEnd mozAnimationEnd msAnimationEnd oAnimationEnd animationEnd";
						$("#index_next").addClass(animation_name).one(animation_end, function(){
							$(this).removeClass(animation_name);
						});
				}
			}
			else {
				alert("Your first letter needs to be a capital letter!");
				var animation_name="animated shake";
				var animation_end="webkitAnimationEnd mozAnimationEnd msAnimationEnd oAnimationEnd animationEnd";
					$("#name_form").addClass(animation_name).one(animation_end, function(){
						$(this).removeClass(animation_name);
					});
			}
	}
		else {
			alert("Your name can only contain letters!");
			var animation_name="animated shake";
			var animation_end="webkitAnimationEnd mozAnimationEnd msAnimationEnd oAnimationEnd animationEnd";
				$("#name_form").addClass(animation_name).one(animation_end, function(){
					$(this).removeClass(animation_name);
				});
		}
	});

$(".button_unactive").click(function(){
	var animation_name="animated shake";
    var animation_end="webkitAnimationEnd mozAnimationEnd msAnimationEnd oAnimationEnd animationEnd";
    	$("#box").addClass(animation_name).one(animation_end, function(){
        	$(this).removeClass(animation_name);
		});
	});

});