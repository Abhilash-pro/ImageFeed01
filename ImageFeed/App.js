import React from 'react';
import {
   Modal,
   View,
   StyleSheet,
  AsyncStorage,
} from 'react-native';

import Feed from './screens/Feed';
import Comments from './screens/Comments';
const AYSNC_STORAGE_COMMENTS_KEY = 'ASYNC_STORAGE_COMMENTS_KEY';
export default class App extends React.Component {

  state ={
    commentsForItem:{},
    showModal : false,
    selectedItemId : null,
  };
  

async componentDidMount(){
  try {
    const commentsForItem = await AsyncStorage.getItem(
      AYSNC_STORAGE_COMMENTS_KEY,
    );
    this.setState({
      commentsForItem: commentsForItem ? JSON.parse(commentsForItem):{}, 
    });
    }
    catch(e){
      console.log('Failed to load comments');
    }
  
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
  onSubmitComment = async  text =>{
    const {selectedItemId, commentsForItem} =this.state;
    const comments = commentsForItem[selectedItemId] || [];

    const updated = {
        ...commentsForItem,
        [selectedItemId]: [...comments, text],
    };

    this.setState({commentsForItem: updated});

    try{
      await AsyncStorage.setItem(
        AYSNC_STORAGE_COMMENTS_KEY,
        JSON.stringify(updated),
      );
    }catch(e){
      console.log('failed to save comment',
      text,
      'for',
      selectedItemId,
      );
    }
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
        onRequestClose={this.closeCommentScreen}
        >
        <Comments
        style = {styles.comments}
        comments = {commentsForItem[selectItemId] || [] }
        onClose ={ this.closeCommentScreen} 
        onSubmitComment ={this.onSubmitComment}
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
   
  },
  comments:{
    flex: 1,
    marginTop: 0,
  }
});