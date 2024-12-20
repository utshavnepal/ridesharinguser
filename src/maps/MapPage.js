import MapView, {PROVIDER_GOOGLE} from 'react-native-maps'
import { View, Text, StyleSheet, Dimensions,TouchableOpacity, Image } from 'react-native'
import React,{useState, useRef, useEffect} from 'react'
import {filterData, Customer ,carsAround} from '../global/data'

import * as Location from 'expo-location'

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
import { mapStyle } from '../global/mapStyle'
import { Button } from 'react-native-elements'
import { color } from 'react-native-elements/dist/helpers'


const MapPage =({navigation})=>{
   
   
    const getLocation = async()=>{
        try{
            const {granted} =await Location.requestForegroundPermissionsAsync();
            if(!granted)return;
            const {
                coords:{latitude,longitude},
            } = await Location.getCurrentPositionAsync();
            setLatLng({latitude:latitude,longitude:longitude})
        }catch(err){
    
        }
    }
    const _map = useRef(1);
  
  
    useEffect(()=>{
        
        getLocation()
    
    ,[]})
    return(
        <View style={styles.fullscreen}>

<View style={{alignItems:"center",justifyContent:"center", }}>
          <MapView
          ref={_map}
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          customMapStyle={mapStyle}
        showsUserLocation={true}
        followsUserLocation={true}    
        rotateEnabled={true}
        zoomEnabled={true}
        toolbarEnabled={true} 



          >
            {carsAround.map((item,index)=>
                            <MapView.Marker coordinate = {item} key= {index.toString()}>
                                <Image 
                                    source = {require('../../assets/carmarking.png')}
                                    style ={styles.carsAround}
                                    resizeMode = "cover"
                                    initialRegion = {{...carsAround[0],latitudeDelta:0.008,longitudeDelta:0.008}}
                                />
                            </MapView.Marker>
                            
           )}  
          </MapView>

          </View>

        </View>


         
     
      
    
      )
    }
    export default MapPage;
    
    

const styles = StyleSheet.create({
    
    
    
    
        

    

    
    map:{
       
    height: SCREEN_HEIGHT*0.92,
     marginVertical: 0,
     width:SCREEN_WIDTH*0.92
    },

    carsAround: {
    width: 28,
    height: 14,
    
    }, 
    card:{
        alignItems:"center",
        margin:SCREEN_WIDTH/22,
        height:50,width:50,
            borderRadius:30,
          backgroundColor:'pink'
          
    },
    view2:{marginBottom:5,
        borderRadius:15,
        
      },   
    
   fullscreen:{
       width:'100%',
       height:'100%',
   },
   
  
   


})
   