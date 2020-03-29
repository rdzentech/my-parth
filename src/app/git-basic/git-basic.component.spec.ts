import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitBasicComponent } from './git-basic.component';

describe('GitBasicComponent', () => {
  let component: GitBasicComponent;
  let fixture: ComponentFixture<GitBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitBasicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
