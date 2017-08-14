// Include React
var React = require("react");

var searchGifs = require("../utils/helpers").searchGifs;

var searchArticle = require("../utils/helpers").searchArticle;

// This is the Form, our main component. It includes the banner and form element
var Form = React.createClass({

    // Here we set a generic state associated with the text being searched for
    getInitialState: function() {
        return { searchStr: 'the+more+you+know' };
    },

    stateSet: function(stateObj) {
        this.setState(stateObj);
    }.bind(this),

    // This function will respond to the user input
    handleTyping: function(event) {
        // Here we create syntax to capture any change in text to the query terms (pre-search).
        // See this Stack Overflow answer for more details:
        // http://stackoverflow.com/questions/21029999/react-js-identifying-different-inputs-with-one-onchange-handler
/*        var newState = {};
        newState[event.target.id] = event.target.value;
        this.setState(newState);*/

        console.log(this.state.searchStr);
        this.setState({searchStr: event.target.value});
    },

    handleClick: function(event) {
          var searchTerm = this.state.searchStr;
//        searchGifs({searchStr: searchTerm}, this.stateSet);
          searchArticle({searchStr: searchTerm})
             .then(function(response) {
                 console.log('received response:',response);
                 console.log(this.props.stateSetMain);
                 this.props.stateSetMain(Array.from(response.data));
//                 this.props.updateAll();
//                 this.props.updateAll();
//                 this.props.renderMain();
             }.bind(this) );
//            .then(function(response) {this.setState()});
    },

    // Here we descibe this component's render method
    render: function() {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title text-center">Goophy Search Form</h3>
                </div>
                <div className="panel-body text-center">
                    <form>
                        <div className="form-group">
                            {/*
          Note how each of the form elements has an id that matches the state.
          This is not necessary but it is convenient.
          Also note how each has an onChange event associated with our handleChange event.
        */}

                            <h4>
                                <strong>Search for animated gifs!</strong>
                            </h4>
                            <input
                                type="text"
                                value={this.state.searchStr}
                                className="form-control"
                                id="search"
                                onChange={this.handleTyping}
                                required
                            />

                            {/*
                                    Proof that the form is reacting!
                                <p>{this.state.searchStr}</p>
                            */}

                            <button
                                className="btn btn-primary btn-lg"
                                type="button"
                                onClick={this.handleClick}
                            >
                                SEARCH FOR ANIMATED GIFS!!!!
                            </button>

                            {/* Here we create a button click for resetting the database */}
                            <button
                                className="btn btn-danger btn-lg"
                                type="button"
                                onClick={this.resetClick}
                            >
                                Reset
                            </button>


                        </div>
                    </form>
                </div>
            </div>
        );
    }
});

// Export the component back for use in other files
module.exports = Form;
