import {Component} from '@angular/core';
import {FORM_DIRECTIVES, FormBuilder, ControleGroup} from "@angular/common";

@Component({
	selector: 'demo_form_sku',
	directives: [FORM_DIRECTIVES],
	template:`
	<div class="ui raised segment">
		<h2 class="ui header">Demo Form: Sku</h2>
		<form [ngFormModel]='myForm'
			(ngSubmit) = 'onSubmin(myForm.value)'
			class = "ui form">

			<div class="field">
				<label for='skuInput'>SKU</label>
				<input type="text"
					id="skuInput"
					placeholder='SKU'
					[ngformControl]='myForm.control["sku"]'>
			</div>
			<button type="submit" class='ui button'>Submit</button>
		</form>
	</div>
	`
})
export class DemoFormSku{
	myForm: ControleGroup;

	constructor(fb: FormBuilder){
		this.myForm = fb.group({
			'sku': ['ABC123']
		});
	}
 	onSubmin(form: any):void{
 		console.log('your submited value', form);
 	}
}