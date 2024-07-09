import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon'

@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss'
})
export class SideNavComponent {

}
