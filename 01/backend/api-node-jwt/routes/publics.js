import express from "express";
const router = express.Router();



router.post("/cadastro", (req, res) => {
    const user = req.body;

    res.status(201).json({
        message: "User registered successfully",
        user: user,
    });
});

export default router;