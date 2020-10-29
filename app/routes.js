const express = require('express')
const router = express.Router()


// Add your routes here - above the module.exports line


require('./views/Set_Up_A_Direct_Debit/v1/routes-dd')(router);
require('./views/Set_Up_A_Direct_Debit/v2/routes-dd')(router);
require('./views/Set_Up_A_Direct_Debit/v3/routes-dd')(router);

require('./views/Register_To_Use_Online/v1/routes-register')(router);

module.exports = router
