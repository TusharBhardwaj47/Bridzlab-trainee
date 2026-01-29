import fs from "fs";

function loginUser(name, email, password) {
    try {
        if (fs.existsSync("todo.json")) {
            let data = JSON.parse(fs.readFileSync("todo.json", "utf-8"));

            let isUser = data.find((value) => {
                if (
                    value.name === name &&
                    value.password === password
                ) {
                    return true;
                }
            });

            if (isUser) {
                return isUser;
            } else {
                return false;
            }

            return {
                message: "login successful",
                user: user
            };
        }
    } catch (error) {
        console.log(error);
    }
}

export default loginUser;
