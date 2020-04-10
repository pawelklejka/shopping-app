import {
  Component,
  EventEmitter,
  Output,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit, OnDestroy {
  collapsed = true;
  @Output() featureSelected = new EventEmitter<string>();
  subscription: Subscription;
  isAuth = false;

  onSelect(feauture: string) {
    this.featureSelected.emit(feauture);
  }
  constructor(
    private dataStorage: DataStorageService,
    private authService: AuthService
  ) {}
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  ngOnInit(): void {
    this.subscription = this.authService.user.subscribe((user) => {
      this.isAuth = !!user;
    });
  }
  onSaveData() {
    this.dataStorage.storeRecipes();
  }
  onFetchRecipes() {
    this.dataStorage.fetchRecipes().subscribe();
  }
  onLogout() {
    this.authService.logOut();
  }
}
