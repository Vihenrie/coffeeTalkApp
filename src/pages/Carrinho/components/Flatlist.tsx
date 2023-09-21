import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { DATA } from "../data/CategoriasData";

type ItemProps = { title: string };

const Item = ({ title }: ItemProps) => (
  <View style={estilos.buttonContainer}>
    <TouchableOpacity style={estilos.Button}>
      <Text style={estilos.ButtonText}>{title}</Text>
    </TouchableOpacity>
  </View>
);

export default function Flatlist() {
  return (
    <>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={(item) => item.id}
        horizontal
      />
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
    paddingLeft: 10,
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
