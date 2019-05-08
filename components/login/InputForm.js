import { Fumi } from 'react-native-textinput-effects';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'
import React from 'react'

export default ({ input, onChangeText }) => (
  <Fumi
    labelStyle={{ color: 'white' }}
    style={{
      backgroundColor: 'rgba(200, 200, 200, 0.5)',
      borderRadius: 10,
      margin: 5
    }}
    iconClass={FontAwesomeIcon}
    iconColor='white'
    iconSize={20}
    autoCapitalize='none'
    onChangeText={val => onChangeText(input.name, val)}
    label={input.label}
    iconName={input.icon}
    secureTextEntry={input.secureTextEntry && input.secureTextEntry}
  />
)