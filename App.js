import { StatusBar } from 'expo-status-bar';

import Home from './src/screens/Home/Home';
import TabBar from './src/tabbar/TabBar';

export default function App() {
  return( <>
<Home />
<TabBar />
<StatusBar style='light' />
  </>)
  
}