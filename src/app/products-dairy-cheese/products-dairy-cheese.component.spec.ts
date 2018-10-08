import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsDairyCheeseComponent } from './products-dairy-cheese.component';

describe('ProductsDairyCheeseComponent', () => {
  let component: ProductsDairyCheeseComponent;
  let fixture: ComponentFixture<ProductsDairyCheeseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsDairyCheeseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsDairyCheeseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
