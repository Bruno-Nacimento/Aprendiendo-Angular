import {Component, OnInit, DoCheck,OnDestroy} from '@angular/core';

@Component({
	selector: 'videojuego',
	templateUrl:'./videojuego.component.html'




	})
	export class VideojuegoComponent implements OnInit, DoCheck,OnDestroy{
	public titulo:string;
	public listado:string;

		constructor(){
			this.titulo= "Componente de Videojuegos";

			this.listado= "listado de los juegos mas populares";
			console.log("se a cargado el componente videojuego.coomponent.ts")

		}

	ngOnInit(){

		console.log("OnInit ejecutado bro")
	}
	ngDoCheck(){

		console.log("OnCheck ejetcutado putita")

	}
	ngOnDestroy(){

console.log("OnDestroy ejetcutado putita")

	}

	}