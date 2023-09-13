import React from "react";
import { useState } from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import back from "../../../assets/images/beansBackground1.png";
import plus from "../../../assets/plus.png";
import coffee1 from "../../../assets/images/coffee1.png";
import glass from "../../../assets/magnifying-glass.png";

const width = Dimensions.get("screen").width;

export default function Carrinho() {
  const [text, onChangeText] = useState("");
  return (
    <ScrollView>
      <View style={estilos.imgStyle}>
        <Image source={back} style={estilos.topo}></Image>
        <Text style={estilos.titulo}>Detalhes do Carrinho</Text>

        <View style={estilos.buscadorContainer}>
          <View style={estilos.buscador}>
            <Image source={glass}></Image>
            <TextInput
              style={estilos.input}
              onChangeText={onChangeText}
              placeholder="Buscar Café..."
            />
          </View>
        </View>

        <View style={estilos.container}>
          <View style={estilos.buttonContainer}>
            <TouchableOpacity style={estilos.Button}>
              <Text style={estilos.ButtonText}>Todos</Text>
            </TouchableOpacity>

            <TouchableOpacity style={estilos.Button}>
              <Text style={estilos.ButtonText}>Latte</Text>
            </TouchableOpacity>

            <TouchableOpacity style={estilos.Button}>
              <Text style={estilos.ButtonText}>Tradicional</Text>
            </TouchableOpacity>
          </View>

          <View style={estilos.carrinho}>
            <Text style={estilos.nome}>Lista de produtos</Text>

            <View style={estilos.card}>
              <View>
                <Image source={coffee1} style={estilos.coffee}></Image>
              </View>
              <Text style={estilos.nomeItem}>Mocha</Text>
              <Text style={estilos.descricao}>
                O café mocha é uma bebida quente com sabor de chocolate que é
                uma variante de um café latte. É feito com café espresso, leite
                vaporizado e chocolate, geralmente na forma de calda ou pó
              </Text>

              <Text style={estilos.preco}>R$40,00</Text>
              <TouchableOpacity style={estilos.buttonCard}>
                <Image source={plus}></Image>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  input: {
    width: 280,
    fontWeight: "bold",
    fontSize: 16,
  },
  buscadorContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 200,
  },
  buscador: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 12,
    flexDirection: "row",
    backgroundColor: "#d4a574",
    borderRadius: 30,
    width: 350,
  },
  imgStyle: {
    backgroundColor: "#e4d0bd",
  },
  coffee: {
    height: 140,
    width: 140,
    marginTop: -125,
  },
  card: {
    alignItems: "center",
    marginTop: 50,
    marginBottom: 20,
    backgroundColor: "#704214",
    borderRadius: 25,
    padding: 55,
  },
  buttonCard: {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    flexDirection: "row",
    borderRadius: 500,
    backgroundColor: "#d4a574",
    paddingVertical: 12,
    paddingHorizontal: 12,
  },
  buttonContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingTop: 20,
  },
  Button: {
    backgroundColor: "#d4a574",
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  ButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    alignSelf: "center",
    fontFamily: "PoppinsM",
    color: "#3C2A21",
  },
  topo: {
    width: "100%",
    height: 220,
    position: "absolute",
    top: 5,
    opacity: 0.4,
  },
  titulo: {
    width: "100%",
    position: "absolute",
    color: "#3C2A21",
    textAlign: "center",
    fontSize: 24,
    lineHeight: 26,
    padding: 16,
    fontFamily: "PoppinsM",
  },
  carrinho: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    textAlign: "center",
  },
  nome: {
    fontSize: 26,
    lineHeight: 42,
    color: "#3C2A21",
    fontFamily: "PoppinsM",
    paddingBottom: 50,
    paddingTop: 10,
  },
  nomeItem: {
    fontSize: 24,
    fontFamily: "PoppinsM",
    lineHeight: 26,
    marginLeft: 12,
    marginTop: 20,
    color: "#d4a574",
  },
  descricao: {
    color: "#d4a574",
    fontFamily: "PoppinsExli",
    marginTop: 10,
  },
  preco: {
    fontSize: 26,
    fontFamily: "PoppinsL",
    color: "#eccbaa",
    marginTop: 15,
  },
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginHorizontal: 20,
    gap: 10,
    paddingTop: 10,
  },
});
