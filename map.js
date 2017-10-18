console.log('Version -0.0005');

var GlobalAccountID;
// bad idea^ 

//function that fetchs the users id
function summonerLookUp(){
    console.log("in summoner lookup");
	var SUMMONER_NAME = "";
    SUMMONER_NAME = $("#userName").val();

    var API_KEY = "";
    API_KEY = $("#API-Key").val();

    if (SUMMONER_NAME !== "") {

        $.ajax({
            url: 'https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/' + SUMMONER_NAME + '?api_key=' + API_KEY,
            type: 'GET',
            dataType: 'json',
            data: {

            },
            success: function (json) {
                //getting data from json into local variables
                summonerID = json.id;
                var accountID = json.accountId;
                //setting global paramter
                GlobalAccountID= accountID;
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                alert("error getting Summoner data!");
            },
            async: false
            // SUPER DUPER BAD idea but ¯\_(ツ)_/¯
        });


    } else {}
}

function printStuff(){
    console.log("first");
    var API_KEY = "";
    API_KEY = $("#API-Key").val();
    console.log("calling summoner lookup");
    summonerLookUp();

    console.log(GlobalAccountID);
    if (GlobalAccountID !== "") {

        $.ajax({
            url: 'https://na1.api.riotgames.com/lol/match/v3/matchlists/by-account/'+ GlobalAccountID + '/recent?api_key=' + API_KEY,
            type: 'GET',
            dataType: 'json',
            data: {

            },
            success: function (json) {
                //getting data from json into local variables
                console.log(json);
                
                var matches = json.matches;

                console.log(matches);
                //writing to website this shit
                var list = $('<ul>');
                $('body').append(list);
                matches.forEach(function(match, i){
                    if(i<5){
                     list.append($('<li>').text(`Match${i+1}:`).append($('<a>').attr('href', match.gameId).text(`${match.gameId}`)));
                    }
                })




                
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                alert("error getting Summoner data!");
            }
        });


    } else {}


    //});
    
}

function storeCoordinate(xVal, yVal, array) {
    array.push({x: xVal, y: yVal});
}




//var Kill_coords = [];

function matchLookUp() {
    var SUMMONER_NAME = "";
    SUMMONER_NAME = $("#userName").val();

    var API_KEY = "";
    API_KEY = $("#API-Key").val();
    var Kill_coords = [];

    if (SUMMONER_NAME !== "") {

        $.ajax({
            url: 'https://na1.api.riotgames.com/lol/match/v3/timelines/by-match/2612838793' + '?api_key=' + 'RGAPI-c16c2668-0913-4123-9416-113f700d30f0',
            type: 'GET',
            dataType: 'json',
            data: {

            },
            success: function (json) {
                //Loop to search for a Champion kill, then store its coordinate
                for (i=0; i<json.frames.length; i++)
                {
                	for (j=0; j<json.frames[i].events.length; j++)
                	{
                		if (json.frames[i].events[j].type=='CHAMPION_KILL')
                		{
                			//console.log(json.frames[i].events[j].position.x);
                			var x = json.frames[i].events[j].position.x;
                			//console.log(x);
                			var y = json.frames[i].events[j].position.y;
                			storeCoordinate(x, y, Kill_coords);
                			//console.log("in kill coords");
                			//console.log(Kill_coords[0]);
                			//storeCoordinate(json.frames[i].events[j].position.x, json.frames[i].events[j].position.y, Kill_coords);
                		}
                }

            }

            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                alert("error getting Summoner data!");
            }
        });
        console.log("Finished");
        
        for (i = 0; i < Kill_coords.length; i++) {
        	console.log(Kill_coords[i]);
        }
        

    } else {}
}










