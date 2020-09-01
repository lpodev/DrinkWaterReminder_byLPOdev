/**
 * Title: controller.js
 * Author: LPOdev
 * Date: 01/09/2020
 * Description: This will be the script that will do every the intelligent part of the bot
 * */

function SetAnInterval() {
    setInterval(postTweet,1000*60*60);
}

function postTweet()
{
    nbReminder += 1;
    //
    //  tweet 'Water Reminder'
    //
    T.post('statuses/update', { status: "Reminder n°" + nbReminder +" \n🥤 Go get some water bro 🥤 " }, function(err, data, response) {
        console.log(data);
    });
    return "Done";
}