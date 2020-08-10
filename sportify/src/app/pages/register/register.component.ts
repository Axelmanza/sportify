import { Component, OnInit } from '@angular/core';

import { UserService } from 'src/app/shared/user.service';
import { User } from 'src/app/models/user';

import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public user = new User;

  constructor(private registerService: UserService, private router: Router) { }

  public onSubmit(form) {
    console.log(form.value);
    this.registerService.postUser(this.user).subscribe((data:any) => {
      console.log(data);
      if (data.alerta === "1" ) {
        Swal.fire({
          title: '¡Enhorabuena!',
          text: 'Tu cuenta ha sido creada',
          icon: 'success',
          confirmButtonColor: '#00bfa5'
        })
        this.router.navigate(['/login']);
      } else if (data[0].email === this.user.email) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Este email ya existe',
          footer: 'Regístrese con otro email'
        })
      }
    })
  }

  ngOnInit(): void {
  }

}
