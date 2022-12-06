import fs from "fs/promises";
import path from "path";

module.exports = {
    reader: async () => {
        const buffer = await fs.readFile(path.join(__dirname, 'database', 'users.json'));
        return JSON.parse(buffer.toString());
    },
    writer: async (users) => {
        await fs.writeFile(path.join(__dirname, 'database', 'users.json'), JSON.stringify(users));
    },
}
