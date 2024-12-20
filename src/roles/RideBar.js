import { StyleSheet, Text, View, Image,FlatList,TouchableOpacity } from 'react-native'
import React from 'react'
import Mapp from '../maps/Mapp'
import { fare } from '../global/data'



const RideBar = ({navigation}) => {
  return (
    <View style={styles.container}>
     <View style={styles.view1}>
     



<View style={styles.view3}>
<FlatList numRows={2} horizontal={true} 
             showsHorizontalScrollIndicator={false}
              data={fare}
               keyExtractor={(item)=>item.id}
              renderItem= {({item})=>(
                  <View style={styles.card}>
                  <View style={styles.view2}>
                  <Image style={styles.image2}   source={item.image}/>
                  <TouchableOpacity onPress={()=>navigation.navigate("DriveSummary")}>
         <View style={styles.button1}>
             <Text style={styles.button1Text}>{item.name}</Text>
         </View>
         </TouchableOpacity>
                  </View>
                    
                    
                  </View>
              )}
              />                 
                  
                  
   
   </View>
     </View> 
     
             <Mapp/>
         </View>
    
  )
}

export default RideBar

const styles = StyleSheet.create({
    card:{
        alignItems:"center",
        
       
       },
       image2:{height:125,width:125,
        borderRadius:30,
        margin:10,
        
      },
       view2:{marginBottom:5,
        borderRadius:15,
        
      },
      title:{
        color:"black",
        fontSize:16
      },
      button1:{
        height:40,
        width:150,
        backgroundColor:"black",
        borderRadius:20,
        alignItems:"center",
        justifyContent:"center",
        marginTop:20
      },
      
      button1Text:{
       color:"white",
       fontSize:17,
       marginTop:-2
      
      },
      view3:{
        flexDirection:"row",
        alignItems:"center",
           
        
        backgroundColor: "white",
        
        
        zIndex: 10
      },
      container: {
        flex: 1,
        
      },    

      view1:{
        position:"absolute",
        top:'70%',
        left:12,
        backgroundColor:"white",
        height:250,
        width:'100%',
        borderRadius:20,
        justifyContent:"center",
        alignItems:"center",
        marginTop:2, 
        zIndex: 8
        
      },
      
})