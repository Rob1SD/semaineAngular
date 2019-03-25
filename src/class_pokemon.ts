export class Pokemon {
    nom:string;
    speed:number;
    attackDmg:number;
    healthPoint:number;
    constructor(_nom, _speed,_attackDmg,_healthPoint) {
        this.nom=_nom;
        this.speed=_speed;
        this.attackDmg=_attackDmg;
        this.healthPoint=_healthPoint;
       // console.log(this.nom);
    }
    attack(pokemon:Pokemon){
        pokemon.healthPoint = pokemon.healthPoint - this.attackDmg < 0 ? 0 : pokemon.healthPoint - this.attackDmg;

    }
}


export function getFirstAttacker(p1:Pokemon,p2:Pokemon) {
    return p1.speed > p2.speed ? p1 : p2;
}
export function fight(p1:Pokemon,p2:Pokemon) {
    let player1:Pokemon = getFirstAttacker(p1,p2);
    let player2:Pokemon = player1===p1 ? p2 : p1;
    var turn = 1;
    while (player1.healthPoint > 0 && player2.healthPoint > 0) {
        console.log("===================================================");
        console.log("Tour : " + turn)
        console.log(player1.nom + " : " + player1.healthPoint + " hp");
        console.log(player2.nom + " : " + player2.healthPoint + " hp");


        player1.attack(player2);
        console.log(player1.nom + " attaque " + player2.nom)
        console.log(player2.nom + " : " + player2.healthPoint + " hp");
        if (player2.healthPoint > 0) {
            player2.attack(player1);
            console.log(player2.nom + " attaque " + player1.nom)
            console.log(player1.nom + " : " + player1.healthPoint + " hp");

        }
        ++turn;
    }
    let winner:Pokemon = player2.healthPoint > 0 ? player2 : player1;
    console.log(winner.nom + " a gagné");
    return winner;
}