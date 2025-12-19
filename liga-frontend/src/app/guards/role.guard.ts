import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class RoleGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const usuario = JSON.parse(localStorage.getItem('usuario')!);
    const expectedRole = route.data['role'];

    if (usuario?.tipo !== expectedRole) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
