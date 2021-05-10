import React from "react";
import {TouchableOpacity , Text , Image , StyleSheet , View, TextInput, Alert , Modal, ScrollView , KeyboardAvoidingView} from "react-native"
import DietPlanner from "../screens/dietPlanner"
import {Header , Icon} from "react-native-elements"
import firebase from "firebase";
import db from "../config"
import Dinner2 from "./dinner2";
import Dinner3 from "./dinner3";
import Dinner1 from "./dinner1";
import Dinner4 from "./dinner4";

export default class DinnerScreen extends React.Component{
    render(){
        return(
            <View>
                <View>
                     <Header  
                        leftComponent ={<Icon name='arrow-left' type='feather' color='#696969'  onPress={() => this.props.navigation.goBack()}/>}
                        centerComponent={{ text:"Dinner Options ", style: { color: '#90A5A9', fontSize:20,fontWeight:"bold", } }}
                         backgroundColor = "#eaf8fe"
                    />                
               </View>
                <View>
                <TouchableOpacity style={{borderWidth:1 , marginTop:10 , alignSelf:"center" ,  borderColor:"grey" , backgroundColor:"cyan" , width:300 , alignItems:"center"}}
                                  onPress={()=>{
                                    this.props.navigation.navigate(Dinner1);

                                  }}>
                    <Text>
                        Breakfast Option 1 
                    </Text>
                </TouchableOpacity>
                </View>

                <View>
                <TouchableOpacity style={{borderWidth:1 , marginTop:10 , alignSelf:"center" ,  borderColor:"grey" , backgroundColor:"cyan" , width:300 , alignItems:"center"}}
                                  onPress={()=>{
                                    this.props.navigation.navigate(Dinner2);

                                  }}>
                    <Text>
                        Dinner Option 2 
                    </Text>
                </TouchableOpacity>
                </View>

                <View>
                <TouchableOpacity style={{borderWidth:1 , marginTop:10 , alignSelf:"center" ,  borderColor:"grey" , backgroundColor:"cyan" , width:300 , alignItems:"center"}}
                                  onPress={()=>{
                                      this.props.navigation.navigate(Dinner3);
                                  }}>
                    <Text>
                        Dinner Option 3 
                    </Text>
                </TouchableOpacity>
                </View>

                <View>
                <TouchableOpacity style={{borderWidth:1 , marginTop:10 , alignSelf:"center" ,  borderColor:"grey" , backgroundColor:"cyan" , width:300 , alignItems:"center"}}
                                  onPress={()=>{
                                      this.props.navigation.navigate(Dinner4);
                                  }}>
                    <Text>
                        Dinner Option 4
                    </Text>
                </TouchableOpacity>
                </View>


            </View>
        )
    }
}