import logo from './logo.svg';
import './App.css';
import { useEffect,useState } from 'react';

function App() {
  const [dataShort, setDataShort] = useState([]);

  useEffect(() => {
    async function fetchDataShort(){
      const response = await fetch("/NEH2020sGrant_Short.json");
      
        const result = await response.json();
        
        console.log(result.Grants.Grant);
        setDataShort(result.dataShort);
      

    }
    fetchDataShort();

    
    

  },[]);

  //console.log("test: " + dataShort[0]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      
        <table>
          <thead>
            {const titleData = projTi.map((zetitle) =>
              <li key ={zetitle.id}>
              
            );}
          <tr>
            <th>Project Title</th>
            <th>Institution</th>

          </tr>
          </thead>

          <tbody>
          <tr>
            <td>test 1</td>
            <td>test 2</td>


          </tr>
          </tbody>
          


        </table>

        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
