import { Injectable } from '@angular/core';
import { ConnectionService } from '../services/connection/connection.service';
import { messageType } from '../types/messagetype';
import { environment } from '../../environments/environment.development';
import { getUserToken } from '../infra/dbuser';

@Injectable({
  providedIn: 'root',
})
export class ChatrepositoryService {
  constructor(private conn: ConnectionService) {}

  sendMessage(message: messageType): Promise<any> {
    const bearer = `Bearer ${getUserToken()}`;
    const body = {
      message: message.text,
    };

    console.log(bearer);
    return new Promise((resolve, reject) => {
      this.conn
        .post(environment.apiUrl + '/classificar', body, {
          headers: {
            Authorization: bearer,
          },
        })
        .subscribe({
          next: (response) => resolve(response),
          error: (error) => reject(error),
        });
    });
  }
}
