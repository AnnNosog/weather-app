import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
    selector: 'wa-messages',
    templateUrl: './messages.component.html',
    styleUrls: ['./messages.component.scss'],
    standalone: true
})
export class MessagesComponent implements OnInit {

    constructor(public messageService: MessageService) {}

    ngOnInit() {
    }
}