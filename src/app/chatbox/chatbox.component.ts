import { Component, ElementRef, Renderer2, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.css']
})
export class ChatboxComponent implements AfterViewInit {

  hasMessages: boolean = false;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngAfterViewInit(): void {
    const chatForm = this.el.nativeElement.querySelector('#chat-form');
    const usernameInput = this.el.nativeElement.querySelector('#username-input');
    const messageInput = this.el.nativeElement.querySelector('#message-input');
    const chatMessages = this.el.nativeElement.querySelector('#chat-messages');
    const clearChatButton = this.el.nativeElement.querySelector('#clear-chat-button');

    chatForm.addEventListener('submit', (event: { preventDefault: () => void; }) => {
      event.preventDefault();
      const username = usernameInput.value.trim();
      const messageText = messageInput.value.trim();

      if (username === '' || messageText === '') {
        return;
      }

      if (!this.hasMessages) {
        const noChatMessage = this.el.nativeElement.querySelector('#no-chat-message');
        if (noChatMessage) {
          this.renderer.removeChild(chatMessages, noChatMessage);
        }
        this.hasMessages = true;
      }

      const message = this.renderer.createElement('div');
      this.renderer.addClass(message, 'message');
      this.renderer.addClass(message, 'gray-bg');

      const sender = this.renderer.createElement('div');
      this.renderer.addClass(sender, 'message-sender');
      this.renderer.appendChild(sender, this.renderer.createText(username));

      const text = this.renderer.createElement('div');
      this.renderer.addClass(text, 'message-text');
      this.renderer.appendChild(text, this.renderer.createText(messageText));

      const timestamp = this.renderer.createElement('div');
      this.renderer.addClass(timestamp, 'message-timestamp');
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      this.renderer.appendChild(timestamp, this.renderer.createText(hours + ':' + minutes));

      this.renderer.appendChild(message, sender);
      this.renderer.appendChild(message, text);
      this.renderer.appendChild(message, timestamp);

      this.renderer.appendChild(chatMessages, message);

      usernameInput.value = '';
      messageInput.value = '';
    });

    clearChatButton.addEventListener('click', () => {
      chatMessages.innerHTML = '';

      if (!this.hasMessages) {
        const noChatMessage = this.renderer.createElement('div');
        this.renderer.setAttribute(noChatMessage, 'id', 'no-chat-message');
        this.renderer.appendChild(noChatMessage, this.renderer.createText('No chat yet.'));
        this.renderer.appendChild(chatMessages, noChatMessage);
      }

      this.hasMessages = false;
    });
  }
}
