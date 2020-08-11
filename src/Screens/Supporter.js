import React from "react";
import { createAppContainer} from "react-navigation";
import { createDrawerNavigator} from "react-navigation-drawer";
import { Dimensions } from "react-native";
import { Feather } from "@expo/vector-icons";

import ProfileScreen from './ProfileScreen';
import MessageScreen from './MessageScreen';
import ActivityScreen from './ActivityScreen';
import ListScreen from './ListScreen';
import ReportScreen from './ReportScreen';
import StatisticScreen from './StatisticScreen';
import logout from '../components/logout';
import DeleteAccountScreen from './DeleteAccountScreen'
//} from "./src/Screens";
import SideBar from '../components/SideBar';
//import { ProfileScreen } from "../components/Drawer";

const DrawerNavigator = createDrawerNavigator({
    ProfileScreen: {
        screen: ProfileScreen,
        navigationOptions: {
            title: "Profile",
            drawerIcon: ({tintColor}) => <Feather name="user" size={16} color={tintColor} />
        }
    },
    MessageScreen: {
        screen: MessageScreen,
        navigationOptions: {
            title: "Message",
            drawerIcon: ({tintColor}) => <Feather name="message-square" size={16} color={tintColor} />
        }
    },
    ActivityScreen: {
        screen: ActivityScreen,
        navigationOptions: {
            title: "Activity",
            drawerIcon: ({tintColor}) => <Feather name="activity" size={16} color={tintColor} />
        }
    },
    ListScreen: {
        screen: ListScreen,
        navigationOptions: {
            title: "Lists",
            drawerIcon: ({tintColor}) => <Feather name="List" size={16} color={tintColor} />
        }
    },
    ReportScreen: {
        screen: ReportScreen,
        navigationOptions: {
            title: "Reports",
            drawerIcon: ({tintColor}) => <Feather name="bar-chart" size={16} color={tintColor} />
        }
    },
    StatisticScreen: {
        screen: StatisticScreen,
        navigationOptions: {
            title: "Statistic",
            drawerIcon: ({tintColor}) => <Feather name="user" size={16} color={tintColor} />
        }
    },
    logout: {
        screen: logout,
        navigationOptions: {
            title: "Logout",
            drawerIcon: ({tintColor}) => <Feather name="log-out" size={16} color={tintColor} />
        }
    },
    DeleteAccountScreen: {
        screen: DeleteAccountScreen,
        navigationOptions: {
            title: "Delete Account",
            drawerIcon: ({tintColor}) => <Feather name="delete" size={16} color={tintColor} />
        }
    },
},

{
    contentComponent: props => <SideBar {...props}/>,
    drawerWidth: Dimensions.get("window").width * 0.85,
    hideStatusBar: true,

    contentOptions:{
        activeBackgroundColor: "rgba(212,118,207,0.2)",
        activeTintColor: "#531158",
        itemsContainerStyle: {
            marginTop: 16,
            marginHorizontal: 8
        },
        itemStyle:{
            borderRadius: 4
        }
    }
}
);

export default createAppContainer(DrawerNavigator);