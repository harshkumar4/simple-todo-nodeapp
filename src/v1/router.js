const router = require('express').Router();

router.all('/v1',(req,res,next)=>{
    throw Error('some error');
    res.send('v1 route');
    res.end();
});

module.exports = router;