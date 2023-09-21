import React, {useState, useRef, useEffect} from 'react';
import { Image ,SafeAreaView, StyleSheet, Text, View,  TouchableOpacity, Animated, Switch} from 'react-native';
import random from '../assets/pics/download.jpeg';
import home from '../assets/pics/45180.png';
import notification from '../assets/pics/565422.png';
import search from '../assets/pics/5948534.png';
import settings from '../assets/pics/15185.png';
import logout from '../assets/pics/logou.png';
import menu from '../assets/pics/menu.png';
import close from '../assets/pics/close.png';
import { signOut } from 'firebase/auth';
import { auth } from '../config/Firebase';

const Home = ({ navigation }) => {

  
  const [currentTab, setCurrentTab] = useState("Home");
  //to get the current status of menu
  const [showMenu, setShowMenu ] = useState(false);
  //Animated properties
  const [buy, setBuy] =useState(false);
  const offsetValue = useRef(new Animated.Value(0)).current;
  const scaleValue = useRef(new Animated.Value(1)).current;
  const closeButtonValue = useRef(new Animated.Value(0)).current;

  if(buy){
    navigation.navigate('Buy');
  }
  const TabButton = (currentTab,setCurrentTab, title , image ) =>{
  return(
    <TouchableOpacity onPress={async () => {
      if(title == 'Logout'){
       await signOut(auth);
       navigation.navigate('Signup');
      }else{
        console.log('other page')
      }
    }}>
            <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingVertical: 8,
            paddingLeft: 13,
            paddingRight: 35,
            backgroundColor: currentTab == title ? 'white': 'transparent',
            borderRadius: 8,
            marginTop: 15
          }}>
            <Image source={ image } style={{
              width: 25, height: 25,
              tintColor: currentTab == title ? "#bbbbbb" : "white"
            }}>
            </Image>
            <Text style={{
              fontSize: 15,
              fontWeight: 'bold',
              paddingLeft: 15,
              color: currentTab == title ? "#bbbbbb" : "white"
            }}>{ title }</Text>
          </View>
          </TouchableOpacity>
  );
          }
  return (
    
    <SafeAreaView style={styles.container}>
      <View style={{ justifyContent: 'flex-start', paddingTop: 40 ,padding: 15}}>


        <Image source={ random } style={{
          width: 60,
          height: 60,
          borderRadius: 10,
          marginTop: 8
        }}></Image>
        

        <TouchableOpacity  >
          <Text style={{
            marginTop: 6,
            color: 'white',
          }} onPress={() => {handlePress()}}>Edit Profile</Text>
        </TouchableOpacity>
        <View style={{ flexGrow: 1, marginTop: 50}}>
          {
            //Tab bar Buttons....
          }
          {TabButton(currentTab,setCurrentTab, 'Home', home) }
          {TabButton(currentTab,setCurrentTab, 'Search', search)}
          {TabButton(currentTab,setCurrentTab, 'Notifications', notification)}
          {TabButton(currentTab,setCurrentTab, 'Settings', settings)}

        </View>

        <View>
          {TabButton(currentTab,setCurrentTab, 'Logout', logout)}
        </View>
      </View>

      {
        //overlay view
      }

      <Animated.View style={{
        flexGrow: 1,
        backgroundColor: 'white',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        paddingHorizontal: 15,
        paddingVertical: 20,
        borderRadius: showMenu ? 15 : 0,
        
        transform: [
          {scale: scaleValue },
          {translateX: offsetValue}
        ]
      }}>

      {
        //menu button
      }
        <Animated.View style={{
          translateY: closeButtonValue
        }}>
          <TouchableOpacity onPress={()=>{

        Animated.timing(scaleValue, {
          toValue: showMenu ? 1 : 0.88,
          duration: 300,
          useNativeDriver: true
        }) .start()

        Animated.timing(offsetValue, {
          toValue: showMenu ? 0 : 220,
          duration: 300,
          useNativeDriver: true
        }) .start()
        
        Animated.timing(closeButtonValue, {
          toValue: !showMenu ? -30 : 0,
          duration: 300,
          useNativeDriver: true
        }) .start()

        setShowMenu(!showMenu);
      }}>

        <Image source={showMenu ? close : menu} style={{
          width: 40,
          height: 40,
          tintColor: 'black',
          marginTop: 48
        }}></Image>
      </TouchableOpacity>
        </Animated.View>
        
        <Text>Home page!</Text>
      </Animated.View>
      
    </SafeAreaView>
  );
}

// Multiple buttons for the drawer




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bbbbbb',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
});


export default Home;