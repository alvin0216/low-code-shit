import { Button } from 'antd';

interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <div>
      <div className='w-4 h-4 bg-red'></div>
      <Button type='primary'>Click</Button>
    </div>
  );
};

export default App;
