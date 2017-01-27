var $first,
    $second,
    $third,
    $fourth,
    $fifth,
    $sixth,
    $svg;
$(function(){
  $first = $(".elem-first");
  $second = $(".elem-second");
  $third = $(".elem-third");
  $fourth = $(".elem-fourth");
  $fifth = $(".elem-fifth");
  $sixth = $(".elem-sixt");
  $last = $(".elem-last");
  $svg = $(".svg-main");
  $landing = $(".b-landing");
  $animation = $(".b-landing-animation-wrap");
  $mask = $(".b-landing-animation__mask");
  $left = $(".b-landing__bottom--left");
  $right = $(".b-landing__bottom--right");
  $logo = $(".b-landing__top--img-logo");
  $info = $(".b-landing__top--img-info");
  start();
});


function start(){
    setTimeout(function(){$svg.velocity({opacity:1}, 0, [1200, 90], function(){});},0);
    $mask.velocity({translateY:"100%"}, 0, function(){});
    setTimeout(function(){$first.velocity({scale: "0.004", translateX:"0%", translateY:"0%"}, 0, [1200, 90], function(){end();});},0);
    // setTimeout(function(){$second.velocity({opacity:1}, {scale: "0.004", translateX:"0%", translateY:"0%"}, 700, [1100, 40], function(){});},0);
    setTimeout(function(){$third.velocity({opacity:1, scale: "0.004", translateX:"0%", translateY:"0%"}, 500, [1000, 40], function(){});},0);
    setTimeout(function(){$fourth.velocity({scale: "0.004", translateX:"0%", translateY:"0%"}, 500, [900, 40], function(){});},0);
    setTimeout(function(){$fifth.velocity({opacity:1, scale: "0.35", translateX:"0%", translateY:"0%"}, 500, [800, 40], function(){});},0);
    setTimeout(function(){  $sixth.velocity({opacity:1}, 1800, [700, 40],function(){});},520);
    // transform: scale(5.6) translateX(-100%) translateY(-100%);

}
function end() {
  setTimeout(function(){$first.velocity({scale: "1", translateX:"0%", translateY:"0%"}, 1125, [1200, 40], function(){});},300);
  setTimeout(function(){$second.velocity({scale: "3", translateX:"0%", translateY:"0%"}, 1525, [1100, 40], function(){end2();});},0);
  setTimeout(function(){$third.velocity({scale: "1", translateX:"0%", translateY:"0%"}, 1125, [1000, 40], function(){});},900);
  setTimeout(function(){$fourth.velocity({scale: "1", translateX:"0%", translateY:"0%"}, 1125, [900, 40], function(){});},1200);
  setTimeout(function(){$last.velocity({scale: "1"}, 1125, [900, 40], function(){});},1200);
  setTimeout(function(){$fifth.velocity({scale: "2.1"},  475, [100, 20], function(){}).velocity({ scale: "1"  },  675, [300, 25],function(){});},200);
  // setTimeout(function(){$sixth.velocity({rotateZ: [0,-69.4]}, 1275, [100, 20], function(){});},200);

  setTimeout(function(){
    $svg.css({transition:"none"});
    // $svg.velocity({scale:"0.21",translateY:"0%"}, 1410 , 'easeInOutQuart',  function(){
    //    setTimeout(function(){
    //     $animation.css({"display": "none"});
    //   },300);
    // });
    $fifth.velocity({scale:"4.21",translateY:"-10%", opacity:1}, 1710 , 'easeInOutQuart');
    $svg.velocity({scale:"1", opacity:0}, 1410 , 'easeInOutQuart');
    setTimeout(function(){$logo.velocity({opacity:'1',top:"-20%"}, 600);},1100);
    setTimeout(function(){$info.velocity({opacity:'1',top:"-20%"}, 600);},1100);
    setTimeout(function(){$left.velocity({top:0, opacity:'1',top:"0px"}, 600, 'easeInOutCubic');},1100);
    setTimeout(function(){$right.velocity({top:0, opacity:'1',top:"0px"}, 600, 'easeInOutCubic');},1100);

  },2620);

  // setTimeout(function(){$mask.velocity({opacity:"0"},300);},1900)
  // setTimeout(function(){$svg.velocity({opacity:"0"},300, [100, 20], function(){});},1700);
}
function end2(){
  setTimeout(function(){
    $second.velocity({scale: "1"},  500, [100, 20], function(){});
  },50);
}
