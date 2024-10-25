import express from "express"

const router = express.Router();
router
    .get('/allBlogs', async(req, res)=>{
        const allBlogs = await Blog.find()
        res.status(201).json(allBlogs);
    })
    .get('/allSeries', async(req, res)=>{
        const allSeries = await Series.find()
        res.status(201).json(allSeries);
    })
    .get('/series/:seriesId', async(req, res)=>{
        const series = await Series.findOne({
            $or: [{ _id: req.params.seriesId }]
        });
        res.status(201).json(series);
    })

export default router;