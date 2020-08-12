import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/shared/login.service';
import { UserService } from 'src/app/shared/user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-my-coach',
  templateUrl: './my-coach.component.html',
  styleUrls: ['./my-coach.component.css']
})
export class MyCoachComponent implements OnInit {
  public coach: User

  constructor(private loginService: LoginService, private userService:UserService) { }

  ngOnInit(): void {
    console.log(this.loginService.userLoged.user_id)
    this.userService.getCoach(this.loginService.userLoged.user_id).subscribe(data=>{
      console.log(data)
      this.coach = data[0]
    })
  }

}
