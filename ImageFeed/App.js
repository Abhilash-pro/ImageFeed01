import React from 'react';
import { View,StyleSheet} from 'react-native';
import Card from './components/Card';
import CardList from './components/CardList';


const items  = [
  {id :0 , author : 'Bob rose'},
{id :1 , author : 'Chuck norris'},
];






export default class App extends React.Component {
  render (){
    return (
     
        <View style = {styles.container}>
          <CardList items ={items} />
        </View>
    );
  }
}


const styles = StyleSheet.create({
  container:{
    flex: 1,
   backgroundColor: '#fff',
  },
});