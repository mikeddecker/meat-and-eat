import { View } from 'react-native'
import React from 'react'
import globalStyles from '../src/global/globalStyles'
import LayoutContainer from '../src/components/LayoutContainer'
import ItemCardDetail from '../src/components/ItemCardDetail';

const MeetupDetailsScreen = ({ route }) => {
  const item = route.params

  return (
    <LayoutContainer>
      <View style={[globalStyles.containerLeft]}>
        <ItemCardDetail item={item} />
      </View>
    </LayoutContainer>
  )
}

export default MeetupDetailsScreen