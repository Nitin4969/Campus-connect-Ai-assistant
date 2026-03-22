import React, { useState } from 'react';

const AIChat = () => {
  const [messages, setMessages] = useState([
    { text: 'Hi! How can I assist you today? (Campus events, study help, placement prep, etc.)', sender: 'ai' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      const userMsg = { text: input, sender: 'user' };
      let aiText = 'AI: Thanks for asking!';
      if (input.toLowerCase().includes('placement') || input.toLowerCase().includes('interview')) {
        aiText = 'AI: For placement prep: 1. Practice DSA on LeetCode 2. System design 3. Mock interviews 4. Company research. Specific help?';
      } else if (input.toLowerCase().includes('event')) {
        aiText = 'AI: Check /events for updates!';
      }
      const aiMsg = { text: aiText, sender: 'ai' };
      setMessages(prev => [...prev, userMsg, aiMsg]);
      setInput('');
    }
  };

  return (
    <div className="chat-container">
      <h2>AI Campus Assistant - Placement Prep Ready</h2>
      <div className="chat-box" style={{border: '1px solid #ccc', height: '300px', overflowY: 'scroll', margin: '20px', padding: '10px'}}>
        {messages.map((msg, idx) => (
          <div key={idx} style={{textAlign: msg.sender === 'ai' ? 'left' : 'right', margin: '5px'}}>
            <strong>{msg.sender === 'ai' ? 'AI' : 'You'}:</strong> {msg.text}
          </div>
        ))}
      </div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && handleSend()}
        placeholder="Ask about placements, events..."
        style={{width: '70%', padding: '10px'}}
      />
      <button onClick={handleSend} style={{padding: '10px 20px'}}>Send</button>
    </div>
  );
};

export default AIChat;

