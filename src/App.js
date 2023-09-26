import { useState, useEffect } from "react";

const apiUrl = 'https://api.thingspeak.com/channels/2280103/feeds.json?results=50';

function App() {

  const [feeds, setFeeds] = useState([]);

  const getData = async () => {
    const response = await fetch(apiUrl);
    const data = await response.json();
    setFeeds(data.feeds);
  };

  useEffect(() => {
    getData()
  });

  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>Horário</th>
            <th>Tensão</th>
            <th>Corrente</th>
            <th>Potência</th>
          </tr>
        </thead>
        <tbody>
          {feeds.map((row) => {
            console.log(row);
            return <tr>
              <td>{row['created_at']}</td>
              <td>{row['field1']}</td>
              <td>{row['field2']}</td>
              <td>{row['field3']}</td>
            </tr>
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
