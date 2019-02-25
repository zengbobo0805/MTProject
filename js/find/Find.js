import React, {Component} from 'react';
import {Platform,Image, StatusBar, StyleSheet, Text, TextInput, View} from 'react-native';

var Dimensions = require('Dimensions')
var {width, height} = Dimensions.get('window');
export default class Find extends Component {

    render() {
        return (
            <View>
                <StatusBar
                    backgroundColor='rgba(255,96,0,1.0)'
                    barStyle="light-content"
                />
                {this._rendNavBar()}
                <Text>
                    发现
                </Text>
            </View>
        );
    }

    _rendNavBar(){
        return (<View style={styles.navBarStyle}>

            <Text style={{color:'white',fontSize:16,fontWeight: 'bold'}}>
                发现
            </Text>
            <Image source={require('../../res/images/icon_shop_search.png')} style={styles.navImageStyle}/>
        </View>)

    }

}


const styles = StyleSheet.create({
    navImageStyle:{
        position:'absolute',
        right:10,
        width: Platform.OS === 'ios' ? 30 : 25,
        height: Platform.OS === 'ios' ? 30 : 25
    },
    navBarStyle: {
        backgroundColor: 'rgba(255,96,0,1.0)',
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        top: -10

    },
    narBarTitleStyle: {
        justifyContent: 'center',
        fontSize: 16,
        color: 'rgba(255,255,255,1)'
    },
});