import React, {useContext, useState} from "react";

import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledCard = styled.div`
  width: 200px;
  height: 200px;
  background-color: ${props => props.theme.infoCardBackgroundColor};
  margin: 20px;
  border-radius: 5px;

  .cardHeader {
    width: 100%;
    height: 50px;
    padding: 10px 20px;
    box-sizing: border-box;
    background-color: ${props => props.theme.accentBackgroundColor};
    font-size: 25px;
    line-height: 30px;
    color: ${props => props.theme.accentTextColor};
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    font-family: "supermercado";
  }
  
  .cardBody {
    padding: 10px 20px;
    box-sizing: border-box;
    color: ${props => props.theme.appBaseFontColor};
  }
  
  .cardFooter {
    padding: 10px 20px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

/**
 * This is single card display object
 *
 *
 * @return CardWithPropTypes valid react component
 *
 * @param props.deleteCard callback deletes card on call
 * @example
 *
 * <Card
 * deleteCard={deleteCardCallBack(cardData)}
 * key={cardData.id}
 * cardID={cardData.id}
 * cardName={cardData.name}
 * cardText={cardData.text}
 * />
 */
const CardWithPropTypes = (props) => {
    return (
        <StyledCard percentDone={Math.floor(Math.random()*100)}>
            <div className={'cardHeader'}>
                {props.cardName}
            </div>
            <div className={'cardBody'}>
                {props.cardText}
            </div>
            <div className={'cardFooter'}>
            </div>
        </StyledCard>
    )
}

CardWithPropTypes.propTypes = {
    /**
     Name of card to show
     @default Card
     */
    cardName: PropTypes.string,
    /**
     Text of card body
     */
    cardText: PropTypes.string,
    cardID: PropTypes.number,
}

export default CardWithPropTypes