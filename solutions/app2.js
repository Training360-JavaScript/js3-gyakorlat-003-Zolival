'use strict'

const cookieHandler = {
    getAll(){
        const cookies = document.cookie.split(';')
        .map((item)=> {
            const [zero, one] = item.split('=');
            return [zero.trim(), one.trim()]
        });
        return Object.fromEntries(cookies);
    },

    toSessionStorage(){
        const cookies = this.getAll();
        for(let key in cookies){
            sessionStorage.setItem(key, cookies[key])
        }
        return sessionStorage
    },
    
    flush(){
        const cookies = document.cookie.split(`; `)
        .forEach((item) => {
            const txt = `${item.split("=")[0]}=; expires=Thu, 01 Jan 1970 00:00:00 GMT`
            document.cookie = txt
        })
        return cookies

    }
    
}
/*
console.log('getAll = ', cookieHandler.getAll());
console.log(`toSessionStorage = `, cookieHandler.toSessionStorage());
console.log(`flush return = `, cookieHandler.flush());
*/

export { cookieHandler };

