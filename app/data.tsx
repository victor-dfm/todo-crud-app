import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useState } from "react";
import { Colors } from "@/constants/Colors";

type Errors = {
  name?: string;
  email?: string;
  phone?: string;
};

export default function DataScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState<Errors>({});

  const validateInputs = () => {
    const newErrors: Errors = {};

    if (!/^[a-zA-Z\s]+$/.test(name)) {
      newErrors.name = "El nombre solo debe contener letras";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+/.test(email)) {
      newErrors.email = "El email no es válido";
    }

    if (!/^\d{9}$/.test(phone)) {
      newErrors.phone = "El teléfono solo debe contener números";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      Alert.alert("Datos guardados", "Los datos se han guardado correctamente");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mis datos</Text>

      <View style={styles.form}>
        <Text style={styles.label}>
          Nombre <Text style={styles.required}>*</Text>
        </Text>
        <TextInput
          placeholder="Nombre"
          value={name}
          onChangeText={setName}
          style={styles.input}
        />
        {errors.name && <Text style={styles.errorText}>{errors.name}</Text>}

        <Text style={styles.label}>
          Email <Text style={styles.required}>*</Text>
        </Text>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          keyboardType="email-address"
        />
        {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

        <Text style={styles.label}>
          Teléfono <Text style={styles.required}>*</Text>
        </Text>
        <TextInput
          placeholder="Teléfono"
          value={phone}
          onChangeText={setPhone}
          style={styles.input}
          keyboardType="numeric"
        />
        {errors.phone && <Text style={styles.errorText}>{errors.phone}</Text>}

        <TouchableOpacity
          style={styles.button}
          onPress={() => validateInputs()}
        >
          <Text style={styles.buttonText}>Guardar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: Colors.subGray,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.gray,
    marginBottom: 20,
  },
  form: {
    backgroundColor: Colors.white,
    padding: 20,
    borderRadius: 10,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  label: {
    fontSize: 16,
    color: Colors.gray,
    marginBottom: 5,
  },
  required: {
    color: Colors.red,
  },
  input: {
    height: 40,
    borderColor: Colors.subLight,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: Colors.white,
  },
  button: {
    backgroundColor: Colors.main,
    marginTop: 15,
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 10,
  },
  buttonText: {
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
