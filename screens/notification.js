import *as React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import AppHeader from '../Components/header'
import db from '../config.js'
import firebase from 'firebase'
import { FlatList } from 'react-native-gesture-handler'
import { Icon, ListItem } from 'react-native-elements'
import { SwipeList } from '../Components/swipeFlatList'

export default class Notification extends React.Component{
    constructor(){
        super()
        this.state={
            allNotifications:[],
            targetedId:firebase.auth().currentUser.email
        }
    }

    render(){
        return(
        <View style={{flex:1}}>
            <AppHeader title='Notifications' navigation={this.props.navigation}></AppHeader>
            <View>
                {
                 this.state.allNotifications.length==0
                ?(<View style={styles.subContainer}>
                <Text>List of all Notifications</Text>
                </View>)                  
                :(<SwipeList notifications={this.state.allNotifications}></SwipeList>)
                }
                
            </View>
        </View>
        )
    }
    componentDidMount(){
        this.getAllNotifications()
    }
    getAllNotifications=()=>{
        db
        .collection('Notifications')
        .where('targetedUserId','==',this.state.targetedId)
        .onSnapshot((snapshot)=>{
            var temp=[]
            snapshot.docs.map((doc)=>{
                temp.push(doc.data())
            })
            this.setState({
                allNotifications:temp
            })
        })          
    }
}
const styles = StyleSheet.create({ 
    subContainer:{ 
        flex:1, 
        fontSize: 20, 
        justifyContent:'center', 
        alignItems:'center' 
    }, 
})