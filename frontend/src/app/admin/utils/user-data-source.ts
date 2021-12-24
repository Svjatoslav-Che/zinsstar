// import { AdminService } from 'src/app/admin/services/admin.service';
// import { CollectionViewer, DataSource } from '@angular/cdk/collections';
// import { BehaviorSubject, from, Observable, of } from 'rxjs';
// import { UserModelApi } from 'src/app/admin/models/user.model';
// import { catchError, finalize, map } from 'rxjs/operators';
// export class UsersDataSource implements DataSource<UserModelApi> {


//     private usersSubject = new BehaviorSubject<UserModelApi[]>([]);
//     private loadingSubject = new BehaviorSubject<boolean>(false);

//     public loading$ = this.loadingSubject.asObservable();


//     constructor(private admin: AdminService) { }

//     connect(collectionViewer: CollectionViewer): Observable<readonly UserModelApi[]> {
//         return this.usersSubject.asObservable();
//     }

//     disconnect(collectionViewer: CollectionViewer): void {
//         this.usersSubject.complete();
//         this.loadingSubject.complete();
//     }

//     loadUsers(courseId: number, filter = '', sortDirection = 'asc', pageIndex = 0, pageSize = 25) {

//         this.loadingSubject.next(true);
//         from(this.admin.userList).pipe(
//             catchError(() => of([])),
//             finalize(() => this.loadingSubject.next(false)))
//             .subscribe((res: UserModelApi[]) => this.usersSubject.next(res));

//     }

// }