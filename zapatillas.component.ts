import {Component,OnInit} from '@angular/core';
import {Zapatilla} from '../models/zapatilla';
import{ZapatillaService} from '../services/zapatilla.service';
@Component({
	selector: 'zapatillas',
	templateUrl:'./zapatillas.component.html',
	providers:[ZapatillaService]



	})
export class ZapatillasComponent implements OnInit{
	public titulo:string = "componente de zapatillas";
	public zapatillas: Array<Zapatilla>;
	public marcas:string[];
	public color : string;
	public mi_marca:string;
	constructor(
		private _zapatillaservice:ZapatillaService

		){
		this.mi_marca= "fila";
		this.color='yellow';
		this.marcas=new Array();
	


	}

	ngOnInit(){



		this.zapatillas= this._zapatillaservice.getZapatillas();
		this.getMarcas();
	}
	getMarcas(){
		this.zapatillas.forEach((zapatilla,index)=>{
			
			if(this.marcas.indexOf(zapatilla.marca)<0){

			this.marcas.push(zapatilla.marca);	
			}

			
			


		});
		console.log(this.marcas);
	}

getMarca(){

	alert(this.mi_marca);
}
addMarca(){

	this.marcas.push(this.mi_marca);
}
borrarMarca(index:number){

	delete this.marcas[index];
}

onBlur(){

	console.log("bien ahi");
}


}