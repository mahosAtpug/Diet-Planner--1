import React from "react";
import {TouchableOpacity , Text , Image , StyleSheet , View, TextInput, Alert , Modal, ScrollView , KeyboardAvoidingView} from "react-native"
import {Header , Icon} from "react-native-elements"
import DietPlanner from "../screens/dietPlanner"
import firebase from "firebase";
import db from "../config"
import Breakfast1 from "./breakfast1";
import Breakfast2 from "./breakfast2";
import Breakfast3 from "./breakfast3";
import Breakfast4 from "./breakfast4";
import MyHeader from "../components/myHeader"



export default class BreakfastScreen extends React.Component{
    render(){
        return(
            <View>

                <View>
                                <Header  
                                leftComponent ={<Icon name='arrow-left' type='feather' color='#696969'  onPress={() => this.props.navigation.goBack()}/>}
                                centerComponent={{ text:"Breakfast Options ", style: { color: '#90A5A9', fontSize:20,fontWeight:"bold", } }}
                                backgroundColor = "#eaf8fe"
                                />                
               </View>
                <View>
                <TouchableOpacity style={{borderWidth:1 , marginTop:10 , alignSelf:"center" ,  borderColor:"grey" , backgroundColor:"cyan" , width:300 , alignItems:"center"}}
                                  onPress={()=>{
                                    this.props.navigation.navigate("Breakfast1");

                                  }}>
                    <Text>
                        Breakfast Option 1 
                    </Text>
                </TouchableOpacity>
                </View>

                <View>
                <TouchableOpacity style={{borderWidth:1 , marginTop:10 , alignSelf:"center" ,  borderColor:"grey" , backgroundColor:"cyan" , width:300 , alignItems:"center"}}
                                  onPress={()=>{
                                    this.props.navigation.navigate("Breakfast2");

                                  }}>
                    <Text>
                        Breakfast Option 2 
                    </Text>
                </TouchableOpacity>
                </View>

                <View>
                <TouchableOpacity style={{borderWidth:1 , marginTop:10 , alignSelf:"center" ,  borderColor:"grey" , backgroundColor:"cyan" , width:300 , alignItems:"center"}}
                                  onPress={()=>{
                                      this.props.navigation.navigate("Breakfast3");
                                  }}>
                    <Text>
                        Breakfast Option 3 
                    </Text>
                </TouchableOpacity>
                </View>

                <View>
                <TouchableOpacity style={{borderWidth:1 , marginTop:10 , alignSelf:"center" ,  borderColor:"grey" , backgroundColor:"cyan" , width:300 , alignItems:"center"}}
                                  onPress={()=>{
                                      this.props.navigation.navigate("Breakfast4");
                                  }}>
                    <Text>
                        Breakfast Option 4 
                    </Text>
                </TouchableOpacity>
                </View>


            </View>
        )
    }
}