// Require mongoose
var mongoose = require("mongoose");
// Create Schema class
var Schema = mongoose.Schema;

// Create article schema
var ImageSchema = new Schema({
    // title is a required string
    title: {
        type: String,
        required: true
    },
    // link is a required string
    link: {
        type: String,
        required: true
    },

    caption: {
        type: String,
        required: false
    }
    // This only saves one note's ObjectId, ref refers to the Note model
/*    caption: {
        caption: Schema.Types.ObjectId,
        ref: "Caption"
    }*/
});

// Create the Article model with the ArticleSchema
var Image = mongoose.model("Image", ImageSchema);

// Export the model
module.exports = Image;
