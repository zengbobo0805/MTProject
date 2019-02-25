/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import Luancher from './js/luancher/Luancher';
import {name as appName} from './app.json';
import {Navigator} from "react-native-deprecated-custom-components"

// AppRegistry.registerComponent(appName, () => Luancher);

class MeiTuan extends  Component{
    render(): React.ReactNode {
        return <Navigator
            initialRoute={{
                name:"启动页",
                component: Luancher
            }}
            renderScene={(router, navigator) => {
                let Component = router.component;
                return <Component {...router.params} navigator={navigator}/>;

            }
            }
        />;
    }

}
AppRegistry.registerComponent(appName, () => MeiTuan);