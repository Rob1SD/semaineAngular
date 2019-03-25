class Pokemon {
    nom:string;
  constructor(_nom) {
    this.nom=_nom;
    console.log(this.nom);
  }
}

let pika=new Pokemon("Pikachu");