import React from 'react';
import { Modal,View,StyleSheet} from 'react-native';

import Feed from './screens/Feed';
import Comments from './screens/Comments';

export default class App extends React.Component {

  state ={
    commentsForItem:{},
    showModal : false,
    selectedItemId : null,
  };
  
  openCommentScreen = id =>{
    this.setState({
      showModal : true,
      selectedItemId: id,
    });
  };

  closeCommentScreen= () =>{
    this.setState({
      showModal: false,
      selectItemId: null,
    });

  };
  render (){
    const { commentsForItem, showModal, selectItemId } =this.state;
    return (
         
        <View style = {styles.container}>
          <Feed 
          style ={styles.feed}
          commentsForItem ={commentsForItem}
          onPressComments = {this.openCommentScreen}
        />
        <Modal
        visible = {showModal}
        animationType = "slide"
        onRequestClose={this.openCommentScreen}
        >
        <Comments
        style = {styles.container}
        comments = {commentsForItem[selectItemId] || [] }
        onClose ={ this.closeCommentScreen} 
        />
        </Modal>
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
  comments:{
    flex: 1,
  }
});