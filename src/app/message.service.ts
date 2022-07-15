import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: string[] = [];

  Add(message: string): void{
    this.messages.push(message);
  }

  Clear(): void{
    this.messages = [];
  }
}
