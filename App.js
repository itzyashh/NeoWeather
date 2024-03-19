
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/screens/Home/Home';
import { StatusBar } from 'expo-status-bar';
import TabBar from './src/tabbar/TabBar';
export default function App() {
  return( <>
<StatusBar style='light'/>
<Home />
<TabBar />
  </>)
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
