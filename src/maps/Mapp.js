import MapView, {PROVIDER_GOOGLE} from 'react-native-maps'
import { View, Text, StyleSheet, Dimensions,TouchableOpacity  } from 'react-native'
import React,{useState, useRef, useEffect} from 'react'
import {filterData, Customer ,carsAround, passAround} from '../global/data'
import MapViewDirections from 'react-native-maps-directions'
import * as Location from 'expo-location'

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
import { mapStyle } from '../global/mapStyle'
import { Marker } from 'react-native-maps'


const Mapp =({navigation})=>{
   
   
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
            <View>
            <MapView.Marker coordinate = {item} key= {index}/>
                            
                                

                                
                            <MapViewDirections
          origin={item[0]}
          destination={item[1]}
          apikey={"AIzaSyCdHWvwtA3ZAE2kaCCsJLRvKwfvPLMPGC8"} 
          strokeWidth={4}
          strokeColor="#111111"
        />
            </View>
                           
                            
                            
           )}
           

          </MapView>

          </View>

        </View>


         
     
      
    
      )
    }
    export default Mapp;
    
    

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
   