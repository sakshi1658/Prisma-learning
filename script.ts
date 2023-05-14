import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
    const users = await prisma.user.findMany({
    //     data:[
    //         {
    //         name: "sakshi",
    //         age: 25,
    //         email: "sakshi@test.com"
    //     },
    // ],
    where: {
        name:{equals:"sakshi"},
    },
    // distinct:["name"],

    // take: 2,
    // skip: 1,

    // orderBy: {
    //     age: "desc",
    // },
    })

    console.log(users)

}
main()
    .catch(e => {
        console.log(e.message)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })

    