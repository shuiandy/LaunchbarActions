function run()
{
    LaunchBar.openURL('https://www.baidu.com/');
}

function runWithString(argument)
{
    LaunchBar.openURL('https://www.baidu.com/s?wd=' + encodeURIComponent(argument));
}
