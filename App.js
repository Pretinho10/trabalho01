import { StatusBar } from 'expo-status-bar';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default function App() {
  return (
    <View style={estilos.container}>
      <View style={estilos.container1}>
        <Text style={estilos.titulo1}> Bem Vindo</Text>
      </View>

      <TextInput
        placeholder="Digite seu nome"
        style={estilos.input}
        style={estilos.titulo}
      />

      <TextInput
        placeholder="Digite seu Email"
        style={estilos.input}
        style={estilos.titulo}
      />

      <TextInput
        placeholder="Digite seu Telefone"
        style={estilos.input}
        style={estilos.titulo}
      />

      <TextInput
        placeholder="Digite aqui sua mensagem"
        style={estilos.input}
        style={estilos.titulo2}
      />

      <TouchableOpacity style={estilos.botao}>
        <Text style={estilos.botaoTexto}>Enviar </Text>
      </TouchableOpacity>

      <View style={estilos.container2}>
        <View style={[estilos.box, { backgroundColor: 'red' }]}></View>

        <View style={[estilos.box, { backgroundColor: 'darkorange' }]}></View>

        <View style={[estilos.box, { backgroundColor: 'green' }]}></View>
      </View>

      <View style={estilos.container3}>
        <View style={[estilos.box, { backgroundColor: 'red' }]}></View>

        <View style={[estilos.box, { backgroundColor: 'darkorange' }]}></View>

        <View style={[estilos.box, { backgroundColor: 'green' }]}></View>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    backgroundColor: '#ADEAEA',
    flex: 1,
    paddingVertical: 30,
    paddingHorizontal: 50,
  },

  container1: {
    paddingVertical: 10,
    alignItems: 'center',
  },

  container2: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  container3: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-around',
  },

  titulo: {
    backgroundColor: 'white',
    marginVertical: 10,
    padding: 10,
    borderRadius: 10,
    color: 'black',
  },
  titulo1: {
    color: 'black',
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
    alignItems: 'center',
  },
  titulo2: {
    backgroundColor: 'white',
    marginVertical: 20,
    padding: 50,
    borderRadius: 10,
    color: 'black',
  },
  botao: {
    backgroundColor: '#87CEEB',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
  },
  botaoTexto: {
    color: 'white',
    fontWeight: 'bold',
  },

  box: {
    width: 50,
    height: 50,
    borderRadius: 10,
    padding: 15,
    marginVertical: 20,
  },
});
