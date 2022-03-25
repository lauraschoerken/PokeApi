import { Component, OnInit } from '@angular/core';
import { PokeService } from 'src/app/service/poke.service'; 

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.scss']
})
export class ApiComponent implements OnInit {

  constructor(private pokeServise:PokeService) { }

  nombre:string ="";
  type1='';
  type2 ='';
  isType2 = false;
  name="";
  height= "";
  weight="";
  img="";
  newHeight=0;
  newWeight=0;
  lbs = 0
  feet=0
  number = false
  color:string = "white"
  
  ngOnInit(): void {
  }

  agregarEnter(){
    this.PokeRecibe(this.nombre) 
    this.nombre="";
    this.number = true
  }

  background( type : string){
   switch (type){
    case "psychic": this.color = "#fcb6f4"; break;
    case "bug": this.color = "#299e68"; break; 
    case "dark": this.color = "#5c5c5c"; break; 
    case "dragon": this.color = "#00c7c4"; break; 
    case "electric": this.color = "#fdff9c"; break; 
    case "fairy": this.color = "#ffa1e6"; break; 
    case "fighting": this.color = "#ffb963"; break; 
    case "fire": this.color = "#ff3838"; break; 
    case "flying": this.color = "#81a5c9"; break; 
    case "ghost": this.color = "#805796"; break; 
    case "grass": this.color = "#11a839"; break; 
    case "ground": this.color = "#805e2e"; break; 
    case "ice": this.color = "#85fff5"; break; 
    case "normal": this.color = "#dbcaad"; break; 
    case "poison": this.color = "#b677d1"; break; 
    case "rock": this.color = "#663600"; break; 
    case "steel": this.color = "#c7c8c9"; break; 
    case "water": this.color = "#4f84ff"; break; 
   }
  }

  PokeRecibe(nombre: any){
    this.pokeServise.sacarPoke((this.nombre).toLowerCase()).subscribe(
      res => {
        this.type1 = res.types[0].type.name 
      
        this.name = res.name
        this.height =res.height
        this.newHeight = parseInt(this.height)/10
        this.feet = this.newHeight * 3.28084
        this.weight = res.weight
        this.newWeight = parseInt(this.weight)/10
        this.lbs = this.newWeight * 2.20462
        this.img = res.sprites.front_default
        console.log(res);

        this.type2 = " "
        this.isType2 = false
        if (res.types.length > 1) {
          this.type2 = res.types[1].type.name
          this.isType2 = true
        } 
        this.background(this.type1)
      }
    )
  }
}
