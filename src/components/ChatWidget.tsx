import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, Send } from 'lucide-react';

export const ChatWidget = () => {

  const [isOpen,setIsOpen]=useState(false);
  const [message,setMessage]=useState('');

  const [messages,setMessages]=useState([
  { role:"bot",text:"Hi there! 👋 How can we help you today?" }
  ]);

  const API_KEY="AIzaSyDSQ71XUa0wfs_B8iyu1blKCkFxvcqUA-o";


  const sendMessage=async()=>{

    if(!message.trim()) return;

    const userMessage=message;

    setMessages(prev=>[
    ...prev,
    { role:"user",text:userMessage }
    ]);

    setMessage("");

    try{

      const res=await fetch(
      ""https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key="+API_KEY,
      {
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
          body:JSON.stringify({
          contents:[
          {
          role:"user",
          parts:[
          { text:userMessage }
          ]
          }
          ]
        })
      }
      );

      const data=await res.json();

      const reply=
      data.candidates?.[0]?.content?.parts?.[0]?.text||
      "Sorry I couldn't understand.";

      setMessages(prev=>[
      ...prev,
      { role:"bot",text:reply }
      ]);

    }

    catch{

      setMessages(prev=>[
      ...prev,
      {
      role:"bot",
      text:"Error ❌ Please contact us via WhatsApp or Email."
      }
      ]);

    }

  };


  return(

    <div className="fixed bottom-6 right-6 z-[100]">

      <AnimatePresence>

        {isOpen&&(

          <motion.div
          initial={{opacity:0,scale:0.8,y:20}}
          animate={{opacity:1,scale:1,y:0}}
          exit={{opacity:0,scale:0.8,y:20}}
          className="bg-white rounded-2xl shadow-2xl border border-slate-100 w-80 mb-4 overflow-hidden"
          >

            <div className="bg-primary p-4 text-slate-100 flex justify-between items-center shadow-led-blue">

              <div>
                <h4 className="font-bold">Chat with us</h4>
                <p className="text-xs text-slate-100/80">We usually reply in a few minutes</p>
              </div>

              <button onClick={()=>setIsOpen(false)} className="hover:bg-slate-100/20 p-1 rounded-lg transition-colors">
                <X className="w-5 h-5"/>
              </button>

            </div>



            <div className="h-64 p-4 overflow-y-auto bg-slate-50 flex flex-col gap-3">

            {messages.map((msg,i)=>(
            <div
            key={i}
            className={
            msg.role==="user"
            ? "bg-primary text-white p-3 rounded-2xl rounded-br-none self-end max-w-[80%]"
            : "bg-slate-100 p-3 rounded-2xl rounded-tl-none shadow-sm border border-slate-200 max-w-[80%]"
            }
            >
            <p className="text-sm">{msg.text}</p>
            </div>
            ))}

            </div>



            <div className="p-4 border-t border-slate-100 flex gap-2">

              <input
              type="text"
              placeholder="Type a message..."
              className="flex-1 bg-slate-100 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
              value={message}
              onChange={(e)=>setMessage(e.target.value)}
              onKeyDown={(e)=>e.key==="Enter"&&sendMessage()}
              />

              <button
              onClick={sendMessage}
              className="bg-primary text-slate-100 p-2 rounded-lg hover:bg-primary-dark transition-colors"
              >
              <Send className="w-4 h-4"/>
              </button>

            </div>

          </motion.div>

        )}

      </AnimatePresence>



      <motion.button
      whileHover={{scale:1.1}}
      whileTap={{scale:0.9}}
      onClick={()=>setIsOpen(!isOpen)}
      className="w-14 h-14 bg-primary text-slate-100 rounded-full shadow-led-blue flex items-center justify-center hover:bg-primary-dark transition-all relative group"
      >

        <MessageCircle className="w-7 h-7"/>

        <span className="absolute right-full mr-4 bg-slate-900 text-slate-100 px-3 py-1.5 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Need help?
        </span>

      </motion.button>

    </div>

  );

};
