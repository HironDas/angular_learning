// your code goes here

import {bootstrap} from "@angular/platform-browser-dynamic";
import {Component} from "@angular/core";

@Component({
	selector: 'hello-world',
	template: `
	<ul>
		<li *ngFor="let name of names">
			Hello {{name}}
		</li>
	</ul>
	`
})

class HelloWorld {
	names: string[];

	constructor(){
		this.names = ["Hiron", "Suvash", "Subrata"];
	}
}

bootstrap(HelloWorld);