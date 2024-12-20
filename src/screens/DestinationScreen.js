
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Image, TextInput } from 'react-native'
import React,{useRef} from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { Avatar,Icon} from 'react-native-elements';
import { colors,parameters } from '../global/styles'
import ScrollBar from '../roles/ScrollBar';
import { render } from 'react-dom';
import MapPage from '../maps/MapPage';


const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

const DestinationScreen = ({navigation}) => {

    const textInput1 = useRef(4);
    const textInput2 = useRef(5);
  return (
    <View style={styles.container}>
    <View style={styles.view1} >
     
      <TouchableOpacity>



<View style={styles.view3}>
<Avatar
  rounded
  avatarStyle={{}}
  size={30}
  source={require('../../assets/ride.png')}
/>
   <Text style={{marginLeft:5}}>For Someone</Text>
   <Icon 
     type='material-community'
     name="chevron-down"
     color={colors.grey1}
     size ={26}
   />
</View>   
</TouchableOpacity>

<View style={styles.view6}>
    <TextInput />
    <ScrollBar/>
</View>
<View style={styles.view6}>
    <TextInput />
    <ScrollBar/>
</View>


</View>
<TouchableOpacity  onPress={()=>navigation.navigate("RideBar")}>
<View style={styles.button1}>
             <Text style={styles.button1Text}  >booknow</Text>
         </View>

    
</TouchableOpacity>

</View>
  )
}

export default DestinationScreen

const styles = StyleSheet.create({
    container: {
    
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        
        
        
    },
    
    view1:{
      
      
      
      
      justifyContent:"center",
      alignItems:"center",
      
      
      
    },
    
    view3:{
      flexDirection:"row",
      alignItems:"center",
         
      
      backgroundColor: colors.white,
      
      
      zIndex: 10
    },

      view6:{
        backgroundColor:colors.grey6,
        width:SCREEN_WIDTH*0.70,
        height:40,
        justifyContent:"center",
        marginTop:10,
        paddingLeft:0
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
    }
    });
    
    
