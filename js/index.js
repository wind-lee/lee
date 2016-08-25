 $(function() {
           $(".menu-block").on('mouseenter',function(){
               // $(this).stop().hide();
               // $(this).css("background","white");
               $(this).next("div").show();
               $(this).parent().siblings().children(".menu-child").hide();
           });
           $("m-m-menu-child").on('mouseleaver',function(){
               $(".menu-block").stop().show();
           });


           //  让当前第一个展示
           // $(".menu-block").on('mouseenter',function(){
           //    $(".menu-child").addClass("active");
           //    $(this).parent().siblings().find(".menu-child").removeClass("active");
           // });


            // 获取图片宽度
             var w=$(".carousel-ul>li:eq(0)").css("width");
             var widthVal=parseInt(w);
              // 给span绑定鼠标移上来的事件
              $(".slider>span").mouseenter(function(){
                  $(this).addClass("current").siblings("span").removeClass("current");
                  var index=$(this).index();
                  console.log(index);
                  var ulleft=-index*widthVal;
                  console.log(ulleft);

                  $(".carousel-ul").stop().animate({left:-($(this).index()*widthVal)},1000);
              })
        });
