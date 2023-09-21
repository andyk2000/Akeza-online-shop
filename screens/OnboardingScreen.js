import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import {Text,View, Image} from 'react-native';

const OnboardingSCreen = ({navigation}) => {
  return(
    <Onboarding 
      onSkip={() =>navigation.replace('Login')}
      onDone={() =>navigation.replace('Login')}
      pages={[
        {
          backgroundColor: '#fff',
          image: <Image source={require('../assets/pics/boutique.jpg')}/>,
          title: 'get Started',
          subtitle: 'welcome to akeza boutik for clothing and accessories, become the embodiment of fashion.'
        },
        {
          backgroundColor: '#fff',
          image: <Image source={require('../assets/pics/money.png')}/>,
          title: 'connect with thousands suppliers',
          subtitle: 'We have a wide variety of product with the best price.'
        },
        {
          backgroundColor: '#fff',
          image: <Image source={require('../assets/pics/tick-mark.png')} width/>,
          title: 'Enjoy the ride',
          subtitle: 'We have a wide variety of product with the best price.'
        }
      ]}
    />
  )
}

export default OnboardingSCreen;
