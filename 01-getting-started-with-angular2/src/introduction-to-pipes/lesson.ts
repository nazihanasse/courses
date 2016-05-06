
import {Component} from "@angular/core";
import {bootstrap} from "@angular/platform-browser-dynamic";


const HEROES = [
    {id: 1, name:'Superman'},
    {id: 2, name:'Batman'},
    {id: 3, name:'Iron Man'}
];


@Component({ 
    selector: 'app',
    template: `

            <div class="pipe-example">
                <label>Uppercase Pipe: {{ message | uppercase }}</label>
            </div>
            
            <div class="pipe-example">
                <label>Lowercase Pipe: {{ message | lowercase }}</label>
            </div>            

            <div class="pipe-example">
                <label>Slice Pipe: {{ message | slice:0:5 }}</label>
            </div>            


        `
})
export class App {


    message = 'Hello World !';


}

bootstrap(App);

