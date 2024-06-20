import React from 'react';
import { View, Text, Button } from 'react-native';

const ProfileScreen = ({ onLogout }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile Screen</Text>
      <Button title="Logout" onPress={onLogout} />
    </View>
  );
};

export default ProfileScreen;
