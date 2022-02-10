import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import ExampleScreen from "./Screens/ExampleScreen";
import HomeScreen from "./Screens/homeScreen";

const Drawer = createDrawerNavigator()

const App = () =>{
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="HomeScreen" component={HomeScreen}/>
        <Drawer.Screen name="ExampleScreen" component={ExampleScreen}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App