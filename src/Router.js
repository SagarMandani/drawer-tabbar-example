import React, { Component } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DrawerContent from './DrawerContent';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { BottomTabBarWrapper, MultiBarButton, MultiBarProvider } from 'react-native-multibar';

import styles from './screen/style';
import Home from './screen/Home';
import Budget from './screen/Budget';
import Setting from './screen/Setting';
import Bill from './screen/Bill';
import Likes from './screen/Likes';
import Posts from './screen/Posts';
import Profile from './screen/Profile';

const Drawer = createDrawerNavigator();
const HomeStack = createStackNavigator();
const BillStack = createStackNavigator();
const BudgetStack = createStackNavigator();
const SettingStack = createStackNavigator();
const Tab = createBottomTabNavigator();

let drawerMenuItems = [
    { name: 'Home', icon: require('./image/home.png') },
    { name: 'Bill', icon: require('./image/bill.png') },
    { name: 'Budget', icon: require('./image/budget.png') },
    { name: 'Setting', icon: require('./image/setting.png') }
]

const TabBar = () => {
    return (
        <MultiBarProvider
            data={[
                ({ navigation }) => (
                    <TouchableOpacity
                        style={styles.touchView}
                        onPress={() => {
                            if (navigation && navigation.canGoBack()) {
                                navigation.goBack();
                            }
                        }}
                    >
                        <FontAwesome name="chevron-left" style={{ color: "blue", fontSize: 20 }} />
                    </TouchableOpacity>
                ),
                ({ navigation }) => (
                    <TouchableOpacity
                        style={styles.touchView}
                        onPress={() => { }}
                    >
                        <FontAwesome name="flag" style={{ color: "blue", fontSize: 20 }} />
                    </TouchableOpacity>
                ),
                ({ navigation }) => (
                    <TouchableOpacity
                        style={styles.touchView}
                        onPress={() => { }}
                    >
                        <FontAwesome name="headphones" style={{ color: "blue", fontSize: 20 }} />
                    </TouchableOpacity>
                ),
                ({ navigation }) => (
                    <TouchableOpacity
                        style={styles.touchView}
                        onPress={() => { }}
                    >
                        <FontAwesome name="heart" style={{ color: "blue", fontSize: 20 }} />
                    </TouchableOpacity>
                ),
                ({ navigation }) => (
                    <TouchableOpacity
                        style={styles.touchView}
                        onPress={() => { }}
                    >
                        <FontAwesome name="star" style={{ color: "blue", fontSize: 20 }} />
                    </TouchableOpacity>
                ),
                ({ navigation }) => (
                    <TouchableOpacity
                        style={styles.touchView}
                        onPress={() => { }}
                    >
                        <FontAwesome name="music" style={{ color: "blue", fontSize: 20 }} />
                    </TouchableOpacity>
                ),
            ]}
            iconSize={30}
            overlayRadius={200}
            initialExtrasVisible={false}
        >
            <Tab.Navigator initialRouteName="Home"
                tabBarOptions={{
                    activeTintColor: 'blue',
                    inactiveTintColor: 'gray'
                }}
                tabBar={(props) => (
                    <BottomTabBarWrapper navigation={props.navigation}>
                        <BottomTabBar {...props} />
                    </BottomTabBarWrapper>
                )}>
                <Tab.Screen
                    name="Home"
                    component={Home}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialIcons
                                name="home"
                                style={{
                                    fontSize: size,
                                    color: color
                                }}
                            />
                        )
                    }}
                />
                <Tab.Screen
                    name="Likes"
                    component={Likes}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialIcons
                                name="star"
                                style={{
                                    fontSize: size,
                                    color: color
                                }}
                            />
                        )
                    }}
                />
                <Tab.Screen
                    name="Setting"
                    component={Setting}
                    options={{
                        tabBarLabel: '',
                        tabBarButton: () => (
                            <MultiBarButton
                                style={{
                                    top: -25,
                                    backgroundColor: 'blue'
                                }}
                            >
                                <MaterialIcons
                                    name="add"
                                    style={{
                                        fontSize: 32,
                                        color: '#EDF2F4'
                                    }}
                                />
                            </MultiBarButton>
                        )
                    }}
                />
                <Tab.Screen
                    name="Posts"
                    component={Posts}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialIcons
                                name="message"
                                style={{
                                    fontSize: size,
                                    color: color
                                }}
                            />
                        )
                    }}
                />
                <Tab.Screen
                    name="Profile"
                    component={Profile}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <FontAwesome
                                name="user"
                                style={{
                                    fontSize: size,
                                    color: color
                                }}
                            />
                        )
                    }}
                />
            </Tab.Navigator>
        </MultiBarProvider>
    )
}

const HomeNavigator = () => {
    return (
        <HomeStack.Navigator initialRouteName="TabBar" headerMode="none">
            <HomeStack.Screen name="TabBar" component={TabBar} />
        </HomeStack.Navigator>
    );
}

const BillNavigator = () => {
    return (
        <BillStack.Navigator initialRouteName="Bill" headerMode="none">
            <BillStack.Screen name="Bill" component={Bill} />
        </BillStack.Navigator>
    );
}

const BudgetNavigator = () => {
    return (
        <BudgetStack.Navigator initialRouteName="Budget" headerMode="none">
            <BudgetStack.Screen name="Budget" component={Budget} />
        </BudgetStack.Navigator>
    );
}

const SettingNavigator = () => {
    return (
        <SettingStack.Navigator initialRouteName="Setting" headerMode="none">
            <SettingStack.Screen name="Setting" component={Setting} />
        </SettingStack.Navigator>
    );
}

const MainNavigator = () => {
    return (
        <Drawer.Navigator initialRouteName="Home" backBehavior="initialRoute" drawerContent={props => <DrawerContent {...props} drawerMenuItems={drawerMenuItems} />}
            drawerContentOptions={{
                activeTintColor: "#fff", activeBackgroundColor: "blue", inactiveBackgroundColor: "#fff", inactiveTintColor: "#000"
            }}>
            <Drawer.Screen name="Home" component={TabBar}
                options={{ drawerIcon: ({ color, size }) => <Image source={require('./image/home.png')} style={{ height: size, width: size, tintColor: color }} /> }} />
            <Drawer.Screen name="Bill" component={BillNavigator}
                options={{ drawerIcon: ({ color, size }) => <Image source={require('./image/bill.png')} style={{ height: size, width: size, tintColor: color }} /> }} />
            <Drawer.Screen name="Budget" component={BudgetNavigator}
                options={{ drawerIcon: ({ color, size }) => <Image source={require('./image/budget.png')} style={{ height: size, width: size, tintColor: color }} /> }} />
            <Drawer.Screen name="Setting" component={SettingNavigator}
                options={{ drawerIcon: ({ color, size }) => <Image source={require('./image/setting.png')} style={{ height: size, width: size, tintColor: color }} /> }} />
        </Drawer.Navigator>
    );
}

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <MainNavigator />
        </NavigationContainer>
    );
};

export default AppNavigator;