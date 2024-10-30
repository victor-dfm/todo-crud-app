import React, { useEffect, useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from "react-native";
import { TaskList } from "@/components/TaskList";
import { TaskModal } from "@/components/TaskModal";
import { Paginator } from "@/components/Paginator";
import { Colors } from "@/constants/Colors";

type Task = {
  id: number;
  title: string;
  description: string;
};

type ApiTask = {
  id: number;
  title: string;
};

export default function TaskManager() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/")
      .then((response) => response.json())
      .then((data) => {
        const formattedTasks = data.slice(0, 3).map((item: ApiTask) => ({
          id: item.id,
          title: "Título tarea",
          description: item.title,
        }));
        setTasks(formattedTasks);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const paginatedTask = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return tasks.slice(startIndex, startIndex + itemsPerPage);
  };

  const addTask = (title: string, description: string) => {
    const newTask: Task = { id: Math.random(), title, description };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id: number) => {
    setTasks((prevTasks) => {
      const updatedTasks = prevTasks.filter((task) => task.id !== id);

      const lastPage = Math.max(
        1,
        Math.ceil(updatedTasks.length / itemsPerPage),
      );

      if (currentPage > lastPage) {
        setCurrentPage(lastPage);
      }

      return updatedTasks;
    });
  };

  const modalDeleteTask = (id: number) => {
    Alert.alert(
      "Confirmar eliminación",
      "¿Estás seguro de que quieres eliminar esta tarea?",
      [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Eliminar",
          style: "destructive",
          onPress: () => deleteTask(id),
        },
      ],
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mis tareas</Text>

      {loading ? (
        <ActivityIndicator size="large" color="#666" />
      ) : (
        <>
          <TaskList tasks={paginatedTask()} onDelete={modalDeleteTask} />

          <Paginator
            currentPage={currentPage}
            totalItems={tasks.length}
            itemsPerPage={itemsPerPage}
            onPageChange={setCurrentPage}
          />
        </>
      )}

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.addButtonText}>Añadir tarea</Text>
      </TouchableOpacity>

      <TaskModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onSave={addTask}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#ececec",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "333",
    marginBottom: 20,
  },
  addButton: {
    backgroundColor: Colors.main,
    paddingHorizontal: 15,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: "auto",
    paddingVertical: 12,
  },
  addButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
