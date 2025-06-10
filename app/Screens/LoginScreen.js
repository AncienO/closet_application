import {useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';


export default function LoginScreen({navigation}) {
  const [name, username] = useState('');
  const [password, userPassword] = useState('');

  const handleSignIn = () => {
    if (!name || !password){
      Alert.alert('Error', 'Please All fields are required');
      return;
    }
    Alert.alert('Welcome ' + name)
  }


  return (
    <View colors={['#8B5A2B', '#8B5A2B']} style={styles.container}>
      <Text style={styles.title}>Welcome Back!
        {/* <img
        src=''
        alt='logo'
        /> */}
      </Text>
  

      <View style={styles.card}>

          <TextInput 
            style={styles.input} 
            placeholder="Username or Email" 
            placeholderTextColor="#8B5A2B" 
            value={name}
            onChangeText={username}
          />

          <TextInput 
            style={styles.input} 
            placeholder="Password" 
            placeholderTextColor="#8B5A2B" 
            secureTextEntry 
            value={password}
            onChangeText={userPassword}
          />

          <TouchableOpacity style={styles.signInButton} onPress={handleSignIn}>
            <Text style={styles.signInButtonText}>Log in</Text>
          </TouchableOpacity>

          <Text style={styles.forgotText}>
            <Text style={styles.link}>Forgot password?</Text> <Text style={styles.link}>Forgot username?</Text>
          </Text>
      </View>

      <TouchableOpacity style={styles.signUpContainer} onPress={() => navigation.navigate('SignUp')}>
              <Text style={styles.signUpText}> Create a New Account </Text>
              {/* <Text style={styles.signUpText}>Sign Up</Text> */}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffff'
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#8B5A2B',
  },

  subtitle: {
    fontSize: 14,
    color: 'white',
    marginBottom: 30,
  },

  card: {
    width: '95%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 20,
    alignItems: 'center',
    elevation: 5,
  },

  signInText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#8B5A2B',
    marginBottom: 10,
  },

  input: {
    width: '100%',
    backgroundColor: 'transparent',//'#8B5A2B',
    padding: 15,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: 'grey',
    color: 'black',
    marginVertical: 8,
  },

  signInButton: {
    backgroundColor: '#8B5A2B',
    padding: 10,
    borderRadius: 20,
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },

  signInButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },

  forgotText: {
    fontSize: 12,
    color: 'black',
    marginTop: 10,
  },

  link: {
    color: '#8B5A2B',
    textDecorationLine: 'underline',
  },

  signUpContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    padding: 12,
    backgroundColor: '#8B5A2B',
    borderRadius: 100,
    width: '85%',
    height: '7%',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 50
  },

  signUpText: {
    color: 'white',
    marginRight: 5,

  },
  signUpButton: {
    fontWeight: 'bold',
    color: 'white',
  },
});

