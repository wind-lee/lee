
		$(function() {
			// var flag;
			// var isSec;
			$(".login").children('a').eq(0).on("click",function() {
				$(".loginwindow").show();
				$.ajax({
					url: 'getSecinfo.php',
					type: 'GET',
					success:function (data) {
						var secImginfo = JSON.parse(data);
						var num = Math.floor(Math.random()*secImginfo.length);
						$("#secImg").attr("src",secImginfo[num].src);
						$("#secImg").attr("key",secImginfo[num].key);
					}
				});	
			});
			$("#secKey").on("blur",function() {
				if ($(this).val() == $("#secImg").attr("key")) {
					isSec = true;
					$(this).parent().css("borderColor","green");
				}else {
					$(this).parent().css("borderColor","red");
					isSec = false;
					$.ajax({
					url: 'getSecinfo.php',
					type: 'GET',
					success:function (data) {
						var secImginfo = JSON.parse(data);
						var num = Math.floor(Math.random()*secImginfo.length);
						$("#secImg").attr("src",secImginfo[num].src);
						$("#secImg").attr("key",secImginfo[num].key);
					}
				});
				}
			});
			$(".change").on("click",function() {
				$.ajax({
					url: 'getSecinfo.php',
					type: 'GET',
					success:function (data) {
						var secImginfo = JSON.parse(data);
						var num = Math.floor(Math.random()*secImginfo.length);
						$("#secImg").attr("src",secImginfo[num].src);
						$("#secImg").attr("key",secImginfo[num].key);
					}
				});
			});
			$(".closebtn").on("click",function() {
				$(".loginwindow").hide();
			});
			var stratige = {
				isEmail:function(value) {
					var pattern = /^[\w!#$%&'*+\/=?^_`{|}~-]+(?:\.[\w!#$%&'*+\/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?$/;
					return pattern.test(value);
				},
				isMobileNo:function(value) {
					var pattern = /^(13\d|14[57]|15[^4,\D]|17[678]|18\d)\d{8}|170[059]\d{7}$/;
					return pattern.test(value);
				},
				isCurrentpwd:function(value) {
					var pattern = /^[a-zA-Z0-9]{6,18}$/;
					return pattern.test(value);
				}
			};
			$("#loginuser").on("blur",function() {
				// $(this).parent().css("borderColor","#ccc");
				$_this = $(this);
				str = $_this.val();
				if (stratige.isEmail(str) || stratige.isMobileNo(str)) {
					$_this.parent().css("borderColor","green");
				}else {
					$(this).parent().css("borderColor","red");
				}
			});
			$("#password").on("blur",function() {
				$_this = $(this);
				str = $_this.val();
				if (stratige.isCurrentpwd(str)) {
					$_this.parent().css("borderColor","green");
				}else {
					$(this).parent().css("borderColor","red");
				}
			});
			$("#submit").on("click",function() {
				if (stratige.isEmail($("#loginuser").val()) || stratige.isMobileNo($("#loginuser").val()) && stratige.isCurrentpwd($("#password").val())) {
						$.ajax({
						url:"test.php",
						type:"post",
						success:function(data) {
							console.log(data);
							var callbackData = $.parseJSON(data);
							var flag = true;
							for (var i = 0; i < callbackData.length; i++) {
								if(callbackData[i]["user"] == $("#loginuser").val() && callbackData[i]["pwd"] == $("#password").val()) {
									alert("成功登录");
									flag = false;
								}
							};
							if (flag) {
								alert("请输入正确的用户名和密码");
							};
							// console.log(data);
							// $.ajax({
							// 	url:"zhuce.php",
							// 	type:"post",
							// 	data:{
							// 		user:$("#loginuser").val(),
							// 		pwd:$("#password").val()	
							// 	},
							// 	success:function(data) {
							// 		console.log("ad");
							// 		console.log(data);
							// 	}
							// })
							//注册逻辑
							// var callbackData = $.parseJSON(data);
							// for (var i = 0; i < callbackData.length; i++) {
							// 	if(callbackData[i]["user"] != $("#loginuser").val()) {
							// 		$.ajax({
							// 			url:"zhuce.php",
							// 			type:"post",
							// 			data:{
							// 				user:$("#loginuser").val(),
							// 				pwd:$("#password").val()	
							// 			},
							// 			success:function() {
							// 				alert("注册成功");
							// 			}
							// 		});
							// 	}else {
							// 		alert("该用户已被注册");
							// 	}
							// }
							}
						});
				}else {
					alert("用户名和密码非法");
				}
				
			});

			$("#forgetpwd").on("click",function() {
				$.ajax({
					url:"test.php",
					type:"post",
					success:function(data) {
						var callbackData = $.parseJSON(data);
						var flag = true;
						for (var i = 0; i < callbackData.length; i++) {
							if(callbackData[i]["user"] == $("#loginuser").val()) {
								alert("该用户密码为："+callbackData[i]["pwd"]);
								flag = false;
							}
						};
						if (flag) {
							alert("无此用户，请重新输入");
						};
					}
				});
			});


			// $("#zhuce").on("click",function() {
			// 	if ($("#loginuser").val() && $("#password").val()) {

			// 		$.ajax({
			// 			url:"test.php",
			// 			success:function(data) {
			// 				var callbackData = $.parseJSON(data);
			// 				var flag = true;
			// 				for (var i = 0; i < callbackData.length; i++) {
			// 					if(callbackData[i]["user"] == $("#loginuser").val()) {
			// 						flag = false;
			// 						alert("该用户已被注册");
			// 					};
			// 				};
			// 				if(flag) {
			// 					$.ajax({
			// 							url:"zhuce.php",
			// 							type:"post",
			// 							data:{
			// 								user:$("#loginuser").val(),
			// 								pwd:$("#password").val()	
			// 							},
			// 							success:function() {
			// 								alert("注册成功");
			// 							}
			// 						});
			// 				}
							
			// 			}
			// 		});

			// 	}else {
			// 		alert("ss");	
			// 	}
			// });
		})