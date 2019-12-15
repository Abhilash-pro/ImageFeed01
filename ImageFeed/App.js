import React from 'react';
import { View,StyleSheet} from 'react-native';
import CardList from './components/CardList';

import Feed from './screens/Feed';

export default class App extends React.Component {
  render (){
    return (
     
        <View style = {styles.container}>
          <Feed style ={styles.feed} />
        </View>
    );
  }
}


const styles = StyleSheet.create({
  container:{
    flex: 1,
   backgroundColor: '#fff',
  },
  feed:{
    flex: 1,
    marginTop:  1,
  },
});