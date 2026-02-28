import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, Send } from 'lucide-react';

export const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="bg-white rounded-2xl shadow-2xl border border-slate-100 w-80 mb-4 overflow-hidden"
          >
            <div className="bg-primary p-4 text-slate-100 flex justify-between items-center shadow-led-blue">
              <div>
                <h4 className="font-bold">Chat with us</h4>
                <p className="text-xs text-slate-100/80">We usually reply in a few minutes</p>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:bg-slate-100/20 p-1 rounded-lg transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="h-64 p-4 overflow-y-auto bg-slate-50 flex flex-col gap-3">
              <div className="bg-slate-100 p-3 rounded-2xl rounded-tl-none shadow-sm border border-slate-200 max-w-[80%]">
                <p className="text-sm text-slate-700">Hi there! 👋 How can we help you today?</p>
              </div>
            </div>
            
            <div className="p-4 border-t border-slate-100 flex gap-2">
              <input 
                type="text" 
                placeholder="Type a message..."
                className="flex-1 bg-slate-100 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button className="bg-primary text-slate-100 p-2 rounded-lg hover:bg-primary-dark transition-colors">
                <Send className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-primary text-slate-100 rounded-full shadow-led-blue flex items-center justify-center hover:bg-primary-dark transition-all relative group"
      >
        <MessageCircle className="w-7 h-7" />
        <span className="absolute right-full mr-4 bg-slate-900 text-slate-100 px-3 py-1.5 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Need help?
        </span>
      </motion.button>
    </div>
  );
};
