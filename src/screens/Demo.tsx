import { useNavigation } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { RootStackParamList } from "../App"
import { SafeAreaView } from "react-native-safe-area-context"
import { styles } from "../styles"
import { Pressable, Text } from "react-native"
import * as UserDefaultsSuiteIos from 'user-defaults-suite-ios'
import { useState, useEffect } from 'react'

const Demo = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

  const [invocationURL, setInvocationURL] = useState<string | null>(null)

  useEffect(() => {
    const url = UserDefaultsSuiteIos.getForSuite('group.com.timmyjose.datasharingdemo', 'invocationURL')
    if (url) {
      setInvocationURL(url)
    } else {
      console.error('Could not retrieve invocation url')
    }
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      { invocationURL && (<Text>Invocation URL: {invocationURL}</Text>)}
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('Home')}>
        <Text>Home</Text>
      </Pressable>
    </SafeAreaView>
  )
}

export default Demo