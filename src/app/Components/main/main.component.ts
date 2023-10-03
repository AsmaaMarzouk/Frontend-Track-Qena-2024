import { Component } from '@angular/core';
import { TrackData } from 'src/app/Models/track-data';
import { TrackInfo } from 'src/app/Models/track-info';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
// property
//  trackName:string="Frontend Track";
// Method
// sayHelloToTrack():string{
//   return `Hello ${this.trackName}`;
// }

// property => model class
track:TrackInfo=new TrackInfo("Frontend Track",44,"https://fullscale.io/wp-content/uploads/2022/04/front-end-tools.png");
// track2:TrackInfo=new TrackInfo("MEARN Track",42,"")


// property => model interface
//
trackData:TrackData={
  trackName:"MEARN Track",
  trackCourses:["Angular","Node js","Mongo","Advanced JS"],
  trackImg:"https://www.rlogical.com/wp-content/uploads/2020/12/MERN-Stack-considered-the-Best-for-Developing-Web-Apps.png"
}

// trackInterface:TrackData[]=[{},{},{}]
}
