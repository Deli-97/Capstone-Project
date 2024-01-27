import { Component, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';


type formObj = {
  nome:string,
  email:string,
  message:string,
  checkbox:boolean
}

@Component({
  selector: 'app-eventi',
  templateUrl: './eventi.component.html',
  styleUrl: './eventi.component.scss'
})
export class EventiComponent {

  @ViewChild('f',{static:true}) form!:NgForm;

  emailRegEx = "[a-z]{2,15}@[a-z]{2,15}.[a-z]{2,7}";

  isEmail(input:NgModel){
    if(input.errors){
      return input?.errors['pattern'] && input.dirty
    }
    return false;
  }

  isEmpty(input:NgModel){
    return !input.value && input.dirty
  }

  submit(form:NgForm){
    form.reset()
  }
}
