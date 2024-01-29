import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { EventiComponent } from './eventi.component';

describe('EventiComponent', () => {
  let component: EventiComponent;
  let fixture: ComponentFixture<EventiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EventiComponent],
      imports: [FormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
