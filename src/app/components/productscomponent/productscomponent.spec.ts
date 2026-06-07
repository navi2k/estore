import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Productscomponent } from './productscomponent';

describe('Productscomponent', () => {
  let component: Productscomponent;
  let fixture: ComponentFixture<Productscomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Productscomponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Productscomponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
