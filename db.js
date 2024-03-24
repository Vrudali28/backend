const mongoose = require("mongoose");
const password = encodeURIComponent('purva2810');
function connectDB() {
   mongoose.connect(`mongodb+srv://vrudaliholey:${password}@cluster0.k99mvez.mongodb.net/VrudaliBikes`
    , {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    const connection = mongoose.connection;

    connection.on('connected', () => {
        console.log('Mongo DB Connection Successful');
    });

    connection.on('error', (error) => {
        console.log('Mongo DB Connection Error:', error);
    });
}

connectDB();

module.exports = mongoose;
