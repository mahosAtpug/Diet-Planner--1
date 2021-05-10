import React from "react";
import {TouchableOpacity , Text , Image , StyleSheet , View, TextInput, Alert , Modal, ScrollView , KeyboardAvoidingView} from "react-native"
import DietPlanner from "../screens/dietPlanner"
import {Header , Icon} from "react-native-elements"

import firebase from "firebase";
import db from "../config"
import Snack2 from "./snack2";
import Snack1 from "./snack1";
import Snack3 from "./snack3";

export default class SnacksScreen extends React.Component{
    render(){
        return(
            <View>
                <View>
                     <Header  
                        leftComponent ={<Icon name='arrow-left' type='feather' color='#696969'  onPress={() => this.props.navigation.goBack()}/>}
                        centerComponent={{ text:"Snack Options ", style: { color: '#90A5A9', fontSize:20,fontWeight:"bold", } }}
                         backgroundColor = "#eaf8fe"
                    />                
               </View>
                <View>
                <TouchableOpacity style={{borderWidth:1 , marginTop:10 , alignSelf:"center" ,  borderColor:"grey" , backgroundColor:"cyan" , width:300 , alignItems:"center"}}
                                  onPress={()=>{
                                    this.props.navigation.navigate(Snack1);

                                  }}>
                    <Text>
                        Snack Option 1 
                    </Text>
                </TouchableOpacity>
                </View>

                <View>
                <TouchableOpacity style={{borderWidth:1 , marginTop:10 , alignSelf:"center" ,  borderColor:"grey" , backgroundColor:"cyan" , width:300 , alignItems:"center"}}
                                  onPress={()=>{
                                    this.props.navigation.navigate(Snack2);

                                  }}>
                    <Text>
                        Snack Option 2 
                    </Text>
                </TouchableOpacity>
                </View>

                <View>
                <TouchableOpacity style={{borderWidth:1 , marginTop:10 , alignSelf:"center" ,  borderColor:"grey" , backgroundColor:"cyan" , width:300 , alignItems:"center"}}
                                  onPress={()=>{
                                      this.props.navigation.navigate(Snack3);
                                  }}>
                    <Text>
                       Snack Option 3
                    </Text>
                </TouchableOpacity>
                </View>
            </View>
        )
    }
}