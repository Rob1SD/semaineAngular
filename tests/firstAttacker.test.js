var poke = require('../built/class_pokemon');

test('assert that pickachu attack before salameche', function(){
    var pika = new poke.Pokemon ("Pikachu",90,20, 100);
    var sala = new poke.Pokemon("Salameche",80,22,110);
    expect(poke.getFirstAttacker(pika,sala).nom).toBe("Pikachu");
});
test('assert that pickachu attack after salameche', function(){
    var pika = new poke.Pokemon ("Pikachu",79,20, 100);
    var sala = new poke.Pokemon("Salameche",80,22,110);
    expect(poke.getFirstAttacker(pika,sala).nom).toBe("Salameche");
});
test('assert that pickachu attack after salameche when same speed', function(){
    var pika = new poke.Pokemon ("Pikachu",80,20, 100);
    var sala = new poke.Pokemon("Salameche",80,22,110);
    expect(poke.getFirstAttacker(pika,sala).nom).toBe("Salameche");
});

test('assert that salameche has lost hp after pikachu attacked', function(){
    var pika = new poke.Pokemon ("Pikachu",90,20, 100);
    var sala = new poke.Pokemon("Salameche",80,22,110);
    pika.attack(sala)
    expect(sala.healthPoint).toBe(90);
});

test('assert looser has 0 HP', function(){
    var pika = new poke.Pokemon ("Pikachu",90,20, 100);
    var sala = new poke.Pokemon("Salameche",80,22,110);
    var looser = poke.fight(pika,sala)===sala ? pika : sala;
    expect(looser.healthPoint).toBe(0);
});

test('assert salameche beats pikachu', function(){
    var pika = new poke.Pokemon ("Pikachu",90,20, 100);
    var sala = new poke.Pokemon("Salameche",80,22,110);
    var looser = poke.fight(pika,sala)===sala ? pika : sala;
    expect(looser.nom).toBe("Pikachu");
});

test('assert pikachu beats salameche', function(){
    var pika = new poke.Pokemon ("Pikachu",90,22, 100);
    var sala = new poke.Pokemon("Salameche",80,22,110);
    var looser = poke.fight(pika,sala)===sala ? pika : sala;
    expect(looser.nom).toBe("Salameche");
});

test('assert salameche beats pikachu when same stats because of declaration order', function(){
    var pika = new poke.Pokemon ("Pikachu",80,22, 100);
    var sala = new poke.Pokemon("Salameche",80,22,110);
    var looser = poke.fight(pika,sala)===sala ? pika : sala;
    expect(looser.nom).toBe("Pikachu");
});