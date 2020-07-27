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

  // following user object holds all the inputed data 
  // which will be use to summerize the user data after submission
  user = {
    username:'',
    email:'',
    secretQuestion:'',
    answer:'',
    gender:''
  }

  submitted = false;


  // onSubmit(form:NgForm){
  //   console.log(form);
  // }

  onSubmit(){
    console.log(this.signupForm);

    // on submission update the user object with inputed data
    this.submitted =  true;
    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.secretQuestion = this.signupForm.value.secret;
    this.user.answer = this.signupForm.value.questionAnswer;
    this.user.gender = this.signupForm.value.gender;

    this.signupForm.reset();
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
