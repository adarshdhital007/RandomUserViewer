import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  // Store user data.
  users: any[] = [];

  // Currently selected user.
  selectedUser: any;

  // Form control for user selection.
  userDropdown = new FormControl();

  constructor(private userService: ApiService) {}

  ngOnInit() {
    // Fetch and subscribe to user data from the API.
    this.userService.fetchAllUsers().subscribe((data: any) => {
      this.users = data.results;
      console.log(data)
      // Initialize selected user with the first user in the array.
      this.selectedUser = this.users[0];
    });

    // Subscribe to dropdown selection changes to update the selected user.
    this.userDropdown.valueChanges.subscribe((value) => {
      this.selectedUser = value;
    });
  }
}
