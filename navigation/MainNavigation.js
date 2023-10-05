import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import MenuInseminador from "../screens/MenuInseminador";
import RutaInseminador from "../screens/RutaInseminador";
import VacasInseminador from "../screens/VacasInseminador";

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
            screenOptions = {
                {headerShown : false
                }}>

                <Stack.Screen
                    name = 'Menu'
                    component={MenuInseminador}                
                />
                <Stack.Screen
                    name = 'Ruta'
                    component={RutaInseminador}                
                />
                <Stack.Screen
                    name = 'Vacas'
                    component={VacasInseminador}                
                />
            
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigation