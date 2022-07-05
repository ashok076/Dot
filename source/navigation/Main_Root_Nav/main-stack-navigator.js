import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Iconnect from '../../screens/Iconnect';
import { routes } from '../../constants/routes';



const Stack = createStackNavigator()

const Mainstask =() =>{

    return(
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name={routes.Test.Iconnect} component={Iconnect}/>
        </Stack.Navigator>
    )
}

export default Mainstask;