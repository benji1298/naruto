//  // document.body.innerHTML +='<div style="position:absolute;width:100%;height:100%;opacity:0.3;z-index:100;background:#000;"><p>hello!</p></div>';

// // document.body.innerHTML +='<div id="overlay"> <div id="text">Overlay Text</div></div> '

// // document.body.innerHTML += '<script src = "jquery-2.2.4.min.js"> </script> '

// // document.body.innerHTML += '<div id="dialog" title = "This episode is ass"> <img src = "https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.pinimg.com%2F736x%2F36%2Ff8%2Fb0%2F36f8b0eabc6269f9aa2242e234b1422b--jeans-ass.jpg&imgrefurl=https%3A%2F%2Fwww.pinterest.com%2Flkng4fun%2Fjeans-ass%2F&docid=4_OBDZ2n58QZnM&tbnid=s9jubMs-f4roAM%3A&vet=10ahUKEwi878LuhaTbAhVL0oMKHSJTCygQMwg2KA4wDg..i&w=600&h=972&bih=833&biw=1601&q=ass&ved=0ahUKEwi878LuhaTbAhVL0oMKHSJTCygQMwg2KA4wDg&iact=mrc&uact=8"/> </div>'



// document.body.innerHTML = `<html lang="en">
// <head>
//   <meta charset="utf-8" />
//   <title>jQuery UI Dialog - Default functionality</title>
//   <link rel="stylesheet" href="http://code.jquery.com/ui/1.10.3/themes/smoothness/jquery-ui.css" />
//   <script src="http://code.jquery.com/jquery-1.9.1.js"></script>
//   <script src="http://code.jquery.com/ui/1.10.3/jquery-ui.js"></script>
//   <script>
//   body {
//     font-family: "Trebuchet MS", "Helvetica", "Arial",  "Verdana", "sans-serif";
//     font-size: 62.5%;
// }
// ​
//   </script>
//   <script>
//   $(function() {
//     $( "#dialog" ).dialog();
//   });
//   </script>
// </head>
// <body>
// ​
//         <div id="dialog" title="This episode is ass">
//           <img src="http://placehold.it/50x50" />
//         </div>
// ​
// ​
// </body>
// </html>
// `


// $(function(){
// 	$("#dialog").dialog();
// });



//alert("this episode is ass");






function getText(){
    return document.body.innerText
}


var websiteText = getText();             //Gives you all the text on the page

var n = websiteText.includes("Naruto");

//console.log(websiteText);
//console.log(n);




if(n){
	//alert("this episode is ass");
}
else{
	//alert("this episode is not ass");
}


function getHTML(){
    return document.body.outerHTML
}

//console.log(getHTML());


var titleClass = document.getElementsByClassName("video-title");

var episode = titleClass.innerText;
//console.log(episode);


var url = document.URL;

urlSplit = url.split("/");

episode = urlSplit[3]

episodeSplit = episode.split("-");

episodeNumber = episodeSplit[3];


console.log(episodeNumber);

//epsiodeListJSON
var epsiodeListJSON = [
 {
   "number": "1",
   "title": "Enter: Naruto Uzumaki!",
   "rating": "Canon"
 },
 {
   "number": "2",
   "title": "My Name is Konohamaru!",
   "rating": "Canon"
 },
 {
   "number": "3",
   "title": "Sasuke and Sakura: Friends or Foes?",
   "rating": "Canon"
 },
 {
   "number": "4",
   "title": "Pass or Fail: Survival Test",
   "rating": "Canon"
 },
 {
   "number": "5",
   "title": "You Failed! Kakashi's Final Decision",
   "rating": "Canon"
 },
 {
   "number": "6",
   "title": "A Dangerous Mission! Journey to the Land of Waves!",
   "rating": "Canon"
 },
 {
   "number": "7",
   "title": "The Assassin of the Mist!",
   "rating": "Canon"
 },
 {
   "number": "8",
   "title": "The Oath of Pain",
   "rating": "Canon"
 },
 {
   "number": "9",
   "title": "Kakashi: Sharingan Warrior",
   "rating": "Canon"
 },
 {
   "number": "10",
   "title": "The Forest of Chakra",
   "rating": "Canon"
 },
 {
   "number": "11",
   "title": "The Land Where a Hero Once Lived",
   "rating": "Canon"
 },
 {
   "number": "12",
   "title": "Battle on the Bridge! Zabuza Returns!!",
   "rating": "Canon"
 },
 {
   "number": "13",
   "title": "Haku's Secret Jutsu: Crystal Ice Mirrors",
   "rating": "Canon"
 },
 {
   "number": "14",
   "title": "The Number One Hyperactive, Knucklehead Ninja Joins the Fight!!",
   "rating": "Canon"
 },
 {
   "number": "15",
   "title": "Zero Visibility: The Sharingan Shatters",
   "rating": "Canon"
 },
 {
   "number": "16",
   "title": "The Broken Seal",
   "rating": "Canon"
 },
 {
   "number": "17",
   "title": "White Past: Hidden Ambition",
   "rating": "Canon"
 },
 {
   "number": "18",
   "title": "The Weapons Known as Shinobi",
   "rating": "Canon"
 },
 {
   "number": "19",
   "title": "The Demon in the Snow",
   "rating": "Canon"
 },
 {
   "number": "20",
   "title": "A New Chapter Begins: The Chunin Exam!",
   "rating": "Canon"
 },
 {
   "number": "21",
   "title": "Identify Yourself: Powerful New Rivals",
   "rating": "Canon"
 },
 {
   "number": "22",
   "title": "Chunin Challenge: Rock Lee vs. Sasuke!",
   "rating": "Canon"
 },
 {
   "number": "23",
   "title": "Genin Takedown! All Nine Rookies Face Off!",
   "rating": "Canon"
 },
 {
   "number": "24",
   "title": "Start Your Engines: The Chunin Exam Begins!",
   "rating": "Canon"
 },
 {
   "number": "25",
   "title": "The Tenth Question: All or Nothing!",
   "rating": "Canon"
 },
 {
   "number": "26",
   "title": "Special Report: Live from the Forest of Death!",
   "rating": "Filler"
 },
 {
   "number": "27",
   "title": "The Chunin Exam Stage 2: The Forest of Death",
   "rating": "Canon"
 },
 {
   "number": "28",
   "title": "Eat or be Eaten: Panic in the Forest",
   "rating": "Canon"
 },
 {
   "number": "29",
   "title": "Naruto's Counterattack: Never Give In!",
   "rating": "Canon"
 },
 {
   "number": "30",
   "title": "The Sharingan Revived: Dragon-Flame Jutsu!",
   "rating": "Canon"
 },
 {
   "number": "31",
   "title": "Bushy Brow's Pledge: Undying Love and Protection!",
   "rating": "Canon"
 },
 {
   "number": "32",
   "title": "Sakura Blossoms!",
   "rating": "Canon"
 },
 {
   "number": "33",
   "title": "Battle Formation: Ino-Shika-Cho!",
   "rating": "Canon"
 },
 {
   "number": "34",
   "title": "Akamaru Trembles: Gaara's Cruel Strength!",
   "rating": "Canon"
 },
 {
   "number": "35",
   "title": "The Scroll's Secret: No Peeking Allowed",
   "rating": "Canon"
 },
 {
   "number": "36",
   "title": "Clone vs. Clone: Mine are Better than Yours!",
   "rating": "Canon"
 },
 {
   "number": "37",
   "title": "Surviving the Cut! The Rookie Nine Together Again!",
   "rating": "Canon"
 },
 {
   "number": "38",
   "title": "Narrowing the Field: Sudden Death Elimination!",
   "rating": "Canon"
 },
 {
   "number": "39",
   "title": "Bushy Brow's Jealousy: Lions Barrage Unleashed!",
   "rating": "Canon"
 },
 {
   "number": "40",
   "title": "Kakashi and Orochimaru: Face-to-Face!",
   "rating": "Mostly Canon"
 },
 {
   "number": "41",
   "title": "Kunoichi Rumble: The Rivals Get Serious!",
   "rating": "Canon"
 },
 {
   "number": "42",
   "title": "The Ultimate Battle: Cha!",
   "rating": "Canon"
 },
 {
   "number": "43",
   "title": "Killer Kunoichi and a Shaky Shikamaru",
   "rating": "Canon"
 },
 {
   "number": "44",
   "title": "Akamaru Unleashed! Who's Top Dog Now?",
   "rating": "Canon"
 },
 {
   "number": "45",
   "title": "Surprise Attack! Naruto's Secret Weapon!",
   "rating": "Canon"
 },
 {
   "number": "46",
   "title": "Byakugan Battle: Hinata Grows Bold!",
   "rating": "Canon"
 },
 {
   "number": "47",
   "title": "A Failure Stands Tall!",
   "rating": "Canon"
 },
 {
   "number": "48",
   "title": "Gaara vs. Rock Lee: The Power of Youth Explodes!",
   "rating": "Canon"
 },
 {
   "number": "49",
   "title": "Lee's Hidden Strength: Forbidden Secret Jutsu!",
   "rating": "Canon"
 },
 {
   "number": "50",
   "title": "The Fifth Gate: A Splendid Ninja is Born",
   "rating": "Canon"
 },
 {
   "number": "51",
   "title": "A Shadow in Darkness: Danger Approaches Sasuke",
   "rating": "Canon"
 },
 {
   "number": "52",
   "title": "Ebisu Returns: Naruto's Toughest Training Yet!",
   "rating": "Mostly Canon"
 },
 {
   "number": "53",
   "title": "Long Time No See: Jiraiya Returns!",
   "rating": "Mostly Canon"
 },
 {
   "number": "54",
   "title": "The Summoning Jutsu: Wisdom of the Toad Sage!",
   "rating": "Canon"
 },
 {
   "number": "55",
   "title": "A Feeling of Yearning, A Flower Full of Hope",
   "rating": "Mostly Canon"
 },
 {
   "number": "56",
   "title": "Live or Die: Risk it All to Win it All!",
   "rating": "Canon"
 },
 {
   "number": "57",
   "title": "He Flies! He Jumps! He Lurks! Chief Toad Appears!",
   "rating": "Mostly Canon"
 },
 {
   "number": "58",
   "title": "Hospital Besieged: The Evil Hand Revealed!",
   "rating": "Canon"
 },
 {
   "number": "59",
   "title": "The Final Rounds: Rush to the Battle Arena!",
   "rating": "Mostly Canon"
 },
 {
   "number": "60",
   "title": "Byakugan vs. Shadow Clone",
   "rating": "Canon"
 },
 {
   "number": "61",
   "title": "Ultimate Defense: Zero Blind Spot!",
   "rating": "Canon"
 },
 {
   "number": "62",
   "title": "A Failure's True Power",
   "rating": "Canon"
 },
 {
   "number": "63",
   "title": "Hit it or Quit it: The Final Rounds Get Complicated!",
   "rating": "Canon"
 },
 {
   "number": "64",
   "title": "Zero Motivation: The Guy with Cloud Envy!",
   "rating": "Canon"
 },
 {
   "number": "65",
   "title": "Dancing Leaf, Squirming Sand",
   "rating": "Canon"
 },
 {
   "number": "66",
   "title": "Bushy Brow's Jutsu: Sasuke Style!",
   "rating": "Canon"
 },
 {
   "number": "67",
   "title": "Late for the Show, But Ready to Go! The Ultimate Secret Technique is Born!",
   "rating": "Canon"
 },
 {
   "number": "68",
   "title": "Zero Hour! The Destruction of the Hidden Leaf Village Begins!",
   "rating": "Canon"
 },
 {
   "number": "69",
   "title": "Village in Distress: A New A-Ranked Mission!",
   "rating": "Canon"
 },
 {
   "number": "70",
   "title": "A Shirker's Call to Action: A Layabout No More!",
   "rating": "Canon"
 },
 {
   "number": "71",
   "title": "An Unrivaled Match: Hokage Battle Royale!",
   "rating": "Canon"
 },
 {
   "number": "72",
   "title": "A Mistake from the Past: A Face Revealed!",
   "rating": "Canon"
 },
 {
   "number": "73",
   "title": "Forbidden Secret Technique: Reaper Death Seal!",
   "rating": "Canon"
 },
 {
   "number": "74",
   "title": "Astonishing Truth! Gaara's Identity Emerges!",
   "rating": "Canon"
 },
 {
   "number": "75",
   "title": "Sasuke's Decision: Pushed to the Edge!",
   "rating": "Canon"
 },
 {
   "number": "76",
   "title": "Assassin of the Moonlit Night",
   "rating": "Canon"
 },
 {
   "number": "77",
   "title": "Light vs. Dark: The Two Faces of Gaara",
   "rating": "Canon"
 },
 {
   "number": "78",
   "title": "Naruto's Ninja Handbook",
   "rating": "Canon"
 },
 {
   "number": "79",
   "title": "Beyond the Limit of Darkness and Light",
   "rating": "Canon"
 },
 {
   "number": "80",
   "title": "The Third Hokage, Forever...",
   "rating": "Canon"
 },
 {
   "number": "81",
   "title": "Return of the Morning Mist",
   "rating": "Canon"
 },
 {
   "number": "82",
   "title": "Eye to Eye: Sharingan vs. Sharingan!",
   "rating": "Canon"
 },
 {
   "number": "83",
   "title": "Jiraiya: Naruto's Potential Disaster!",
   "rating": "Mostly Canon"
 },
 {
   "number": "84",
   "title": "Roar, Chidori! Brother vs. Brother!",
   "rating": "Canon"
 },
 {
   "number": "85",
   "title": "Hate Among the Uchihas: The Last of the Clan!",
   "rating": "Canon"
 },
 {
   "number": "86",
   "title": "A New Training Begins: I Will Be Strong!",
   "rating": "Canon"
 },
 {
   "number": "87",
   "title": "Keep on Training: Pop Goes the Water Balloon!",
   "rating": "Canon"
 },
 {
   "number": "88",
   "title": "Focal Point: The Mark of the Leaf",
   "rating": "Canon"
 },
 {
   "number": "89",
   "title": "An Impossible Choice: The Pain Within Tsunade's Heart",
   "rating": "Canon"
 },
 {
   "number": "90",
   "title": "Unforgivable! A Total Lack of Respect!",
   "rating": "Canon"
 },
 {
   "number": "91",
   "title": "Inheritence! The Necklace of Death!",
   "rating": "Canon"
 },
 {
   "number": "92",
   "title": "A Dubious Offer! Tsunade's Choice!",
   "rating": "Canon"
 },
 {
   "number": "93",
   "title": "Breakdown! The Deal is Off!",
   "rating": "Canon"
 },
 {
   "number": "94",
   "title": "Attack! Fury of the Rasengan!",
   "rating": "Canon"
 },
 {
   "number": "95",
   "title": "The Fifth Hokage! A Life on the Line!",
   "rating": "Canon"
 },
 {
   "number": "96",
   "title": "Deadlock! Sannin Showdown!",
   "rating": "Canon"
 },
 {
   "number": "97",
   "title": "Kidnapped! Naruto's Hot Spring Adventure!",
   "rating": "Filler"
 },
 {
   "number": "98",
   "title": "Tsunade's Warning: Ninja No More!",
   "rating": "Canon"
 },
 {
   "number": "99",
   "title": "The Will of Fire Still Burns!",
   "rating": "Mostly Filler"
 },
 {
   "number": "100",
   "title": "Sensei and Student: The Bond of the Shinobi",
   "rating": "Canon"
 },
 {
   "number": "101",
   "title": "Gotta See! Gotta Know! Kakashi-Sensei's True Face!",
   "rating": "Mostly Filler"
 },
 {
   "number": "102",
   "title": "Mission: Help an Old Friend in the Land of Tea",
   "rating": "Filler"
 },
 {
   "number": "103",
   "title": "The Race is on! Trouble on the High Seas!",
   "rating": "Filler"
 },
 {
   "number": "104",
   "title": "Run Idate Run! Nagi Island Awaits!",
   "rating": "Filler"
 },
 {
   "number": "105",
   "title": "A Fierce Battle of Rolling Thunder!",
   "rating": "Filler"
 },
 {
   "number": "106",
   "title": "The Last Leg: A Final Act of Desperation",
   "rating": "Filler"
 },
 {
   "number": "107",
   "title": "The Battle Begins: Naruto vs. Sasuke",
   "rating": "Canon"
 },
 {
   "number": "108",
   "title": "Bitter Rivals and Broken Bonds",
   "rating": "Canon"
 },
 {
   "number": "109",
   "title": "An Invitation from the Sound",
   "rating": "Canon"
 },
 {
   "number": "110",
   "title": "Formation! The Sasuke Retrieval Squad",
   "rating": "Canon"
 },
 {
   "number": "111",
   "title": "Sound vs. Leaf",
   "rating": "Canon"
 },
 {
   "number": "112",
   "title": "Squad Mutiny: Everything Falls Apart!",
   "rating": "Canon"
 },
 {
   "number": "113",
   "title": "Full Throttle Power! Choji, Ablaze!",
   "rating": "Canon"
 },
 {
   "number": "114",
   "title": "Good-bye Old Friend...! I'll Always Believe in You!",
   "rating": "Canon"
 },
 {
   "number": "115",
   "title": "Your Opponent Is Me!",
   "rating": "Canon"
 },
 {
   "number": "116",
   "title": "360 Degrees of Vision: The Byakugan's Blind Spot",
   "rating": "Canon"
 },
 {
   "number": "117",
   "title": "Losing is Not an Option!",
   "rating": "Canon"
 },
 {
   "number": "118",
   "title": "The Vessel Arrives Too Late",
   "rating": "Canon"
 },
 {
   "number": "119",
   "title": "Miscalculation: A New Enemy Appears!",
   "rating": "Canon"
 },
 {
   "number": "120",
   "title": "Roar and Howl! The Ultimate Tag Team",
   "rating": "Canon"
 },
 {
   "number": "121",
   "title": "To Each His Own Battle",
   "rating": "Canon"
 },
 {
   "number": "122",
   "title": "Fakeout: Shikamaru's Comeback!",
   "rating": "Canon"
 },
 {
   "number": "123",
   "title": "The Leaf's Handsome Devil!",
   "rating": "Canon"
 },
 {
   "number": "124",
   "title": "The Beast Within",
   "rating": "Canon"
 },
 {
   "number": "125",
   "title": "The Sand Shinobi: Allies of the Leaf",
   "rating": "Canon"
 },
 {
   "number": "126",
   "title": "Showdown: Gaara vs. Kimimaro!",
   "rating": "Canon"
 },
 {
   "number": "127",
   "title": "Vengeful Strike! The Bracken Dance",
   "rating": "Canon"
 },
 {
   "number": "128",
   "title": "A Cry on Deaf Ears",
   "rating": "Canon"
 },
 {
   "number": "129",
   "title": "Brothers: Distance Among the Uchiha",
   "rating": "Canon"
 },
 {
   "number": "130",
   "title": "Father and Son, the Broken Crest",
   "rating": "Canon"
 },
 {
   "number": "131",
   "title": "The Secrets of the Mangekyo Sharingan!",
   "rating": "Canon"
 },
 {
   "number": "132",
   "title": "For a Friend",
   "rating": "Canon"
 },
 {
   "number": "133",
   "title": "A Plea From a Friend",
   "rating": "Canon"
 },
 {
   "number": "134",
   "title": "The End of Tears",
   "rating": "Canon"
 },
 {
   "number": "135",
   "title": "The Promise That Could Not Be Kept",
   "rating": "Canon"
 },
 {
   "number": "136",
   "title": "Deep Cover!? A Super S-Ranked Mission!",
   "rating": "Mostly Filler"
 },
 {
   "number": "137",
   "title": "A Town of Outlaws, the Shadow of the Fuma Clan",
   "rating": "Filler"
 },
 {
   "number": "138",
   "title": "Pure Betrayal, and a Fleeting Plea!",
   "rating": "Filler"
 },
 {
   "number": "139",
   "title": "Pure Terror! The House of Orochimaru",
   "rating": "Filler"
 },
 {
   "number": "140",
   "title": "Two Heartbeats: Kabuto's Trap",
   "rating": "Filler"
 },
 {
   "number": "141",
   "title": "Sakura's Determination",
   "rating": "Mostly Filler"
 },
 {
   "number": "142",
   "title": "The Three Villains from the Maximum Security Prison",
   "rating": "Mostly Filler"
 },
 {
   "number": "143",
   "title": "Tonton! I'm Counting on You!",
   "rating": "Filler"
 },
 {
   "number": "144",
   "title": "A New Squad! Two People and a Dog?!",
   "rating": "Filler"
 },
 {
   "number": "145",
   "title": "A New Formation: Ino-Shika-Cho!",
   "rating": "Filler"
 },
 {
   "number": "146",
   "title": "Orochimaru's Shadow",
   "rating": "Filler"
 },
 {
   "number": "147",
   "title": "A Clash of Fate: You Can't Bring Me Down",
   "rating": "Filler"
 },
 {
   "number": "148",
   "title": "Search for the Rare Bikochu Beetle",
   "rating": "Filler"
 },
 {
   "number": "149",
   "title": "What's the Difference? Don't All Insects Look Alike?",
   "rating": "Filler"
 },
 {
   "number": "150",
   "title": "A Battle of Bugs: The Deceivers and the Deceived",
   "rating": "Filler"
 },
 {
   "number": "151",
   "title": "Blaze Away Byakugan: This Is My Ninja Way",
   "rating": "Filler"
 },
 {
   "number": "152",
   "title": "Funeral March for the Living",
   "rating": "Filler"
 },
 {
   "number": "153",
   "title": "A Lesson Learned: The Iron Fist of Love",
   "rating": "Filler"
 },
 {
   "number": "154",
   "title": "The Enemy of the Byakugan",
   "rating": "Filler"
 },
 {
   "number": "155",
   "title": "The Dark Creeping Clouds",
   "rating": "Filler"
 },
 {
   "number": "156",
   "title": "Raiga's Counterattack",
   "rating": "Filler"
 },
 {
   "number": "157",
   "title": "Run! The Curry of Life",
   "rating": "Filler"
 },
 {
   "number": "158",
   "title": "Follow My Lead! The Great Survival Challenge",
   "rating": "Filler"
 },
 {
   "number": "159",
   "title": "Bounty Hunter from the Wilderness",
   "rating": "Filler"
 },
 {
   "number": "160",
   "title": "Hunt or Be Hunted?! Showdown at the O.K. Temple!",
   "rating": "Filler"
 },
 {
   "number": "161",
   "title": "The Appearance of Strange Visitors",
   "rating": "Filler"
 },
 {
   "number": "162",
   "title": "The Cursed Warrior",
   "rating": "Filler"
 },
 {
   "number": "163",
   "title": "The Tactician's Intent",
   "rating": "Filler"
 },
 {
   "number": "164",
   "title": "Too Late for Help",
   "rating": "Filler"
 },
 {
   "number": "165",
   "title": "The Death of Naruto",
   "rating": "Filler"
 },
 {
   "number": "166",
   "title": "When Time Stands Still",
   "rating": "Filler"
 },
 {
   "number": "167",
   "title": "When Egrets Flap Their Wings",
   "rating": "Filler"
 },
 {
   "number": "168",
   "title": "Mix It, Stretch It, Boil It Up! Burn, Copper Pot, Burn!",
   "rating": "Filler"
 },
 {
   "number": "169",
   "title": "Remembrance: The Lost Page",
   "rating": "Filler"
 },
 {
   "number": "170",
   "title": "The Closed Door",
   "rating": "Filler"
 },
 {
   "number": "171",
   "title": "Infiltration: The Set-Up!",
   "rating": "Filler"
 },
 {
   "number": "172",
   "title": "Despair: A Fractured Heart",
   "rating": "Filler"
 },
 {
   "number": "173",
   "title": "The Battle at Sea: The Power Unleashed!",
   "rating": "Filler"
 },
 {
   "number": "174",
   "title": "Impossible! Celebrity Ninja Art - Money Style Jutsu!",
   "rating": "Filler"
 },
 {
   "number": "175",
   "title": "The Treasure Hunt is On!",
   "rating": "Filler"
 },
 {
   "number": "176",
   "title": "Run, Dodge, Zigzag! Chase or Be Chased!",
   "rating": "Filler"
 },
 {
   "number": "177",
   "title": "Please, Mr. Postman!",
   "rating": "Filler"
 },
 {
   "number": "178",
   "title": "Encounter! The Boy with a Star's Name",
   "rating": "Filler"
 },
 {
   "number": "179",
   "title": "The Remembered Lullaby",
   "rating": "Filler"
 },
 {
   "number": "180",
   "title": "Hidden Jutsu: The Price of The Ninja Art: Kujaku",
   "rating": "Filler"
 },
 {
   "number": "181",
   "title": "Hoshikage, The Buried Truth",
   "rating": "Filler"
 },
 {
   "number": "182",
   "title": "Reunion, The Remaining time",
   "rating": "Filler"
 },
 {
   "number": "183",
   "title": "The Star's Radiance",
   "rating": "Filler"
 },
 {
   "number": "184",
   "title": "Kiba's Long Day!",
   "rating": "Filler"
 },
 {
   "number": "185",
   "title": "A Legend from the Hidden Leaf: The Onbaa!",
   "rating": "Filler"
 },
 {
   "number": "186",
   "title": "Laughing Shino",
   "rating": "Filler"
 },
 {
   "number": "187",
   "title": "Open for Business! The Leaf Moving Service",
   "rating": "Filler"
 },
 {
   "number": "188",
   "title": "Mystery of the Targeted Merchants",
   "rating": "Filler"
 },
 {
   "number": "189",
   "title": "A Limitless Supply of Ninja Tools",
   "rating": "Filler"
 },
 {
   "number": "190",
   "title": "The Byakugan Sees the Blind Spot",
   "rating": "Filler"
 },
 {
   "number": "191",
   "title": "Forecast: Death! Cloudy with Chance of Sun",
   "rating": "Filler"
 },
 {
   "number": "192",
   "title": "Ino Screams! Chubby Paradise!",
   "rating": "Filler"
 },
 {
   "number": "193",
   "title": "Viva Dojo Challenge! Youth Is All About Passion!",
   "rating": "Filler"
 },
 {
   "number": "194",
   "title": "The Mysterious Curse of the Haunted Castle",
   "rating": "Filler"
 },
 {
   "number": "195",
   "title": "The Third Super-Beast!",
   "rating": "Filler"
 },
 {
   "number": "196",
   "title": "Hot-Blooded Confrontation: Student vs. Sensei",
   "rating": "Filler"
 },
 {
   "number": "197",
   "title": "Crisis! The Hidden Leaf 11 Gather!",
   "rating": "Filler"
 },
 {
   "number": "198",
   "title": "The ANBU Gives Up? Naruto's Recollection",
   "rating": "Filler"
 },
 {
   "number": "199",
   "title": "The Missed Target",
   "rating": "Filler"
 },
 {
   "number": "200",
   "title": "The Powerful Helper",
   "rating": "Filler"
 },
 {
   "number": "201",
   "title": "Multiple Traps! Countdown to Destruction",
   "rating": "Filler"
 },
 {
   "number": "202",
   "title": "The Top 5 Ninja Battles",
   "rating": "Filler"
 },
 {
   "number": "203",
   "title": "Kurenai's Decision, Squad 8 Left Behind",
   "rating": "Filler"
 },
 {
   "number": "204",
   "title": "Yakumo's Sealed Ability",
   "rating": "Filler"
 },
 {
   "number": "205",
   "title": "Kurenai's Top-Secret Mission: The Promise With the Third Hokage",
   "rating": "Filler"
 },
 {
   "number": "206",
   "title": "Genjutsu or Reality?",
   "rating": "Filler"
 },
 {
   "number": "207",
   "title": "The Supposed Sealed Ability",
   "rating": "Filler"
 },
 {
   "number": "208",
   "title": "The Weight of the Prized Artifact!",
   "rating": "Filler"
 },
 {
   "number": "209",
   "title": "The Enemy: Ninja Dropouts",
   "rating": "Filler"
 },
 {
   "number": "210",
   "title": "The Bewildering Forest",
   "rating": "Filler"
 },
 {
   "number": "211",
   "title": "Memory of Flames",
   "rating": "Filler"
 },
 {
   "number": "212",
   "title": "To Each His Own Path",
   "rating": "Filler"
 },
 {
   "number": "213",
   "title": "Vanished Memories",
   "rating": "Filler"
 },
 {
   "number": "214",
   "title": "Bringing Back Reality",
   "rating": "Filler"
 },
 {
   "number": "215",
   "title": "A Past to Be Erased",
   "rating": "Filler"
 },
 {
   "number": "216",
   "title": "The Targeted Shukaku",
   "rating": "Filler"
 },
 {
   "number": "217",
   "title": "Sand Alliance with the Leaf Shinobi",
   "rating": "Filler"
 },
 {
   "number": "218",
   "title": "The Counterattack!",
   "rating": "Filler"
 },
 {
   "number": "219",
   "title": "The Ultimate Weapon Reborn",
   "rating": "Filler"
 },
 {
   "number": "220",
   "title": "Departure",
   "rating": "Mostly Filler"
 }
]


var episodeExists = epsiodeListJSON.find(it => {

	return it.number == episodeNumber;
})

if(episodeExists){
	//alert(episodeExists.rating);
	if(episodeExists.rating == "Filler"){
		alert("this episode is ass");
	}
	else if(episodeExists.rating == "Mostly Filler"){
		alert("this episode is mostly ass");
	}
}







