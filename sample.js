console.log('this works on load');
function summonerLookUp() {
    console.log('this works');
    var SUMMONER_NAME = "";
    SUMMONER_NAME = $("#userName").val();

    var API_KEY = "";
    API_KEY = $("#API-Key").val();

    if (SUMMONER_NAME !== "") {

        $.ajax({
            //url: 'https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/' + SUMMONER_NAME + '?api_key=' + API_KEY,
            //url: 'https://na1.api.riotgames.com/lol/match/v3/timelines/by-match/2612838793' + '?api_key=' + API_KEY,
            url: 'https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/' + SUMMONER_NAME + '?api_key=' + API_KEY,
            type: 'GET',
            dataType: 'json',
            data: {

            },
            success: function (json) {
                console.log(json);
                var SUMMONER_NAME_NOSPACES = SUMMONER_NAME.replace(" ", "");

                SUMMONER_NAME_NOSPACES = SUMMONER_NAME_NOSPACES.toLowerCase().trim();


                //summonerLevel = json[SUMMONER_NAME_NOSPACES].summonerLevel;
                // summonerID = json[SUMMONER_NAME_NOSPACES].id;
                // accountID = json[SUMMONER_NAME_NOSPACES].accountId;
                // profileICON = json[SUMMONER_NAME_NOSPACES].profileIconId;
              

                //document.getElementById("sLevel").innerHTML = summonerLevel;
                // document.getElementById("sID").innerHTML = summonerID;
                // document.getElementById("sAccID").innerHTML = accountID;
                // document.getElementById("proIcon").innerHTML = profileICON;



                //var temp = json;
                //var temp2= JSON.stringify(temp);
                //var pleaseWork = JSON.parse(json);
                //console.log(pleaseWork);


                console.log('api call');
                console.log(SUMMONER_NAME_NOSPACES);

            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                alert("error getting Summoner data!");
            }
        });


    } else {}
}
