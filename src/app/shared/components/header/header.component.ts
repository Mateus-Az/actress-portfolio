import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @ViewChild('menuIcon', { static: true }) menuIcon!: ElementRef;
  @ViewChild('navbar', { static: true }) navbar!: ElementRef;

  openMenu() {
    this.menuIcon.nativeElement.classList.toggle('bx-x');
    this.navbar.nativeElement.classList.toggle('active-menu');
  }
}
