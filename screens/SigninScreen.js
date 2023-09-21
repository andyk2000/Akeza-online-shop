import React, {useState} from 'react';
import {View, TouchableOpacity, Image, Text, StyleSheet , ScrollView} from 'react-native';
import FormInput from '../components/Input';
import FormButton from '../components/Button';
import SocialButton from '../components/SocialButton';
import AntDesign from 'react-native-vector-icons/AntDesign';
import app, { auth } from '../config/Firebase';
import { getAuth ,createUserWithEmailAndPassword } from 'firebase/auth';

const SignUpScreen = ({navigation}) =>{
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  
  const handleSignin = async () => {
    if(email && password){
      try{
        await createUserWithEmailAndPassword(auth, email, password);
        navigation.navigate('Home');
      }
      catch(error){
        console.log(error)
      }
    }
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <FormInput 
          labelValue= {email}
          placeHolderText= 'Email'
          onChangeText={(userEmail)=>{setEmail(userEmail)}}
          iconType = 'user'
          keyboardType = 'email-address'
          autoCapitalize= "none"
          autoCorrect= {false}
        />
        <FormInput 
          labelValue= {password}
          placeHolderText= 'Password'
          onChangeText={(userPassword)=>{setPassword(userPassword)}}
          iconType = 'lock'
          secureTextEntry= {true}
        />
        <FormInput 
          labelValue= {confirmPassword}
          placeHolderText= 'Confirm Password'
          onChangeText={(userConfirmPassword)=>{setConfirmPassword(userConfirmPassword)}}
          iconType = 'lock'
          secureTextEntry= {true}
        />

      <FormButton 
        buttonTitle= 'Sign in'
        onPress= {handleSignin}
      />

      <View style={styles.textPrivate}>
        <Text style={styles.color_textPrivate}>
          By registering, you confirm that you accept our{' '}
        </Text>
        <TouchableOpacity onPress={() => alert('Terms Clicked!')}>
          <Text style={[styles.color_textPrivate, {color: '#e88832'}]}>
            Terms of service
          </Text>
        </TouchableOpacity>
        <Text style={styles.color_textPrivate}> and </Text>
        <Text style={[styles.color_textPrivate, {color: '#e88832'}]}>
          Privacy Policy
        </Text>
      </View>

      <SocialButton 
        buttonTitle="Sign up with Facebook"
        btnType='facebook'
        color='#4867aa'
        backgroundColor= '#e6eaf4'
        onPress={()=>{}}
      />

      <SocialButton 
        buttonTitle="Sign up with Google"
        btnType='google'
        color='#de4d41'
        backgroundColor= '#f5e7ea'
        onPress={()=>{}}
      />
      <TouchableOpacity style={styles.forgotButton} onPress={()=>navigation.navigate('Login')}>
        <Text style={styles.navButtonText}>have an account? Sign up</Text>
      </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

const styles =StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingTop: 50,
    backgroundColor: '#fff',
  },
  text: {
    fontFamily: 'Kufam-SemiBoldItalic',
    fontSize: 28,
    marginBottom: 10,
    color: '#051d5f',
  },
  navButton: {
    marginTop: 15,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#2e64e5',
    fontFamily: 'Lato-Regular',
  },
  textPrivate: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 35,
    justifyContent: 'center',
  },
  color_textPrivate: {
    fontSize: 13,
    fontWeight: '400',
    fontFamily: 'Lato-Regular',
    color: 'grey',
  },
  logo: {
    
  }
})

export default SignUpScreen;