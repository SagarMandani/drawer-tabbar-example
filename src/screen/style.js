import { StyleSheet } from 'react-native';

const styleSheet = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundColorStyle: {
        backgroundColor: 'blue'
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 55,
        backgroundColor: 'blue'
    },
    headerTitle: {
        flex: 1,
        fontSize: 20,
        color: "#fff",
        fontWeight: 'bold',
        textAlign: 'center'
    },
    headerLeftView: {
        alignItems: 'center',
        marginRight: 10,
        marginLeft: 10,
        width: 40,
    },
    leftIcon: {
        height: 25,
        width: 25,
        tintColor: "#fff"
    },
    rightIconView: {
        alignItems: 'center',
        marginRight: 15,
        marginLeft: 10
    },
    headerRightView: {
        width: 40, marginRight: 10
    },
    touchView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        backgroundColor: 'white'
    }
})

export default styleSheet;