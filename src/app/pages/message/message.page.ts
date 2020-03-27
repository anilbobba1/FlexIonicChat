import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-message',
  templateUrl: './message.page.html',
  styleUrls: ['./message.page.scss'],
})
export class MessagePage implements OnInit {
  segmentTab: any;
  chatData: ({ "name": string; "image": string; "description": string; "count": string; "status": string; "time": string; } | { "name": string; "status": string; "image": string; "description": string; "time": string; "count"?: undefined; })[];

  constructor(public route: Router) {
    this.chatData = [{
      "name": 'Jacson',
      "image": ' ../../assets/chat/chat2.jpg',
      "description": '',
      "time": '07:00',
      "status": "online"
    }, {
      "name": 'Joseph',
      "image": ' ../../assets/chat/chat3.jpg',
      "description": '',
      "count": '2',
      "time": '06:07',
      "status": "online"
    }]
  }

  ngOnInit() {
  }
  segmentChanged(event: any) {
    this.segmentTab = event.detail.value;
    console.log(this.segmentTab);
  }
  goforChat(chat) {
    this.route.navigate(['chat', chat]);

  }


}

