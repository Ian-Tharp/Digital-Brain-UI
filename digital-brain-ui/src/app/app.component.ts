import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './common/header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SideNavComponent } from './common/side-nav/side-nav.component';
import { FooterComponent } from './common/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    DashboardComponent,
    HeaderComponent,
    SideNavComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'Digital Brain';
  navTitle = '';

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.router.events.subscribe((val) => {
      this.navTitle = this.router.url;
    });
  }

  setHeader() {
    let path = window.location.pathname;
    path = path.replace('/', '');

    this.navTitle = (path.length) > 0 ? path : 'dashboard';
  }

}
