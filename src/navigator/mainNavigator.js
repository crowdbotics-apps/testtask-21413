import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile139667Navigator from '../features/UserProfile139667/navigator';
import Tutorial139666Navigator from '../features/Tutorial139666/navigator';
import NotificationList139638Navigator from '../features/NotificationList139638/navigator';
import Settings139637Navigator from '../features/Settings139637/navigator';
import Settings139629Navigator from '../features/Settings139629/navigator';
import UserProfile139627Navigator from '../features/UserProfile139627/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile139667: { screen: UserProfile139667Navigator },
Tutorial139666: { screen: Tutorial139666Navigator },
NotificationList139638: { screen: NotificationList139638Navigator },
Settings139637: { screen: Settings139637Navigator },
Settings139629: { screen: Settings139629Navigator },
UserProfile139627: { screen: UserProfile139627Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
