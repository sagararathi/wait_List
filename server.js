var express = require('express');
    app     = express();

    app.use(express.static(__dirname,'/'));

    app.get('/lists', function(req, res){
      res.json(lists);
    });

    app.listen(4040);
    console.log("Listening on port 4040");

    var lists = [
                  {id: 1, name: 'Sagar', mobile: 201},
                  {id: 2, name: 'Anushree', mobile: 601},
                  {id: 3, name: 'Aadarsh', mobile: 5512004811},
                ];