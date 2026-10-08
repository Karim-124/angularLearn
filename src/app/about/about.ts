import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-about',
  imports: [FormsModule],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  userName: string = 'Karim abdelazims';
  imgSrc: string = 'assets/karim.jpg';

  sayHello() {
    alert(`Hello ${this.userName}`);
  }
}
