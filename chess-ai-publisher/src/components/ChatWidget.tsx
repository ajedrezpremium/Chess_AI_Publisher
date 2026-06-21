'use client';

import { useState, useRef, useEffect } from 'react';
import { t, type Lang } from '@/lib/i18n';

interface ChatWidgetProps {
  lang: Lang;
  onPointsEarned?: (amount: number) => void;
}

export default function ChatWidget({ lang, onPointsEarned }: ChatWidgetProps) {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([
    { role: 'assistant', content: t('chat.welcome', lang) },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [open]);

  const handleSend = async () => {
    const text = input.trim();
    if (!text || loading) return;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: text }]);
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text, lang }),
      });
      const data = await res.json();
      setMessages(prev => [...prev, { role: 'assistant', content: data.response }]);
      if (data.pointsAwarded) onPointsEarned?.(data.pointsAwarded);
    } catch {
      setMessages(prev => [...prev, { role: 'assistant', content: '⚠️ Error de conexión. Inténtalo de nuevo.' }]);
    }
    setLoading(false);
  };

  const quickReplies = [
    { key: 'chat.q1', text: '📚' },
    { key: 'chat.q2', text: '🎯' },
    { key: 'chat.q3', text: '🤖' },
    { key: 'chat.q4', text: '⭐' },
  ];

  return (
    <div className="chat-widget">
      <div className={`chat-panel${open ? ' open' : ''}`}>
        <div className="chat-header">
          <div className="avatar">♚</div>
          <div className="info">
            <h4>{t('chat.name', lang)}</h4>
            <p>{t('chat.status', lang)}</p>
          </div>
          <button className="close-btn" onClick={() => setOpen(false)}>✕</button>
        </div>
        <div className="quick-replies">
          {quickReplies.map((qr, i) => (
            <button key={i} className="quick-reply" onClick={() => {
              setInput(qr.text + ' ');
              inputRef.current?.focus();
            }}>
              {qr.text}
            </button>
          ))}
        </div>
        <div className="chat-messages">
          {messages.map((msg, i) => (
            <div key={i} className={`message ${msg.role === 'assistant' ? 'bot' : 'user'}`}>
              <span>{msg.content}</span>
              <div className="msg-time">{(new Date()).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
            </div>
          ))}
          {loading && (
            <div className="chat-typing"><span /><span /><span /></div>
          )}
          <div ref={messagesEndRef} />
        </div>
        <div className="chat-input-area">
          <textarea ref={inputRef} value={input} onChange={e => setInput(e.target.value)}
            placeholder={t('chat.placeholder', lang)} rows={1}
            onKeyDown={e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSend(); } }} />
          <button className="send-btn" onClick={handleSend} disabled={loading || !input.trim()}>➤</button>
        </div>
      </div>
      <button className="chat-toggle" onClick={() => setOpen(true)} style={{ display: open ? 'none' : 'flex' }}>
        <span className="icon">♚</span>
        <span className="badge">1</span>
      </button>
    </div>
  );
}
