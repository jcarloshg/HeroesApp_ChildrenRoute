import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent {

  constructor(
    private router: Router,
    private authService: AuthService,
  ) { }

  login() {

    // ir backend
    //  unusuario
    // heroes
    this.authService.loging()
      .subscribe(resp => {
        if (resp.id) {
          this.router.navigate(['./heroes']);
        }
      })


  }

}
