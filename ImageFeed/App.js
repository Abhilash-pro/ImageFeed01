import React from 'react';
import {View,StyleSheet} from 'react-native';
import AuthorRow from './components/AuthorRow';
import Card from './components/Card';

export default class App extends React.Component {
  render (){
    return (
      <View style ={styles.container} >
        <Card
        fullname ={'first Last'}
        linkText = {'Comments'}
        onPressLinkText = {() => {
          console.log('Pressed link!');
        }}
        image ={{uri: 'https://unsplash.it/600/600'}}
        />
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