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
  $svg = $(".svg-main");
  start();
});


function start(){
    setTimeout(function(){$svg.velocity({opacity:1}, 0, [1200, 90], function(){});},0);
    setTimeout(function(){$first.velocity({scale: "0.004", translateX:"0%", translateY:"0%"}, 0, [1200, 90], function(){end();});},0);
    setTimeout(function(){$second.velocity({scale: "0.004", translateX:"0%", translateY:"0%"}, 500, [1100, 40], function(){});},0);
    setTimeout(function(){$third.velocity({scale: "0.004", translateX:"0%", translateY:"0%"}, 500, [1000, 40], function(){});},0);
    setTimeout(function(){$fourth.velocity({scale: "0.004", translateX:"0%", translateY:"0%"}, 500, [900, 40], function(){});},0);
    setTimeout(function(){$fifth.velocity({scale: "0.006", translateX:"0%", translateY:"0%"}, 500, [800, 40], function(){});},0);
    // $sixth.velocity({ rotateZ: "-69.4deg"}, 1525, [700, 40], function(){});
    // transform: scale(5.6) translateX(-100%) translateY(-100%);

}
function end() {
  setTimeout(function(){$first.velocity({scale: "1", translateX:"0%", translateY:"0%"}, 1125, [1200, 40], function(){});},200);
  setTimeout(function(){$second.velocity({scale: "1", translateX:"0%", translateY:"0%"}, 1125, [1100, 40], function(){});},300);
  setTimeout(function(){$third.velocity({scale: "1", translateX:"0%", translateY:"0%"}, 1125, [1000, 40], function(){});},400);
  setTimeout(function(){$fourth.velocity({scale: "1", translateX:"0%", translateY:"0%"}, 1125, [900, 40], function(){});},500);
  setTimeout(function(){$fifth.velocity({scale: "1", translateX:"0%", translateY:"0%"}, 1175, [800, 40], function(){});},600);
  setTimeout(function(){$sixth.velocity({rotateZ: [0,-69.4]}, 625, [700, 40], function(){});},0);
}
