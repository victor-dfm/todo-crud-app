import React from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { Colors } from "@/constants/Colors";

export default function CustomHeader() {
  return (
    <View style={styles.container}>
      <View style={styles.leftSection}>
        <TouchableOpacity style={styles.iconButton}>
          <Icon name="menu" size={24} color="#333" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Icon name="search" size={24} color="#333" />
        </TouchableOpacity>
      </View>

      <View style={styles.centerSection}>
        <Text style={styles.titleText}>
          Tiend
          <Text style={styles.highlightedText}>animal</Text>
        </Text>
      </View>

      <View style={styles.rightSection}>
        <TouchableOpacity style={styles.iconButton}>
          <Icon name="person" size={24} color="#333" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Icon name="cart" size={24} color="#333" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: Colors.white,
  },
  leftSection: { flexDirection: "row", alignItems: "center" },
  centerSection: { flex: 1, alignItems: "center" },
  rightSection: { flexDirection: "row", marginLeft: "auto" },
  iconButton: { marginHorizontal: 10 },
  titleText: { fontSize: 26, fontWeight: "bold", color: Colors.gray },
  highlightedText: { color: Colors.subMain },
});
