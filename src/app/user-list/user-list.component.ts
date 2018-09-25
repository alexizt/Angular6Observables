import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserListComponent implements OnInit {
  @Input() users;
  @Output() onCreateUser: EventEmitter<any> = new EventEmitter();
  @Output() onApproveAll: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  createUser() {
    this.onCreateUser.emit({
      name: 'Prueba',
      email: 'prueba@gmail.com',
      registration: 'May 11, 2016',
      isPremium: false
    });
  }

  approveAll() {
    this.onApproveAll.emit();
  }
}