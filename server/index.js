const express = require('express');
const friendsRoute = require('./routes/friends.route');
const groupsRoute = require('./routes/groups.route');
const billsRoute = require('./routes/bills.route');

require("./models/index")
let app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(express.json())

app.use("/api/friends",friendsRoute)
app.use("/api/groups",groupsRoute)
app.use("/api/bills",billsRoute)


let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

