import express from 'express';
import sum from './Services/sum.js';
import product from './Services/product.js';
import sub from './Services/sub.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/getSum/:a/:b', async (req, res) => {
    const { a, b } = req.params;
    console.log(`Calculating sum of ${a} and ${b}`);
    const result = sum(Number(a), Number(b));
    res.send(`The sum of ${a} and ${b} is ${result}`);
}); 

app.get('/getProduct/:a/:b', async (req, res) => {
    const { a, b } = req.params;
    console.log(`Calculating product of ${a} and ${b}`);
    const result = product(Number(a), Number(b));
    res.send(`The product of ${a} and ${b} is ${result}`);
});

app.get('/getSub/:a/:b', async (req, res) => {
    const { a, b } = req.params;
    console.log(`Calculating difference of ${a} and ${b}`);
    const result = sub(Number(a), Number(b));
    res.send(`The difference of ${a} and ${b} is ${result}`);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});