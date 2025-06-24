import { Component, OnInit, ViewChild } from '@angular/core';
import { messageType } from '../../types/messagetype';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ChatrepositoryService } from '../../repostiories/chatrepository.service';
import { decodeTypeMessage } from '../../infra/decodemessage';
import { getUserToken } from '../../infra/dbuser';
import { Router } from '@angular/router';
import { WaitingComponent } from '../waiting/waiting.component';

@Component({
  selector: 'chat',
  standalone: true,
  imports: [FormsModule, CommonModule, WaitingComponent],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss',
})
export class ChatComponent {
  public messages: messageType[] = [];
  public messagetext: string = '';
  public loading: boolean = false;

  constructor(private repo: ChatrepositoryService, private router: Router) {}

  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      const token = getUserToken();
      if (!token) {
        console.error('User token not found. Please log in.');
        this.router.navigate(['/']);
      }
    }
  }

  scrollToBottom(): void {
    setTimeout(() => {
      if (document) {
        const chatMessages = document.getElementById('chatMessages');
        if (chatMessages) {
          chatMessages.scrollTo(0, chatMessages.scrollHeight);
        }
      }
    }, 100);
  }

  setLoading(value: boolean, delay: number = 10): void {
    setTimeout(() => {
      this.loading = value;
      this.scrollToBottom();
    }, delay);
  }

  sendMessage(): void {
    if (this.messagetext.trim()) {
      const message: messageType = {
        text: this.messagetext,
        status: 'sent',
      };
      this.messages.push(message);
      this.setLoading(true, 300);
      this.repo
        .sendMessage(message)
        .then((response) => {
          console.log('Message sent successfully:', response);
          // decodeMessages(response.items).forEach((decodedMessage) => {
          //   this.messages.push(decodedMessage);
          // });
          decodeTypeMessage(response).forEach((decodedMessage) => {
            this.messages.push(decodedMessage);
          });
          this.scrollToBottom();
          this.setLoading(false);
        })
        .catch((error) => {
          console.error('Error sending message:', error);
          this.setLoading(false);
        });
      this.messagetext = '';
    }
    this.scrollToBottom();
  }
}
