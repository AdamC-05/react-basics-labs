import './App.css';
import Task from './components/Task';

function App() {
  return (
    <div className="container">

      <h1>Tasky</h1>

      <Task
        title="Dishes"
        deadline="Today"
        description="Tidy up the kitchen and put away dishes"
      />

      <Task
        title="Laundry"
        deadline="Tomorrow"
        description="Fold laundry in basket and put away"
      />

      <Task
        title="Tidy"
        deadline="Today"
        description="Tidy up the living room"
      />

    </div>
  );
}

export default App;