import * as React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import styles from './style';

const ProfileScreen = (props) => {
    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.backgroundColorStyle} />
            <View style={styles.header}>
                <TouchableOpacity style={styles.headerLeftView} onPress={() => props.navigation.openDrawer()}>
                    <Image source={require('../image/menu.png')} style={styles.leftIcon} />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Profile</Text>
                <View style={styles.headerRightView} />
            </View>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Profile Screen</Text>
            </View>
        </View>
    );
}

export default ProfileScreen;