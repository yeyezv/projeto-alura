import express from 'express';
import routes from './src/routes/postsRoutes.js';


const posts = [
    { descricao: 'Gatinho', imagem: 'https://placecats.com/millie/300/150', id: 1 },
    { descricao: 'Gato fazendo yoga', imagem: 'https://placecats.com/millie/300/150', id: 2 },
    { descricao: 'Gato tomando banho', imagem: 'https://placecats.com/millie/300/150', id: 3 },
  ];

const app = express();
app.use(express.static('uploads'))
routes(app)

app.listen(3000, () => {
    console.log('Servidor escutando...');
});


app.get('/posts', async (req, res) => {
    const posts = await getTodosPosts()
    res.status(200).json(posts);

});



