import { Image, StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';

import AuthorRow from './AuthorRow';

export default class Card extends React.Component {
    static propTypes = {
        fullname: PropTypes.string.isRequried,
        image: Image.propTypes.source.isRequrired,
        linkText: PropTypes.string,
        onPressLinkText: PropTypes.func,
    };
    static defaultProps = {
        linkText: '',
        onPressLinkText: () => {},
    };

    render(){
        const {fullname, image, linkText, onPressLinkText } =this.props;

        return (
            <View>
                <AuthorRow
                fullname ={fullname}
                linkText = {linkText}
                onPressLinkText = {onPressLinkText}
                />
            <Image style = {styles.image} source = {image} />
            </View>
        );
    }
};



const styles = StyleSheet.create({
    image:{
        aspectRatio : 1,
        backgroundColor: 'rgba(0,0,0,0.02)'
    },
});