import React from "react";

interface ICardViewProps {
    rank: string;
    suit: string;
}
const CardView: React.FC<ICardViewProps> = props => {
    const cardClasses = `card rank-${props.rank.toLowerCase()} ${props.suit}`;
    const getSuit = (suit: string) => {
      if(suit === 'diams') {
          return '♦';
      } else if (suit === 'spades') {
          return '♥';
      } else if (suit === 'hearts') {
          return '♣';
      } else if (suit === 'clubs') {
          return '♠';
      }
    };
    const suitEl:"♦"|"♥"|"♣"|"♠"|undefined = getSuit(props.suit);

    return (
      <div className={cardClasses}>
          <span className="rank">{props.rank}</span>
          <span className="suit">{suitEl}</span>
      </div>
);
};
export default CardView;