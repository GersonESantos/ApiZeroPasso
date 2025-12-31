import express from "express";
import { PrismaClient } from "@prisma/client";
const router = express.Router();
const prisma = new PrismaClient();


router.post("/cadastro", (req, res) => {
    const user = req.body;

    res.status(201).json({
        message: "User registered successfully",
        user: user,
    });
});

export default router;