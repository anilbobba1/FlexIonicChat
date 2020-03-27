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
      "name": 'Oliver',
      "image": ' ../../assets/chat/chat2.jpg',
      "description": ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
      "time": '12:17',
      "status": "online"
    }, {
      "name": 'George',
      "image": ' ../../assets/chat/chat3.jpg',
      "description": ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
      "count": '2',
      "time": 'Yesterday',
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

