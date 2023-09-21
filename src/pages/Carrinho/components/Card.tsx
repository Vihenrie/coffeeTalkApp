import React from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import plus from "../../../../assets/plus.png";
import coffee1 from "../../../../assets/images/coffee1.png";

export default function Card() {
  return (
    <>
      <View style={estilos.card}>
        <View>
          <Image source={coffee1} style={estilos.coffee}></Image>
        </View>
        <Text style={estilos.nomeItem}>Mocha</Text>
        <Text style={estilos.descricao}>
          O café mocha é uma bebida quente com sabor de chocolate que é uma
          variante de um café latte. É feito com café espresso, leite vaporizado
          e chocolate, geralmente na forma de calda ou pó
        </Text>

        <Text style={estilos.preco}>R$40,00</Text>
        <TouchableOpacity style={estilos.buttonCard}>
          <Image source={plus}></Image>
        </TouchableOpacity>
      </View>
    </>
  );
}

const estilos = StyleSheet.create({
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
});
