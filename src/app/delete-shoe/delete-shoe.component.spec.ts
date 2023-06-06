import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteShoeComponent } from './delete-shoe.component';

describe('DeleteShoeComponent', () => {
  let component: DeleteShoeComponent;
  let fixture: ComponentFixture<DeleteShoeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteShoeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteShoeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
