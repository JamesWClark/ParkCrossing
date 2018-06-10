// scrapes from this page:
// https://www.sherwin-williams.com/homeowners/color/find-and-explore-colors/paint-colors-by-family
// pick a family and run in chrome console
// used a spreadsheet and text to column after saving the log to disk

var url = 'https://spreadsheets.google.com/feeds/list/1LubzpRyb7veihCiBhnMBbwIS3xak17UiPBSBhXqur30/od6/public/values?alt=json';

$.getJSON(url, function(data) {
	var entries = data.feed.entry;

	for(var i = 0; i < entries.length; i++) {
		var num = 'SW ' + entries[i].gsx$number.$t;
		var selector = "div[title='" + num + "']";
		var style = $(selector).attr('style');
		// example: 
		// background: rgb(177, 106, 55);

		if(style) {
			// from: 	`background: rgb(` 
			// to: 		`);`
			var str = style.substring(16, style.length - 2);
			var rgb = str.split(',');
			var r = parseInt(rgb[0]);
			var g = parseInt(rgb[1]);
			var b = parseInt(rgb[2]);
			console.log(num + '\t' + r + '\t' + g + '\t' + b);
		} else {
			console.log(num + ' not on this page');
		}
	}
});