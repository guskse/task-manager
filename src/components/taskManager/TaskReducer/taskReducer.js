export const taskReducer = (state, action) => {
  if (action.type === "EMPTY_FIELD") {
    return {
      ...state,
      isAlertOpen: true,
      alertContent: "Please enter name and date",
      alertClass: "danger",
    };
  }

  if (action.type === "CLOSE_ALERT") {
    return { ...state, isAlertOpen: false };
  }

  if (action.type === "ADD_TASK") {
    const allTasks = [...state.tasks, action.payload];
    return {
      ...state,
      tasks: allTasks,
      isAlertOpen: true,
      alertContent: "Task added successfully!",
      alertClass: "success",
      isEditModalOpen: false,
      isDeleteModalOpen: false,
      modalTitle: "Delete Task",
      modalMsg: "You are about to delete this Task.",
      modalActionText: "OK",
    };
  }

  if (action.type === "CLOSE_MODAL") {
    return { ...state, isEditModalOpen: false, isDeleteModalOpen: false };
  }

  if (action.type === "OPEN_EDIT_MODAL") {
    return {
      ...state,
      taskId: action.payload,
      isEditModalOpen: true,
      modalTitle: "Edit Task",
      modalMsg: "You are about to edit this Task",
      modalActionText: "Edit",
    };
  }

  if (action.type === "EDIT_TASK") {
    return { ...state, isEditing: true };
  }

  if (action.type === "UPDATE_TASK") {
    const updatedTask = action.payload;
    const id = action.payload.id;

    //find task index
    const taskIndex = state.tasks.findIndex((task) => {
      return task.id === id;
    });

    //replace the task by its index
    if (taskIndex !== -1) {
      state.tasks[taskIndex] = updatedTask;
    }

    return {
      ...state,
      isEditing: false,
      isAlertOpen: true,
      alertContent: "Task edited succesfully!",
      alertClass: "success",
    };
  }

  if (action.type === "OPEN_DELETE_MODAL") {
    return {
      ...state,
      taskId: action.payload,
      isDeleteModalOpen: true,
      modalTitle: "Delete Task",
      modalMsg: "You are about to Delete this Task",
      modalActionText: "Delete",
    };
  }

  if (action.type === "DELETE_TASK") {
    const id = action.payload;
    const newTasks = state.tasks.filter((task) => task.id !== id);
    return {
      ...state,
      tasks: newTasks,
      isAlertOpen: true,
      alertContent: "Deleted Successfully",
      alertClass: "success",
      isDeleteModalOpen: false,
    };
  }

  if (action.type === "COMPLETE_TASK") {
    const id = action.payload;
    //find task index
    const taskIndex = state.tasks.findIndex((task) => task.id === id);
    let updatedTask = {
      id,
      name: state.tasks[taskIndex].name,
      date: state.tasks[taskIndex].date,
      complete: true,
    };

    if (taskIndex !== -1) {
      state.tasks[taskIndex] = updatedTask;
    }

    return {
      ...state,
      isAlertOpen: true,
      alertContent: "Task Completed!",
      alertClass: "success",
    };
  }

  return state;
};