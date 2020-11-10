const express = require('express')
const router = express.Router()


// Add your routes here - above the module.exports line


require('./views/Set_Up_A_Direct_Debit/v1/routes-dd')(router);
require('./views/Set_Up_A_Direct_Debit/v2/routes-dd')(router);
require('./views/Set_Up_A_Direct_Debit/v3/routes-dd')(router);
require('./views/Set_Up_A_Direct_Debit/v4/routes-dd')(router);

// require('./views/Link_Web_Account_To_Council_Tax/v1/routes-register')(router);

module.exports = router
