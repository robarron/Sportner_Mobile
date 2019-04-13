import {Dimensions, StyleSheet} from 'react-native'

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export default StyleSheet.create({
    main_container: {
        flex: 1,
    },
    container_flex: {
        top: 150,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    Home_style: {
        flex: 1,
    },
    imageLogo: {
        width: width,
        height: 70,
    },
    imageLogo2: {
        width: width,
        height: 250,
    },
    main_container_blue: {
        flex: 1,
        backgroundColor: '#2c3e50',
    },
    main_container_login: {
        width: width
    },
    loginContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    logo: {
        // width: 300,
        // height: 100
    },
    container_flex_logo: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        padding: 20
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(225,225,225,0.2)',
        marginBottom: 10,
        padding: 10,
        color: '#fff',
        textAlign: "center"
    },
    buttonContainer: {
        backgroundColor: '#2980b6',
        paddingVertical: 15,
        marginVertical: 25
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: '700'
    },
    error: {
        borderColor: "red",
        borderWidth: 1,
    },
    errorContent: {
        backgroundColor : "red",
    },
    icon: {
        width: 50,
        height: 50
    }
});