// Include React
var React = require("react");

// Here we include all of the sub-components
var Form = require("./Form");
var Images = require("./Images");
var Wiki = require("./Wiki");

// Requiring our helper for making API calls
// var helpers = require("../utils/helpers");

var searchGifs = require("../utils/helpers").searchGifs;

// Create the Parent Component
var Main = React.createClass({

    stateSetMain: function(stateArr) {
        console.log('UPDATE THE FREAKING MAIN.JS!!!!!');
        console.log('UPDATE THE FREAKING MAIN.JS!!!!!');
        console.log('UPDATE THE FREAKING MAIN.JS!!!!!');
        console.log('UPDATE THE FREAKING MAIN.JS!!!!!');
//        console.log('State:','gifsData:',stateArr);
        this.fetchAllGifs(stateArr);
//        this.fetchAllGifs(this.sections);
        this.setState({sections: stateArr});
//        this.setState({gifsData: stateArr});
        console.log('THIS IS THE FREAKING STATE!!!',this.state);
    },/*.bind(this)*/

    fetchGifRow: function(sectionsArr,ind) {

        let sections = sectionsArr; //this.state.sections;
        let searchStr = sections[0].title;
//        sections[ind].gifs = [];

        console.log('Section',ind,':',sections[ind]);

        let searchTerm = searchStr;
        if (ind>0) {searchTerm += ' ' + sections[ind].title;}
        searchGifs({searchStr: searchTerm})
            .then(function (response) {
                let _sections = this.state.sections;
                _sections[ind].gifs = Array.from(response.data);
                console.log('received response:', response);
                this.setState({sections: _sections});
            }.bind(this));
    },

    fetchAllGifs: function(stateArr){
        let sectionsArr = stateArr; //this.state.sections;
        sectionsArr.forEach( function(section) {section.gifs=[];});
        sectionsArr.forEach( function(section,ind) { this.fetchGifRow(sectionsArr,ind);}, this);
    },

    updateAll: function() {
        forceUpdate();
    },

    // Here we set a generic state associated with the number of clicks
    getInitialState: function() {
        return {
            gifsData: [],  //this.props.gifsData
            sections: []


            //[{"title":"League of Legends","sentences":["League of Legends (abbreviated LoL) is a multiplayer online battle arena video game developed and published by Riot Games for Microsoft Windows and macOS.","The game follows a freemium model and is supported by microtransactions, and was inspired by the Warcraft III: The Frozen Throne mod, Defense of the Ancients.","In League of Legends, players assume the role of an unseen \"summoner\" that controls a \"champion\" with unique abilities and battle against a team of other players or computer-controlled champions.","The goal is usually to destroy the opposing team's \"nexus\", a structure which lies at the heart of a base protected by defensive structures, although other distinct game modes exist as well.","Each League of Legends match is discrete, with all champions starting off fairly weak but increasing in strength by accumulating items and experience over the course of the game.","The champions and setting blend a variety of elements, including high fantasy, steampunk, folklore, and Lovecraftian horror.","League of Legends was generally well received upon its release in 2009, and has since grown in popularity, with an active and expansive fanbase.","By July 2012, League of Legends was the most played PC game in North America and Europe in terms of the number of hours played.","As of January 2014, over 67 million people played League of Legends per month, 27 million per day, and over 7.5 million concurrently during peak hours.","League has among the largest footprints of any game in streaming media communities on platforms such as YouTube and Twitch.tv; it routinely ranks first in the most-watched hours.","In September 2016 the company estimated that there are over 100 million active players each month.","The game's popularity has led it to expand into merchandise, with toys, accessories, apparel, as well as tie-ins to other media through music videos, web series, documentaries, and books.","League of Legends has an active and widespread competitive scene.","In North America and Europe, Riot Games organizes the League Championship Series (LCS), located in Los Angeles and Berlin respectively, which consists of 10 professional teams in each continent.","Similar regional competitions exist in China (LPL), South Korea (LCK), Taiwan (LMS), Southeast Asia (GPL), and various other regions.","These regional competitions culminate with the annual World Championship.","The 2016 World Championship had 43 million unique viewers and a total prize pool of over 6 million USD."]},{"title":"Gameplay","sentences":["League of Legends is a 3D, third-person multiplayer online battle arena (MOBA) game.","The game consists of 3 current running game modes: Summoner's Rift, Twisted Treeline, and Howling Abyss.","Another game mode, The Crystal Scar, has since been removed.","Players compete in matches, lasting anywhere from 20 to 60 minutes on average.","In each game mode teams work together to achieve a victory condition, typically destroying the core building (called the Nexus) in the enemy team's base after bypassing a line of defensive structures called turrets, or towers.","In all game modes, players control characters called champions, chosen or assigned every match, who each have a set of unique abilities that determine their playstyle - one passive, or innate, ability that cannot be activated and thus gives a perpetual bonus or effect, three normal, or 'basic', abilities, and a powerful 'ultimate' ability that can only be unlocked once the character reaches level 6.","Ultimate abilities are vastly more powerful than regular abilities and thus have much longer cooldowns (period of time before they can be used again).","A champion's full set of abilities is referred to as its 'kit'.","The use of champions' abilities is limited by cooldowns and a resource (usually some form of mana or energy).","If a champion runs out of their resource, they cannot cast spells, even if they are off cooldown, and must wait for it to regenerate.","Some champions do not have a resource, being limited only by cooldowns, and others have ways of restoring their respective resource.","Each champion also has an 'auto' or 'basic attack' in which they deal damage to the target unit within range simply by right-clicking them, with no cost - some champions are melee and have to be closer to use their basic attack, while others are ranged, although to compensate melee champions are usually more durable.","The rate at which a champion can basic attack is determined by their attack speed, a stat that can be improved through items.","Some champions additionally use ammo and must reload after enacting a certain number of basic attacks.","Champions begin every match at level one, and then gain experience over the course of the match to achieve a maximum level of 18. Gaining champion levels in matches allows players to unlock their champion's special abilities and augment them in a number of ways unique to each character.","If a champion loses all their health, they are defeated, but are automatically revived in their base after a 'respawn timer' ends - the timer increases in duration as the game goes on.","Players also begin each match with a low amount of gold, and can earn additional gold throughout the match in a variety of ways: by killing non-player characters known as minions and monsters; by killing or helping to kill enemy players; by destroying enemy structures; passively over time; and through unique item interactions or champion abilities.","This gold can then be spent throughout the match to buy in-game items that further augment each champion's abilities and game play in a variety of ways.","Champion experience, gold earned, and items bought are specific to each match and do not carry over to subsequent matches.","Thus, all players begin each match on more-or-less equal footing relative to their opposing team.","Across matches, players also earn rewards that are applied to their account.","Player accounts begin at level one and progress through a maximum level of 30 with experience points earned at the end of every match.","As a player progresses they unlock content initially barred to new players.","These include 'summoner spells' - high-impact, long cooldown spells with a specific use.","Any champion can choose to equip two or eleven summoner spells before a game - some summoner spells are unique to certain game modes and some have been removed over the game's history.","Players can also customize Rune pages.","Runes grant their champion small, perpetual bonuses to stats, and can be gained through spending 'Influence Points'(IP) which is granted by playing.","IP can be used to unlock both Runes and new champions.","Additionally, players can unlock masteries, which grant unique bonuses not necessarily tied to stats, as Runes are.","Some masteries, called 'keystones', are much more powerful than others and only one can be selected per game, with certain champions synergizing more with certain keystones.","Player level is separate from character level; both a level 30 account and a level 5 account would begin at character level 1 at the start of a new game.","Accounts are given rankings based on the Elo rating system, with proprietary adjustments.","These ratings are used in automated matchmaking to make games with players of comparable skill level on each team."]},{"title":"Game maps","sentences":["League of Legends consists of three main maps, or \"Fields of Justice.\" Each have different terrain, objectives and victory conditions, as well as varied summoner spells and items.","A fourth map, the Crystal Scar, was discontinued."]},{"title":"Summoner's Rift","sentences":["Summoner's Rift is the most popular map in League of Legends.","On this map type, two teams of five players compete to destroy an enemy building called a Nexus, which is guarded by the enemy team and a number of defensive structures called turrets, or towers.","One nexus is located in each enemy base on opposite sides of the map, in the lower-left and upper-right hand corners.","These structures continually create weak non-player characters known as minions, which advance toward the enemy base along three lanes: top, middle (mid), and bottom (bot) lanes.","Players compete to advance these waves of minions into the enemy base, which allows them to destroy enemy structures and ultimately win the match.","Between lanes are neutral areas of the map known as the 'jungle', arrayed in four quadrants.","Uniquely dangerous monsters populate the jungle and grant bonuses to their killer.","The jungle is also home to three types of plants that can aid champions in different ways.","A shallow river divides the map between the teams, but doesn't actually impede movement; all champions can wade through it no differently than dry land.","Each team wishes to defend their own structures and destroy the other team's structures.","These include:","Some objectives are 'neutral', meaning that they will not attack champions who pass by, but champions can choose to pick a fight with them if they wish to gain a reward at the cost of having to fight for it. They include:","Many of the details have changed over time; League is not a static game, with mechanics being both introduced and removed since launch in 2009.","For example, the Rift Herald was only added in 2016; Dragons gave gold rather than buffs from 2009&ndash;2014, and the dragons only became elementally flavored drakes in 2016; jungle monsters have been added and retuned; the length of time it took for inhibitors to respawn was 4 minutes rather than 5 minutes for a time; Baron Nashor gave a stronger buff to the statistics of champions but no buff to minions from 2009&ndash;2014; and so on."]},{"title":"Twisted Treeline","sentences":["In the Twisted Treeline, two teams of three players compete to destroy the opposing team's Nexus, which is guarded enemy Towers.","It is conceptually similar to Summoner's Rift, but smaller to account for three vs. three rather than five vs. five.","Rather than Summoner's Rift 3 lanes of turrets and 3 inhibitors, Twisted Treeline has only 2 lanes and 2 inhibitors, with the jungle in between.","The other differences are the addition of two \"Altars\", control of which grants the occupying team a variety of bonuses, and the replacement of Baron Nashor with Vilemaw, an enormous spider deity.","Living members of the team that slays Vilemaw are granted a temporary bonus, similar to the death of Nashor."]},{"title":"Howling Abyss","sentences":["The Howling Abyss is used for \"ARAM\" (All Random All Mid) matches, and is five vs. five.","The difference between the Abyss and the other maps is that there is only a single narrow lane of Turrets and an Inhibitor, and no neutral jungle area.","Thus, rather than skirmishes and hidden movement, the Abyss focuses exclusively on large team-fights in the sole middle lane.","Players cannot return to their allied base to replenish health and mana or purchase items unless they have been killed.","ARAM was launched as an official mode in September 2013."]},{"title":"Crystal Scar","sentences":["The Crystal Scar was used for Dominion mode, a discontinued game format where teams of five players competed to capture control points and hold those points for the longest possible period of time.","The map consists of a circle with 5 control points.","Each team controls a base known as a fountain, located at the bottom left and right hand corners of the map.","Each team scores points by capturing and owning more objectives than the other team over time, which is then reduced from the other team's \"life\" total.","These points count down from an initial score of 200.","The first team to reduce the other team to 0 points achieves victory.","Dominion was launched on September 26, 2011 and was retired on February 22, 2016, although the Crystal Scar is used for certain other rotating formats, such as Ascension."]},{"title":"Games types","sentences":["League of Legends includes several game types players can select.","League of Legends also includes three ways teams may choose what champion they will play for a given match."]},{"title":"Champion types","sentences":["There are currently 136 champions in League of Legends as of April 4, 2017.","League divides its champion types up a number of ways (additionally, champions can be customized by buying different items in-game and equipping different runes and masteries before games).","The most salient difference is the type of damage a champion deals; some champions deal largely physical damage, which is resisted by the armor stat, and other champions deal largely magic damage, which is resisted by the magic resistance stat.","Some champions, called 'hybrids', deal a combination of both physical and magical damage and can either choose one to emphasize or find a balance between the two, making it harder for other champions to defend against them; and some rare abilities deal 'true' damage which is not mitigable by either armor or magic resistance.","Riot Games has classified all champions as one of six types to aid beginners; each class is also divided into two or three subclasses to differentiate.","Not all champions perfectly fit their type, of course.","The official Riot classifications are as follows:","There are currently 7 champions (Cho'Gath, Fiddlesticks, Singed, Urgot, Kennen, Gnar, and Blitzcrank) that do not necessarily fit into any class thanks to their unique playstyles, although each displays characteristics of some classes more than others.","Fiddlesticks, for example, is a sentient scarecrow whose spells often require him to stand still and ambush enemies, which creates unique gameplay patterns for him that is entirely separate from other damage-dealing classes.","Gnar is a small prehistoric creature that fights with a boomerang from afar like a Marksman, but can transform into Mega Gnar, an enormous beast with powerful melee damage and crowd control - a mix of a Vanguard and a Juggernaut.","Item choice can influence a champion's class.","For example, if the champion Jarvan IV purchases all damage items, he functions something like an Assassin; he can kill enemies quickly, but will die rapidly himself.","If Jarvan buys all defensive items, then he will become a Vanguard focused on engaging high-priority targets.","Somewhere in-between, he's a Diver.","In the same way, champions like Morgana, Annie, and Karma can build item sets that are focused on high damage like a Mage, or item sets focused on disrupting enemies and aiding allies like a Controller.","Many champions are a mix and fit into two subclasses simultaneously (or in the very least overlap), which grants them greater flexibility but less potency in each.","For example, the champion Tahm Kench (a kappa-like crossroads demon) is typically classified as a Warden due to his ability to protect allies by swallowing them whole and repositioning them, but his extreme durability and strong melee damage allow him to be played like a Juggernaut if he buys items like one.","Champion classes generally determine what part of the map the champion gravitates towards during the game - this is referred to as their 'role'.","A Marksman usually goes to the bottom lane with a Controller or Tank, called the support, that can help protect them from harm in the early levels as they accrue gold and experience from killing minions.","The support is also expected to buy 'wards', which provide vision in an area around them, so that allies are not ambushed as easily and can see greater portions of the map - the support is also expected to destroy enemy wards.","A Mage, Disruptor, or Assassin usually goes to the middle lane, which is the shortest and most centralized lane and thus usually the most dynamic - 'mid lane champions' usually end up being the ones with the most kills and exert a large amount of influence over the course of the game.","The top lane is more isolated from the rest of the map, and so a Tank or Fighter usually goes top, since they are the most self-sufficient and can adapt to a variety of situations.","This has led top lane to be colloquially referred to by players as an 'island'.","The role of a top laner is usually to 'push' a lane by quickly advancing down it with their minions, and not pay as much attention to their other 4 allies, although this is not always so. Between each lane is the jungle, home to an array of fearsome monsters that are hard to take down, especially in the early game.","Each team has a 'jungler' champion that does not go to a lane and instead heads to the jungle; these champions usually have ways to heal or shield themselves so that they can fight multiple monsters in succession, or any other effective ways to 'clear' monster camps effectively.","The jungler's job is to 'secure' objectives and make sure their team reaps the rewards of powerful monsters such as the elemental drakes and Baron Nashor.","The jungler will occasionally visit a lane and attempt to gank the enemy laner, working with their teammate to bring down the laner in a 1v2 scenario.","The jungler is not constrained to any particular class, although as a rule of thumb Mages, Controllers, and Marksman are poor junglers, with other classes being able to achieve at least some level of success, although there are exceptions (for example, Fiddlesticks is a staple jungle pick).","The success of a jungler is usually determined by whether they can clear the jungle efficiently and how potent their ganks are.","The jungler is widely regarded as the most important role, alongside the ADC, for their importance in taking down objectives."]},{"title":"Special game modes","sentences":["Riot Games, starting in 2013, has released a number of special limited-time game modes.","These special modes would usually be accessible for two weeks, then retired.","In 2016, Riot announced that \"Rotating Games Mode\" would be a recurring event, so that every weekend a previously released game mode would be made accessible again for that weekend.","The current game modes in the rotation are as follows:","Special game modes not seen in the rotation include Black Market Brawlers (a 5v5 mode on the Summoner's Rift with unique items and special minions) and Definitely Not Dominion (a temporary return of the Dominion mode on the Crystal Scar).","The Ultra Rapid Fire (URF) mode was originally a 2014 April Fools' Day prank that proved so popular it became a proper rotating game mode; in URF, champion abilities have no resource cost and have their cooldowns reduced by 80%, double the normal cap of 40% that can be attained through items.","Additionally, champions have increased movement speed, faster passive gold gain, and increased attack speed.","Because some champions are naturally much more powerful in this mode because of how their kit works, this mode is not seen as much because it is difficult to balance."]},{"title":"Business model","sentences":["League of Legends is funded through microtransactions using Riot Points (RP), an in-game currency which can be purchased by players in the client store.","RP can be used to purchase champions, champion skins, ward skins, summoner icons, and certain multi-game boosts.","Alternatively, players earn Influence Points (IP), a secondary currency, by playing matches.","IP may be used to purchase all in-game items besides skins, which cosmetically alter the appearance of champions.","Conversely, RP may be used to buy all in-game items besides Runes, which provide boosts to the power of champions in matches, and may only be purchased using IP. Runes can only be purchased by IP, but more \"pages\" that the runes are placed on (in order for runes to take effect in-game) can be bought through both IP and RP. League of Legends is free-to-play and all in-game purchases with a material effect on game-play may be acquired by continually playing the game."]},{"title":"Setting and lore","sentences":["League of Legends takes place in the fictional world of Runeterra.","In Runeterra, the champions of League of Legends are a collection of heroes and villains who have a variety of backstories, often related to the political struggles of the various countries of the main continent of Valoran.","Additionally, some champions are extraplanar and come from worlds other than Runeterra, but are visiting for their own purposes.","These champions sometimes clash with each other, roughly reflected in the gameplay of League of Legends.","The setting has gone through two phases: the 'original' setting that was canon from 2009-2014, and the rebooted setting from 2014–present.","The original setting was very focused on justifying the exact mechanics of a game of League in the world of Runeterra.","The MOBA predecessor to League, Defense of the Ancients, featured two warring sides with two separate hero rosters; however, in League, any combination of champions was legal to create a team.","To explain this, in the original setting, Valoran was functionally ruled by extremely powerful time mages who could intimidate the other nations into compliance with their whims.","They created the \"Institute of War\", also known as the \"League of Legends\", to resolve disputes and act as something like an international sports league.","In these disputes, \"Summoners\" (aka the game player) could control any of Runeterra's greatest heroes or villains in their struggles, thus justifying why a team of 5 characters who all hated each other might form.","Additionally, these time mages would actually power-down the characters to \"level 1\" before each match to make things 'fair'; some character's backstories even involved them explicitly having their powers sealed by the Institute of War due to them being too powerful otherwise, such as the demigoddesses Kayle and Morgana.","This explained why characters might participate in multiple matches and have to relearn the same skills each time.","After a match, a \"Judgment\" would sometimes be handed down, with the winning Summoners able to give land and privileges to those they favored.","The narrative team at Riot eventually decided this setup was too constraining, and \"rebooted\" the story behind League of Legends in 2014.","In essence, the original story put too much emphasis on the faceless player stand-in Summoners and the Time Mages of the Institute; \"the very idea of all-powerful Summoners made Champions little more than puppets manipulated by godlike powers.\" Any interesting champions the Narrative team created were rendered as secondary, mere servants to the Summoners, unable to influence their own destiny.","Many champion's lore did not give them reason to join the Institute, such as serial killer fire spirit Brand or void monster Rek'Sai.","Riot wished to let champions take the center stage and have stories of their own, pursuing their own unique goals.","For example, Riot has since released a plotline about a lost empire in the Shurima desert and a plotline about a clash between the pirate Gangplank and the pirate-hunter Miss Fortune in the city of Bilgewater, both of which were driven by the champions of League of Legends, not Summoners.","Riot compared this style of narrative to comic book characters and classic literature, where interesting characters can have many adventures over time and not necessarily have all of them make sense in the same continuity.","A side effect of this is \"that the game and story aren’t one-to-one copies of each other.\"","The world of Runeterra consists of a number of countries and city-states, locked in a web of rivalry, alliance, and conflict.","The two largest and most powerful entities are the states of Demacia and Noxus, who have fought wars in the past, and are in a Cold War-esque state currently, with each seeking to quietly undermine the other.","Demacian champions tend to value themes like chivalry and honor, while Noxus prides itself more on trickery, strategy, and ruthlessness.","Piltover and Zaun are a city-state at the forefront of technology; Piltover, the \"respectable\" half of the city, has a \"steampunk\" style, while Zaun, the neglected undercity of Piltover, is a darker vision of the power of technology, engaging in ethically questionable research.","The Freljord is an icy domain riven by a three-way civil war between rival claimant Queens Ashe, Sejuani, and Lissandra.","Bandle City is a peaceful domain of yordles, a race of small humanoids unique to League of Legends.","Ionia is an island nation with a number of themes, including music, monks, and ninjas.","Bilgewater is a port town with a pirate theme.","The Shadow Isles are an island chain that was magically corrupted, and have become haunted by a malign force known as the \"Black Mist\" which leeches life and empowers the undead.","Targon is an ancient mountain peak with Greek mythology theme.","Shurima is a fallen empire lost to the desert with a somewhat Egyptian theme.","Icathia is another fallen and abandoned city where Void monsters from another dimension have crossed into Runeterra, with a Lovecraftian theme.","Of the current maps, Summoner's Rift is set at the Institute of War from the 'original' League storyline; the Twisted Treeline is set in the Shadow Isles; and the Howling Abyss map is set in the Frejlord."]},{"title":"Development","sentences":["The game's developer Riot Games was co-founded by Brandon \"Ryze\" Beck and Marc \"Tryndamere\" Merrill, who were roommates while they attended the University of Southern California.","They partnered with Steve \"Guinsoo\" Feak, the previous designer of the popular Warcraft III: The Frozen Throne custom map Defense of the Ancients, and Steve \"Pendragon\" Mescon, the administrator of the former official support base for the map, to develop League of Legends.","The original inspiration for \"DotA\" was a 1998 mod for StarCraft created by community member Aeon64 called \"Aeon of Strife\".","After the release of Warcraft III: Reign of Chaos and its subsequent World Editor in 2002, DotA was created by another modder, Eul.","He ported and expanded the \"Aeon of Strife\" mod to the new engine and named it \"Defense of the Ancients\".","Guinsoo later made DotA Allstars by inserting his own mix of content to \"DotA\", greatly expanding the number of heroes, added recipes and items, and introduced various gameplay changes.","Guinsoo then passed the mod to IceFrog after accepting a job at the newly formed Riot Games.","The idea of a spiritual successor to Defense of the Ancients was that it would be its own stand-alone game with its own engine, rather than another mod of Warcraft III, began to materialize at the end of 2005.","League of Legends was born \"when a couple of very active DotA community members believed that the gameplay was so much fun and so innovative that it represented the spawning of a new genre and deserved to be its own professional game with significantly enhanced features and around-game services.\"","Riot Games officially opened its office in September 2006, and, as of 2013, has over 1,000 people working on League of Legends.","According to Marc Merrill, when creating the various champions in the game, instead of leaving the champion creation to just a few people, they decided to open up the champion creation process to everyone in the company based upon a template where they could vote on which champions made it into the game.","League of Legends was first announced on October 7, 2008.","It was in a closed beta from April 10, 2009 to October 22, 2009.","It then transitioned to open beta until release."]},{"title":"Release","sentences":["League of Legends was released on October 27, 2009.","Riot Games self-publishes and operates the game and all of its customer service aspects in North America.","Riot Games has signed deals regarding the distribution of League of Legends in Asia, Europe, and North America.","By July 2013, the game has been released and was distributed in Australia, the United States, Canada, Europe, Philippines, and South Korea.","No public announcements regarding other regions have been made.","The game is distributed in China by Tencent Inc., the largest Internet value-added services company in China best known for its QQ Instant Messaging client.","The game has been distributed to Tencent's growing 300 million Internet user base through its leading QQ Game portal.","The deal was one of only a handful of partnerships to bring a U.S.-developed online game directly to China.","On July 14, 2009, Riot Games announced that League of Legends will be free with \"no catch\".","There will be a digital copy for download, but there is also a Digital Collector's Copy that will be available to purchase that contains exclusive skins, $10 credit for Riot Points, and 20 champions to access without unlocking them normally via gameplay as well as 4 \"special\" runes.","This Collector's Pack is currently available for US$29.99.","Even though the game is free, Riot Games \"plan[s] to continue to add content (characters etc...) with a full production team at very frequent intervals.\"","In Europe, Riot Games initially signed an international licensing partnership with GOA, the video games department of Orange's Content Division and Europe's largest gaming portal.","On October 13, 2009, GOA and Riot announced that they would start channeling server access for players located in Europe to GOA's dedicated servers.","This partnership did not last; on May 10, 2010, Riot Games announced that they would take over distribution and operation of the game in Europe.","To do so, Riot Games established a European HQ in Dublin.","On July 16, 2010, Riot Games announced that Garena would publish the game in Southeast Asia.","Additionally, Southeast Asian players had the ability \"transfer accounts\" to import their progress stored in North American or European servers into the Southeast Asian server.","The game has since been distributed by Garena in Taiwan as well.","In March 2013, Riot Games released a beta version of an OS X client in addition to their Windows client.","The Mac client was since moved out of beta and OS X / macOs players have had full access to League.","Riot has since expanded to many countries, after the initial North America / Europe / Korea / Garena's Southeast Asia launch.","In 2012, a Brazilian and Turkish server were added; in 2013, Latin American & Russian servers; and a beta of a Japanese server was launched in 2016."]},{"title":"Popular reception","sentences":["In a release published in November 2011, Riot Games stated that League of Legends had accumulated 32.5 million players, 11.5 million of whom play monthly, of which 4.2 million play daily.","Riot said in October 2013, the game had 12 million active daily players and 32 million active monthly players.","In January 2014, the game had 27 million active daily players, 7.5 million concurrent players at peak times, and 67 million active monthly players.","Global concurrent users online peaked at over 5 million players as of March 2013.","By March 2012, League of Legends had become the #1 title in Korean PC cafés.","<ref name=\"pareport\"> League continues to be popular in Korea; it remained the #1 game until the middle of 2016, when Overwatch displaced it, and is  still the #2 game (disclaimer: these numbers do not include home playership rates).","In July 2012, Xfire released a report stating that League of Legends was the most played PC game in North America and Europe, with 1.3 billion hours logged by players in those regions between July 2011 and June 2012.","League of Legends is also very popular in the Philippines, and, as of July 2013, it is the second most played game in internet cafés in the country (just behind Defense of the Ancients).","In Taiwan, it is estimated that almost 5 percent of their entire population played the game, with almost 1 million players subscribed on the server."]},{"title":"Critical reception","sentences":["League of Legends has received generally favorable reviews, and currently holds a Metacritic score of 78 out of 100.","IGN initially awarded League of Legends 8.0 out of 10 in 2009, highlighting an enjoyable game design, inventive champion design with good customization options, and lively visuals.","However, the game's confusing launch was criticized: it was felt that the title was released too early, with some features missing and others to be removed.","Finally, the reviewer noted that high level players in the game have \"little patience for newcomers\", though the reviewer believed that matchmaking (not implemented at the time of review) would solve the problem by matching players of similar level together.","Leah B. Jackson of IGN re-reviewed the game in 2014, changing IGN's score from 8.0 to 9.2.","Jackson hailed the game \"as an example of excellence\", praising the variety of champions, rewarding progression systems, and fast but intensely strategic team play.","As compared to fellow MOBA games Heroes of Newerth and Dota 2, Mike Minotti of VentureBeat considered League of Legends as the easiest to learn and to have fastest gameplay pace of the three, while the other two feature more complex gameplay mechanics and are considered closer in style to the original DoTA All-Stars.","In 2015, the game placed 15th on USgamer's The 15 Best Games Since 2000 list."]},{"title":"Professional competition","sentences":["League of Legends is one of the largest eSports, with various annual tournaments taking place worldwide.","In terms of eSports professional gaming as of June 2016 2016, League of Legends has had $29,203,916 USD in prize money, 4,083 Players, and 1,718 tournaments, compared to ''Dota 2's'' $64,397,286 USD of prize money, 1,495 players, and 613 tournaments."]}]
        };


/*        return helpers.getGifs()
            .then(function(response) {
                // Using a ternary operator we can set newClicks to the number of clicks in our response object
                // If we don't have any clicks in our database, set newClicks to 0
                var gifsFound = response.data ? response.data : [];
/!*                this.setState({
                    gifsData: gifsFound
                });*!/
                console.log("RESULTS", response);
//                console.log("Gifs found", gifsFound);
                console.log('gifsData:',gifsFound /!*response.data*!/);
                return {
                    gifsData: gifsFound /!*response.data*!/
    //            clicks: 0,
    //            clickID: "Main"
                };

            }.bind(this));*/

    },

    //  On load display the gifs?
    componentDidMount: function() {
        console.log("COMPONENT MOUNTED");

//        helpers.stateSet(this.stateSet);

        // The moment the page renders on page load, we will retrieve the previous gifs.
        // We will then utilize that click count to change the value of the click state.


        /*
        helpers.getGifs()
            .then(function(response) {
                // Using a ternary operator we can set newClicks to the number of clicks in our response object
                // If we don't have any clicks in our database, set newClicks to 0
                var gifsFound = response.data; //response.data.length ? response.data : [];
                this.setState({
                    gifsData: gifsFound
                });
                console.log("RESULTS", response);
//                console.log("Gifs found", gifsFound);
                console.log('gifsData:',this.state.gifsData);

            }.bind(this));
*/

    },

    // Whenever our component updates, the code inside componentDidUpdate is run
    componentDidUpdate: function(prevState) {
        console.log("COMPONENT UPDATED");

//          this.render();
/*        helpers.getGifs()
            .then(function(response) {
                // Using a ternary operator we can set newClicks to the number of clicks in our response object
                // If we don't have any clicks in our database, set newClicks to 0
                var gifsFound = response.data; //? response.data : [];
                this.setState({
                    gifsData: gifsFound
                });
                console.log("RESULTS", response);
//                console.log("Gifs found", gifsFound);
                console.log('gifsData:',this.state.gifsData);

            }.bind(this));*/

/*        // We will check if the gifs have changed...
        if (prevState.gifsData !== this.state.gifsData) {

            console.log('State changes are handled elsewhere?');
/!*            // If it does, then update the clickcount in MongoDB
            helpers.saveGifs({ gifsData: this.state.gifsData /!*clickID: this.state.clickID, clicks: this.state.clicks*!/ })
                .then(function() {
                    console.log("Posted to MongoDB");
                });*!/
        }*/

    },

    // Whenever the button is clicked we'll use setState to add to the clickCounter
    // Note the syntax for setting the state

    handleData: function(updater) {
//        this.setState({ gifsData: updater(this.state.gifsData) });

            this.render();

/*        helpers.getGifs()
            .then(function(response) {
                // Using a ternary operator we can set newClicks to the number of clicks in our response object
                // If we don't have any clicks in our database, set newClicks to 0
                var gifsFound = response.data.length ? response.data : [];
                this.setState({
                    gifsData: gifsFound
                });
                console.log("RESULTS", response);
                console.log("Gifs found", gifsFound);
            }.bind(this));*/


    },


    // This should actually affect mongoDB...
    burninate: function() {
        this.setState({ gifsData: [] });
    },

    // Here we render the function
    render: function() {
        return (
            <div className="container wide-container">

                <div className="row">

{/*                    <div className="jumbotron">*/}
                    <div>
                        <h2>Goophy - Animated gif search powered by Google Images</h2>
                        <hr />
                        <p>
                            <em>Now backed by the power of MongoDB!</em>
                            Just visit <a href="/api">/api</a> to check out the DB!
                        </p>
                            {/*
                Here we create a button click.
                Note how we have an onClick event associate with our handleClick function.
              */}

                            <Form stateSetMain={this.stateSetMain} updateAll={this.updateAll} />

                    </div>
                    {/* This represents the "Parent" */}
                    <div className="col-md-12">

                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h2 className="panel-title text-center">Article:</h2>
                            </div>
                            <div className="panel-body text-center">

                                {/* This won't be in the final version... */}
                                {/*<h1>{this.state.gifsData[0] && this.state.gifsData[0].link}</h1>*/}
                                {/*{this.state.gifsData && '3'}*/}

                                {/*
                  Here we'll deploy the child component.
                  We'll pass it the parent's click counter as a "state"
                */}
                                <Wiki gifsData={this.state.gifsData} sections={this.state.sections} />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

// Export the component back for use in other files
module.exports = Main;
