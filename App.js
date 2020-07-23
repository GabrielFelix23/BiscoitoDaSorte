import React from 'react'
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native'

export default class App extends React.Component{
  frases = [
    "A vida trará coisas boas se tiver paciência.",
    "Não compense na ira o que lhe falta na razão",
    "Defeitos e virtudes são apenas dois lados da mesma moeda.",
    "A maior de todas as torres começa no solo.",
    "A juventude não é uma época da vida, é um estado de espírito."
  ]
  
  state = {
    textoFrase: " ",
    img: require("./src/img/biscoito.png")
  }

  abrirBiscoito = () => {
    let frasesAleatorias = Math.floor(Math.random() * this.frases.length)

    this.setState({
      textoFrase: ' "' + this.frases[frasesAleatorias] + '" ',
      img: require("./src/img/biscoitoAberto.png")
    })
  }

  render(){
    return(
      <View style={styles.container}> 
        <Image
          style={styles.img}
          source={this.state.img}
        />
        <Text style={styles.textoFrase}>{this.state.textoFrase}</Text>
        <TouchableOpacity 
          style={styles.botao}
          onPress={this.abrirBiscoito}
        >
          <View style={styles.contBotao}>
              <Text style={styles.decBotao}>Abrir Biscoito</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  img:{
    width: 250,
    height: 250
  },
  textoFrase:{
    fontSize: 20,
    color: "#dd7b22",
    fontStyle: "italic",
    margin: 20,
    textAlign: "center"
  },
  botao:{
    borderWidth: 2,
    width: 200,
    height: 50,
    borderRadius: 25,
    borderColor: "#dd7b22",
    marginTop: 25,
    padding: 10
  },
  contBotao:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  decBotao:{
    fontSize: 17,
    textAlign: "center",
    color: "#dd7b22",
    fontWeight: "bold"
  }
})