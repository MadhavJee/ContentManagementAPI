import express from 'express';

const webhookRouter = express.Router();
webhookRouter.post('/test', (req, res) => {
    console.log("Gitub webhook received:");
    console.log(req.body);
    res.status(200).json({received:true});  
    req.json({received:true});
});
export default webhookRouter;