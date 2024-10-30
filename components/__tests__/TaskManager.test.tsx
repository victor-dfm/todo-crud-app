import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react-native";
import TaskManager from "../../app/index";

describe("TaskManager Modal", () => {
  it("should open the TaskModal when the add button is pressed", async () => {
    const { getByText, queryByPlaceholderText } = render(<TaskManager />);

    // Open the modal to add the task
    expect(queryByPlaceholderText("Nombre")).toBeNull();

    fireEvent.press(getByText("Añadir tarea"));

    await waitFor(() => {
      expect(queryByPlaceholderText("Nombre")).toBeTruthy();
    });
  });

  it("should close the TaskModal when the add button is pressed", async () => {
    const { getByText, queryByPlaceholderText } = render(<TaskManager />);

    fireEvent.press(getByText("Añadir tarea"));

    await waitFor(() => {
      expect(queryByPlaceholderText("Nombre")).toBeTruthy();
    });

    fireEvent.press(getByText("Cancelar"));

    await waitFor(() => {
      expect(queryByPlaceholderText("Nombre")).toBeNull();
    });
  });
});
