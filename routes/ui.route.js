import express from 'express';
import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient();
const router = express.Router();

router.get("/", async (req, res) => {
    res.render("pages/index");
});
router.get("/blog", async (req, res) => {
    try {
        const post = await prisma.post.findMany({
            include: {
                author: true
            }
        })
        // console.log(post)
        // res.json({data:post})
        res.render("pages/blog", {data: post});
    } catch (error) {
        console.log("error", error)
    }
})
router.get("/blog-details", (req, res) => {
    res.render("pages/blog-details");
})
router.get("/portfolio", (req, res) => {
    res.render("pages/portfolio-details");
})
router.get("/services", (req, res) => {
    res.render("pages/services-details");
})


export default router;