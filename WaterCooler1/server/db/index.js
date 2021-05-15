const mongoose = require('mongoose');

mongoose
    .connect('mongodb+srv://test123:test123@cluster0.bx3lx.mongodb.net/teamwolf', { useNewUrlParser: true, useUnifiedTopology: true })
    .catch(e => {
        console.error('Connection error', e.message);
    });

const db = mongoose.connection;

module.exports = db;