import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsSummaryComponents } from './stats-summary-components';

describe('StatsSummaryComponents', () => {
  let component: StatsSummaryComponents;
  let fixture: ComponentFixture<StatsSummaryComponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatsSummaryComponents]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatsSummaryComponents);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
