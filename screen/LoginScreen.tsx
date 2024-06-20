import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const LoginScreen = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username !== '' && password !== '') {
      onLogin();
      alert('Silakan masukkan username dan password');
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Layar Login</Text>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={text => setUsername(text)}
        style={{ borderWidth: 1, padding: 10, margin: 10, width: 200 }}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry
        style={{ borderWidth: 1, padding: 10, margin: 10, width: 200 }}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;
