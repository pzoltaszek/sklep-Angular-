import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsDairyYoghurtComponent } from './products-dairy-yoghurt.component';

describe('ProductsDairyYoghurtComponent', () => {
  let component: ProductsDairyYoghurtComponent;
  let fixture: ComponentFixture<ProductsDairyYoghurtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsDairyYoghurtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsDairyYoghurtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
