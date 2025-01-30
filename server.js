import express from 'express'


const PORT = 3333;
const app = express()


app.use('/', express.static('public'));
app.listen(PORT, () => {
    console.log(`BACKEND RUNNING AT PORT ${PORT}`);
});


const serialPort = new SerialPort ({
    path: 'COM3',
    baudRate: 9600,
})


const parser = serialPort.pipe(new ReadlineParser({ delimiter: "\n" }))

let arduinoData = '';

parser.on('data', (data) => {
    console.log('Dados recebidos!', data)
    arduinoData = data,
})

app.get('/data', (req, res) => {
    res.send(arduinoData)
})

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
