var wtf_wikipedia = require("wtf_wikipedia");

//    wtf_wikipedia.parse(someWikiScript)
// {sections:[...], infobox:{}, categories:[...], images:[] }

    function wikiFetch(wikiStr,callback)
        {
            var str = wikiStr;
            var call = callback;
            //fetch wikipedia markup from api..
            wtf_wikipedia.from_api(str, "en", function (markup) {


                //    wtf_wikipedia.from_api("Toronto", "en", function(markup){
                var obj = wtf_wikipedia.parse(markup);

    //            console.log(obj);
    //            res.send(obj);
                wikiParse(obj,str,call);

            });
        }

    function wikiParse(art,str,callback) {
        var call = callback;
        var sections = [];
        var article = art;
        article.sections.forEach(function (item, index) {
            sections[index] = {title: item.title, sentences: [], gifs:[]};
            article.sections[index].sentences.forEach(function (sentc, sentcIndx) {
                sections[index].sentences[sentcIndx] = sentc.text;
            });
        });

        sections = sections.filter( function(item){
            return (item.sentences[0]!=undefined && item.sentences[0]!='');
            });

/*        for (var i = sections.length-1; i>0; i--)
            {
                if(sections[i].sentences[0]== undefined || sections[i].sentences[0]=='')
                {
                    //sections.pop();
                    sections.splice(i,1);
                }
            }*/

        if(sections.length>0)
            {sections[0].title = str;}
        else
            {sections = [{title:"Nope", sentences:['Wikipedia failed to find any results.  Sorry.'], gifs:[]}];}

            call(sections);
        }


    function wikiQuery(wikiStr,callback) {
        wikiFetch(wikiStr,callback);
    }
/*
response
    sections[]
        title""
        sentences[]
            text""
*/

// Wiki = createClass.......
/*

render: function() {

    return (
        <h1>Searchterm</h1>
        <ImgRow imageRow={titleRow} />
    {
        sections.map(function (item, index) {
            <h3>{item.title}</h3>
            <ImgRow imageRow = {sectionImgRow[index]} />
            pTagAll(item.sentences);
        });
    }
);
}

function pTag(str)
{
    return <p>str</p>;
}

function pTagAll(arr)
{
    return arr.map(function(item) {pTag(item.text);});
}


// wtf_wikipedia response...
var sections = response.sections;

*/


module.exports = wikiQuery;