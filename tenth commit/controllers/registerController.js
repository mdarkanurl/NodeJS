const userDB = {
    users: require('../model/users.json'),
    setUsers: function (data) { this.users = data }
}

const fsPromises = require('fs').promises;
const path = require('path');
const bcrypt = require('bcrypt');
const { json } = require('stream/consumers');

const handleNewUser = async (req, res) => {
    const { username, password } = req.body;
    if(!username || !password) return res.status(400).json({ 'message': 'Username and password are required.' });

    // check for duplicate username in th database
    const duplicat = userDB.users.find(parson => parson.username === username);
    if(duplicat) return res.sendStatus(409); // Conflict

    try {
        // Encrypt the password
        const hashedPwd = await bcrypt.hash(password, 10);
        const newUser = { "username": username, "password": hashedPwd };
        userDB.setUsers([...userDB.users, newUser]);
        await fsPromises.writeFile(
            path.join(__dirname, '../model/users.json'),
            JSON.stringify(userDB.users)
        );
        console.log(newUser);
        res.status(201).json({ 'success': `New user ${username} created` });
    } catch (error) {
        res.status(500).json({ 'message': error.message });
    }
}

module.exports = {
    handleNewUser
};