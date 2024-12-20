import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import { rideData } from '../global/data'
const ScrollBar = () => {
  return (
    <View>
      
             <FlatList numRows={4} horizontal={true} 
             showsHorizontalScrollIndicator={false}
              data={rideData}
               keyExtractor={(item)=>item.id}
              renderItem= {({item})=>(
                  
                  
                  <View>
                  <Text  >
                      {item.street } {item.area}
                  </Text>
                  </View>
              )}
              />
    </View>
  )
}

export default ScrollBar

