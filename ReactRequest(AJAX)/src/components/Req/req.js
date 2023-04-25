const  AJAX = (url="", callback, method="GET") => {

    
    const ajax = new XMLHttpRequest();

    ajax.open(method, url);
    ajax.send();
    ajax.addEventListener('readystatechange', () => {
        if(ajax.readyState === 4 && ajax.status <=200){
            callback(JSON.parse(ajax.responseText));
        }else if(ajax.readyState === 4){
            alert("ERROR");
        }
    });
}

export default AJAX;