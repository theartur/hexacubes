jazz.loadStyle("hexacube.css");

var cols = 15, rows = 5;

$.get("hexacube.html", function (cube) {
    var body = $('<div />'), col = $('<div class="col" />'), skull = rows;
    
    body.addClass("artull pristine").appendTo("body");
    
    function init() {
        body.removeClass("pristine"); // activate entrance ASAP
        
        var countEntrance = 0;
        var countInterval = 50;
        
        $($(".box-wrapper").get().reverse()).each(function () {
            var $this = $(this);
            var opacity = $this.css("opacity");
            
            if (opacity == "1") {
                countEntrance++;
                $this.addClass("active");
                
                setTimeout(function () {
                    $this.removeClass("active");
                }, countEntrance * countInterval);
            }
        });
    }
    
    var touchedCubes = 0;
    function processLogic() {
        if (touchedCubes == 42) {
            explodeAll();
        }
    }
    
    function explodeAll() {
        console.log("explodeAll()");
        var countExplode = 0;
        var countExplodeInterval = 50;
        
        /*$($(".box-wrapper").get().reverse())*/$(".active").each(function () {
            var $this = $(this);
            
            countExplode++;

            setTimeout(function () {
                $this.addClass("exploded");
            }, countExplode * countExplodeInterval);
        });
    }
    
    cube = $(cube);
    
    body.on("click", ".box-wrapper", function(){
        var box = $(this);
        
        var boxOpacity = box.css("opacity");

        if (boxOpacity == "1") {
            box.addClass("active");
            touchedCubes++;
            processLogic();
        }
        
//         console.log(".artull .col:nth-child(" + (parseInt(box.parent().index(), 10)+1) + ") .box-wrapper:nth-child(" + (parseInt(box.index(), 10)+1) + ") .box div");
        
        return false;
    });
    
//     body.on("mouseenter", ".box-wrapper", function(){
//         var box = $(this);
//         box.addClass("hover");
        
//         return false;
//     });
    
//     body.on("mouseleave", ".box-wrapper", function(){
//         var box = $(this);
//         box.removeClass("hover");
        
//         return false;
//     });

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
    
    setTimeout(function(){
        init();
    }, 250);
});