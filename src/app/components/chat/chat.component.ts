import { Component } from '@angular/core';
import { messageType } from '../../types/messagetype';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ChatrepositoryService } from '../../repostiories/chatrepository.service';
import { decodeTypeMessage } from '../../infra/decodemessage';

@Component({
  selector: 'chat',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss',
})
export class ChatComponent {
  public messages: messageType[] = [];
  public messagetext: string = '';

  constructor(private repo: ChatrepositoryService) {}

  sendMessage(): void {
    if (this.messagetext.trim()) {
      const message: messageType = {
        text: this.messagetext,
        status: 'sent',
      };
      this.messages.push(message);
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
        })
        .catch((error) => {
          console.error('Error sending message:', error);
        });
      this.messagetext = '';
    }
  }
}
