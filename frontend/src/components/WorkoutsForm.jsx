import { useState } from "react";

const WorkoutsForm = () => {
  const [title, setTitle] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async e => {
    e.preventDefault();

    const workout = { title, load, reps };

    const response = await fetch("/api/workouts", {
      method: "POST",
      body: JSON.stringify(workout),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    } else {
      setTitle("");
      setLoad("");
      setReps("");
      setError(null);
      console.log("New Workout Added!", json);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add a new workout</h3>

      <label htmlFor="title">Exercise title:</label>
      <input
        type="text"
        id="title"
        name="title"
        onChange={e => setTitle(e.target.value)}
        value={title}
      />

      <label htmlFor="load">Load (kg)</label>
      <input
        type="text"
        id="load"
        name="load"
        onChange={e => setLoad(e.target.value)}
        value={load}
      />

      <label htmlFor="reps">Reps:</label>
      <input
        type="text"
        id="reps"
        name="reps"
        onChange={e => setReps(e.target.value)}
        value={reps}
      />

      <button>Add workout</button>
      {error && <div>{error}</div>}
    </form>
  );
};
export default WorkoutsForm;
