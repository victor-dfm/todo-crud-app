import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { Colors } from "@/constants/Colors";

export default function CustomHeader() {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: "#fff",
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TouchableOpacity style={{ marginRight: 15 }}>
          <Icon name="menu" size={24} color="#333" />
        </TouchableOpacity>
        <TouchableOpacity style={{ marginRight: 15 }}>
          <Icon name="search" size={24} color="#333" />
        </TouchableOpacity>
      </View>

      <View style={{ flex: 1, alignItems: "center" }}>
        <Text style={{ fontSize: 26, fontWeight: "bold", color: "#333" }}>
          Tiend
          <Text style={{ color: Colors.subMain }}>animal</Text>
        </Text>
      </View>

      <View style={{ flexDirection: "row", marginLeft: "auto" }}>
        <TouchableOpacity style={{ marginHorizontal: 10 }}>
          <Icon name="person" size={24} color="#333" />
        </TouchableOpacity>
        <TouchableOpacity style={{ marginHorizontal: 10 }}>
          <Icon name="cart" size={24} color="#333" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
