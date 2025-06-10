import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

export default function SignUpScreen({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = () => {
    if (!name || !email || !password || !confirmPassword) {
      Alert.alert('Error', 'All fields are required.');
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match.');
      return;
    }
    Alert.alert('Success', 'Sign-up successful!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create an account</Text>
      

      <View style={styles.card}>
        {/* <Text style={styles.signUpTextTop}>Sign Up</Text> */}

        <TextInput
          style={styles.input}
          placeholder="Name"
          placeholderTextColor="#8B5A2B" 
          value={name}
          onChangeText={setName}
        />

        <TextInput
          style={styles.input}
          placeholder="Username or Email"
          placeholderTextColor="#8B5A2B" 
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#8B5A2B" 
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TextInput
          style={styles.input}
          placeholder="Re-Type Password"
          placeholderTextColor="#8B5A2B" 
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />

        <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
          <Text style={styles.signInButtonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.signUpContainer} onPress={() => navigation.navigate('Signin')}>
        <Text style={styles.signUpText}>Already have an account? </Text>
        <Text style={styles.signUpLink}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 26,
    color: '#8B5A2B',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#8B5A2B',
    marginBottom: 20,
  },
  card: {
    width: '97%',
    height: '40%',
    backgroundColor: 'no-fill',
    padding: 20,
    borderRadius: 0,
    elevation: 5,
    justifyContent: 'space-between'
  },
  signUpTextTop: {
    fontSize: 22,
    color: '#8B5A2B',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  // input: {
  //   width: '100%',
  //   backgroundColor: '#8B5A2B',
  //   padding: 12,
  //   borderRadius: 20,
  //   marginBottom: 10,
  //   color: '#fff',
  // },
  input: {
    width: '100%',
    backgroundColor: 'transparent',//'#8B5A2B',
    padding: 15,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: 'grey',
    color: 'black',
    //marginVertical: 8,
    marginBottom: 10,
  },
  signUpButton: {
    backgroundColor: '#8B5A2B',
    padding: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 10,
  },
  signInButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  signUpContainer: {
    flexDirection: 'row',
    marginTop: 20,
    position: 'absolute',
    bottom: 50,
  },
  signUpText: {
    color: '#8B5A2B',
    fontSize: 14,
    fontWeight: 'bold',
  },
  signUpLink: {
    color: '#8B5A2B',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
