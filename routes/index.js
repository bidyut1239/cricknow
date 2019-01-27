http://cricapi.com/api/matches
var request = require("request");


exports.home = function(req, res) {

    var api_key = "quZwVzHKeFcBCiuNmSPNm0E57T52"
    request({
					url: "http://cricapi.com/api/matches?apikey=quZwVzHKeFcBCiuNmSPNm0E57T52",
					method: "GET",
					json: true,
					headers: {
						"content-type": "application/json",
					},
					}, function(err, response, body){
                            if(err || response.statusCode != 200){ 
                                console.log(err);
                            };
                                
                            // console.log(JSON.stringify(body));
                                        
                                        //display to user
                            res.render("home", {
                                title: "Home",
                                matches: body.matches
                                
					    });
					});
					
				};

exports.searchPlayer = function(req, res) {
    res.render("searchPlayer");
}

exports.getQueryResult = function(req, res) {
    console.log(req.query.query);
    var searchQuery = req.query.query;
    var api_key = "quZwVzHKeFcBCiuNmSPNm0E57T52";
    // var playerQueryUrl = "http://cricapi.com/api/playerStats?pid=${playerId}&&apikey=${API_KEY}";
    var playerQueryUrl = "https://cricapi.com/api/playerFinder?apikey=" + api_key + "&name=" + searchQuery;
    request({
					url: playerQueryUrl,
					method: "GET",
					json: true,
					headers: {
						"content-type": "application/json",
					},
					}, function(err, response, body){
                        console.log(playerQueryUrl);
                            if(err || response.statusCode != 200){ 
                                console.log(err);
                            };
                                
                            // console.log(JSON.stringify(body));
                                        
                                        //display to user
                            res.json(body.data);
					});
}

exports.player = function(req, res) {
    console.log(req.params.pid);
    var pid = req.params.pid;
    var api_key = "quZwVzHKeFcBCiuNmSPNm0E57T52";
    var playerInfoUrl = "http://cricapi.com/api/playerStats?pid=" + pid + "&&apikey=" + api_key;
    // var playerQueryUrl = "https://cricapi.com/api/playerFinder?apikey=" + api_key + "&name=" + searchQuery;
    request({
					url: playerInfoUrl,
					method: "GET",
					json: true,
					headers: {
						"content-type": "application/json",
                    },
                },
					 function(err, response, body){
                        console.log(body);
                            if(err || response.statusCode != 200){ 
                                console.log(err);
                            };
                                
                            // console.log(JSON.stringify(body));
                                        
                                        //display to user
                                        res.render("player", {
                                            title: "Player",
                                            info: body
                                            
                                    });
					});
                
            }
