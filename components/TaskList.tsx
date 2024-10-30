import React from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { Colors } from "@/constants/Colors";

type Task = {
  id: number;
  title: string;
  description: string;
};

type TaskListProps = {
  tasks: Task[];
  onDelete: (id: number) => void;
};

export const TaskList: React.FC<TaskListProps> = ({ tasks, onDelete }) => {
  const renderTask = ({ item }: { item: Task }) => (
    <View style={styles.taskCard}>
      <View style={styles.taskContent}>
        <Text style={styles.taskTitle}>{item.title}</Text>
        <Text style={styles.taskDescription}>{item.description}</Text>
      </View>
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => onDelete(item.id)}
      >
        <Icon name="trash" size={20} color="#666" />
      </TouchableOpacity>
    </View>
  );

  return (
    <FlatList<Task>
      data={tasks}
      renderItem={renderTask}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={styles.taskList}
    />
  );
};

const styles = StyleSheet.create({
  taskCard: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    shadowColor: "#000",
    alignSelf: "center",
    justifyContent: "space-between",
    marginBottom: 15,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    width: "100%",
  },
  taskContent: {
    flex: 1,
  },
  taskTitle: {
    color: "#000000",
    fontSize: 16,
    marginBottom: 5,
  },
  taskDescription: {
    fontSize: 14,
    color: Colors.subDark,
  },
  taskList: {
    paddingBottom: 20,
  },
  deleteButton: {
    paddingHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
