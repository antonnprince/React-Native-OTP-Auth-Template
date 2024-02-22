import { View, Text, StyleSheet, TextInput } from 'react-native'
import React, { useState } from 'react'
import { FIREBASE_AUTH } from '../../FirebaseConfig';


const Login = () => {

    const [email,setemail] = useState('');
    const [password,setpassword] = useState('');
    const [loading,setloading] = useState(false);
    const auth = FIREBASE_AUTH;
  return (
    <View style={styles.container}>
      <TextInput
      style={styles.input}
      placeholder='email'
      autoCapitalize='none'
      onChangeText={(text) => setemail(text)}
      value={email}
      >
        </TextInput>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        flex:1,
        justifyContent: 'center'
    },

})