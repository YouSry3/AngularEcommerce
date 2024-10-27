import { Component } from '@angular/core';


@Component({
  selector: 'app-main',
  standalone: true,
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

  imgurl:string = "https://scontent.fcai20-3.fna.fbcdn.net/v/t39.30808-6/343141300_947891086229788_568201731842119944_n.jpg?stp=dst-jpg_tt7&_nc_cat=100&cb=99be929b-255fc52a&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=5faLN1_Pu3QQ7kNvgGon7Ar&_nc_zt=23&_nc_ht=scontent.fcai20-3.fna&_nc_gid=A61h6QF7F2XSWbNanOfqd1q&oh=00_AYAs4jKrUmB2dY5b6hlenlr9w7NAesRobey4Yy14hYaPYQ&oe=6723C60B";
  downloadCV() {
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/uc?export=download&id=1C0aYb9-URdM_IfZy59FoqbNUK_usRUQx';
    link.download = 'MohamedSherif.pdf';
    link.click();
  }


}
