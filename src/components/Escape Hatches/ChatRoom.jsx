import { useEffect } from "react";
import { createConnection } from "../../utility/chat";

export default function ChatRoom(){
    useEffect(() => {
        const chat = createConnection();
        chat.connect();

        return ()=> {
            chat.disconnect();
        }
    }, [])
    return (
        <h1>Hello World</h1>
    );
}