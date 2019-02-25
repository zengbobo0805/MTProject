/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, Image, StatusBar} from 'react-native';
import OrderCommonItem from "./OrderCommonItem";
import OrderMiddleCommonItem from "./OrderMiddleCommonItem";
import OrderHeader from "./OrderHeader";

export default class Order extends Component<Props> {

    _rendNavBar() {
        return (<View style={styles.navViewStyle}>

            <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold'}}>
                订单
            </Text>
            <Image source={require('../../res/images/icon_shop_search.png')} style={styles.navImageStyle}/>
        </View>)

    }

    render() {
        return (
            <View>
                <StatusBar
                    backgroundColor='rgba(255,96,0,1.0)'
                    barStyle="light-content"
                />
                {this._rendNavBar()}
                <ScrollView
                    contentContainerStyle={styles.scrollViewStyle}>
                    <OrderHeader/>
                    <View style={{marginTop: 20}}>
                        <OrderCommonItem
                            leftIconName={require('../../res/images/collect.png')}
                            leftTitle='我的订单'
                            rightTitle='查看全部订单'
                        />
                        <OrderMiddleCommonItem/>
                    </View>


                    <View style={{marginTop: 20}}>
                        <OrderCommonItem
                            leftIconName={require('../../res/images/draft.png')}
                            leftTitle='动脑学院钱包'
                            rightTitle='账户余额'
                        />
                        <OrderCommonItem
                            leftIconName={require('../../res/images/like.png')}
                            leftTitle='抵用券'
                            rightTitle='10张'
                        />
                    </View>
                    <View style={{marginTop: 20}}>
                        <OrderCommonItem
                            leftIconName={require('../../res/images/card.png')}
                            leftTitle='积分商城'
                        />
                    </View>
                    <View style={{marginTop: 20}}>
                        <OrderCommonItem
                            leftIconName={require('../../res/images/new_friend.png')}
                            leftTitle='今日推荐'
                            rightIconName={require('../../res/images/me_new.png')}
                        />
                    </View>
                    <View style={{marginTop: 20}}>
                        <OrderCommonItem
                            leftIconName={require('../../res/images/card.png')}
                            leftTitle='我要合作'
                            rightTitle='轻松开店，招财进宝'
                        />
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    navImageStyle:{
        position:'absolute',
        right:10,
        width: Platform.OS === 'ios' ? 30 : 25,
        height: Platform.OS === 'ios' ? 30 : 25
    },
    navViewStyle:{
        backgroundColor:'rgba(255,96,0,1.0)',
        height:50,
        flexDirection:'row',
        alignItems: 'center',
        justifyContent:'center',
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
    scrollViewStyle: {
        backgroundColor: '#e8e8e8',
    }
    ,
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
