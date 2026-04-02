function hello(name){
    const username = name();
    console.log(`Hello ${username}`);
}

function name(){
    let name = "Kishor";
    return name;
}

hello(name);