import {Component} from '@angular/core';
import {bootstrap} from '@angular/platform-browser-dynamic';
@Component({
    selector:'hello-angular',
    template:`
    <div>{{message}}
     <input (keyup)="inputText($event)">
    {{values}}
    </div>
    `
})
class HelloAngular {
    message: string;
    values: string;
    constructor(){
	this.message='hello angular2'; 
    }

    inputText(event:KeyboardEvent){
	this.values = (<HTMLInputElement>event.target).value;
    }
}
bootstrap(HelloAngular);
