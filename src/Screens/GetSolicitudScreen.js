import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/FontAwesome5';
import moment from 'moment';
import { API_HOST } from "../Utils/constants"

const GetSolicitudScreen = ({ route }) => {
  const { id_servicio, nombre_solicitante, lugar, fecha, pedido } = route.params;
  const navigation = useNavigation();

  const formatDate = (date) => {
    const now = moment();
    const requestDate = moment(date);
    const daysDiff = now.diff(requestDate, 'days');

    if (daysDiff === 0) {
      return `hoy, ${requestDate.format('LT')}`; // Muestra la hora si es del mismo día
    } else {
      return `hace ${daysDiff} días, ${requestDate.format('LT')}`; // Muestra la diferencia en días
    }
  };

  const handleGoBack = () => {
    navigation.navigate('Solicitudes');
  };

  const handleUpdateSolicitud = () => {
    fetch(`${API_HOST}/solicitudes/${id_servicio}`, {
      method: 'PUT',
    })
      .then(response => response.json())
      .then(data => {
       
        // Navegar a la pantalla getSolicitud
        navigation.navigate('Solicitudes');
      })
      .catch(error => {
        // Manejar el error en caso de que ocurra
        console.error(error);
 
      });
  };

  return (
    <View style={styles.container}>
      
      <View style={styles.card}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleGoBack}>
          <Icon name="arrow-left" size={18} color="#000" style={styles.iconArrow} />
        </TouchableOpacity>
        <Text style={styles.title}>  Detalles de la solicitud</Text>
      </View>
        <Text style={styles.text}>
          <Text style={styles.nro_solicitud}>      <Icon name="hashtag" size={20} color="#000" style={styles.icon}/> Número de Solicitud:</Text> {id_servicio}
        </Text>
        <Text style={styles.text}>
          <Text style={styles.nro_solicitud}>      <Icon name="user" size={20} color="#000" style={styles.icon} /> Solicitante:</Text> {nombre_solicitante}
        </Text>
        <Text style={styles.text}>
          <Text style={styles.nro_solicitud}>      <Icon name="building" size={20} color="#000" style={[styles.icon]}/> Lugar:</Text> {lugar}
        </Text>
        <Text style={styles.text}>
          <Text style={styles.nro_solicitud}>      <Icon name="clock" size={20} color="#000" style={[styles.icon]}/> Fecha Solicitada:</Text> {formatDate(fecha)}
        </Text>
        <Text style={styles.text}>
           <Text style={styles.nro_solicitud}>      <Icon name="paper-plane" size={20} color="#000" style={[styles.icon]}/> Pedido:</Text> {pedido}
        </Text>
        <TouchableOpacity style={styles.button} onPress={handleUpdateSolicitud}>
          <Text style={styles.buttonText}>   Aceptar Solicitud</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header:{
      flexDirection: 'row',
  },
  iconArrow:{
    
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  card: {
    backgroundColor: '#fff',
    padding: 50,
    elevation: 5,
    shadowColor: 'black',
    shadowOpacity: 6,
    shadowOffset: { width: 0, height: -2 },
    shadowRadius: 8,
    borderRadius: 10,
  },
  text: {
    marginBottom: 6,
    fontSize: 14,
  },
  nro_solicitud: {
    color: '#E10000',
    fontWeight: 'bold',
    fontSize: 17,
  }, button:{
    backgroundColor:'#E10000',
    padding:10,
    borderRadius:4,
    alignContent:'center',
    justifyContent:'center',
    textAlign:'center',
    marginTop:15,
    
    
  }, buttonText:{
    color:"#fff",
    fontWeight:'bold',
    fontSize: 18,
    marginLeft:50
  }
});

export default GetSolicitudScreen;
