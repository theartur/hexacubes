jazz.loadStyle("hexacube.css");

var cols = 16, rows = 16;

$.get("hexacube.html", function (cube) {
    var body = $("body"), col = $('<div class="col" />'), skull = 10;
    
    cube = $(cube);
    
    body.on("click", "div", function(){
        var box = $(this).parents(".box-wrapper");
        console.log(box);
        box.addClass("active");
        return false;
    });

    console.log("cube", cube);

    while(skull--) col.append(cube.clone(true));

    var marginCounter = 0.9;
    var marginIncrement = 0.9;
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