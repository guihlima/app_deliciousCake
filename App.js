import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './src/pages/Login'
import Home from './src/pages/Home'
import CadastroConfeitarias from './src/pages/CadastroConfeitarias';
import descriptionBolo from './src/pages/Description'
import adicionarProduto from './src/pages/Produtos/adicionar';
import information from './src/pages/Description/information';
import Register from './src/pages/Cadastro';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='descriptionBolo'>
        <Stack.Screen
        name="Login"
        component={Login} 
        options={{headerShown: false}}
        />
        <Stack.Screen
        name="Register"
        component={Register} 
        options={{headerShown: false}}
        />
        <Stack.Screen
        name='Home'
        component={Home}
        options={{headerShown: false}}
        
        />
        <Stack.Screen
        name='CadastroConfeitarias'
        component={CadastroConfeitarias}
        options={{headerShown: false}}
        />

        <Stack.Screen
          name='descriptionBolo'
          component={descriptionBolo}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name='adicionarProduto'
          component={adicionarProduto}
          options={{headerShown: false}}
        /> 
        <Stack.Screen
        name='information'
        component={information}
        options={{headerShown: false}}
      />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

