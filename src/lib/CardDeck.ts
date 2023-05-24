import Card from "./Card";
class CardDeck {
    private readonly ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    private readonly suits = ['diams', 'hearts'];
    public deck: Card[] = [];

    constructor() {
        this.suits.forEach(suit => {
            this.ranks.forEach(rank => {
                const card = new Card(rank, suit);
                this.deck.push(card);
            })
        })
    }

      getCard(): Card {
        const randomIndex = Math.floor(Math.random() * this.deck.length);
        return this.deck.splice(randomIndex, 1)[0];
    }
      getCards(howMany: number): Card[] {
        const cards: Card[] = [];
        for (let i = 0; i < howMany; i++) {
            const card = this.getCard();
            cards.push(card);
        }
        return cards;
    }
}
export default CardDeck;