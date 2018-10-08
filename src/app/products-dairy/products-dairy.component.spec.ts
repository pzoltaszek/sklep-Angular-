import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsDairyComponent } from './products-dairy.component';

describe('ProductsDairyComponent', () => {
  let component: ProductsDairyComponent;
  let fixture: ComponentFixture<ProductsDairyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsDairyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsDairyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
