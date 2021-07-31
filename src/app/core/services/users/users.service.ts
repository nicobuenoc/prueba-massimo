import { Injectable } from '@angular/core';
import { LocalStoreNames } from '../../enums/local-store-name.enum';
import { User } from '../../models/user.model';
import { LocalStoreService } from '../local-store/local-store.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private localStoreService: LocalStoreService) {}

  existsUser(user: Partial<User>): boolean {
    return !!this.localStoreService.get<User[]>(LocalStoreNames.users)?.find((userStore: User) => {
      return userStore.username === user.username;
    });
  }

  registerUser(user: User): void {
    const users: User[] = this.localStoreService.get<User[]>(LocalStoreNames.users) || [];
    users.push(user);

    console.log('User Register -->', users);
    this.localStoreService.save(LocalStoreNames.users, users);
  }
}
