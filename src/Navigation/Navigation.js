import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Image, View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { TouchableOpacity,StatusBar } from 'react-native';

import { SolicitudesStack } from '../Navigation/SolicitudesStack';

const Tab = createBottomTabNavigator();

const CustomHeaderTitle = () => {
  return (
    <View style={styles.headerTitleContainer}>
      <Image
        source={require('../Assets/Logo2.png')}
        style={styles.headerLogo}
      />
      <Text style={styles.headerText}>Cafeteria</Text>
    </View>
  );
};


export function Navigation() {
  return (
    <SafeAreaView style={styles.container}>
      <Tab.Navigator
        screenOptions={{
          headerTitle: () => <CustomHeaderTitle />,
        }}
      >
        <Tab.Screen
          name="Solicitud"
          component={SolicitudesStack}
          options={{
            tabBarLabel: 'Solicitudes', 
            tabBarLabelStyle: { color: '#000', fontWeight: 'bold', fontSize: 12 },
            headerStyle: styles.headerStyle,
            tabBarIcon: ({ color, size }) => {
              return (
                <Image
                  source={require('../Assets/Icon.png')}
                  style={{ width: size, height: size }}
                />
              );
            },
          }}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    marginTop:StatusBar.currentHeight
  },
  headerTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerLogo: {
    width: 30,
    height: 23,
    borderRadius: 4,
  },
  headerText: {
    marginLeft: 8,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  headerStyle: {
    backgroundColor: 'black',
    elevation: 0,
    shadowOpacity: 0,
    borderBottomWidth: 0,
  },
});