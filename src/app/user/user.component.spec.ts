import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import {RouterTestingModule} from '@angular/router/testing';

import { UserComponent } from './user.component';
import { UserService } from './user.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

class FakeUSerService {
  getUsers() {
    return Observable.of([]);
  }
}
describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async(() => { 
    TestBed.configureTestingModule({
      declarations: [ UserComponent ],
      imports: [
        RouterTestingModule, HttpClientTestingModule
      ],
      providers: [
        { provide: UserService, useClass: FakeUSerService }
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
