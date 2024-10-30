import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Colors } from "@/constants/Colors";

type PaginatorProps = {
  currentPage: number;
  totalItems: number;
  itemsPerPage: number;
  // eslint-disable-next-line no-unused-vars
  onPageChange: (page: number) => void;
};

export const Paginator: React.FC<PaginatorProps> = ({
  currentPage,
  totalItems,
  itemsPerPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  return (
    <View style={styles.paginationContainer}>
      <TouchableOpacity
        style={[styles.pageButton, currentPage === 1 && styles.disabledButton]}
        onPress={handlePrevious}
        disabled={currentPage === 1}
      >
        <Text style={styles.pageButtonText}>Anterior</Text>
      </TouchableOpacity>

      <Text
        style={styles.pageIndicator}
      >{`Página ${currentPage} de ${totalPages}`}</Text>

      <TouchableOpacity
        style={[
          styles.pageButton,
          currentPage === totalPages && styles.disabledButton,
        ]}
        onPress={handleNext}
        disabled={currentPage === totalPages}
      >
        <Text style={styles.pageButtonText}>Siguiente</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  paginationContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 20,
  },
  pageButton: {
    padding: 10,
    backgroundColor: Colors.main,
    borderRadius: 5,
  },
  pageButtonText: {
    color: Colors.white,
    fontWeight: "bold",
  },
  pageIndicator: {
    fontSize: 16,
  },
  disabledButton: {
    backgroundColor: Colors.subLight,
  },
});
