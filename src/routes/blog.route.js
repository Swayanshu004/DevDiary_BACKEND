import express from "express"
import { Blog } from "../models/blog.model.js";

const router = express.Router();
router
    .get('/check', (req, res)=>{
        res.status(200).send("check for upbot succeed");
    })
router
    .get('/allBlogs', async(req, res)=>{
        const allBlogs = await Blog.find()
        res.status(201).json(allBlogs);
    })
    .post('/newBlog',async(req, res)=>{
        const blog = await Blog.create({
            title: "DEMO",
            imageUrl: "image_blog.xyz",
            blogUrl: "blog_notion.xyz",
            creatorName: "swayanshu"
        })
        res.status(200).json(blog);
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