//requires
let express = require( 'express' );
let app = express();
let bodyParser = require('body-parser');
//uses
app.use(express.static('server/public'))
app.use(bodyParser.urlencoded( {extended: true}));
//globals
let port = 34586
//spin up server
app.listen(port, function(){
    console.log('server running on' + port );
});
