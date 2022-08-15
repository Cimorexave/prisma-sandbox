import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

async function main() {
    //prisma queries here
    const user = await prisma.user.create({ data: { name: "Changiz" } })
    console.log(user);
    
}

main ().catch((e) => {
    console.error(e.message)
}).finally( async () => {
    await prisma.$disconnect
})