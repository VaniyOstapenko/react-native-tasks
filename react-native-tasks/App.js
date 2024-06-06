import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/screen/Home/Home';
import Task1 from './src/screen/Task1/Task1'
import Task2 from './src/screen/Task2/Task2'
import Task3 from './src/screen/Task3/Task3'
import Task4 from './src/screen/Task4/Task4'
import Task5 from './src/screen/Task5/Task5';
import Task6 from './src/screen/Task6/Task6';
import Task7 from './src/screen/Task7/Task7';
import Task8 from './src/screen/Task8/Task8';
import Task9 from './src/screen/Task9/Task9';
import Task10 from './src/screen/Task10/Task10';

const Stack = createStackNavigator()

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={Home}></Stack.Screen>
        <Stack.Screen name='Task1' component={Task1}></Stack.Screen>
        <Stack.Screen name='Task2' component={Task2}></Stack.Screen>
        <Stack.Screen name='Task3' component={Task3}></Stack.Screen>
        <Stack.Screen name='Task4' component={Task4}></Stack.Screen>
        <Stack.Screen name='Task5' component={Task5}></Stack.Screen>
        <Stack.Screen name='Task6' component={Task6}></Stack.Screen>
        <Stack.Screen name='Task7' component={Task7}></Stack.Screen>
        <Stack.Screen name='Task8' component={Task8}></Stack.Screen>
        <Stack.Screen name='Task9' component={Task9}></Stack.Screen>
        <Stack.Screen name='Task10' component={Task10}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}