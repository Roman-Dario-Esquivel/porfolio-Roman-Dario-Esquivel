import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RsocialComponent } from './rsocial.component';

describe('RsocialComponent', () => {
  let component: RsocialComponent;
  let fixture: ComponentFixture<RsocialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RsocialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RsocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
