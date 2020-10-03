import React from 'react';
import { View, StyleSheet, Text, Image, Alert } from 'react-native';
import {
    DrawerContentScrollView,
    DrawerItem,
    DrawerItemList,
} from '@react-navigation/drawer';

function DrawerContent(props) {

    const onHandleLogout = () => {
        Alert.alert('AppName',
            "Are you sure you want to logout?",
            [
                { text: "Yes", style: 'cancel', onPress: () => {} },
                { text: "No" }
            ]);
    }
    
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{ flexDirection: 'row', marginTop: 15 }}>                    
                            <Image
                                source={{ uri: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" }}
                                style={{ height: 50, width: 50 }}
                            />
                            <View style={{ marginLeft: 15, marginRight: 5, flexDirection: 'column', flex: 1 }}>
                                <Text style={styles.title} numberOfLines={1} ellipsizeMode='tail'>Joshep</Text>
                                <Text style={styles.caption} numberOfLines={2}>Joshep@gmail.com</Text>
                            </View>
                        </View>
                    </View>
                    <View style={[styles.bottomDrawerSection, { marginTop: 15 }]} />
                    <DrawerItemList {...props} />
                    {/* {
                        props.drawerMenuItems.map((item, index) => {
                            return (
                                <DrawerItem
                                    key={index}
                                    label={item.name}
                                    inactiveTintColor="#000"
                                    icon={({ color, size }) => (
                                        <Image
                                            source={item.icon}
                                            style={{ height: size, width: size, tintColor: color }}
                                        />
                                    )}
                                    onPress={() => { props.navigation.navigate(item.name) }}
                                />
                            )
                        })
                    } */}
                </View>
            </DrawerContentScrollView>
            <View style={styles.bottomDrawerSection} />
            <DrawerItem
                label="Sign Out"
                inactiveTintColor="#000"
                icon={({ color, size }) => (
                    <Image
                        source={require('./image/logout.png')}
                        style={{ height: size, width: size, tintColor: color }}
                    />
                )}
                onPress={() => onHandleLogout()}
            />
            <View style={{ marginTop: 5 }} />
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 20,
    },
    title: {
        fontSize: 14,
        marginTop: 3,
        marginBottom: 3,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 12,
        lineHeight: 14,
    },
    bottomDrawerSection: {
        marginBottom: 5,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 2
    },
});

export default DrawerContent;