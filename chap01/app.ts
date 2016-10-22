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

class Article {
	title: string;
	link: string;
	votes: number;
	
	constructor(title: string, link: string, votes?: number) {

		this.title = title;
		this.link = link;
		this.votes = votes || 0;
	}

	domain(): string{
		try{
			const link: string = this.link.split("//")[1];
			return link.split('/')[0];
		}catch(err){
			return null;
		}
	}

	voteUp(): void{
		this.votes +=1;
	}

	voteDown(): void{
		this.votes -= 1;
	}
}


@Component({
	selector: 'reddit-article',
	inputs: ['article'],
	host: {
		class: "row"
	},
	template: `
	<div class = "four wide column center aligned votes">
		<div class = "ui statistic">
			<div class = "value">
				{{article.votes}}
			</div>
			<div class = "label">
				Points
			</div>
		</div>
	</div>
	<div class = "twelve wide column">
		<a class = "ui large header" href = "{{ article.link }}">
			{{article.title}}
		</a>
		<div class = "meta">({{ article.domain() }})</div>
		<ul class = "ui big horizontal list voters">
			<li class = "item">
				<a href (click) = "voteUp()">
					<i class = "arrow up icon"></i>
					upvote
				</a>
			</li>
			<li class = "item">
				<a href (click) = "voteDown()">
					<i class = "arrow down icon"></i>
					downvote
				</a>
			</li>
		</ul>
	</div>
	`
})

 class ArticleComponent  {
	article: Article;

	/*constructor() {
		this.article = new Article("Angular 2", "http://angular.io", 10);
	}*/


	voteUp(): boolean{
		this.article.voteUp();
		return false;
	}

	voteDown(): boolean{
		this.article.voteDown();
		return false;
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
		<div class = "ui grid posts">
			<reddit-article 
			*ngFor="let article of sortedArticle()"
			[article] = "article">
			</reddit-article>
		</div>
	`
})

class RedditApp {

	articles: Article[];
	
	constructor() {
		this.articles = [
			new Article('Angular 2', 'http://angular.io', 3),
			new Article('FullStack', 'http://fullstack.io', 10),
			new Article('Angular Homepage', 'http://angular.io', 5),
		]
	}

	addArticle(title: HTMLInputElement, link: HTMLInputElement): void {
		console.log(`Adding article title: ${title.value} and Link: ${link.value}`);

		this.articles.push(new Article(title.value, link.value, 0));

		title.value = '';
		link.value = '';
	}

	sortedArticle(): Article[]{
		return this.articles.sort((a: Article, b: Article)=> a.votes - b.votes);
	}
}


// bootstrap(HelloWorld);
bootstrap(RedditApp);