import { Injectable } from '@angular/core';
import { ApiService } from '../core.module';

@Injectable({
  providedIn: 'root'
})
export class DetailLookupService {

  constructor(private api: ApiService) { }

  deleteDetail(id:string){
    this.api.delete('lookup-detail/'+id).subscribe();
  }
  postDetail(data){
    return this.api.post('lookup-detail',data);
  }
}
