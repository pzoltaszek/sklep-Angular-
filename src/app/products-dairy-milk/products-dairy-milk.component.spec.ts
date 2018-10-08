import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsDairyMilkComponent } from './products-dairy-milk.component';

describe('ProductsDairyMilkComponent', () => {
  let component: ProductsDairyMilkComponent;
  let fixture: ComponentFixture<ProductsDairyMilkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsDairyMilkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsDairyMilkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
