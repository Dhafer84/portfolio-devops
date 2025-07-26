import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificationsComponent  } from './certifications';

describe('Certifications', () => {
  let component: CertificationsComponent ;
  let fixture: ComponentFixture<CertificationsComponent >;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CertificationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CertificationsComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
