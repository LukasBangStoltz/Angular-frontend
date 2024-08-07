import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddVolunteerComponent } from './add-volunteer.component';

describe('AddVolunteerComponent', () => {
  let component: AddVolunteerComponent;
  let fixture: ComponentFixture<AddVolunteerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddVolunteerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddVolunteerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
