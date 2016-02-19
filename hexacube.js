// inject html into page

jazz.loadStyle("hexacube.css");

var cols = 16, rows = 16;

$.get("hexacube.html", function (cube) {
    var body = $("body"), page = $('<div class="col" />'), skull = 10;
    
    cube = $(cube);

    console.log("cube", cube);

    while(skull--) page.append(cube.clone());

    //body.append(page);
    
    var marginCounter = 0.9;
    var marginIncrement = 0.9;
    var newCol;
    
    while (cols--) {
        marginCounter += marginIncrement;
        newCol = page.clone().css({margin:"1.6em " + marginCounter + "em"});
        body.append(newCol);
        
        marginCounter += marginIncrement;
        newCol = page.clone().css({margin:"0 " + marginCounter + "em"});
        body.append(newCol);
    }
});