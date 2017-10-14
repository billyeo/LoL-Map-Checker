console.log('Version -0.0003');
function testingLookUp() {
    console.log('this works');
    var SUMMONER_NAME = "";
    SUMMONER_NAME = $("#userName").val();

    var API_KEY = "";
    API_KEY = $("#API-Key").val();

    if (SUMMONER_NAME !== "") {

        $.ajax({
            //url: 'https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/' + SUMMONER_NAME + '?api_key=' + API_KEY,
            //url: 'https://na1.api.riotgames.com/lol/match/v3/timelines/by-match/2612838793' + '?api_key=' + API_KEY,
            url: 'https://na1.api.riotgames.com/lol/match/v3/timelines/by-match/2612838793' + '?api_key=' + API_KEY,
            type: 'GET',
            dataType: 'json',
            data: {

            },
            success: function (json) {
                //Loop to search for a Champion kill, then print its json
                for (i=0; i<json.frames.length; i++)
                {
                	for (j=0; j<json.frames[i].events.length; j++)
                	{
                		if (json.frames[i].events[j].type=='CHAMPION_KILL')
                		{
                			console.log(json.frames[i].events[j]);
                		}
                }
            }

            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                alert("error getting Summoner data!");
            }
        });


    } else {}
}



function summonerLookUp(){
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
                summonerLevel = json.summonerLevel;
                summonerID = json.id;
                accountID = json.accountId;
                profileICON = json.profileIconId;
              
                //writing to website this shit
                document.getElementById("sLevel").innerHTML = summonerLevel;
                document.getElementById("sID").innerHTML = summonerID;
                document.getElementById("sAccID").innerHTML = accountID;
                document.getElementById("proIcon").innerHTML = profileICON;
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                alert("error getting Summoner data!");
            }
        });


    } else {}


}




