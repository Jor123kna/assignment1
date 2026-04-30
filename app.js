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
    res.send(
        `<ul>
            <li><button onclick="window.location.href='/signup'">Sign up</button></li>
            <li><button onclick="window.location.href='/login'">Login</button></li>
        </ul>`
    );
});

app.get('/signup', (req, res) => {
    res.send(
        `<header>
            <h1>Create User</h1>
        </header>
        <input type="text" name="username" placeholder="Username" required> <br>
        <input type="email" name="email" placeholder="Email" required> <br>
        <input type="password" name="password" placeholder="Password" required> <br>
        <button type="submit">Create</button>`
    );
});

app.get('/login', (req, res) => {
    res.send(
        `<form action="/login" method="post">
            <input type="text" name="username" placeholder="Username" required> <br>
            <input type="password" name="password" placeholder="Password" required> <br>
            <button type="submit">Login</button>
        </form>`
    );
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