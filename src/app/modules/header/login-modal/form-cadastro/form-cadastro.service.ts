import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { User } from './user';
import { HelperService } from '../../../../helpers/helper.service';
import { ModalComponent } from '../../../../layout/modal/modal.component';

@Injectable({ providedIn: 'root' })

export class FormCadastroService {

  private username = 'omegagraphics';
  private password = 'omegagraphics';
  private readonly userEnpoint = 'http://www.omegagraphics.com.br/wordpress/wp-json/wp/v2/users';
  constructor(
    private http: HttpClient,
    private helper: HelperService,
    private modal: ModalComponent
    ) {
  }


getUsers () {
return this.http.get<User[]>(this.userEnpoint);
}

addUser (user: User) {
const headers = new HttpHeaders()
.set('Authorization', 'Basic ' + btoa(this.username + ':' + this.password))
.set('Content-Type', 'application/x-www-form-urlencoded');

  return this.http.post<User>(this.userEnpoint, this.helper.urlEncode(user), {headers});

}

}
