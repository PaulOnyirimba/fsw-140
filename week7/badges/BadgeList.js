import React from 'react'
import BadgeCard from './BadgeCard.js'

class BadgeList extends React.Component {
    render() {
        const mappedCards = this.props.namebadges.map( (card, i) => {
            return (
                <BadgeCard
                    key={i}
                    firstName={card.firstName}
                    lastName={card.lastName}
                    email={card.email}
                    birthPlace={card.birthPlace}
                    phoneNbr={card.phoneNbr}
                    favefood={card.favefood}
                    about={card.about}
                    bgcolor={card.bgcolor}
                    />
            )
        })
        return (
            <div>
                {mappedCards}
            </div>
        )
    }
}

export default BadgeList