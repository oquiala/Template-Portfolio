import { Component, EventEmitter, HostListener, Output } from '@angular/core';
import { navbarData } from './nav-data';
import { trigger, transition, style, animate, keyframes } from '@angular/animations';

interface sidenavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({opacity: 0}),
        animate('350ms',
        style({opacity: 1})
        )
      ]),
      transition(':leave', [
        style({opacity: 1}),
        animate('350ms',
        style({opacity: 0})
        )
      ])
    ]),

    trigger('rotate', [
      transition(':enter', [
        animate('500ms',
          keyframes([
            style({transform: 'rotate(0deg)', offset: '0'}),
            style({transform: 'rotate(1turn)', offset: '1'})
          ])
        )
      ])
    ])


  ]
})
export class SidenavComponent {

  @Output() onToggleSideNav: EventEmitter<sidenavToggle> = new EventEmitter();
  screenWidth = 0;
  collapsed: boolean = false;
  navData = navbarData;

  @HostListener('window:resize', ['$event'])

  onResize(event: any) {
    this.screenWidth = window.innerWidth;
    if(this.screenWidth <= 768) {
      this.collapsed = false;
      this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
    }
  }

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;

  }

  toggleCollapse(): void {
    this.collapsed = !this.collapsed;
    this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
  }

  closeSidenav(): void {
    this.collapsed = false;
    this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
  }



}
