import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function Flatlist() {
  return (
    <>
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
    </>
  );
}

const estilos = StyleSheet.create({
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
});
