import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import AIChat from './components/AIChat';
import Profile from './components/Profile';
import NotesShare from './components/NotesShare';
import Events from './components/Events';
// Import CSS later

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Campus Connect + AI Assistant</h1>
        </header>
        <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/notes" element={<NotesShare />} />
        <Route path="/events" element={<Events />} />
        <Route path="/ai-chat" element={<AIChat />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;

