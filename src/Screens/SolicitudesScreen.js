import React, { useState, useEffect } from 'react';
import { Image, View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { getSolicitudes } from '../Api/solicitud';
import { SolicitudesList } from '../Components/SolicitudesList';

export function SolicitudesScreen() {
  const [response, setResponse] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      loadSolicitudes();
    }, 500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const loadSolicitudes = async () => {
    const apiResponse = await getSolicitudes();
    setResponse(apiResponse);
  };
 
  return (
    <SafeAreaView>
      {response && response.length > 0 ? (
        <SolicitudesList Solicitudes={response} />
      ) : (
        <React.Fragment>
          <Image
            source={require('../Assets/Nosolicitudes.png')}
            style={styles.image}
          />
          <Text style={styles.message}>No hay solicitudes Actualmente</Text>
        </React.Fragment>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginTop:100
  },
  message: {
    textAlign: 'center',
    fontSize: 20,
    marginTop: 20,
    fontWeight:'bold',
    color:"#696969"
  },
});