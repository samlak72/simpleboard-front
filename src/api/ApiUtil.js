const URL_API = "http://localhost:8080/api/v1";

const URL_HELLO = `${URL_API}/hello`;
const URL_FINDALL = `${URL_API}/simpleboards`;
const URL_SAVE_MESSAGE = `${URL_API}/simpleboard`;

function hello() {
    return fetch(URL_HELLO)
        .then(response => {
            return response.json();
        })
        .then(hello=>{
            console.log(hello);
            return hello;
        })
        .catch(error=>console.warn(error));
}

function findAllSimpleboards(page) {
    return fetch(`${URL_FINDALL}/${page}`)
        .then(response => {
            return response.json();
        })
        .then(list=>{
            return list;
        })
        .catch(error=>console.warn(error));
}

function saveSimpleboard(message){
    const requestOptions = {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(message)
    }
    return fetch(URL_SAVE_MESSAGE, requestOptions)
        .then(response => {
            return response.json();
        })
        .then(result=>{
            console.log(result);
            return result;
        })
        .catch(error=>console.warn(error));
}

function updateSimpleboard(message){
    const requestOptions = {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({message: message.message,id:message.id})
    }
    return fetch(`${URL_SAVE_MESSAGE}/`, requestOptions)
        .then(response => {
            return response.json();
        })
        .then(result=>{
            console.log(result);
            return result;
        })
        .catch(error=>console.warn(error));
}

function deleteSimpleboard(message){
    const requestOptions = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Allow": "PUT, POST, DELETE"
        },
        body: JSON.stringify({message: message.message,id:message.id})
    }
    return fetch(`${URL_SAVE_MESSAGE}`, requestOptions)
        .then(response => {
            return response.json();
        })
        .then(result=>{
            console.log(result);
            return result;
        })
        .catch(error=>console.warn(error));
}

export {
    hello,
    findAllSimpleboards,
    saveSimpleboard,
    updateSimpleboard,
    deleteSimpleboard,
};
