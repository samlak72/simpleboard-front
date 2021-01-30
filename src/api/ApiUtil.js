const URL_HELLO = "http://localhost:8080/hello";
const URL_FINDALL = "http://localhost:8080/findAll";

function hello() {
    return fetch(URL_HELLO)
        .then(response => {
            return response.json();
        })
        .then(hello=>{
            console.log(hello);
            return hello;
        })
        .catch(error=>console.warn(error))
}

function findAll() {
    return fetch(URL_FINDALL)
        .then(response => {
            return response.json();
        })
        .then(list=>{
            console.log(list);
            return list;
        })
        .catch(error=>console.warn(error))
}

export {
    hello,
    findAll
};