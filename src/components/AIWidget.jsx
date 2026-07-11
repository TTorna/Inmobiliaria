import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { useLocation } from 'react-router-dom';

export default function AIWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, sender: 'ai', text: 'Hola, soy tu asistente virtual de T&T. ¿Querés consultar expensas o agendar una visita?' }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const location = useLocation();

  const isPropertyPage = location.pathname.startsWith('/propiedad/');
  const mobileBottomClass = isPropertyPage ? 'bottom-24' : 'bottom-4';

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, isOpen]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    // Add user message
    const userMsg = { id: Date.now(), sender: 'user', text: inputText };
    setMessages(prev => [...prev, userMsg]);
    setInputText('');
    setIsTyping(true);

    // Simulate AI response delay
    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [...prev, {
        id: Date.now(),
        sender: 'ai',
        text: '¡Gracias por tu mensaje! Un asesor premium se pondrá en contacto pronto a través de WhatsApp para brindarte atención personalizada.'
      }]);
    }, 1500);
  };

  return (
    <div className={`fixed ${mobileBottomClass} left-4 lg:bottom-6 lg:left-auto lg:right-6 z-50 transition-all duration-300`}>
      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-20 left-0 lg:left-auto lg:right-0 w-[calc(100vw-2rem)] lg:w-80 bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 transition-all transform origin-bottom-left lg:origin-bottom-right animate-fade-in-up">
          {/* Header */}
          <div className="bg-charcoal text-white p-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="font-medium">Asistente Virtual</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-white transition-colors">
              <X size={20} />
            </button>
          </div>
          
          {/* Messages Area */}
          <div className="p-4 h-72 bg-gray-50 flex flex-col gap-4 overflow-y-auto">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex gap-3 ${msg.sender === 'user' ? 'flex-row-reverse' : ''}`}>
                {msg.sender === 'ai' && (
                  <div className="w-8 h-8 rounded-full bg-gold flex items-center justify-center text-white font-bold text-xs flex-shrink-0">
                    AI
                  </div>
                )}
                <div className={`p-3 rounded-2xl text-sm shadow-sm max-w-[85%] ${
                  msg.sender === 'user' 
                    ? 'bg-charcoal text-white rounded-tr-none' 
                    : 'bg-white text-charcoal rounded-tl-none'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {isTyping && (
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-gold flex items-center justify-center text-white font-bold text-xs flex-shrink-0">
                  AI
                </div>
                <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm flex items-center gap-1">
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          
          {/* Input Area */}
          <form onSubmit={handleSendMessage} className="p-3 bg-white border-t border-gray-100">
            <div className="flex items-center bg-gray-50 rounded-full pr-1">
              <input 
                type="text" 
                placeholder="Escribe tu mensaje..." 
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                className="w-full bg-transparent outline-none px-4 py-2 text-sm text-charcoal"
              />
              <button 
                type="submit"
                disabled={!inputText.trim()}
                className="bg-gold text-white p-1.5 rounded-full hover:bg-gold-light transition-colors disabled:opacity-50 disabled:hover:bg-gold"
              >
                <Send size={16} />
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full flex items-center justify-center text-white shadow-xl shadow-gold/30 transition-all duration-300 hover:scale-110 ${isOpen ? 'bg-charcoal' : 'bg-gold'}`}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={28} />}
      </button>
    </div>
  );
}
