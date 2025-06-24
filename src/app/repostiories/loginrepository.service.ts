import { Injectable } from '@angular/core';
import { ConnectionService } from '../services/connection/connection.service';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class LoginrepositoryService {
  constructor(private conn: ConnectionService) {}

  login({ username, password }: any): Promise<any> {
    const body = {
      username: username,
      password: password,
    };
    return new Promise((resolve, reject) => {
      this.conn.post(environment.apiUrl + '/login', body).subscribe({
        next: (response) => resolve(response),
        error: (error) => reject(error),
      });
    });
  }
}
