import React from 'react';
import { View, Text, TouchableWithoutFeedback, StyleSheet, Image } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/FontAwesome5';
import moment from 'moment';

export function SolicitudesCard(props) {
  const Solicitudes = props.Solicitudes;
  const navigation = useNavigation();

  const formatDate = (date) => {
    const now = moment();
    const requestDate = moment(date);
    const daysDiff = now.diff(requestDate, 'days');

    if (daysDiff === 0) {
      return `Hoy a las ${requestDate.format('LT')}`;
    } else {
      return `hace ${daysDiff} días, ${requestDate.format('LT')}`;
    }
  };

  const goToSolicitud = () => {
   
    navigation.navigate('getSolicitud', {
      id_servicio: Solicitudes.id_servicio,
      nombre_solicitante: Solicitudes.nombre_solicitante,
      lugar: Solicitudes.lugar,
      fecha: Solicitudes.fecha_pedido,
      pedido: Solicitudes.pedido
    });
  };

  

  return (
    <TouchableWithoutFeedback onPress={goToSolicitud}>
      <View style={styles.card}>
        <Text style={styles.servicio}>
        <Icon name="hashtag" size={20} color="#fff" style={styles.iconSolicitud}/><Text> </Text>
          Solicitud {Solicitudes && Solicitudes.id_servicio}
        </Text>
        <View style={styles.spacing}>
          <View style={styles.bgStyles}>
            <View style={styles.content}>
              <View style={styles.text}>
                <Text style={styles.description}>
                  <Icon name="user" size={20} color="#000" style={styles.icon} /> Solicitante: {Solicitudes && Solicitudes.nombre_solicitante}
                </Text> 
                <Text style={styles.description}>
                  <Icon name="building" size={20} color="#000" style={[styles.icon, styles.iconBuilding]} /> Lugar: {Solicitudes && Solicitudes.lugar}
                </Text>
                <Text style={styles.description}>
                  <Icon name="clock" size={20} color="#000" style={styles.icon} /> Solicitado {Solicitudes && formatDate(Solicitudes.fecha_pedido)}
                </Text>
                
              </View>
            </View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 130,
    margin: 10,
    elevation: 2,
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: -2 },
    shadowRadius: 4,
    borderRadius: 5,
    
  },
  spacing: {
    flex: 1
  },
  bgStyles: {
    borderRadius: 3,
    alignContent: 'center',
  },
  description: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
    paddingTop: 5,
    fontStyle:"italic"
  },
  servicio: {
    fontStyle: 'italic',
    fontWeight: 'bold',
    fontSize: 18,
    backgroundColor: '#E10000',
    width:364.5,
    borderRadius:1,
    paddingVertical: 5, // Ajusta el padding vertical según tu preferencia
    paddingHorizontal: 10, // Ajusta el padding horizontal según tu preferencia
    marginLeft:4.2,
    color:"#fff"
  },
  content:{
    
  },
  text:{
   
   
    paddingLeft: 10,
  },
  icon: {
    marginRight: 10, // Agrega margen derecho de 10px
  },
  iconBuilding: {
    marginLeft: 10, // Agrega margen izquierdo de 10px específico para el icono "building"
  },
});