import React from "react";
import {TouchableOpacity , Text , Image , StyleSheet , View, TextInput, Alert , Modal, ScrollView , KeyboardAvoidingView} from "react-native"
import DietPlanner from "../screens/dietPlanner"
import firebase from "firebase";
import db from "../config"
import Breakfast from "./breakfastScreen"
import Lunch from "./lunchScreen";
import Snacks from "./snacksScreen";
import Dinner from "./dinnerScreen";
import MyHeader from "../components/myHeader";

export default class RecipiesAndDrinks extends React.Component{
    render(){
        return(
            <View>

                <View>
                    <MyHeader title={"Healthy Recipies And Drinks"} navigation={this.props.navigation}/>
                </View>

                <View>
                <TouchableOpacity style={{borderWidth:1 , marginTop:10 , alignSelf:"center" ,  borderColor:"grey" , backgroundColor:"cyan" , width:300 , alignItems:"center"}}
                                  onPress={()=>{
                                      console.log("Print Me")
                                      this.props.navigation.navigate("Breakfast")
                                  }} >
                    <Text>
                        Breakfast Options
                    </Text>
                </TouchableOpacity>
                </View>

                <View>
                <TouchableOpacity style={{borderWidth:1 , marginTop:10 , alignSelf:"center" ,  borderColor:"grey" , backgroundColor:"cyan" , width:300 , alignItems:"center"}}
                                  onPress={()=>{
                                      this.props.navigation.navigate("Lunch")
                                  }} >
                    <Text>
                        Lunch Options
                    </Text>
                </TouchableOpacity>
                </View>

                <View>
                <TouchableOpacity style={{borderWidth:1 , marginTop:10 , alignSelf:"center" ,  borderColor:"grey" , backgroundColor:"cyan" , width:300 , alignItems:"center"}}
                                  onPress={()=>{
                                      this.props.navigation.navigate("Snacks")
                                  }} >
                    <Text>
                        Snacks Options
                    </Text>
                </TouchableOpacity>
                </View>

                <View>
                <TouchableOpacity style={{borderWidth:1 , marginTop:10 , alignSelf:"center" ,  borderColor:"grey" , backgroundColor:"cyan" , width:300 , alignItems:"center"}}
                                  onPress={()=>{
                                      this.props.navigation.navigate("Dinner")
                                  }} >
                    <Text>
                        Dinner Options
                    </Text>
                </TouchableOpacity>
                </View>
            </View>
        )
    }
}