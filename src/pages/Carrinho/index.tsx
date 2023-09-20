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
import Buscador from "./components/Buscador";
import Card from "./components/Card";
import Flatlist from "./components/Flatlist";

const width = Dimensions.get("screen").width;

export default function Carrinho() {
  return (
    <ScrollView>
      <View style={estilos.imgStyle}>
        <Image source={back} style={estilos.topo}></Image>
        <Text style={estilos.titulo}>Detalhes do Carrinho</Text>

        <Buscador />

        <View style={estilos.container}>
          
          <Flatlist />

          <View style={estilos.carrinho}>
            <Text style={estilos.nome}>Lista de produtos</Text>

            <Card />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  imgStyle: {
    backgroundColor: "#e4d0bd",
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
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginHorizontal: 20,
    gap: 10,
    paddingTop: 10,
  },
});
