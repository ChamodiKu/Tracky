import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';


import HomeScreen from "./src/Screens/HomeScreen";
import ListScreen from "./src/Screens/ListScreen";

//create a navigator
const Home = createStackNavigator(
    {
        Homes: HomeScreen,
        List: ListScreen,
    },
    {
        navigationOptions: {
            headerTintColor: '#fff',
            headerStyle: {
                backgroundColor: '#000',
            },
        },
    }
);

const container = createAppContainer(Home);

export default container;