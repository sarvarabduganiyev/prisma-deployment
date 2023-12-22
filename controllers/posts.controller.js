import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient();

export async function PostsIndex(req, res) {
    const users = await prisma.post.findMany({
        include: {
            author: true
        }
    })
    res.statusCode(200).json({data: users});
}

export async function PostsCreate(req, res) {
    const users = await prisma.post.create({
        data: {
            title: 'One Post',
            content: 'OnePost',
            published: true,
            authorId: "1",
        }
    })
    res.json({data: users})
}

/*
*  id
* parent_id
* path: slug
*  category
* name
*
*_____________
* Simple page
* Detail page
* Link
*
*
* */