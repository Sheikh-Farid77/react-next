export const createConnection = ()=>{
    return {
        connect (){
            console.log('Connected to chat room')
        },
        disconnect(){
            console.log('disconnected to chat room')
        }
    }
}