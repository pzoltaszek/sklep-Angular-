import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsVegetablesComponent } from './products-vegetables.component';

describe('ProductsVegetablesComponent', () => {
  let component: ProductsVegetablesComponent;
  let fixture: ComponentFixture<ProductsVegetablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsVegetablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsVegetablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
