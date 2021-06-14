import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ToggleService {
    private toggleStatus = false;
    private subject = new Subject<any>();

    toggle() {
        if(this.toggleStatus){
            console.log(`Toggle ${false}`)
            this.toggleStatus = false;
            this.subject.next(false);
        }
        else{
            console.log(`Toggle ${true}`)
            this.toggleStatus = true;
            this.subject.next(true)
        }
    }

    status(): Observable<any> {
        return this.subject.asObservable();
    }
}