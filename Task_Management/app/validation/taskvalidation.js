const taskValidationSchema = {
  title: {
      notEmpty: {
          errorMessage: "Task title is required",
      },
  },
  description: {
      notEmpty: {
          errorMessage: "Description is required",
      },
  },
  status: {
      isIn: {
          options: [["pending", "In-progress", "completed"]],
          errorMessage: "Status should be selected from the given list",
      },
      notEmpty: {
          errorMessage: "Status should be selected",
      },
  },
  priority: {
      isIn: {
          options: [["low", "medium", "high"]],
          errorMessage: "Priority should be selected from the given list",
      },
      notEmpty: {
          errorMessage: "Priority should be selected",
      },
  },
}

module.exports = taskValidationSchema
