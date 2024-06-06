import { Button } from 'antd';

interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <div>
      <div className='w-4 h-4 bg-red'></div>
      <Button type='primary'>Click</Button>
      <ul>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
      </ul>
    </div>
  );
};

export default App;
