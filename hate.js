//!hate command replace streamer with specific user
$(eval if ("$(query)" == "STREAMER")
 { var loveMessage = "Why! The streamer loves you sooo much though";}
 else { var loveMessage = "There is $(urlfetch https://beta.decapi.me/random/number/0/100)% </3 between $(user) and $(query)!";}
 loveMessage; )