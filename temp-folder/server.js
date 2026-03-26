import express from 'express';
import sum from './sum.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/getSum/:a/:b', async (req, res) => {
    const { a, b } = req.params;
    const result = sum(Number(a), Number(b));
    res.send(`The sum of ${a} and ${b} is ${result}`);
}); 

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});