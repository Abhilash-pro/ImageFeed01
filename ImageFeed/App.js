import React from 'react';
import {View,StyleSheet} from 'react-native';
import AuthorRow from './components/AuthorRow';


export default class App extends React.Component {
  render (){
    return (
      <View style ={styles.container} >
        <AuthorRow
        fullname ={'first Last'}
        linkText = {'Comments'}
        onPressLinkText = {() => {
          console.log('Pressed link!');
        }}
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