import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CleaningServices } from './cleaning-services';

describe('CleaningServices', () => {
  let component: CleaningServices;
  let fixture: ComponentFixture<CleaningServices>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CleaningServices],
    }).compileComponents();

    fixture = TestBed.createComponent(CleaningServices);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
