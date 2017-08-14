// Include React
var React = require("react");


// This is the Form, our main component. It includes the banner and form element
var ImageRow = React.createClass({

    // Here we set a generic state associated with the images passed into the rows
    getInitialState: function() {
//        this.state.imageRow = [];
//        if(this.props.imageData){ this.state.imageRow = this.props.imageData};

        return ( {imageRow: this.props.imageRow ? this.props.imageRow : [] } );
/*        return { images: [],
        imageRow: []};*/
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

    // Here we descibe this component's render method
    render: function() {

        return (
            <div className="row">
                    {this.props.imageRow.map(
                        function(item,itemNum)
                            {
                                return (
                                    <div className="col-xs-3">
                                        <div className="imgFit">
                                        {/*{itemNum}: {item.link}*/}
                                        <img key={itemNum + Math.floor(Math.random()*10000)} src={item.link} className="imgFit" />
                                        </div>
                                    </div>
                                );
                            }
                        )}
            </div>
        );
    }
});

// Export the component back for use in other files
module.exports = ImageRow;
