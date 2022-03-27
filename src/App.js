import './App.css';
import names from './babyNamesData.json'

function App() {
  console.log(names);
  return (
    <div className=''>
      {names.sort((a, b) => a.name.localeCompare(b.name)).map((v,i)=>{
        return <p keys={i} className={v.sex}>{v.name}</p>
      })}
    </div>
  );
}

export default App;
