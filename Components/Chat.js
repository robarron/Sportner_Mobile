import React from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import {connect} from "react-redux";
import Css from "../Ressources/Css/Css";
import {Image, Text} from "react-native";
import { Avatar } from 'react-native-elements';
import {getUserConversation, postMessage} from "../API/GlobalApiFunctions";
import moment from "moment";
import "moment/locale/fr";

moment.locale('fr');

class Chat extends React.Component {

    constructor(props) {
        super(props);
        this.indexCarousel= 0;
        this.messages= [];
            this.user = this.props.navigation.getParam('user', null);
        this.state = {
            messages: [],
            text: '',
        }
    }

    componentDidMount() {
        this.setState({
            user: this.props.navigation.getParam('userId', null)
        });
        getUserConversation(this.props.globalUser.id, this.props.navigation.getParam('userId', null)).then(response => {
            return response.json()
        }).then(responseJson => {
            console.log(responseJson);
            if (Array.isArray(responseJson)) {
                responseJson.map((data) => {
                    this.messages.push(
                        {
                            _id: data.id,
                            text: data.text,
                            createdAt: data.createdAt,
                            user: {
                                _id: data.user.id,
                                name: data.user.name,
                            },
                        },
                    );
                });
                this.setState({messages: this.messages})
            }
        }).catch((error) => {
            return Promise.reject(error);
        });

    }

    onSend(messages = []) {
        this.setState(previousState => ({
            messages: GiftedChat.append(previousState.messages, messages),
        }));

        postMessage(this.props.globalUser.id, this.props.navigation.getParam('userId', null), messages[0].text).then(responseJson => {
            console.log(responseJson);
        }).catch((error) => {
            return Promise.reject(error);
        });
        // console.log(this.state.messages);
    }

    render() {
        return (
            <GiftedChat
                maxInputLength={500}
                placeholder={this.state.messages.length > 0 ? "Écrivez un message" : "Lancer la conversation"}
                renderUsernameOnMessage={true}
                locale={moment.locale('fr')}
                isAnimated={true}
                messages={this.state.messages}
                onSend={messages => this.onSend(messages)}
                user={{
                    _id: 1,
                }}
            >
            </GiftedChat>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        sponsorshipCode: state.sponsorshipCode,
        globalUser: state.globalUser
    }
};
export default connect(mapStateToProps)(Chat)