class Park{

  constructor(name,ticketPrice,dinosaurs){
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinosaurs = dinosaurs;
  }

  addDinosaur(dinosaur){
    this.dinosaurs.push(dinosaur);
  }

  removeDinosaur(dinoSpecies){
    const pos = this.dinosaurs.indexOf(dinoSpecies);
    this.dinosaurs.splice(pos,1);
  }

  findAllDinos(dinoSpecies){
    let dinoList = [];
    for(var dino in this.dinosaurs){
      if(dino.species == dinoSpecies){
        dinoList.push(dino);
      }
    }
    return dinoList;
  }

}
module.exports = Park;
