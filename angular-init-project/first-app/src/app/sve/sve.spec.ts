import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sve } from './sve';

describe('Sve', () => {
  let component: Sve;
  let fixture: ComponentFixture<Sve>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sve],
    }).compileComponents();

    fixture = TestBed.createComponent(Sve);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
