import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground} from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Text style={styles.texto}>Hello World</Text>
      <Image source={{uri:('https://i.pinimg.com/564x/64/d4/df/64d4dfdad30832718f97445cb8d5ba48.jpg')}}/>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    color: '#fff',
  },
  img: {
    width: 200,
    height: 200,
  },

});
