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
    infoInput: {
        height: 60,
        backgroundColor: '#E1ECF4',
        marginBottom: 20,
        padding: 10,
        color: 'black',
        textAlign: "center",
        borderRadius: 10,
        fontSize: 20,
    },
    infoPicker: {
        height: 100,
        backgroundColor: '#E1ECF4',
        marginBottom: 20,
        padding: 10,
        color: 'black',
        borderRadius: 10,
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
    datePickerAvailability: {
        flexWrap: 'nowrap',

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
        height: '85%',
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
    textHeaderMiddle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    textHeaderBack: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#3D7E9A',
        paddingRight: 15
    },
    profilesImage: {
        resizeMode: 'contain',
        borderRadius : 140 / 2,
        width: 140,
        height: 140,
    },
    picturesHandler: {
        resizeMode: 'contain',
        borderRadius : 100 / 2,
        width: 100,
        height: 100,
    },
    crossPlusIcon: {
        resizeMode: 'contain',
        width: 20,
        height: 20,
        position: 'absolute',
    },
    changeInfoBtn: {
        alignSelf: 'center',
        width: 90,
        height: 90,
    },
    main_container_profil: {
        flex: 1,
        width: fullScreenwidth,
        height: fullScreenheight,
        flexDirection: 'column',
    },
    infoUser: {
        paddingTop: 40,
        alignItems: 'center',
    },
    infoText: {
        alignSelf: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        paddingBottom: 10,
    },
    parametersBtnTxt: {
        alignSelf: 'center',
        justifyContent: 'center',
        textAlign: 'center'
    },
    infoRating: {
        alignSelf: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
    },
    parametersBtn: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    textAreaContainer: {
        borderColor: 'grey',
        borderWidth: 1,
        padding: 5,
        marginBottom: 20,
        backgroundColor: '#E1ECF4',
        color: 'black',
        borderRadius: 10,
        fontSize: 10,
    },
    textArea: {
        height: 150,
        justifyContent: "flex-start"
    },
    headerTitle: {
        fontWeight: 'bold',
        paddingTop: 10,
        marginBottom: 20,
        fontSize: 20
    },
    dayTitle: {
        paddingTop: 10,
        marginBottom: 10,
        fontSize: 10,
        width: '15%',
        marginLeft: 0,
    },
    PremiumBtn: {
            width: Dimensions.get('window').width * 0.95,
            height: Dimensions.get('window').height * 0.09,
            marginTop: 10,
            borderRadius: 15,
            backgroundColor: '#F0F4F6',
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.50,
            shadowRadius: 6,
            elevation: 2,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
    },
    PremiumBtn2: {
        width: Dimensions.get('window').width * 0.45,
        height: Dimensions.get('window').height * 0.09,
        marginTop: 10,
        borderRadius: 15,
        backgroundColor: '#F0F4F6',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.50,
        shadowRadius: 6,
        elevation: 2,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnGold: {
        color: '#FFD700', fontSize: 22, fontWeight: 'bold'
    },
    btnPrime: {
        color: '#FF4136', fontSize: 22, fontWeight: 'bold'
    },
    btnBoost: {
        color: '#39CCCC', fontSize: 18, fontWeight: 'bold'
    },
    btnSponso: {
        color: '#001f3f', fontSize: 18, fontWeight: 'bold'
    },
    flexBtn: {
        // width: Dimensions.get('window').width * 0.92,
        // height: Dimensions.get('window').height * 0.11,
        // borderRadius: 15,
        // borderWidth: 2,
        alignItems:'center',
        justifyContent:'center',
    },
    iconBuModel: {
        resizeMode: 'contain',
        width: 60,
        height: 60
    },
    btnGrey: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#C1C1C1'
    },
    btnGrey2: {
        fontSize: 13,
        fontWeight: 'bold',
        color: '#C1C1C1'
    },
    dialogContent: {
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputParameters: {
        paddingLeft: 15,
        height: Dimensions.get('window').height * 0.06,
        backgroundColor: '#F0F4F6',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: '#E1ECF4'
    },
    shareParameters: {
        height: Dimensions.get('window').height * 0.06,
        backgroundColor: '#F0F4F6',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40
    },
    paramValue: {
        flexDirection: 'row',
        color: '#C1C1C1',
        fontSize: 18,
        paddingRight: 15,
        width: 'auto'
    },
    inputParametersCity: {
        paddingLeft: 15,
        height: Dimensions.get('window').height * 0.06,
        backgroundColor: '#F0F4F6',
        borderWidth: 1,
        borderColor: '#E1ECF4',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    inputSlider: {
        height: 'auto',
        backgroundColor: '#F0F4F6',
        borderWidth: 1,
        borderColor: '#E1ECF4',
        flex: 1
    },
    inputDoubleSlider: {
        height: 'auto',
        backgroundColor: '#F0F4F6',
        borderWidth: 1,
        borderColor: '#E1ECF4',
        flex: 1
    },
    sliderParameters: {
        paddingLeft: 15,
        paddingTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    paramName: {
        fontSize: 18,
    },
    slider: {
        width: '100%',
        height: 80,
        backgroundColor: '#F0F4F6',
    },
    headerTitleParam: {
        marginBottom: 5,
        marginTop: 40,
        fontSize: 15,
        paddingLeft: 15,

    },
    ParametersContainer: {
        width: fullScreenwidth,
        height: fullScreenheight,
    },
    indicationValue: {
        fontSize: 12,
        color: '#003366',
        textAlign: 'center'
    }
});