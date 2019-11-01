//!love command replace streamer with specific user
$(eval if ("$(query)" == "STREAMER")
 { var loveMessage = "The love you have for our streamer is endless!!";}
 else { var loveMessage = "There is $(urlfetch https://beta.decapi.me/random/number/0/100)% <3 between $(user) and $(query)!";}
 loveMessage; )
