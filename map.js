console.log('Version -0.0002');

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



    

    //$.when(summonerLookUp()).done(function(a1){
        //var accountID = accID

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