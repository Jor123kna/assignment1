const express = require('express');
const session = require('express-session');

const app = express();

const node_session_secret = '';

app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true,
})
)

const port = process.env.PORT || 3000;

//Routes
app.get('/', (req, res) => {
    res.send('Hello World!!');
});

// Handle 404 errors
app.use((req, res) => {
    res.status(404).json({ error: '404 Not Found' });
});

//Error handling middleware
app.use((err, req, res) => {
    console.error(err.stack);
    res.status(500).json({ error: '500 Internal Server Error' });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});