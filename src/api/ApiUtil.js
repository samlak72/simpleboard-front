const URL_HELLO = "http://localhost:8080/hello";
const URL_FINDALL = "http://localhost:8080/findAll";
const URL_SAVE_MESSAGE = "http://localhost:8080/saveMessage";

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

function findAll(page) {
    return fetch(`${URL_FINDALL}?page=${page}`)
        .then(response => {
            return response.json();
        })
        .then(list=>{
            console.log(list);
            return list;
        })
        .catch(error=>console.warn(error));
}

function saveMessage(message){
    const requestOptions = {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({message: message})
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

export {
    hello,
    findAll,
    saveMessage
};