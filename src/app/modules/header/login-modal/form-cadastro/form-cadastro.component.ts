import { FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { FormCadastroService } from './form-cadastro.service';
import { User } from './user';

@Component({
  selector: 'app-form-cadastro',
  templateUrl: './form-cadastro.component.html',
  styleUrls: ['./form-cadastro.component.scss'],
  providers: [ FormCadastroService ]
})
export class FormCadastroComponent implements OnInit {

  model = 1;
  users: User[];

  constructor(
    private userService: FormCadastroService,
    private form: FormsModule
  ) { }

  ngOnInit() {
  // this.userService.getUsers().subscribe(console.log);
  }

  onSubmit(form) {
    // console.log(form.value);
    if ('undefined' === typeof(form.username)) {
      form.value.username = form.value.email;
    }
    this.userService.addUser(form.value).subscribe(console.log);
  }
}
