import './App.scss';
import { Input, Card } from 'antd';

function App() {
  return (
    <div className="App">
      <Input placeholder="Search" />
      <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
      >
      hehe
      </Card>,
    </div>
  );
}

export default App;
