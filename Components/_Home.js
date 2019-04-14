// Components/Search.js
import React from 'react'
import {StyleSheet, View, TextInput, Button, FlatList, Text, ActivityIndicator  } from 'react-native'
import { getUserFromApi } from '../API/UserApi'
import UserItem from './UserItem'

class _Home extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            users: [],
            page: 1,
            results: 1,
            totalPage: 100,
            seed: 'demo',
            isFetching: false,
        }
        // Ici on va créer les propriétés de notre component custom Search
    }

    componentDidMount() {
        var nbResultatParRequete = this.state.results;
        var nbPage = this.state.page;
        getUserFromApi(nbResultatParRequete, nbPage).then(data => {
            this.setState({
                users: this.state.users.concat(data.results)
            })
            console.log(this.state.users.length)
        })
    }

    GoToNextUser () {
        var nextPage = this.state.page + 1;
        var nbResultatParRequete = this.state.results;

        getUserFromApi(nbResultatParRequete, nextPage).then(data => {
            this.setState({
                users: data.results,
                page: nextPage,
            })
            console.log(this.state.user);
            console.log(this.state.users.length)
        })
    }

    _displayYepButton() {
        return (
           <View>
               {/*<Button title='Match' onPress={() => {this.GoToNextUser()}}/>*/}
               <Button title='Match' onPress={() => this.props.navigation.navigate("AdFeed")}/>
           </View>
        )
    }
    _displayNopButton() {
        return (
            <View>
                <Button title='Next' onPress={() => {this.GoToNextUser()}}/>
            </View>
        )
    }

    render() {
        return (
            <View style={ styles.main_container}>
                <FlatList
                    data={this.state.users}
                    keyExtractor={(item) => item.login.sha1}
                    renderItem={({item}) => <UserItem user={item} page={this.state.page} results={this.state.results} _displayNopButton={this._displayNopButton()} _displayYepButton={this._displayYepButton()} />}
                />

                {console.log(this.state.page)}
            </View>

        )

    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        marginTop: 20,
    },
})

export default _Home