import React from "react";
import {TouchableOpacity , Text , Image , StyleSheet , View, TextInput, Alert , Modal, ScrollView , KeyboardAvoidingView} from "react-native"
import DietPlanner from "../screens/dietPlanner"
import firebase from "firebase";
import db from "../config"

export default class Snack1 extends React.Component{
    render(){
        return(
            <View>
                <View>
                <Text style={{alignItems:"center"}}>
                  Spice Roasted Mixed Nuts 
               </Text>
                </View>

                <View>
                   <Text>
                       Serves: 1
                       Time: 10-15 mins
                       Difficulty: Easy       
                   </Text>
                </View>

                <View>
                   <Text>
                       Ingredients: 2 teaspoons PEANUTS WITH SKIN
                                    1 teaspoon RED CHILLI FLAKES
                                    2 teaspoons OIL
                                    2 teaspoons JAGGERY
                                    8 ALMONDS
                                    16 CASHEWS (2 piece split)
                                    1 teaspoon CINNAMON POWDER
                                    1 teaspoon ROSEMARY
                                   
                   </Text>
                </View>

                <View>
                   <Text>
                       Steps: 1. In a pan dry toss the raw PEANUTS on a medium flame untill it becomes a little dark brown in color
                              2. Add JAGGERY , CASHEWS , roasted PEANUTS , CHILLI FLAKES , SALT , ROSEMARY , CINNAMON and OIL
                              3. Mix it well and serve hot in a bowl.
                              4. Your healthy meal is Ready!!
                                   
                   </Text>
                </View>

                <View>
                   <Text>
                       I hope you had fun in making the dish. Enjoy the meal!
                                   
                   </Text>
                </View>
            </View>
        )
    }
}