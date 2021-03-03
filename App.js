/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import { SafeAreaView, ScrollView, Text, StatusBar, View, Button } from 'react-native';

const App = () => {
  let [count, setCount] = useState(0)

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <View>
            <Text style={{ alignSelf: 'center', fontSize:20, paddingHorizontal: 10, paddingVertical: 30}}>A Sample app</Text>
            <Button
              color="dodgerblue"
              title="A button"
              onPress={() => setCount(count+1)}></Button>
            <Text style={{ padding: 10, fontSize: 16, alignSelf: 'center' }}>
              {`You have pressed the button ${count} times...`}
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  )
}

export default App;
