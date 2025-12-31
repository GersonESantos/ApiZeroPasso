import express from "express";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const router = express.Router();
const prisma = new PrismaClient();

// Cadastro

router.post("/cadastro", async(req, res) => 
{
    const user = req.body;
    await prisma.user.create
    {
        data: 
        {
            name: user.name,
            email: user.email,
        
        },
    }

    res.status(201).json.user
}


export default router;