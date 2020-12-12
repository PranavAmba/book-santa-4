import *as React from 'react'
import {Dimensions, StyleSheet, View,Animated} from 'react-native'
import { Icon, ListItem } from 'react-native-elements'
import {SwipeListView} from 'react-native-swipe-list-view'

export default class SwipeList extends React.Component{
    constructor(){
        super()
        this.state={
            allNotifcations:this.props.notifications
        }
    }
    render(){
        return(
            <View style={styles.container}>
                <SwipeListView
                  disabaleRightSwipe
                  data={this.state.allNotifcations}
                  renderItem={this.renderItem}
                  renderHiddenItem={this.renderHiddenItem}
                  rightOpenValue={-Dimensions.get('window').width}
                  previewRowKey={'0'}
                  previewOpenValue={-40}
                  previewOpenDelay={3000}
                  onSwipeValueChange={this.onSwipeValueChange}
                ></SwipeListView>
            </View>
        )
        renderItem=(doc)=>{
            <Animated.View>
                <ListItem>
                    title={'doc.bookName'}
                    titleStyle={{color:'black',fontWeight:'bold'}}
                    subtitle={'doc.message'}
                    leftElement={<Icon name='book' type='font-awesome' color='#696969'></Icon>}
                </ListItem>
            </Animated.View>
        }
        renderHiddenItem=()=>{
            <View style={styles.rowBack}>
                <View  style={[styles.backRightBtn,styles.backRightBtnRight]}>
                    <Text>This gets removed from the list</Text>
                </View>
            </View>
        }

        onSwipeValueChange=(swipeData)=>{
            console.log(swipeData)
        }
    }

}
const styles = StyleSheet.create({ 
    container: { 
        backgroundColor: 'white', 
        flex: 1, 
    }, 
    backTextWhite: { 
        color: '#FFF', 
        fontWeight:'bold', 
        fontSize:15 
    }, 
    rowBack: { 
        alignItems: 'center', 
        backgroundColor: '#29b6f6', 
        flex: 1, 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        paddingLeft: 15, 
    }, 
    backRightBtn: { 
        alignItems: 'center', 
        bottom: 0, 
        justifyContent: 'center', 
        position: 'absolute', 
        top: 0, 
        width: 100, 
    }, 
    backRightBtnRight: { 
        backgroundColor: '#29b6f6', 
        right: 0, 
    },
 });