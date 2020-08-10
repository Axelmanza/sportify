import { Component, OnInit } from '@angular/core';
import { LoginService } from "src/app/shared/login.service";
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router ) { }

  public logIn(email: HTMLInputElement, password: HTMLInputElement) {
    let form = {
      email: email.value,
      password: password.value
    }
   
    this.loginService.login(form).subscribe(data => {
      this.loginService.userLoged = data[0]
      console.log(this.loginService.userLoged);
      //Redirigir a jugador o entrenador
      switch (this.loginService.userLoged.rol) {
        case 'player':
          this.router.navigate(['/player/myMatches']);
          break;
        case 'coach':
          this.router.navigate(['/coach/myTeams'])  
              break;
        default:
          alert("inicio de sesión incorrecto")
              break;
          }
      })
  }

  ngOnInit(): void {
  }

}