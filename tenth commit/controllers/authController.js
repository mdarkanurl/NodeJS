const userDB = {
    users: require('../model/users.json'),
    setUsers: function (data) { this.users = data }
}

const bcrypt = require('bcrypt');

const handleLogin = async (req, res) => {
    const { username, password } = req.body;
    if(!username || !password) return res.status(400).json({ 'message': 'Username and password are required.' });

    // find user
    const findUser = userDB.users.find(preson => preson.username === username );
    if(!findUser) return res.sendStatus(401); // Unauthorized
    // Evaluate password
    const match = await bcrypt.compare(password, findUser.password);
    if(match) {
        res.json({ 'Success': `${username} is logged in!` });
    } else {
        res.sendStatus(401);
    }
}

module.exports = { handleLogin };