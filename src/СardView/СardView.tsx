import React from "react";
import './cards.css';
import './App.css';
interface ICardViewProps {
    rank: string;
    suit: string;
}
const CardView: React.FC<ICardViewProps> = props => {
    const cardClasses = `card rank-${props.rank.toLowerCase()} ${props.suit}`;
    const getSuit = (suit: string) => {
      if(suit === 'diams') {
          return '♦';
      } else if (suit === 'hearts') {
          return '♥';
      } else if (suit === 'clubs') {
          return '♣';
      } else if (suit === 'clubs') {
          return '♠';
      }
    };
    const suitEl:"♦"|"♥"|"♣"|"♠"|undefined = getSuit(props.suit);
    return (
      <span className={cardClasses}>
          <span className="rank">{props.rank}</span>
          <span className="suit">{suitEl}</span>
      </span>
);
};
export default CardView;