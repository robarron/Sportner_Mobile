import {Dimensions, StyleSheet} from 'react-native'

const fullScreenheight = Dimensions.get('window').height;
const fullScreenwidth = Dimensions.get('window').width;
const halfScreenheight = Dimensions.get('window').height * 0.5;
const halfScreenwidth = Dimensions.get('window').width * 0.5;
export default StyleSheet.create({
    main_container: {
        flex: 1,
    },
    HomeContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        width: fullScreenwidth,
        height: fullScreenheight,
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
        width: fullScreenwidth,
        height: 70,
    },
    imageLogo2: {
        width: fullScreenwidth,
        height: 250,
    },
    main_container_blue: {
        flex: 1,
        // backgroundColor: '#2c3e50',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    main_container_login: {
        // flex: 1,
        width: fullScreenwidth,
    },
    loginContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    backgroundImg: {
        // width: 300,
        // height: 100
        position: 'absolute',
        // width: '50%',
        height: '100%',
        // paddingRight: 500
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
        width: 40,
        height: 40,
    },
    iconTop: {
        justifyContent: "space-between",
        width: 40,
        height: 40,
    },
    imageHome: {
        width: '97%',
        height: '97%',
    },
    txt_container: {
        fontSize: 36,
    },
    imageHeader: {
        resizeMode: 'contain',
        width: 40,
        height: 40,
    },
    header_container: {
        flex: 1,
        width: fullScreenwidth,
        flexDirection: 'row',
        alignItems: 'stretch',
        justifyContent: 'space-between'
    },
    imageHeaderMiddle: {
        resizeMode: 'contain',
        width: 80,
        height: 40,
    },
    profilesImage: {
        resizeMode: 'contain',
        borderRadius : 100 / 2,
        width: '30%',
        height: '30%',
    },
    main_container_profil: {
        flex: 1,
        width: fullScreenwidth,
        height: fullScreenheight,
        // backgroundColor: '#2c3e50',
        flexDirection: 'row',
        justifyContent: 'center',
    },
});