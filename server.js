const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
const dbConnection = require('./db');

app.use(express.json());

// Use CORS middleware to allow requests from all origins
app.use(cors());

// Routes
app.use('/api/bikes/', require('./routes/bikesRoute'));
app.use('/api/users/', require('./routes/usersRoute'));
app.use('/api/bookings/', require('./routes/bookingsRoute'));

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Node.js server started on port ${port}`));

/*const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const dbConnection = require('./db')
app.use(express.json())

app.use('/api/bikes/' ,require('./routes/bikesRoute'))
app.use('/api/users/' ,require('./routes/usersRoute'))
app.use('/api/bookings/' ,require('./routes/bookingsRoute'))
app.get('/',(req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Node js server started in port ${port}`))*/


