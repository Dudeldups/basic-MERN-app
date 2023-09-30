const WorkoutDetails = ({ workout }) => {
  const handleClick = async () => {
    const response = await fetch("/api/workouts/" + workout.id, {
      method: "DELETE",
    });
    const json = await response.json();
  };

  return (
    <div>
      <h3>{workout.title}</h3>
      <p>Load (kg): {workout.load}</p>
      <p>Reps: {workout.reps}</p>
      <p>{workout.createdAt}</p>
      <p onClick={handleClick}>Delete</p>
    </div>
  );
};
export default WorkoutDetails;
