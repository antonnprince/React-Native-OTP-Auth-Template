import { View, Text, StyleSheet, TextInput, ActivityIndicator, Button } from 'react-native'
import React, { useState } from 'react'
import { FIREBASE_AUTH } from '../../FirebaseConfig';
import {}

const signIn = async () => {

    setloading(true);
    try{
        const response = await auth.signWithEmailAndPassword(email, password);
        console.log(response);
    } catch(error) {
        console.log(error);
    } finally{
        setloading(false);
    }
}

const signUp = async()=> { 
    setloading(true);
    try{
        const response = await auth.createUserWithEmailAndPassword(email, password);
        console.log(response);
    } catch(error) {
        console.log(error);
    } finally{
        setloading(false);
    }
}

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


        <TextInput
      style={styles.input}
      placeholder='password'
      autoCapitalize='none'
      onChangeText={(text) => setpassword(text)}
      secureTextEntry={true}
      value={password}
      >
        </TextInput>

        {
            loading? <ActivityIndicator 
            size="large" color="#0000ff"
            />:
            <>
                <Button title="Login" 
                onPress={()=>} />
            </>
        }
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

    input: {
        padding: 4,
        borderColor: 'black'
    }

})