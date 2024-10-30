import React from "react";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import TaskList from "../index";
import RefundScreen from "@/app/refund";
import CommunicationScreen from "@/app/communication";
import FriendScreen from "@/app/friend";
import DataScreen from "../data";

const Tab = createMaterialTopTabNavigator();

export default function TabLayout() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarScrollEnabled: true,
        tabBarLabelStyle: {
          fontSize: 14,
          lineHeight: 16,
          textTransform: "none",
          fontWeight: "bold",
          maxWidth: 150,
          overflow: "hidden",
        },
        tabBarItemStyle: { width: "auto" },
        tabBarActiveTintColor: "green",
        tabBarInactiveTintColor: "gray",
        tabBarIndicatorStyle: {
          backgroundColor: "green",
          height: 3,
          borderRadius: 2,
        },
        tabBarAllowFontScaling: false,
      }}
    >
      <Tab.Screen
        name="data"
        component={DataScreen}
        options={{ title: "Mis datos" }}
      />
      <Tab.Screen
        name="index"
        component={TaskList}
        options={{ title: "Mis tareas" }}
      />
      <Tab.Screen
        name="refund"
        component={RefundScreen}
        options={{ title: "Mis devoluciones" }}
      />
      <Tab.Screen
        name="communication"
        component={CommunicationScreen}
        options={{ title: "Mis comunicaciones" }}
      />
      <Tab.Screen
        name="friend"
        component={FriendScreen}
        options={{ title: "Mis mejores amigos" }}
      />
    </Tab.Navigator>
  );
}
