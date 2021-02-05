// importing modules
var mongoose = require("mongoose"),
  Schema = mongoose.Schema;

mongoose.connect(process.env.dbConnUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const Command = new Schema({
    name: String,
    embed: Object,
});

// export commandschema
module.exports = new mongoose.model("Command", Command);