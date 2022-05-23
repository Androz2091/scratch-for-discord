import * as Blockly from "blockly/core";
const ahqcolor = ['#40BF4A', '#40BF4A', '#40BF4A', '#40BF4A', '#40BF4A', '#40BF4A', '#40BF4A', '#40BF4A', '#40BF4A', '#40BF4A', '#40BF4A',
'#40BF4A', '#40BF4A', '#40BF4A', '#40BF4A', '#40BF4A', '#40BF4A', '#40BF4A', '#40BF4A', '#40BF4A', '#40BF4A', '#40BF4A', '#40BF4A', '#40BF4A', '#40BF4A',
'#40BF4A', '#40BF4A', '#40BF4A', '#40BF4A', '#40BF4A', '#40BF4A', '#40BF4A', '#40BF4A', '#40BF4A', '#40BF4A', '#40BF4A', '#40BF4A', '#40BF4A', '#40BF4A',
'#40BF4A', '#40BF4A', '#40BF4A', '#40BF4A', '#40BF4A', '#40BF4A', '#40BF4A', '#40BF4A', '#40BF4A', '#40BF4A', '#40BF4A', '#40BF4A', '#40BF4A', '#40BF4A', '#40BF4A',
'#40BF4A', '#40BF4A', '#40BF4A', '#40BF4A', '#40BF4A', '#40BF4A', '#40BF4A', '#40BF4A', '#40BF4A', '#40BF4A', '#40BF4A', '#40BF4A', '#40BF4A', '#40BF4A', '#40BF4A',
'#40BF4A', '#40BF4A', '#40BF4A', '#40BF4A', '#40BF4A', '#40BF4A', '#40BF4A', '#40BF4A', '#40BF4A', '#40BF4A', '#40BF4A', '#40BF4A', '#40BF4A', '#40BF4A', '#40BF4A',
'#40BF4A', '#40BF4A', '#40BF4A', '#40BF4A', '#40BF4A', '#40BF4A', '#40BF4A', '#40BF4A', '#40BF4A', '#40BF4A', '#40BF4A', '#40BF4A', '#40BF4A', '#40BF4A', '#40BF4A', 
'#40BF4A', '#40BF4A', '#40BF4A', '#40BF4A', '#40BF4A', '#40BF4A', '#40BF4A', '#40BF4A', '#40BF4A', '#40BF4A', '#40BF4A', '#40BF4A', '#40BF4A'];
function listsGetRandomItem(list, remove) {
    var x = Math.floor(Math.random() * list.length);
    if (remove) {
        return list.splice(x, 1)[0];
    } else {
        return list[x];
    }
}
const blockName = "world_history";
//block working now working now working now working now working now working now working now working now working now working now working now working now working now working
//now working now working now working now working now working now working now working now working now working now working now working
// now working now working now working now working now working now working now working now working now working now working now working now working now working now working
// now working now working now working now working now working now working now working now working now working
// now working now working now working now working now working now working now working now working now working now working now working now working now working now working
// now working now working now working now working now working now working now working
// now working now working now working now working now working now working now working now working now working now working now working now working now working now working
// now working now working now working now working now working now working now working now working now working now working
// now working now working now working now working now working
/*
 now working now working now working now working now working now working now working now working now working now working now working now working now working now working
 / now working now working now working now working now working now working now working now working now working now working now working now working
  now working now working now working now working now working now working now working now working now working
   now working now working now working now working now working now working now working now working

    now working now working now working now working now working now working now working now working now working now working
     now working now working now working now working now working now working now working now working now working now working


*/

// We got a number one Victory Royale
// Yeah, Fortnite, we 'bout to get down (get down)
// Ten kills on the board right now
// Just wiped out Tomato Town
// My friend just got downed
// I revived him, now we're heading south-bound
// Now we're in the Pleasant Park streets
// Look at the map, go to the marked sheet
// Take me to your Xbox to play Fortnite today
// You can take me to Moisty Mire, but not Loot Lake
// I really love to Chug Jug with you
// We can be pro Fortnite gamers
// He said
// "Hey broski, you got some heals and a shield pot?"
// "I need healing and I am only at one HP"
// Hey dude, sorry, I found nothing on this safari
// I checked the upstairs of that house but not the underneath yet
// There's a chest that's just down there
// The storm is coming fast and you need heals to prepare
// I've got V-Bucks that I'll spend
// More than you can content
// I'm a cool pro Fortnite gamer (cool pro Fortnite-)
// Take me to your Xbox to play Fortnite today
// You can take me to Moisty Mire, but not Loot Lake
/*
I really love to Chug Jug with you
*/
// We can be pro Fortnite gamers
// La-la-la-la-la-e-ya
// La-la-la-la-la-e-ya
// La-la-la-la-la-e-ya
// Will you be my pro Fortnite gamer? (Pro Fortnite gamer)
// Can we get a win this weekend?
// Take me to Loot Lake
// Let's change the game mode and we can Disco Dominate
// Let's hop in an ATK
// Take me to the zone
// I'm running kind of low on meds, I need to break some stone
// Dressed in all his fancy clothes
// He's got Renegade Raider and he's probably a pro
// He just shot my back
// I turn back and I attack
// I just got a Victory Royale
// A Victory Royale
// Take me to your Xbox to play Fortnite today
// You can take me to Moisty Mire, but not Loot Lake
// I really love to Chug Jug with you
// We can be pro Fortnite gamers

/*

ÿØÿà JFIF  ` `  ÿÛ C 		



	
ÿÛ CÿÀ     " ÿÄ           	
ÿÄ µ   } !1AQa"q2‘¡#B±ÁRÑð$3br‚	
%&'()*456789:CDEFGHIJSTUVWXYZcdefghijstuvwxyzƒ„…†‡ˆ‰Š’“”•–—˜™š¢£¤¥¦§¨©ª²³´µ¶·¸¹ºÂÃÄÅÆÇÈÉÊÒÓÔÕÖ×ØÙÚáâãäåæçèéêñòóôõö÷øùúÿÄ        	
ÿÄ µ  w !1AQaq"2B‘¡±Á	#3RðbrÑ
$4á%ñ&'()*56789:CDEFGHIJSTUVWXYZcdefghijstuvwxyz‚ƒ„…†‡ˆ‰Š’“”•–—˜™š¢£¤¥¦§¨©ª²³´µ¶·¸¹ºÂÃÄÅÆÇÈÉÊÒÓÔÕÖ×ØÙÚâãäåæçèéêòóôõö÷øùúÿÚ   ? ýÆðÿ ÇM'^øíâ‡Ûe·×4
:×UÃ‘¶òÞbË½;üŽ¡[?ß_Zí«áOø)w‹5OÙö»ø]ñÒÊ‹[·†õÈaë 
$…@]£–FLŸ½n¾•è¶Wíâ¿hžÑ¾øãÁ¾›Ä¶öúŒ:Î§tTêi<°Emmeˆ¥ï%Í¾òê»EÄ Þ}%|8a«Óš:±ÖRzFQÒI½zÙ¯[#â0¼W(ÔÆákÓ”ëaç¤ ¯)Âkš*é=.žºr¶Ïª+Â4Ú&ïÆÿ ðPËï‡zmÃbx7Â2ÞêÊ€m—Pž{S1Çð@ÄŒ²°=+‹ýœÿ à£¾ ý‰üEãÏm|Oðñ¦Ó5ë%Û\ÞÇÄ*‹Ÿ•§% ûÀákŽÿ ‚3ø'YñFãï‹Þ$Ý&«ñVa¬¸óc‰Ý¥tÿ `Í# ¼Œv®šY°˜l^#µ§û¸ös“Ýw´nþiœXž*†cË°yd«~ú}ãJi.œÕ-é$Ï¨?ioÙóCý¨¾k>×Ã-ž©1\"ƒ-”ÊwG2gø•€ú‚Êxc_~Çµö]ÓSD³In4Áuog*^H‰­IníÜFänHåd2>U´-}¿ûFË¯‚^!ƒÃO6¿¨Û
:ÄÂ	ki.`óÏû1	§Ú3\¯ƒ¾‡þÒ´=3O¹‹OÑ-"±´]‡+HsïÏ¾kà8§‡pYþI³2r•5UTQŒåcùZ½ù•½.¬õ>Ï ç…Ï¿´0ÑQš¢á)8¦ß4½Ô›Oáå›âWÐüzý—¾øƒöžý¡m~Å®ÿ Â9¤ø·QúÄÈÇsÚ‰Ÿ*%æHå¸
 ±ù¯Ü¿‡?´Ÿ…Ò|7¡Ú¥–‘¢Ú¥¥¬*>ê(ÆO«I=I$žM~^|\ý•~&|ÿ ‚‚Ÿx;Àž'Õ´[]zßÄK§Ø¼‘È²’æ¨ã,Ó!‡ÜWêâ¶åžFyú×ã£‰†xy¯e('ÊÚ•’|Ýok-uÑŸx9”O,ue&«Ó¨áÎÓJTîÚåénnfùtÕyÿÙ

*/

/*
William Afton and Henry opened in 1967 the family friendly Fredbear's Family Diner, featuring a brown furry suit of a bear as a mascot. Henry would usually wear the suit, as they didn't have enough money to hire someone to do the job for a long time and they were studying at the time. William studied engineering and Henry business adminstration and communication.

William met an unnamed woman, with whom he married and three years later had a boy challed Michael. They met in the court; William was being charged for murdering a child that allegedly was crying outside the Diner for being scared of Fredbear, the bear, and she was working selling hot-dogs in from of the building. (Btw, he was released because they didn't have evidences pointing it).

It took them four years to actually achieve any success with the Diner, as they learnt from little Michael that Fredbear was boring. William them designed a new mascot: a yellow furry suit of a rabbit called Bonnie. The chemistry between both characters worked like black magic and the success rained on them like rain in a rainy day.

The amount of money they got was so much, William used it to test his engineering skills, designing the first two Spring Lock suits: which were obviously Bonnie and Fredbear. The success increased.

Amen
*/


const blockData = {
    "message0": "History of the world!",
    "colour": (((((((((((((((((((((((((((((((((((((((((((((((((((((listsGetRandomItem(ahqcolor, false)))))))))))))))))))))))))))))))))))))))))))))))))))))),
    "output": ["String", "String", "String", "String", "String", "Discord Nitro Link", "String", "String", "String", "String", "String", "String", "String", "String", "String"],
    "tooltip": "Peepee                                                                                                                                                ",
    "helpUrl": ""
};


Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};
Blockly.JavaScript[blockName] = function(){
    const code = [`\`s4d means scratch for discord
    earth was created 4.3 billion years ago
    androz was the creator of this planet
    s4d was created mainly by \\\\\\\\\\\\\\\\\\\\\\\\\\\\``Androz``\\\\\\\\\\\\\\\\\\\\\\\\\\\\
    The Devs of the current preview \\\`469\\\` are:-
    1. Androz (of coc)
    2. Jose (45454545454 coder)
    3. Redo (4545454554545454 coder)
    4. Frostzzone (69 alabama)
    5. Retro
    6. AHQSoftwares
    7. HenPokPokPokPokPokPokPokPokPokPokPokPokPokPokPokPokPokPokPokPokPokPokPokPokPokPokPokPokPokPokPokPokPokPokPok
    8. AlexCdDg
    9. JeremyGamer13
    10. LimeNade
    11. Freddy Fazbear (https://freddy-fazbears-pizza.fandom.com/f/p/2977888211042401874)
    12. Malix's Home Address is: 49021 Among Us St.
    13. JooJ
    14. https://www.youtube.com/watch?v=dQw4w9WgXcQ
    
    Official s4d4d4s4ds44ds server:- https://discord.gg/cB2g5f4Ypq
    s4r34 69 furry segs official server:- https://discord.gg/nsfw\``, (((((((((((((((((((((((((((Blockly.JavaScript.ORDER_LOGICAL_OR)))))))))))))))))))))))))))];
    return ((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((code))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))));
};
