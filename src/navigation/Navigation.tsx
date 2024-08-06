import React from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import { navigationRef } from "../utils/NavigationUtil";
import { useCustomTheme } from "./Theme";



const Stack = createNativeStackNavigator();

const Navigation =() => {

    const theme = useCustomTheme();
    const MyTheme = {
      ...DefaultTheme,
      colors: {
        ...DefaultTheme.colors,
        background: theme.colors.background,
        text: theme.colors.text,
        card: theme.colors.card,
        border: theme.colors.border,
        notification: theme.colors.notification,
        primary:theme.colors.primary,
      },
    };

    return (
       <NavigationContainer ref={navigationRef} theme={MyTheme }>
        <Stack.Navigator 
            screenOptions={()=> ({
              headerShown:false,
            })}
            initialRouteName="LoginScreen"
        >
          <Stack.Screen name="HomeScreen"  component={HomeScreen}/>
          <Stack.Screen name="LoginScreen" component={LoginScreen } />
        </Stack.Navigator>
       </NavigationContainer>
    )
}

export default Navigation;