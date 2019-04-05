// App.js

import React from 'react'
import IntroLogo from './Components/IntroLogo'
import {createStackNavigator,createAppContainer} from 'react-navigation';
import LoginForm from './Components/LoginForm';
import Navigation from './Navigation/Navigation';

const App = createStackNavigator({
        //Constant which holds all the screens like index of any book
        LoginForm: { screen: LoginForm },
        //First entry by default be our first screen if we do not define initialRouteName
        Navigation: { screen: Navigation },
    },
    {
        initialRouteName: 'LoginForm',
    }
);

// export default class App extends React.Component {
//
//     constructor(props) {
//         super(props)
//         this.state = {
//             // positionLeft: new Animated.Value(Dimensions.get('window').width),
//         }
//     }
//
//     render() {
//
//         return (
//             <IntroLogo/>
//         )
//     }
// }

export default createAppContainer(App);
