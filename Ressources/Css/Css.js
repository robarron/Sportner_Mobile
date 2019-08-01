import {Dimensions, StyleSheet} from 'react-native'

const fullScreenheight = Dimensions.get('window').height * 0.75;
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
    logo: {
        marginBottom: 30
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
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    main_container_login: {
        width: fullScreenwidth,
    },
    loginContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    backgroundImg: {
        position: 'absolute',
        height: '100%',
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
        height: 60,
        backgroundColor: 'rgba(255,255,255,0.6)',
        marginBottom: 10,
        padding: 10,
        color: '#fff',
        textAlign: "center",
        borderRadius: 40,
        fontSize: 20,
    },
    picker: {
        height: 100,
        backgroundColor: 'rgba(225,225,225,0.6)',
        marginBottom: 10,
        padding: 10,
        color: '#fff',
        borderRadius: 40,
        fontSize: 20,
    },
    datePicker: {
        height: 60,
        width: '100%',
        backgroundColor: 'rgba(255,255,255,0.6)',
        marginBottom: 10,
        padding: 10,
        borderRadius: 40,
        borderWidth: 0,
    },
    buttonContainer: {
        backgroundColor: '#2980b6',
        paddingVertical: 15,
        marginVertical: 25,
        borderRadius: 40
    },
    buttonContainerInscription: {
        backgroundColor: '#2980b6',
        width: '40%',
        height: 45,
        borderRadius: 50,
        flex: 1,
        paddingVertical: 15,
        marginVertical: 25,
    },
    buttonWrapper: {
        flexWrap: 'wrap',
        alignItems: 'center',
        flexDirection:'row',
    },
    noAccount: {
       color: 'white',
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: '700',
    },
    buttonText2: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: '700',
    },
    error: {
        borderColor: "red",
        borderWidth: 1,
    },
    errorContent: {
        backgroundColor : "red",
        paddingTop: 18,
        fontSize: 16
    },
    icon: {
        width: 40,
        height: 40,
    },
    logInBtn: {
        resizeMode: 'contain',
        width: 200,
        height: 100,
        borderRadius: 20,
        alignItems: 'center'
    },
    iconTop: {
        justifyContent: "space-between",
        width: 40,
        height: 40,
    },
    imageHome: {
        width: '98%',
        height: '98%',
        marginLeft: '2%',
        marginTop: '2%' 
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
        flexDirection: 'row',
        justifyContent: 'center',
    },
});