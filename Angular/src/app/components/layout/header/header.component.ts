import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from './../../../services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public authenticationService: AuthenticationService) { }

  logout() {
    localStorage.removeItem('currentUser');
    this.authenticationService.logout();
  }

  ngOnInit() {
  }

}