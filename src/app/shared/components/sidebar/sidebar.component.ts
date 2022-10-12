import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  menuOptions: {
    defaultOptions: Array<any>, accessLink: Array<any>
  } = { defaultOptions: [], accessLink: [] }

  customOptions: Array<any> = []

  constructor(private router: Router) {

  }

  ngOnInit(): void {
    this.menuOptions.defaultOptions = [
      {
        name: "Home",
        icon: "uil uil-estate",
        route: ['/']
      },
      {
        name: "Search",
        icon: "uil uil-search",
        route: ['/', 'history']
      },
      {
        name: "Your Library",
        icon: "uil uil-chart",
        route: ['/', 'tracks']
      },
    ]

    this.menuOptions.accessLink = [
      {
        name: "Create playlist",
        icon: "uil-plus-square"
      },
      {
        name: "Songs you like",
        icon: "uil-heart-medical"
      },
    ]

    this.customOptions = [
      {
        name: "My playlist #1",
        route: ["/"]
      },
      {
        name: "My playlist #2",
        route: ["/"]
      },
      {
        name: "My playlist #3",
        route: ["/"]
      },
      {
        name: "My playlist #4",
        route: ["/"]
      },
    ]
  }
  navigateTo($event: any, route: []): void {
    this.router.navigate(route, {
      queryParams: {
        key: "value"
      }
    })
  }

}
