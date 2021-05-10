import React from "react";
import {TouchableOpacity , Text , Image , StyleSheet , View, TextInput, Alert , Modal, ScrollView , KeyboardAvoidingView} from "react-native"
import DietPlanner from "./dietPlanner"
import firebase from "firebase";
import db from "../config"

export default class Notifications extends React.Component{
    render(){
        return(
            <View>
                <Text>
                    CreateMySchedule
                </Text>
            </View>
        )
    }
}