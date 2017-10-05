
function runWithString(argument) {
	
    var result = HTTP.get('http://suggestion.baidu.com/su?wd=' + encodeURIComponent(argument), 3);

    if (result == undefined) {
        LaunchBar.log('HTTP.getJSON() returned undefined');
        return [];
    }
    if (result.error != undefined) {
        LaunchBar.log('Error in HTTP request: ' + result.error);
        return [];
    }
    LaunchBar.log(result.data);
    var match = decodeURIComponent(result.data);
    LaunchBar.log(match);
    var matches = result.data.match(/(\[.*\])/);
	if (!(matches && matches[1])) {
		return [];
	}
	var data = JSON.parse(matches[1]);
LaunchBar.log(data);	
    try {
        var suggestions = [];
        if (data) {
			for (var suggestion in data) {
				suggestions.push({
								 'title' : data[suggestion],
								 'icon' : 'Baidu.png'
								 });
			}
		}
        return suggestions;
    } catch (exception) {
        LaunchBar.log('Exception while parsing result: ' + exception);
        return [];
    }
}
