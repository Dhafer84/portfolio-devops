import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AdminGuard } from './admin-guard';

describe('AdminGuard', () => {
  let guard: AdminGuard;
  let routerSpy = { navigate: jasmine.createSpy('navigate') };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AdminGuard,
        { provide: Router, useValue: routerSpy }
      ]
    });
    guard = TestBed.inject(AdminGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should return true if isAdmin is true in localStorage', () => {
    localStorage.setItem('isAdmin', 'true');
    expect(guard.canActivate()).toBeTrue();
  });

  it('should return false and redirect if isAdmin is false', () => {
    localStorage.setItem('isAdmin', 'false');
    expect(guard.canActivate()).toBeFalse();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/admin']);
  });
});
