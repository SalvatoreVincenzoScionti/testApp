import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FooterbarComponent } from './footerbar.component';

describe('FooterbarComponent', () => {
  let component: FooterbarComponent;
  let fixture: ComponentFixture<FooterbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterbarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FooterbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
