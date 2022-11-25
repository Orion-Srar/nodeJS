const fs = require("fs/promises");
const path = require("path");

const reader = async () => {
    const buffer = await fs.readFile(path.join(__dirname, 'DataBase', 'users.json'));
    return  JSON.parse(buffer.toString());
};

const writer = async (users) => {
    await fs.writeFile(path.join(__dirname, 'DataBase', 'users.json'), JSON.stringify(users))
};

module.exports = {
    reader, writer
};
