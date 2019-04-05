import {createStackNavigator, createAppContainer} from 'react-navigation';
import LoginForm from '../Components/LoginForm';
import Navigation from './Navigation';

const MainNavigator = createStackNavigator({
    LoginForm: {screen: LoginForm},
    Navigation: {screen: Navigation},
});

const stackNavigator = createAppContainer(MainNavigator);

export default stackNavigator;