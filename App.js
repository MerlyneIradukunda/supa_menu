import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CartScreen from "./views/CartScreen";
import HomeScreen from "./views/HomeScreen";
import CheckOutScreen from "./views/CheckOutScreen";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        {/* <Stack.Screen name="HomeCartScreen" component={HomeScreen} /> */}
        <Stack.Screen name="Home" component={CartScreen} />
        <Stack.Screen name="CheckOutScreen" component={CheckOutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
