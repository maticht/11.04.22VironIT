let body
let userArr = [{"id": 1, "name": 'Alex', "age": 50},
    {"id": 2, "name": 'Max', "age": 40},
    {"id": 3, "name": 'Egor', "age": 45},
    {"id": 4, "name": 'Misha', "age": 20}]
// [{"id":5,"name":"Dima","age":50},{"id":6,"name":"Valera","age":30},{"id":7,"name":"Pit","age":40}]

module.exports.getAllUsers = (req,res) => {
    res.end(JSON.stringify(userArr.flat()))
}

module.exports.getUsersById = (req,res) => {
    res.end(JSON.stringify(userArr.flat()[req.params.id - 1]))
}

module.exports.deleteUsersById = (req,res) => {
    delete userArr[req.params.id - 1]
    res.end(`User with id ${req.params.id} has been deleted`)
}

module.exports.addUser = (req,res) => {
    body = '';
    req.on('data', chunk => {
        body += chunk.toString()
    });
    req.on('end', () => {
        userArr.push(JSON.parse(body))
        res.end('User has been added')
    });
}

module.exports.overwriteAllUsers = (req,res) => {
    body = ''
    req.on('data', chunk => {
        body += chunk.toString()
    });
    req.on('end', () => {
        userArr.splice(0,userArr.length,JSON.parse(body))
        res.end('Array with users has been overwritten')
    });
}

module.exports.overwriteUsersById = (req,res) => {
    body = ''
    req.on('data', chunk => {
        body += chunk.toString()
    });
    req.on('end', () => {
        userArr.splice(req.params.id - 1,1,JSON.parse(body))
        res.end('Users has been overwritten')
    });
}

