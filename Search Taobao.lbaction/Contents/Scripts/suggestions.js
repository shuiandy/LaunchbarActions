
function runWithString(argument)
{
    var result = HTTP.get('https://suggest.taobao.com/sug?code=utf-8&q=' + encodeURIComponent(argument), 3);

    if (result == undefined) {
        LaunchBar.log('HTTP.getJSON() returned undefined');
        return [];
    }
    if (result.error != undefined) {
        LaunchBar.log('Error in HTTP request: ' + result.error);
        return [];
    }

	var matches = result.data.match(/(\[.*\])/);
	if (!(matches && matches[1])) {
		return [];
	}
	var data = JSON.parse(matches[1]);
	LaunchBar.log(result.data);

    try {
        var suggestions = [];
		var i = 0;
        for (i = 0; i < data.length; i++) {
			var suggestion = data[i][0];
            suggestions.push({
                             'title' : suggestion,
                             'icon' : 'taobao.png'
                             });
        }
        return suggestions;
    } catch (exception) {
        LaunchBar.log('Exception while parsing result: ' + exception);
        return [];
    }
}
