import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient();


export async function UsersIndex(req, res) {
    const users = await prisma.user.findMany({
            include: {
                posts: true
            }
        }
    )
    res.json({data: users})
}

export async function UserById(req, res) {
    const user = await prisma.user.findUnique({
        where: {
            id: req.params['id']
        }
    })
    res.json({data: user})
}

export async function UserCreate(req, res) {
    const users = await prisma.user.create({
        data: {
            email: 'user@1example.com',
            name: 'User is Name',
        }
    })
    res.json({data: users})
}