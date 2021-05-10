import React from "react";
import {TouchableOpacity , Text , Image , StyleSheet , View, TextInput, Alert , Modal, ScrollView , KeyboardAvoidingView} from "react-native"
import DietPlanner from "../screens/dietPlanner"
import {Header , Icon} from "react-native-elements"

import firebase from "firebase";
import db from "../config"
import Lunch1 from "./lunch1";
import Lunch2 from "./lunch2";
import Lunch3 from "./lunch3";

export default class LunchScreen extends React.Component{
    render(){
        return(
            <View>
                <View>
                     <Header  
                        leftComponent ={<Icon name='arrow-left' type='feather' color='#696969'  onPress={() => this.props.navigation.goBack()}/>}
                        centerComponent={{ text:"Lunch Options ", style: { color: '#90A5A9', fontSize:20,fontWeight:"bold", } }}
                         backgroundColor = "#eaf8fe"
                    />                
               </View>
                <View>
                <TouchableOpacity style={{borderWidth:1 , marginTop:10 , alignSelf:"center" ,  borderColor:"grey" , backgroundColor:"cyan" , width:300 , alignItems:"center"}}
                                  onPress={()=>{
                                    this.props.navigation.navigate(Lunch1);

                                  }}>
                    <Text>
                        Lunch Option 1 
                    </Text>
                </TouchableOpacity>
                </View>

                <View>
                <TouchableOpacity style={{borderWidth:1 , marginTop:10 , alignSelf:"center" ,  borderColor:"grey" , backgroundColor:"cyan" , width:300 , alignItems:"center"}}
                                  onPress={()=>{
                                    this.props.navigation.navigate(Lunch2);

                                  }}>
                    <Text>
                        Lunch Option 2 
                    </Text>
                </TouchableOpacity>
                </View>

                <View>
                <TouchableOpacity style={{borderWidth:1 , marginTop:10 , alignSelf:"center" ,  borderColor:"grey" , backgroundColor:"cyan" , width:300 , alignItems:"center"}}
                                  onPress={()=>{
                                    this.props.navigation.navigate(Lunch3);

                                  }}>
                    <Text>
                        Lunch Option 3 
                    </Text>
                </TouchableOpacity>
                </View>
            </View>
        )
    }
}