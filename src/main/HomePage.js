import MapView, {PROVIDER_GOOGLE} from 'react-native-maps'
import { View, Text, StyleSheet, Dimensions, ScrollView, Image, FlatList, TouchableOpacity  } from 'react-native'
import React,{useState, useRef, useEffect} from 'react'
import {filterData, carsAround} from '../global/data'
import {Icon} from 'react-native-elements'
import * as Location from 'expo-location'

const SCREEN_WIDTH = Dimensions.get('window').width;
import { mapStyle } from '../global/mapStyle'
import {colors, parameters} from '../global/styles'
import { StatusBar } from 'expo-status-bar';


const HomePage = ({navigation}) => {
  
    const checkPermission = async()=>{
      const hasPermission = await Location.requestForegroundPermissionsAsync();
      if (hasPermission.status === 'granted'){
          const permission = await askPermission();
          return permission
      }
      return true
  }
  const askPermission = async()=>{
      const permission= await Location.requestForegroundPermissionsAsync();
      return permission.status === 'granted';
  }
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
      checkPermission();
      getLocation()
     // console.log(latlng)
  ,[]})
    
return(
<View style={styles.container}>
      <ScrollView bounces={false}>
         
<View>
  
  <View style={styles.carddiscount}>
                  <View style={styles.view2}>
                  <Image  style={styles.imageoffer} source= {require('../../assets/offer.png')}/>
                  </View>
                  <View style={styles.view5}>
         <View style={styles.view6}>
             <View style={styles.view7}>
             
         <Icon type="material-community"
         name ="clock"
         color={colors.black}
         size={40}/>
                 
             </View>
             <Text style={{fontSize:24, color:colors.black, alignItems:'center'}}>
                 ride with us {'\n'}
                  to participate {'\n'}
                  now in contest {'\n'}
             </Text>
         </View>

         </View>
                  </View>
  
</View>

         <View>
             <FlatList numRows={2} horizontal={true} 
             showsHorizontalScrollIndicator={false}
              data={filterData}
               keyExtractor={(item)=>item.id}
              renderItem= {({item})=>(
                  <View style={styles.card}>
                  <View style={styles.view2}>
                  <Image  style={styles.image2} source={item.image}/>
                  </View>
                  <View>
                  
                  <TouchableOpacity onPress={()=>navigation.navigate("RequestScreen")}>
         <View style={styles.button1}>
             <Text style={styles.button1Text}>{item.name}</Text>
         </View>
         </TouchableOpacity>
                  </View>

                  
                  </View>
              )}
             />
         </View>
         <View style={styles.view3}>
         <Text>
             where to?
         </Text>
         <View style={styles.view4}>
         <Icon type="material-community"
         name ="home"
         size={40}/>
             <Text style={{marginLeft:5}}> Now</Text>
         </View>

         </View>
         <View style={styles.view5}>
         <View style={styles.view6}>
             <View style={styles.view7}>
             
         <Icon type="material-community"
         name ="map-marker"
         color={colors.black}
         size={40}/>
                 
             </View>
             <Text style={{fontSize:18, color:colors.black}}>
                 32, kathmandu road
             </Text>
         </View>

         </View>
          


          <View style={{alignItems:"center",justifyContent:"center"}}>
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


         
      </ScrollView>
      <StatusBar style='light' backgroundColor='white' translucent={true}/>
    </View>
  )
}

export default HomePage

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colors.white,
        paddingBottom:30,
        paddingTop:parameters.statusBarHeight
    },
    header:{
      backgroundColor:colors.blue,
      height:parameters.headerHeight,
      alignItems:"flex-start"
     
    },
    
    image1:{
     
      height:100,
      width:100,
    
    },
    
    image2:{height:150,width:150,
            borderRadius:30,
          },
          imageoffer:{height:250,width:250,
            borderRadius:30,
          },
    
    home:{
     backgroundColor:colors.blue,
     paddingLeft:20,
     
    },
    
    text1:{
     color:colors.white,
     fontSize:21,
     paddingBottom:20,
     paddingTop:20
    },
    
    text2:{
     color:colors.white,
     fontSize:16
    },
    
    view1:{
     flexDirection:"row",
     flex:1,
     paddingTop:30
    },
    
    button1:{
      height:40,
      width:150,
      backgroundColor:colors.black,
      borderRadius:20,
      alignItems:"center",
      justifyContent:"center",
      marginTop:20
    },
    
    button1Text:{
     color:colors.white,
     fontSize:17,
     marginTop:-2
    
    },
    card:{
     alignItems:"center",
     margin:SCREEN_WIDTH/22
    
    },
    carddiscount:{
      alignItems:"center",
      
     
     },
    view2:{marginBottom:5,
          borderRadius:15,
          backgroundColor:colors.grey6
        },
    
        title:{
          color:colors.black,
          fontSize:16
        },
    view3:{flexDirection:"row",
             marginTop :5,
             height:50,
             backgroundColor:colors.grey6,
             alignItems:"center",
             justifyContent:"space-between",
            marginHorizontal:15
            
             },
    text3:{marginLeft:15,
            fontSize:20,
            color:colors.black
      },
    
    view4:{ flexDirection:"row",
            alignItems:"center",
            marginRight:15,
            backgroundColor:"white",
            paddingHorizontal:10,
            paddingVertical:2,
            borderRadius:20
            },
    
    view5:{ flexDirection:"row",
    alignItems:"center",
    backgroundColor:"white",
    paddingVertical:25,
    justifyContent:"space-between",
    marginHorizontal:15,
    borderBottomColor:colors.grey4,
    borderBottomWidth:1,
    flex:1
    },
    
    view6:{
    
    
    alignItems:"center",
    flex:5,
    flexDirection:"row"
    },
    view7:{
    backgroundColor:colors.grey6,
    height:40,
    width:40,
    borderRadius:20,
    alignItems:"center",
    justifyContent:"center",
    marginRight:20
    
    },
    
    map:{
       
    height: 350,
     marginVertical: 0,
     width:SCREEN_WIDTH*0.92
    },
    
    text4:{ fontSize:20,
          color:colors.black,
          marginLeft:20,
          marginBottom:20
        },
    
    icon1:  {marginLeft:10,
           marginTop:5
          },

    view8: {flex:4,
          marginTop:-25
        } ,
    carsAround: {
    width: 28,
    height: 14,
    
    }, 
    
    location: {
      width: 16,
      height: 16,
      borderRadius:8,
      backgroundColor:colors.blue,
      alignItems:"center",
      justifyContent:"center"
      
      }, 
      
    view9:{width:4,
    height:4,
    borderRadius:2,
    backgroundColor:"white"
    }


})