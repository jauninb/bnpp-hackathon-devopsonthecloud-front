import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {RouterTestingModule} from '@angular/router/testing';

import { UserComponent } from './user.component';
import { UserService } from './user/user.service';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async(() => {
    const userServiceSpy = jasmine.createSpyObj('UserService', ['getUsers', 'deleteUser', 'createUser']);
    TestBed.configureTestingModule({
      declarations: [ UserComponent ],
      imports: [
        RouterTestingModule
      ],
      providers: [
        { provide: UserService, useValue: userServiceSpy }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
