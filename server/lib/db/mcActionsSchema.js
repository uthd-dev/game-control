// importing modules 
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    
mongoose.connect("mongodb://localhost/user", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
  
const mcActions = new Schema({
    actionId: String,
    name: String,
    vars: Object
});

// export userschema 
 module.exports = new mongoose.model('mcActions', mcActions); 