import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SolicitudesScreen } from "../Screens/SolicitudesScreen";
import GetSolicitudScreen from '../Screens/GetSolicitudScreen';


const Stack = createNativeStackNavigator();

export function SolicitudesStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Solicitudes"
        component={SolicitudesScreen}
        options={{
          tabBarLabel: 'Solicitudes',
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('../Assets/LogoTitle.png')}
              style={{ width: size, height: size }}
            />
          ),
        }}
      />
      <Stack.Screen
        name="getSolicitud"
        component={GetSolicitudScreen}
        options={{
          headerTitle: '', // Eliminar el título personalizado
          headerShown: false,
        }} // Eliminar la opción header
      />
    </Stack.Navigator>
  );
}
