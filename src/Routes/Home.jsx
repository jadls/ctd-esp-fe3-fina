import Card from '../Components/Card'
import { useContextGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context



const Home = () => {
  
  const {state} = useContextGlobal()

  // console.log(state.docs);
  return (
    <main className="">
      <h1>Dentist List</h1>
      <div className="card-grid">
        {/* Aqui deberias renderizar las cards */}        
        {state.docs.map((doc) => (                    
          <Card name={doc.name} username={doc.username} key={doc.id} id={doc.id}/>
        ))}
      </div>
    </main>
  );
};

export default Home;
