function run()
{
    LaunchBar.openURL('https://www.taobao.com/');
}

function runWithString(argument)
{
    LaunchBar.openURL('https://s.taobao.com/search?q=' + encodeURIComponent(argument));
}
