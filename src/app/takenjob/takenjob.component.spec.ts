import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakenjobComponent } from './takenjob.component';

describe('TakenjobComponent', () => {
  let component: TakenjobComponent;
  let fixture: ComponentFixture<TakenjobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TakenjobComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TakenjobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
