import { useState } from "react";
import axios from "axios";
import { Button } from "react-bootstrap/Button";
import { Form } from "react-bootstrap";

export default function TaskForm(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [priority, setPriority] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const errors = {};
  const validationErrors = () => {
    if (title.trim().length === 0) {
      errors.title = "title is required";
    }
    if (description.trim().length === 0) {
      errors.description = "description is required";
    }
    if (status.trim().length === 0) {
      errors.status = " status is required";
    }
    if (priority.trim().length === 0) {
      errors.priority = "priority is required";
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const formdata = {
      title: title,
      description: description,
      status: status,
      priority: priority,
    };
    validationErrors();
    if (Object.keys(errors).length === 0) {
      axios
        .post("http://127.0.0.1:3060/api/tasks", formdata)
        .then((response) => {
          props.addTasks(response.data);
          console.log(response.data);
          setTitle("");
          setDescription("");
          setStatus("");
          setPriority("");
          setFormErrors({});
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setFormErrors(errors);
    }
  };
  return (
    <div className="task-form">
      <h3>Task form</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="title">
          <Form.Label>Enter the Title</Form.Label>
          <Form.Control
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>
        {formErrors && <span className="errors">{formErrors.title}</span>}
        <br />
        <Form.Group controlId="description">
          <Form.Label>Enter the Title</Form.Label>
          <Form.Control
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>
        {formErrors && <span className="errors">{formErrors.description}</span>}
        <br />
        <Form.Group controlId="status">
          <Form.Label>Status</Form.Label>
          <Form.Control
            as="select"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="">Select Status</option>
            <option value="pending">Pending</option>
            <option value="In-progress">In-progress</option>
            <option value="completed">Completed</option>
          </Form.Control>
        </Form.Group>
        {formErrors && <span className="errors">{formErrors.status}</span>}
        <br />
        <Form.Group controlId="priority">
          <Form.Label>Set Priority</Form.Label>
          <Form.Control
            as="select"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="">Select priority</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </Form.Control>
        </Form.Group>
        {formErrors && <span className="errors">{formErrors.priority}</span>}
        <br />
        <Button variant="primary" type="submit">
          Submit
        </Button>{" "}
      </Form>
    </div>
  );
}
