import {createStackNavigator, createAppContainer} from 'react-navigation';
import Navigation from './BottomNavigation';

const MainNavigator = createStackNavigator({
    // LoginForm: {screen: LoginForm},
    Navigation: {screen: Navigation},
});

const stackNavigator = createAppContainer(MainNavigator);

export default stackNavigator;