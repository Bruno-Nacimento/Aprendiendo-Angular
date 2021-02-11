import {Injectable} from '@angular/core';
import {Zapatilla} from '../models/zapatilla';
@Injectable()
export class ZapatillaService{
public zapatillas: Array<Zapatilla>; 
constructor(){
	this.zapatillas=[
	new Zapatilla('reebok classic','reebok','blanco',80,true),
	new Zapatilla('nike classic','nike','blanco',100,true),
	new Zapatilla('addidas classic','addidas','blanco',81,true),
	new Zapatilla('jordan classic','jordan','blanco',81,false)	
		];


}

getTexto(){

	return "hola mundo desde un servicio";
}

getZapatillas():Array<Zapatilla>{
	return this.zapatillas;
 


}

}