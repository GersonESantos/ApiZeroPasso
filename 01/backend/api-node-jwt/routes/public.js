import express from 'express';
const router = express.Router();
router.post('/cadastro', (req, res) => {
    const user = req.body;
    // Aqui você pode adicionar lógica para salvar o usuário no banco de dados
    res.status(201).json({ message: 'Usuário cadastrado com sucesso!', user });  
});
export default router;
