import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Home from "./screens/Home"
import Demo from "./screens/Demo"

export type RootStackParamList = {
  Home: undefined
  Demo: undefined
}

const Stack = createNativeStackNavigator<RootStackParamList>()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Demo' component={Demo} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App