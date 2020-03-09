var gridType = 'packery'; // masonry packery or isotope
var pageType = 'family'; // gifs images or wallpapers
//if (pageType == 'family') gridType = 'masonry';
$('#photo-grid').addClass(gridType);
function pageScroll() {
        window.scrollBy(0,4); // horizontal and vertical scroll increments
        scrolldelay = setTimeout('pageScroll()',100); // scrolls every 100 milliseconds
}
if (gridType == 'masonry') {
    var $grid = $(".grid").masonry({
        itemSelector: ".photo-item",
        columnWidth: ".grid__col-sizer",
        gutter: ".grid__gutter-sizer",
        percentPosition: false,
        stagger: 30,
        visibleStyle: { transform: "translateY(0)", opacity: 1 }, // nicer reveal transition
        hiddenStyle: { transform: "translateY(100px)", opacity: 0 }
    });
    var gridInsance = $grid.data("masonry"); // get Masonry instance
} else if (gridType == 'packery') {
    var $grid = $(".grid").packery({
        itemSelector: ".photo-item",
        gutter: ".grid__gutter-sizer",
        percentPosition: false,
        stagger: 30,
        visibleStyle: { transform: "translateY(0)", opacity: 1 }, // nicer reveal transition
        hiddenStyle: { transform: "translateY(100px)", opacity: 0 }
    });
    var gridInsance = $grid.data("packery"); // get Packery instance
} else if (gridType == 'isotope') {
    var $grid = $(".grid").isotope({
        layoutMode: 'fitRows', // masonry fitRows cellsByRow vertical packery masonryHorizontal fitColumns cellsByColumn horiz
        itemSelector: ".photo-item",
        gutter: ".grid__gutter-sizer",
        percentPosition: false,
        stagger: 30,
        visibleStyle: { transform: "translateY(0)", opacity: 1 }, // nicer reveal transition
        hiddenStyle: { transform: "translateY(100px)", opacity: 0 }
    });
    var gridInsance = $grid.data("isotope"); // get Packery instance
}
$grid.infiniteScroll.imagesLoaded = imagesLoaded;
$grid.infiniteScroll({
    path: function() {
        return ("photos-api.php?type=" + pageType + "&page=" + this.pageIndex);
    },
    responseType: "text", // load response as flat text
    outlayer: gridInsance,
    status: ".page-load-status",
    history: false
});
$grid.on("load.infiniteScroll", function(event, response) {
    var data = JSON.parse(response); // parse response into JSON data
    var itemsHTML = data.map(getItemHTML).join(""); // compile data into HTML
    var $items = $(itemsHTML); // convert HTML string into elements
    $items.imagesLoaded(function() { // append item elements
        if (gridType == 'masonry') {
            $grid.infiniteScroll("appendItems", $items).masonry("appended", $items);
        } else if (gridType == 'packery') {
            $grid.infiniteScroll("appendItems", $items).packery("appended", $items);
        } else if (gridType == 'isotope') {
            $grid.infiniteScroll("appendItems", $items).isotope("appended", $items);
        }
        if ($('.photo-item').length < 50)
            $grid.infiniteScroll("loadNextPage"); // load initial pag
    });
});
$grid.infiniteScroll("loadNextPage"); // load initial page
var itemTemplateSrc = $("#photo-item-template").html();
function getItemHTML(photo) {
    return microTemplate(itemTemplateSrc, photo);
}
function microTemplate(src, data) { // micro templating, sort-of
    return src.replace(/\{\{([\w\-_\.]+)\}\}/gi, function(match, key) { // replace {{tags}} in source
        var value = data; // walk through objects to get value
        key.split(".").forEach(function(part) {
            value = value[part];
        });
        return value;
    });
}
pageScroll();


/* svg gooey hover menu start */
$(window).load(function() {
	var height = window.innerHeight,
		x = 0,
		y = height / 2,
		curveX = 10,
		curveY = 0,
		targetX = 0,
		xitteration = 0,
		yitteration = 0,
		menuExpanded = false;
	(blob = $("#blob")),
		(blobPath = $("#blob-path")),
		(hamburger = $(".hamburger"));
	$(this).on("mousemove", function(e) {
		x = e.pageX;
		y = e.pageY;
	});
	$(".hamburger, .menu-inner").on("mouseenter", function() {
		$(this).parent().addClass("expanded");
		menuExpanded = true;
	});
	$(".menu-inner").on("mouseleave", function() {
		menuExpanded = false;
		$(this).parent().removeClass("expanded");
	});
	function easeOutExpo(currentIteration, startValue,	changeInValue,	totalIterations) {
		return (changeInValue * (-Math.pow(2, -10 * currentIteration / totalIterations) + 1) + startValue);
	}
	var hoverZone = 150;
	var expandAmount = 20;
	function svgCurve() {
		if (curveX > x - 1 && curveX < x + 1) {
			xitteration = 0;
		} else {
			if (menuExpanded) {
				targetX = 0;
			} else {
				xitteration = 0;
				if (x > hoverZone) {
					targetX = 0;
				} else {
					targetX = -((60 + expandAmount) / 100 * (x - hoverZone));
				}
			}
			xitteration++;
		}
		if (curveY > y - 1 && curveY < y + 1) {
			yitteration = 0;
		} else {
			yitteration = 0;
			yitteration++;
		}
		curveX = easeOutExpo(xitteration, curveX, targetX - curveX, 100);
		curveY = easeOutExpo(yitteration, curveY, y - curveY, 100);
		var anchorDistance = 200;
		var curviness = anchorDistance - 40;
		var newCurve2 = "M60," + height + "H0V0h60v" +(curveY - anchorDistance) +"c0," +curviness +"," +curveX + "," + curviness + "," + curveX +"," +  anchorDistance + "S60," + curveY + ",60," +  (curveY + anchorDistance * 2) +"V" + height + "z";
		blobPath.attr("d", newCurve2);
		blob.width(curveX + 60);
		hamburger.css("transform", "translate(" + curveX + "px, " + curveY + "px)");
		$("h2").css("transform", "translateY(" + curveY + "px)");
		window.requestAnimationFrame(svgCurve);
	}
	window.requestAnimationFrame(svgCurve);
});
/* svg gooey hover menu end */