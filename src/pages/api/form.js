const users = [];

export default function Form(req, res) {
    if(req.method === 'POST'){
        post(req, res);
    } else if (req.method === 'GET') {
        get(req, res);
    } else {
        return res.status(405).send();
    }
}

function post(req, res) {
    const user = JSON.parse(req.body);
    users.push(user);
    res.status(200).send();
}

function get(req, res) {
    res.status(200).json(users);
}