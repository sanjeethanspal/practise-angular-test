import { Injectable } from '@angular/core'

//Using rxjs
import { Observable, of } from 'rxjs'
//imported the json data
import * as data from '../../assets/data.json'
import * as data2 from '../../assets/data2.json'

@Injectable({ providedIn: 'root' })
export class DataService{

    constructor(){}

    data: any = (data as any).default;
    data2: any = (data2 as any).default;
    
    getDataLanguage1() : Observable<any>{     
        return of(this.data)
    }

    getDataLanguage2() : Observable<any>{     
        return of(this.data2)
    }
}