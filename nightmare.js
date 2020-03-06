

/*const imageDL = require("image-downloader");
const options = {
    url: 'http://i.imgur.com/FnC28.gif',
    dest: './public/images/wharrgarbl.gif'                  // Save to /path/to/dest/image.jpg
};*/

var Image = require('./models/Image.js');

/////
function googleScrape(srcstr,resmax,itemCB,callback) {

//    itemCB('http://www.wharrgarbl.com/wharrgarbl.gif');

    var searchStr = srcstr;
    var Nightmare = require('nightmare');
    // var nightmare = Nightmare({ show: false});
    var nightmare = Nightmare({ show: false});
    // var nightmare = Nightmare({ show: true});
    // console.log(nightmare);
    console.log('searchStr:', srcstr)
    console.log('begin nm scrape');
    // console.log(searchStr, 'searchStr exists!!!')

//    var jq = require('cheerio');


    var arr = [];
    var ind = 0;
    var RESMAX = resmax;
//    var RESMAX = 12;

    function getPic(index) {
        // nightmare.click('.rg_ic[scrapeID="num'+index+'"]')
        // nightmare.click('.isv-r[scrapeID="num'+index+'"]')
        nightmare.click('.rg_i[scrapeID="num'+index+'"]')
            .on('console', (log, msg) => {
                console.log(msg)
            })
            .wait(500).wait('a[role="link"]')
            // .evaluate(function(arr, searchStr)
            .evaluate(function(arr, searchStr)
                {
                    // console.log('I got this far?');
                    for(var i=0; i<2; i++)
                    // for(let i=0; i<1; i++)
                        {

                            // console.log(Object.keys(document.querySelector('a[role="link"] img')));
                            // console.log(Object.keys(document.querySelector('a[role="link"] img').__jsaction.load[0]));
                            // console.log(Object.keys($('img'))[0]);
                            // console.log(Object.keys($('img'))[5]);
                            // console.log(Object.keys($('img'))[10]);
                            // console.log(Object.keys($('img'))[15]);
                            // console.log(Object.keys($('img'))[20]);
                            // console.log($('.rg_i[scrapeID="num1"]'));
                            // console.log(typeof $('.rg_i[scrapeID="num1"] img'));
                            // console.log(Object.keys($('a[role="link"]'))[0]);
                            // console.log(Object.keys($('a[role="link"]'))[1]);
                            // console.log($('a[role="link"]')[1]);
                            // console.log(Object.keys($('a[role="link"] img')[0]));
                            // console.log(Object.keys($('a[role="link"] img')[1]));
                            // console.log($('.rg_i[scrapeID="num1"] img').src);
                            // console.log('searchStr DNE???');
                            // var imgSel = $('a[role="link"] img');
                            var imgSel = $('a[role="link"] img');
                            // var imgUrl = $('a[role="link"] img').src;
                            // console.log(imgSel);
                            // console.log('src:', imgSel.src);
                            // var imgSel = $('img[alt="Image result for ' + searchStr + '"]');
                            // var imgUrl = $('img[alt="Image result for ' + searchStr + '"]').src;
                            // var imgSel = $('.irc_mi');
                            // if(arr.indexOf(imgSel[i].src) == -1 && imgSel[i].src !='')
                            // imgUrl = (imgUrl.length > 200) ? imgUrl.substr(0, 199) : imgUrl
                            // console.log(imgUrl)
                            // arr.push(imgUrl);
                            console.log('Hit? ' + searchStr + imgSel[i].src.slice(0,30));
                            if(arr.indexOf(imgSel[i].src) == -1 && imgSel[i].src !='' && imgSel[i].src.slice(imgSel[i].src.length - 4) == '.gif')
                            // if(arr.indexOf(imgSel[i].src) == -1 && imgSel[i].src !='' && imgSel[i].src.slice(0, 4) == 'http')
                            // if(arr.indexOf(imgSel[i].src) == -1 && imgSel[i].src !='')
                                {
                                    arr.push(imgSel[i].src);
                                }
                        }
                    return arr;
                }, arr, searchStr)
            .then(function(result)
                    {
                        console.log(result.length, 'results so far for', searchStr);
                        arr=result;
                        itemCB(arr[arr.length-1]);
                        ind++;
                        if(ind%20===19) {
                            nightmare
                                // .wait('.rg_ic').wait(500) // wait(2000)
                                // .wait('.isv-r').wait(500) // wait(2000)
                                .wait('.rg_i').wait(500) // wait(2000)
                                .evaluate(function(ind){
                                    for(var i=ind; i<ind+20; i++)
                                    // {$('.rg_ic').eq(i).attr('scrapeID','num'+i);}
                                    // {$('.isv-r').eq(i).attr('scrapeID','num'+i);}
                                    {$('.rg_i').eq(i).attr('scrapeID','num'+i);}
                                },ind).then( function(){getPic(ind);} )
                        }
                        else if(arr.length<RESMAX /*6*/ ) {getPic(ind);}
                        else {

/*                            for(var j=0; j<arr.length; j++) {
                                // Save an empty result object
                                var result = {};

                                // Add the text and href of every link, and save them as properties of the result object
                                result.title = 'image' + j;
                                result.link = arr[j]; //$(this).children("a").attr("href");

                                // Using our Article model, create a new entry
                                // This effectively passes the result object to the entry (and the title and link)
                                var entry = new Image(result);

                                // Now, save that entry to the db
                                entry.save(function (err, doc) {
                                    // Log any errors
                                    if (err) {
                                        console.log(err);
                                    }
                                    // Or log the doc
                                    else {
                                        console.log(doc);
                                    }
                                });
                            }*/

                            console.log('link array:',arr);
                            nightmare.end().then(function (result) {
                                console.log('I always let the wookie win... -C-3PO');
                            })
                            .catch(function (error) {
                                    console.error('Search failed:', error);
                                });
                            callback(arr);

                        }
                    });
    }
//<img alt="Image result for minotaur" class="n3VNCb" src="https://media1.tenor.com/images/f6589d8c39d5ff48824237b3ff88e9ea/tenor.gif?itemid=14388105" data-noaft="1" jsname="HiaYvf" jsaction="load:XAeZkd;" style="width: 498px; height: 280px; margin: 0px;">
    nightmare
        // .goto(searchStr)
        .goto('https://www.google.com/search?q=' + searchStr + '&tbm=isch&tbs=itp:animated')
        .inject('js', './public/jquery.min.js')
        // .wait('img[alt="Image result for "' + searchStr + '"]').wait(500) // wait(2000)
        // .wait('.rg_ic').wait(500) // wait(2000)
        // .wait('.isv-r').wait(500) // wait(2000)
        .wait('.rg_i').wait(500) // wait(2000)
        .evaluate(function(){
            for(var i=0; i<100; i++)
            // for(var i=0; i<3; i++)
                    // {$('.rg_ic').eq(i).attr('scrapeID','num'+i);}
                    // {$('.isv-r').eq(i).attr('scrapeID','num'+i);}
                    {$('.rg_i').eq(i).attr('scrapeID','num'+i);}
            }
        ).then(function(){getPic(0);});
}

module.exports = googleScrape;
