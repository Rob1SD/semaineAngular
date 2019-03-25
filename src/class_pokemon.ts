class Pokemon {
    nom:string;
    speed:number;
  constructor(_nom) {
    this.nom=_nom;
    console.log(this.nom);
  }
}

let pika=new Pokemon("Pikachu");
let sala=new Pokemon("Salameche");