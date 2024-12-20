import { StyleSheet, Text, View, Image, useWindowDimensions, ScrollView } from 'react-native'
import React,{useState} from 'react'

import CustomInput from '../component/CustomInput'
import CustomButton from '../component/CustomButton'
import SocialSignInButtons from '../component/SocialSigInButtons'
import { useNavigation } from '@react-navigation/native'
const SignInScreen = () => {

    const [username, setUsername] = useState()
    const[password, setPassword] = useState()

    const {height} = useWindowDimensions();
    const onSignInPressed =()=>{
      navigation.navigate('HomePage')

    }
    const onForgotPasswordPressed = ()=>{

      navigation.navigate('ForgotPwd')
    }
    const onSignUpPress =()=>{
      navigation.navigate('SignUp')
    }
    
const navigation = useNavigation()

  return (


    <ScrollView showsVerticalScrollIndicator={false}>
     
     <View style={styles.root}>
    
    <CustomInput placeholder="Username" value={username} setValue={setUsername} />
    <CustomInput placeholder="Password"  value={password} setValur={setPassword} secureTextEntry={true}
    />
    <CustomButton text="signin" onPress={onSignInPressed}/>
    <CustomButton text="Forgot Password" onPress={onForgotPasswordPressed} 
        type="TERTIARY"
    />

    <SocialSignInButtons/>
      <CustomButton
          text="Don't have an account? Create one"
          onPress={onSignUpPress}
          type="TERTIARY"
        />
    </View>

    </ScrollView>
    
  )
}

export default SignInScreen

const styles = StyleSheet.create({  

    logo:{
        width:'70%',
        maxWidth: 300,
        height:100
    },
    root:{
        alignItems:'center',
        padding:20,
    }
})