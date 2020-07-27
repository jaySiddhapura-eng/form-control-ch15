import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('f',{static:true}) signupForm: NgForm;

  defaultQuestion = 'teacher';
  answer = '';
  genders = ['male', 'female'];


  // onSubmit(form:NgForm){
  //   console.log(form);
  // }

  onSubmit(){
    console.log(this.signupForm);
  }

  // this will overwrite the entire form while setting the suggested user name
  onSetUserName(){
    const suggestedName = 'Superuser';
    this.signupForm.form.setValue(
      {
        userData:{
          username:suggestedName,
          email:''
        },
        secret:'pet',
        questionAnswer:'',
        gender: 'male'
      }
    );
  }
  // this will just add suggested user name in the username field without overwritting any other field
  onPatchUserName(){
    const suggestedName = 'SuperMan';
    this.signupForm.form.patchValue(
      {
        userData:{
          username:suggestedName
        }
      }
    );
  }
}
