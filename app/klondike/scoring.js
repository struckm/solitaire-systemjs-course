function scoreForMoving(source, destination) {
  if (destination.name === "TableauPile") {
    if (source.name === "FoundationPile") {
      return -15;
    }
    return 5;
  }
  if (destination.name === "FoundationPile") {
    if (source.name === "TableauPile" || source.name === "WastePile") {
      return 10;
    }
  }
}

export class Scoring {
  constructor() {
    this.score = 0;    
  }

  newGame() {
    this.score = 0;
  }

  tableauCardTurnedUp() {
    this.score += 5;
  }

  dropped(source, destination) {
    this.score += scoreForMoving(source, destination) || 0;
  }
  
  wasteRecycled() {
    this.score = Math.max(this.score - 100, 0);
  }
}
