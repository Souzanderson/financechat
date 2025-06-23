import { Injectable } from '@angular/core';
import { ConnectionService } from '../services/connection/connection.service';
import { messageType } from '../types/messagetype';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ChatrepositoryService {
  constructor(private conn: ConnectionService) {}

  sendMessage(message: messageType): Promise<any> {
    const body = {
      message: message.text,
    };
    return new Promise((resolve, reject) => {
      this.conn.post(environment.apiUrl, body).subscribe({
        next: (response) => resolve(response),
        error: (error) => reject(error),
      });
    });
  }
}
