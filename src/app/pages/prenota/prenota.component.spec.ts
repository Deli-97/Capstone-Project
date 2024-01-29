import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { PrenotaComponent } from './prenota.component';

describe('PrenotaComponent', () => {
  let component: PrenotaComponent;
  let fixture: ComponentFixture<PrenotaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrenotaComponent],
      imports: [FormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrenotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
