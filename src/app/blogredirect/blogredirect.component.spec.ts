import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogredirectComponent } from './blogredirect.component';

describe('BlogredirectComponent', () => {
  let component: BlogredirectComponent;
  let fixture: ComponentFixture<BlogredirectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogredirectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogredirectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
