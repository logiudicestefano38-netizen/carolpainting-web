(function() {
    const chatHTML = `
        <div id="custom-chat-widget" class="chat-widget-closed">
            <button id="chat-toggle-btn" class="chat-toggle-button" aria-label="Abrir chat">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" fill="currentColor"/>
                    <path d="M7 9h10M7 13h7" stroke="white" stroke-width="2" stroke-linecap="round"/>
                </svg>
                <span class="chat-badge">1</span>
            </button>
            
            <div id="chat-window" class="chat-window">
                <div class="chat-header">
                    <div class="chat-header-content">
                        <div class="chat-company-info">
                            <h3>Carol Painting</h3>
                            <span class="chat-status">En línea</span>
                        </div>
                    </div>
                    <button id="chat-close-btn" class="chat-close-button" aria-label="Cerrar chat">&times;</button>
                </div>
                
                <div id="chat-messages" class="chat-messages">
                    <div class="chat-message chat-message-received">
                        <div class="message-content">
                            <p>¡Hola! Bienvenido a Carol Painting 👋</p>
                            <p>Estamos aquí para ayudarte con tu proyecto.</p>
                            <div class="message-time">${new Date().toLocaleTimeString('es-ES', {hour: '2-digit', minute: '2-digit'})}</div>
                        </div>
                    </div>
                    <div class="chat-message chat-message-received">
                        <div class="message-content">
                            <p>¿En qué servicio estás interesado?</p>
                            <div class="quick-replies">
                                <button class="quick-reply-btn" data-message="Pintura">🎨 Pintura</button>
                                <button class="quick-reply-btn" data-message="Remodelación">🔨 Remodelación</button>
                                <button class="quick-reply-btn" data-message="Construcción">🏗️ Construcción</button>
                            </div>
                            <div class="message-time">${new Date().toLocaleTimeString('es-ES', {hour: '2-digit', minute: '2-digit'})}</div>
                        </div>
                    </div>
                </div>
                
                <div class="chat-input-container">
                    <input type="text" id="chat-input" class="chat-input" placeholder="Escribe tu mensaje..." autocomplete="off">
                    <button id="chat-send-btn" class="chat-send-button" aria-label="Enviar mensaje">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 10l16-8-8 16-2-8-6-0z" fill="currentColor"/>
                        </svg>
                    </button>
                </div>
                
                <div class="chat-footer">
                    <p>📧 henryhernan1992@gmail.com</p>
                    <p>📞 <a href="tel:+17863348969">+1 786-334-8969</a></p>
                    <p>💬 <a href="https://wa.me/17863348969" target="_blank">WhatsApp</a></p>
                </div>
            </div>
        </div>
    `;

    const chatStyles = `
        <style>
            #custom-chat-widget {
                position: fixed;
                bottom: 20px;
                right: 20px;
                z-index: 9999;
                font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
            }

            .chat-toggle-button {
                width: 60px;
                height: 60px;
                border-radius: 50%;
                background: linear-gradient(135deg, #2196f3 0%, #0d1a2f 100%);
                border: none;
                cursor: pointer;
                box-shadow: 0 4px 12px rgba(33, 150, 243, 0.4);
                display: flex;
                align-items: center;
                justify-content: center;
                color: white;
                transition: transform 0.3s, box-shadow 0.3s;
                position: relative;
            }

            .chat-toggle-button:hover {
                transform: scale(1.1);
                box-shadow: 0 6px 20px rgba(33, 150, 243, 0.6);
            }

            .chat-badge {
                position: absolute;
                top: -5px;
                right: -5px;
                background: #f44336;
                color: white;
                border-radius: 50%;
                width: 22px;
                height: 22px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 12px;
                font-weight: bold;
                animation: pulse 2s infinite;
            }

            @keyframes pulse {
                0%, 100% { transform: scale(1); }
                50% { transform: scale(1.1); }
            }

            .chat-widget-closed .chat-window {
                display: none;
            }

            .chat-widget-open .chat-window {
                display: flex;
            }

            .chat-widget-open .chat-toggle-button {
                display: none;
            }

            .chat-window {
                width: 360px;
                height: 550px;
                background: white;
                border-radius: 16px;
                box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
                flex-direction: column;
                overflow: hidden;
                animation: slideUp 0.3s ease-out;
            }

            @keyframes slideUp {
                from {
                    opacity: 0;
                    transform: translateY(20px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }

            @media (max-width: 480px) {
                .chat-window {
                    width: calc(100vw - 40px);
                    height: calc(100vh - 100px);
                    max-height: 600px;
                }
            }

            .chat-header {
                background: linear-gradient(135deg, #2196f3 0%, #0d1a2f 100%);
                color: white;
                padding: 16px;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }

            .chat-header-content {
                flex: 1;
            }

            .chat-company-info h3 {
                margin: 0;
                font-size: 18px;
                font-weight: 700;
                color: white;
                text-shadow: none;
            }

            .chat-status {
                display: inline-block;
                font-size: 12px;
                color: #a5d6a7;
                margin-top: 2px;
            }

            .chat-status::before {
                content: '●';
                margin-right: 4px;
                color: #4caf50;
            }

            .chat-close-button {
                background: none;
                border: none;
                color: white;
                font-size: 28px;
                cursor: pointer;
                padding: 0;
                width: 32px;
                height: 32px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: background 0.2s;
            }

            .chat-close-button:hover {
                background: rgba(255, 255, 255, 0.2);
            }

            .chat-messages {
                flex: 1;
                overflow-y: auto;
                padding: 16px;
                background: #f5f5f5;
            }

            .chat-message {
                margin-bottom: 16px;
                animation: fadeIn 0.3s ease-out;
            }

            @keyframes fadeIn {
                from {
                    opacity: 0;
                    transform: translateY(10px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }

            .message-content {
                max-width: 80%;
                padding: 10px 14px;
                border-radius: 12px;
                background: white;
                box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
            }

            .chat-message-received .message-content {
                background: white;
            }

            .chat-message-sent {
                display: flex;
                justify-content: flex-end;
            }

            .chat-message-sent .message-content {
                background: #2196f3;
                color: white;
            }

            .message-content p {
                margin: 0 0 8px 0;
                font-size: 14px;
                line-height: 1.4;
                color: inherit;
            }

            .message-content p:last-of-type {
                margin-bottom: 4px;
            }

            .message-time {
                font-size: 11px;
                color: #999;
                text-align: right;
                margin-top: 4px;
            }

            .chat-message-sent .message-time {
                color: rgba(255, 255, 255, 0.8);
            }

            .quick-replies {
                display: flex;
                flex-wrap: wrap;
                gap: 8px;
                margin-top: 8px;
            }

            .quick-reply-btn {
                padding: 8px 12px;
                border: 1px solid #2196f3;
                background: white;
                color: #2196f3;
                border-radius: 20px;
                font-size: 13px;
                cursor: pointer;
                transition: all 0.2s;
                white-space: nowrap;
            }

            .quick-reply-btn:hover {
                background: #2196f3;
                color: white;
                transform: translateY(-1px);
            }

            .chat-input-container {
                display: flex;
                padding: 12px;
                background: white;
                border-top: 1px solid #e0e0e0;
                gap: 8px;
            }

            .chat-input {
                flex: 1;
                border: 1px solid #e0e0e0;
                border-radius: 20px;
                padding: 10px 16px;
                font-size: 14px;
                outline: none;
                font-family: inherit;
            }

            .chat-input:focus {
                border-color: #2196f3;
            }

            .chat-send-button {
                width: 40px;
                height: 40px;
                border-radius: 50%;
                background: #2196f3;
                border: none;
                color: white;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: background 0.2s, transform 0.2s;
            }

            .chat-send-button:hover {
                background: #0d1a2f;
                transform: scale(1.05);
            }

            .chat-send-button:disabled {
                background: #ccc;
                cursor: not-allowed;
            }

            .chat-footer {
                padding: 12px 16px;
                background: #fafafa;
                border-top: 1px solid #e0e0e0;
                text-align: center;
            }

            .chat-footer p {
                margin: 4px 0;
                font-size: 12px;
                color: #666;
            }

            .chat-footer a {
                color: #2196f3;
                text-decoration: none;
            }

            .chat-footer a:hover {
                text-decoration: underline;
            }

            .chat-messages::-webkit-scrollbar {
                width: 6px;
            }

            .chat-messages::-webkit-scrollbar-track {
                background: #f1f1f1;
            }

            .chat-messages::-webkit-scrollbar-thumb {
                background: #888;
                border-radius: 3px;
            }

            .chat-messages::-webkit-scrollbar-thumb:hover {
                background: #555;
            }
        </style>
    `;

    document.addEventListener('DOMContentLoaded', function() {
        document.head.insertAdjacentHTML('beforeend', chatStyles);
        document.body.insertAdjacentHTML('beforeend', chatHTML);

        const widget = document.getElementById('custom-chat-widget');
        const toggleBtn = document.getElementById('chat-toggle-btn');
        const closeBtn = document.getElementById('chat-close-btn');
        const chatInput = document.getElementById('chat-input');
        const sendBtn = document.getElementById('chat-send-btn');
        const messagesContainer = document.getElementById('chat-messages');
        const chatBadge = document.querySelector('.chat-badge');

        const responses = {
            'pintura': '¡Excelente elección! Ofrecemos servicios de pintura interior y exterior. ¿Tu proyecto es para interiores, exteriores, o ambos?',
            'remodelación': '¡Genial! Nos especializamos en remodelaciones de baños, cocinas, balcones y techos. ¿Qué área te gustaría remodelar?',
            'construcción': '¡Perfecto! Contamos con experiencia en construcción y reparaciones. ¿Podrías contarme más sobre tu proyecto?',
            'default': 'Gracias por tu mensaje. Un miembro de nuestro equipo te responderá pronto. Para asistencia inmediata, llámanos al +1 786-334-8969 o escríbenos por WhatsApp.'
        };

        function openChat() {
            widget.classList.remove('chat-widget-closed');
            widget.classList.add('chat-widget-open');
            chatInput.focus();
            if (chatBadge) {
                chatBadge.style.display = 'none';
            }
        }

        function closeChat() {
            widget.classList.remove('chat-widget-open');
            widget.classList.add('chat-widget-closed');
        }

        function scrollToBottom() {
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
        }

        function addMessage(text, isSent = false) {
            const messageDiv = document.createElement('div');
            messageDiv.className = `chat-message ${isSent ? 'chat-message-sent' : 'chat-message-received'}`;
            
            const time = new Date().toLocaleTimeString('es-ES', {hour: '2-digit', minute: '2-digit'});
            
            messageDiv.innerHTML = `
                <div class="message-content">
                    <p>${text}</p>
                    <div class="message-time">${time}</div>
                </div>
            `;
            
            messagesContainer.appendChild(messageDiv);
            scrollToBottom();
        }

        function handleUserMessage(message) {
            if (!message.trim()) return;
            
            addMessage(message, true);
            chatInput.value = '';
            
            setTimeout(() => {
                const messageLower = message.toLowerCase();
                let response = responses.default;
                
                if (messageLower.includes('pintura') || messageLower.includes('pintar')) {
                    response = responses.pintura;
                } else if (messageLower.includes('remodelación') || messageLower.includes('remodelar')) {
                    response = responses['remodelación'];
                } else if (messageLower.includes('construcción') || messageLower.includes('construir')) {
                    response = responses['construcción'];
                }
                
                addMessage(response, false);
            }, 800);
        }

        toggleBtn.addEventListener('click', openChat);
        closeBtn.addEventListener('click', closeChat);

        sendBtn.addEventListener('click', function() {
            handleUserMessage(chatInput.value);
        });

        chatInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                handleUserMessage(chatInput.value);
            }
        });

        messagesContainer.addEventListener('click', function(e) {
            if (e.target.classList.contains('quick-reply-btn')) {
                const message = e.target.dataset.message;
                handleUserMessage(message);
                e.target.parentElement.style.display = 'none';
            }
        });

        scrollToBottom();
    });
})();
