// Include React
var React = require("react");

var ImageRow = require("./ImgRow/ImageRow");

var Images = require("./Images");

// This is the Form, our main component. It includes the banner and form element
var Wiki = React.createClass({

    rowParse: function(data) {

        var imagesPassed = data;
        var imgRows = [];

        for(var i=0; 4*i<imagesPassed.length; i++)
        {
            imgRows[i]=[];
            imgRows[i][0] = imagesPassed[4*i] || [];      // This shouldn't happen
            imgRows[i][1] = imagesPassed[4*i+1] || [];    // These might happen
            imgRows[i][2] = imagesPassed[4*i+2] || [];
            imgRows[i][3] = imagesPassed[4*i+3] || [];
            console.log('imgRows['+i+']:',imgRows[i]);
        }

        return imgRows;

    },

    // Here we set a generic state associated with the images passed into the rows
    getInitialState: function() {

//        var rowData = this.rowParse(this.props.gifsData);
        var rowData = []; //this.rowParse(this.props.gifsData);

        return {
            imageRows: [] //rowData, //this.rowParse(this.props.gifsData) //imgRows
        };
    },

    componentDidUpdate: function() {
        console.log('COMPONENT DID UPDATE FIRED FROM IMAGES.JS!!!!');

        /*        var newRows = this.rowParse(this.props.gifsData);
        //        this.setState({ imageRows: this.rowParse(this.props.gifsData) });
                this.setState({ imageRows: newRows });
                console.log(this.state.imageRows);
                this.render();*/
//        this.setState({jsx:this.processAllSections(this.props.sections)});


    },

    componentDidMount: function() {

        /*        console.log('COMPONENT DID MOUNT FIRED FROM IMAGES.JS!!!!');
                var newRows = this.rowParse(this.props.gifsData);
        //        this.setState({ imageRows: this.rowParse(this.props.gifsData) });
                this.setState({ imageRows: newRows });
                console.log(this.state.imageRows);
        //        this.render();*/
//        this.setState({jsx:this.processAllSections(this.props.sections)});

    },


    /*    // This function will respond to the user input
        handleChange: function(event) {
            // Here we create syntax to capture any change in text to the query terms (pre-search).
            // See this Stack Overflow answer for more details:
            // http://stackoverflow.com/questions/21029999/react-js-identifying-different-inputs-with-one-onchange-handler
            var newState = {};
            newState[event.target.id] = event.target.value;
            this.setState(newState);
        },*/


    /*
                        {this.state.imageRows.map()}
    */

        componentWillReceiveProps: function(nextProps) {
            if(nextProps) {
                this.setState({jsx:<p>WHARRGARBL!!!</p>});
            }
        },

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

    // wtf_wikipedia response...
    var sections = response.sections;

    */


//    pTag: function(str)
    pTag: function(textStr)
    {
        return <p>{textStr}</p>;
    },

    hTag: function(textStr)
    {
        return <h3>{textStr}</h3>;
    },

    iTag: function(searchStr,sectStr,gifs)
    {
        if (searchStr === sectStr)
            return <Images query={searchStr} key={searchStr} gifsData={gifs} />;
        else
            return <Images query={searchStr+' '+sectStr} key={sectStr} gifsData={gifs} />;
    },

    pTagAll: function(arr)
    {
        return arr.map(function(sentc) {return this.pTag(sentc);}, this);
    },

    processSection: function(sect)
    {
//        let sec = section;
       return [this.hTag(sect.title)].concat(this.iTag(this.props.sections[0].title, sect.title, sect.gifs)).concat(this.pTagAll(sect.sentences));
//         return [<h3>{sect.title}</h3>, <p>{sect.sentences[0]}</p>];
//        return [<h3>cat</h3>, <p>dog</p>];
    },

//    fcn: function() { return 'wharrgarbl?!?'; },

    processAllSections: function(arr)
    {
        let jsx = [];
        arr.forEach( function(sect) {jsx = jsx.concat(this.processSection(sect))}, this);
        return jsx;
    },


// Here we descibe this component's render method
    render: function() {

        console.log('state of rows', this.state.imageRows);
        console.log('prop of rows', this.rowParse(this.props.gifsData));

        return (
            <div className="container"> {/*classname = "row"*/}
                {/*<div className="col-xs-1"> </div>*/}
                {/*<div className="col-xs-10">*/}
                    {/*                    456 {this.state.imageRows[0].link} 123*/}
                    {/*                    <ImageRow key = '100' imageRow={[{link:'5'},{link:'6'},{link:'7'},{link:'8'}]} />*/}
                    {/*                    <ImageRow key = '101' imageRow={this.state.imageRows[0]} />*/}
                    {/*                    (Above didn't work?)*/}

                    {/*this.rowParse(this.props.gifsData).map(
                        function(row,rowNum)
                        { return <ImageRow key={rowNum} imageRow={row} />;}
                    )*/}
                    {/* this.props.sections[0].title */}
                    {/* this.props.sections[0].sentences[0] */}

                    { this.processAllSections(this.props.sections) }
                    {/*{ [<p>Mancha</p>,<span><p>Chico</p><p>And another dog?</p></span>] }*/}
                    {/*                    {this.state.imageRows.map(
                        function(row,rowNum)
                            { return <ImageRow key={rowNum+Math.floor(10000*Math.random())} imageRow={row} />;}
                        )}*/}

                {/*</div>*/}
                {/*<div className="col-xs-1"> </div>*/}

            </div>
        );
    }

});

// Export the component back for use in other files
module.exports = Wiki;




