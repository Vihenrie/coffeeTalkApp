import React, { useState } from "react";
import { View, Image, TextInput, StyleSheet } from 'react-native'
import glass from "../../../../assets/magnifying-glass.png";

export default function Buscador() {
    const [text, onChangeText] = useState("");
  return (
    <>
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
    </>
  );
}

const estilos = StyleSheet.create({
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
      input: {
        width: 280,
        fontWeight: "bold",
        fontSize: 16,
      },
})
