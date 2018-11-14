import React from 'react'
import {View, Text} from 'react-native'

const CardView = (places) =>  {

        const placeOutput  = this.state.places.map((place, i) => (
          <ListItem key={i} placeName={place}/>
        ))


    return (
        <View>
            {placeOutput}
        </View>
    )
}

export default CardView