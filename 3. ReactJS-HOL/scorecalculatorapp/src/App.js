import { CalculateScore } from './components/CalculateScore';

function App() {
  return (
    <div>
      <CalculateScore 
        Name="Steve" 
        School="TDNY Public School" 
        total={284} 
        goal={93} 
      />
    </div>
  );
}

export default App;
