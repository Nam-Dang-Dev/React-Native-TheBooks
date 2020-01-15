/**
 * @format
 */

import {Navigation} from 'react-native-navigation';

import startApp from './src/navigation/bottomTab';
import App from './src/app';
import Intro from './src/screens/Intro/index';

import AsyncStorage from '@react-native-community/async-storage';
import intro from './src/navigation/intro';

import upgradeMembership from '../reactNativeProject/src/screens/membership/upgradeMembership';
import {registerScreens} from './src/navigation/registerScreens';

registerScreens();

Navigation.registerComponent('app', () => App);
Navigation.registerComponent('Intro', () => Intro);

Navigation.registerComponent('membership', () => upgradeMembership);

Navigation.events().registerAppLaunchedListener(async () => {
  const token = await AsyncStorage.getItem('token');
  if (token) {
    //startApp();
    Navigation.setRoot({
      root: {
        stack: {
          children: [
            {
              component: {
                name: 'membership',
                options: {
                  topBar: {
                    visible: false,
                  },
                },
              },
            },
          ],
        },
      },
    });
  } else {
    intro();
  }
});
