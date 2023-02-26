import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemAdminWorkComponent } from './item-admin-work.component';

describe('ItemAdminWorkComponent', () => {
  let component: ItemAdminWorkComponent;
  let fixture: ComponentFixture<ItemAdminWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemAdminWorkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemAdminWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
