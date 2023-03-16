import React, { Component } from 'react';
import { View, Button, Alert } from 'react-native';

export default class App extends Component { 
  render(){
    return(
      <View>
        <View 
          style={{ width:200 , height:100, marginTop:80, marginLeft:80}}>
          <Button 
            title="Charles Babbage"  
            color = "red"
      onPress={()=> alert('pai da computacao')}/>
            />

        </View>
        
        <View
          style={{ width:200 , height:100, marginTop:20, marginLeft:80}}>
          <Button 
            title="Mahatma Gandhi"  
            color = "blue"
              //add code here to show alert box for The father of nation
               onPress={()=> alert('pai da nacao')}/>
            />

        </View>

        <View
          style={{ width:200 , height:100, marginTop:20, marginLeft:80}}>
          <Button 
            title="Nelson Mandela"  
            color = "purple"
                        //adicione o código aqui para mostrar a caixa de alerta para o primeiro presidente negro da África do Sul.
                         onPress={()=> alert('primeiro presidente negro da africa do sul')}/>
/>
        </View>
        <View 
          style={{ width:200 , height:100, marginTop:20, marginLeft:80}}>
          <Button 
            title="Madre Teresa"  
            color = "green"
            //adicione o código aqui para mostrar a caixa de alerta para o botão Madre Teresa   
             onPress={()=> alert('santa teresa')}/>
             />
        </View>
      </View>
    )
  }
}