/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */
import React, {Component} from 'react';
import {
    Platform,
    RefreshControl,
    ActivityIndicator,
    StyleSheet,
    Text,
    FlatList,
    View,
    StatusBar,
    Image,
    Alert
} from 'react-native';
// const CITY_NAMES = ['北京', '上海', '广州', '深圳', '杭州', '苏州', '成都', '武汉', '郑州', '洛阳', '厦门', '青岛', '拉萨'];
const CITY_NAMES = [{key: '北京', position: 1}, {key: '上海', position: 2}, {key: '广州', position: 3},
    {key: '深圳', position: 4}, {key: '杭州', position: 5}, {key: '苏州', position: 6}, {key: '深圳', position: 7},
    {key: '洛阳', position: 8}, {key: '厦门', position: 9}, {key: '青岛', position: 10}, {key: '拉萨', position: 11},
    {key: '成都', position: 12}, {key: '武汉', position: 13}, {key: '郑州', position: 14}];
export default class Find extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            dataArray: CITY_NAMES,
            responce: ""
        }
    }

    loadData(refreshing) {
        // Alert.alert("---2------>" + this.state.isLoading)
        // console.log("----2----->" + refreshing);
        if (refreshing) {
            this.setState({isLoading: true})
        }
        // okhttp.createClitent().sendPost(new CallBack(){
        //    public void  onScucess(Responce responce){
        //     }
        // })
        // fetch(`http://192.168.1.109:8090/weixinapp/studentinfo/reactlist`)
        //     .then((responce) => responce.json()).then(responceJson => {
        //     this.setState({
        //         responce: responceJson[0].mainTitle
        //     })
        // }).done()
        //    网络请求
        setTimeout(() => {
            let dataArray = [];
            if (refreshing) {
                for (let i = this.state.dataArray.length - 1; i >= 0; i--) {
                    dataArray.push(this.state.dataArray[i]);
                }
            } else {
                dataArray = this.state.dataArray.concat(CITY_NAMES);
            }
            this.setState({
                dataArray: dataArray,
            })
            this.setState({
                isLoading: false
            })

        }, 2000)
    }

    genIndicator() {
        return <View style={styles.indicatorContainer}>
            <ActivityIndicator
                style={styles.indicator}
                size={'large'}
                color={'red'}
                animating={true}
            />
            <Text>正在加载更多</Text>
        </View>
    }

    _renderItem(data) {
        return (<View style={styles.item}>
            <Text style={styles.text}>
                {data.item.position}
            </Text>
            <Text style={styles.text}>
                {data.item.key}
            </Text>
        </View>)
    }

    // render() {
    //     return (
    //         <View style={styles.containerStyle}>
    //             <StatusBar
    //                 backgroundColor='rgba(255,96,0,1.0)'
    //                 barStyle="light-content"
    //             />
    //             {this.renderNavBar()}
    //             <Text>{this.state.responce}</Text>
    //             <FlatList
    //                 data={this.state.dataArray}
    //                 renderItem={(data) => this._renderItem(data)}
    //                 // renderItem={({item}) => <Text style={styles.text}>{item.key}</Text>}
    //                 refreshing={this.state.isLoading}
    //                 // onRefresh={() => this.loadData(true)}
    //                 onRefresh={() => {
    //                     Alert.alert("---1------>" + this.state.isLoading)
    //                     // console.log("---1------>" + this.state.isLoading);
    //                     this.loadData(true);
    //                 }}
    //                 data={this.state.dataArray}
    //                 keyExtractor={(item, index) => item.position}
    //                 refreshControl={
    //                     <RefreshControl
    //                         title={'loading'}
    //                         color={['red']}
    //                         tintColor={'orange'}
    //                         titleColor={'red'}
    //                     />
    //                 }
    //                 // ListFooterComponent={() => this.genIndicator()}
    //                 // onEndReached={() => {
    //                 //     this.loadData()
    //                 // }}
    //             />
    //             {Alert.alert("---render------>" + this.state.isLoading)}
    //         </View>
    //     );
    // }


    render() {
        return (
            <View style={styles.containerStyle}>
                <StatusBar
                    backgroundColor='rgba(255,96,0,1.0)'
                    barStyle="light-content"
                />
                {this.renderNavBar()}
                <Text>{this.state.responce}</Text>
                <FlatList
                    data={this.state.dataArray}
                    renderItem={(data) => this._renderItem(data)}
                    // renderItem={({item}) => <Text style={styles.text}>{item.key}</Text>}
                    refreshing={this.state.isLoading}
                    // onRefresh={() => this.loadData(true)}
                    onRefresh={() => {
                        // Alert.alert("---1------>" + this.state.isLoading)
                        // console.log("---1------>" + this.state.isLoading);
                        this.loadData(true);
                    }}
                    data={this.state.dataArray}
                    keyExtractor={(item, index) => item.position}
                    ListFooterComponent={() => this.genIndicator()}
                    onEndReached={() => {
                        this.loadData()
                    }}
                />
            </View>
        );
    }

    renderNavBar() {
        return (<View style={styles.navViewStyle}>

            <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold'}}>
                发现
            </Text>
            <Image source={require('../../res/images/icon_mine_setting.png')} style={styles.navImageStyle}/>
        </View>)

    }
}

const styles = StyleSheet.create({
    navViewStyle: {
        backgroundColor: 'rgba(255,96,0,1.0)',
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    navImageStyle: {
        position: 'absolute',
        right: 10,
        width: Platform.OS === 'ios' ? 30 : 25,
        height: Platform.OS === 'ios' ? 30 : 25
    },
    text: {
        color: 'white',
        backgroundColor: "black",
        fontSize: 20,
    },
    item: {
        flexDirection: 'row',
        backgroundColor: '#169',
        height: 100,
        marginBottom: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    containerStyle: {
        flex: 1
    },
});
