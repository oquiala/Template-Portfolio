import { Component } from '@angular/core';

interface sidenavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularPortfolio';

  isSideNavCollapsed = false;
  screenWidth = 0;

  onToggleSideNav(data: sidenavToggle): void {
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;

  }

}
