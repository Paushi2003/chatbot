import React, { useState} from "react";
import { Button } from "react-bootstrap";
import ChatMessage from "./ChatMessage";
import { analyze } from "./utils";

export default function Chatbot() {

    const [messages, setMessages] = useState(
        [
            {
                message: "Hi, May I have your name?"
            }
        ]
    );
    const [text, setText] = useState('');
    const onSend = () => {
        let list=[...messages,{message: text,user: true}];
        if (list.length>2){
            const reply = analyze(text)
            list = [
                ...list,
                {message: reply}
            ];
        }
        else{
            list = [
                ...list,
                {
                    message: `Hi, ${text}`,
                },
                {
                    message: 'How can I help you?'
                },
            ];
        }
        setMessages(list)
        setText("")
        setTimeout(()=>{
            document.querySelector('#copyright').scrollIntoView();
        },1);
    };
    return (
        <div >
            <div className="d-flex align-items-center justify-content-center">
                <img src={require("./bot.png")}
                    alt="bot"
                    height='auto'
                    width={100}></img>
                <h2 className="text-primary">CHATBOT</h2>
            </div>
            <div className="chat-message align-items-center justify-content-center">
                {
                    messages.length > 0 && messages.map((data) => <ChatMessage {...data} />)
                }
                <div className="d-flex mt-2">
                    <input type='text' className="form-control" value={text} onChange={(e) => setText(e.target.value)} />
                    <Button type='primary' className="ms-3" onClick={onSend} id="send">Send</Button>
                </div>
                <div id="copyright" className="mt-3">Copyrights reserved</div>
            </div>
        </div>
    )
}