$(document).ready(function() {
    var url = 'https://spreadsheets.google.com/feeds/list/1LubzpRyb7veihCiBhnMBbwIS3xak17UiPBSBhXqur30/od6/public/values?alt=json';
    
    $.getJSON(url, function(data) {
        var entries = data.feed.entry;

        var html = '';
        for(var i = 0; i < entries.length; i++) {
            var entry = entries[i];
            
            var r = entry.gsx$r.$t;
            var g = entry.gsx$g.$t;
            var b = entry.gsx$b.$t;
            var rgb = r + ',' + g + ',' + b;
            
            var tile = '<div class="tile" style="background: rgb(' + rgb + ');"></div>';
            html += tile;
        }
        $('#main').html(html);
    });
});