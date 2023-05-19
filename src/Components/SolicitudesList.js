import React from 'react'
import { View, Text, FlatList, StyleSheet, StatusBar } from 'react-native'
import {SolicitudesCard} from "./SolicitudesCard"


export function SolicitudesList(props) {
  const {Solicitudes} = props.Solicitudes;
  // const DATA = props.Solicitudes;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
  });


  const DATA = props.Solicitudes




  return (
    <FlatList
      data={DATA}
      numColumns={1}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => <SolicitudesCard Solicitudes={item} />}
      keyExtractor={item => item.id_servicio}

    />
  )
}