// your code goes here

import {bootstrap} from "@angular/platform-browser-dynamic";
import {Component} from "@angular/core";

/*@Component({
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
}*/



@Component({
	selector: 'reddit-article',
	host: {
		class: "row"
	},
	template: `
	<div class = "four wide column center aligned votes">
		<div class = "ui statistic">
			<div class = "value">
				{{value}}
			</div>
			<div class = "label">
				Points
			</div>
		</div>
	</div>
	<div class = "twelve wide column">
		<a class = "ui large header" href = "{{ link }}">
			{{title}}
		</a>
		<ul class = "ui big horizontal list voters">
			<li class = "item">
				<a href (click) = "voteUp()">
					<i class = "arrow down icon"></i>
					downvote
				</a>
			</li>
		</ul>
	</div>
	`
})

 class ArticleComponent  {
	votes: number;
	title: string;
	link : string;

	constructor() {
		this.title = "Angular 2";
		this.link = "http://angular.io";
		this.votes = 10;
	}

	voteUp(){
		this.votes += 1;
	}

	voteDown() {
		this.votes -= 1;
	}
}

@Component({
	selector: 'reddit',
	directives: [ArticleComponent],
	template: `
		<form class="ui large form segment">
			<h3 class="ui header">Add a Link</h3>

			<div class="field">
				<label for="title"> Title: </label>
				<input name = "title" #newtitle>
			</div>
			<div class="field">
				<label for="link"> Link: </label>
				<input name = "link" #newlink>
			</div>

			<button (click)="addArticle(newtitle, newlink)"
				class="ui positive right floated button">
				Submit link
			</button>
		</form>
	`
})

class RedditApp {
	
	constructor() {
					
	}

	addArticle(title: HTMLInputElement, link: HTMLInputElement): void {
		console.log(`Adding article title: ${title.value} and Link: ${link.value}`);
	}
}


// bootstrap(HelloWorld);
bootstrap(RedditApp);