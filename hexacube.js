jazz.loadStyle("hexacube.css");

var cols = 16, rows = 16;
var artull = [];

$.get("hexacube.html", function (cube) {
    var body = $('<div />'), col = $('<div class="col" />'), skull = 10;
    
    body.addClass("artull pristine").appendTo("body");
    
    setTimeout(function () {
        body.removeClass("pristine"); // activate entrance ASAP
    }, 0);
    
    cube = $(cube);
    
    body.on("click", ".box-wrapper", function(){
        var box = $(this);
        box.addClass("active");
        
        console.log(".artull .col:nth-child(" + (parseInt(box.parent().index(), 10)+1) + ") .box-wrapper:nth-child(" + (parseInt(box.index(), 10)+1) + ") .box div");
        
        return false;
    });
    
    body.on("mouseenter", ".box-wrapper", function(){
        var box = $(this);
        box.addClass("hover");
        
        return false;
    });
    
    body.on("mouseleave", ".box-wrapper", function(){
        var box = $(this);
        box.removeClass("hover");
        
        return false;
    });

    console.log("cube", cube);

    while(skull--) col.append(cube.clone(true));

    var marginIncrement = 0.9;// 0.9;
    
    var marginCounter = marginIncrement;
    var newCol;
    
    while (cols--) {
        marginCounter += marginIncrement;
        newCol = col.clone().css({margin:"1.6em " + marginCounter + "em"});
        body.append(newCol);
        
        marginCounter += marginIncrement;
        newCol = col.clone().css({margin:"0 " + marginCounter + "em"});
        body.append(newCol);
    }
});