import React, { useEffect, useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Modal,
  TextInput,
} from "react-native";
import { Colors } from "@/constants/Colors";

type TaskModalProps = {
  visible: boolean;
  onClose: () => void;
  // eslint-disable-next-line no-unused-vars
  onSave: (title: string, description: string) => void;
  initialTitle?: string;
  initialDescription?: string;
};

type Error = {
  title?: string;
  description?: string;
};

export const TaskModal: React.FC<TaskModalProps> = ({
  visible,
  onClose,
  onSave,
  initialTitle = "",
  initialDescription = "",
}) => {
  const [title, setTitle] = useState(initialTitle);
  const [description, setDescription] = useState(initialDescription);
  const [errors, setErrors] = useState<Error>({});

  useEffect(() => {
    if (visible) {
      setTitle(initialTitle);
      setDescription(initialDescription);
      setErrors({});
    }
  }, [visible, initialTitle, initialDescription]);

  const handleSave = () => {
    const newErrors: Error = {};

    if (!title.trim()) newErrors.title = "El nombre está vacio";
    if (!description.trim())
      newErrors.description = "La descripción está vacio";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      onSave(title, description);
      onClose();
    }
  };

  return (
    <Modal
      animationType="slide"
      transparent
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Añadir tarea</Text>

          <Text style={styles.modalLabel}>Nombre</Text>
          <TextInput
            placeholder="Nombre"
            value={title}
            onChangeText={setTitle}
            style={styles.modalInput}
          />
          {errors.title && <Text style={styles.errorText}>{errors.title}</Text>}

          <Text style={styles.modalLabel}>Descripción</Text>
          <TextInput
            placeholder="Descripción"
            value={description}
            onChangeText={setDescription}
            style={[styles.modalInput, styles.modalTextarea]}
            multiline
          />
          {errors.description && (
            <Text style={styles.errorText}>{errors.description}</Text>
          )}

          <View style={styles.modalButtons}>
            <TouchableOpacity style={styles.cancelButton} onPress={onClose}>
              <Text style={styles.cancelButtonText}>Cancelar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
              <Text style={styles.saveButtonText}>Guardar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: Colors.transparentBlack,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: "90%",
    backgroundColor: Colors.white,
    padding: 20,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    borderRadius: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
  },
  modalLabel: {
    marginTop: 20,
    fontSize: 16,
    color: Colors.gray,
  },
  modalInput: {
    height: 40,
    borderColor: Colors.subLight,
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 5,
    paddingHorizontal: 10,
  },
  modalTextarea: {
    height: 100,
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  cancelButton: {
    backgroundColor: Colors.subLight,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  cancelButtonText: {
    color: Colors.white,
    fontSize: 16,
  },
  saveButton: {
    backgroundColor: Colors.main,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  saveButtonText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: "bold",
  },
  errorText: {
    color: Colors.red,
    fontSize: 14,
    marginBottom: 10,
  },
});
