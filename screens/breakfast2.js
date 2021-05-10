import React from "react";
import {TouchableOpacity , Text , Image , StyleSheet , View, TextInput, Alert , Modal, ScrollView , KeyboardAvoidingView} from "react-native"
import DietPlanner from "../screens/dietPlanner"
import firebase from "firebase";
import db from "../config"

export default class Breakfast1 extends React.Component{
    render(){
        return(
            <View>
                <View>
                <Text style={{alignItems:"center"}}>
                    Rawa Uttapam
                </Text>
                </View>

                <View>
                   <Text>
                       Serves: 2
                       Time: 25-30 mins
                       Difficulty: Intermediate       
                   </Text>
                </View>

                <View>
                   <Text>
                       Ingredients: 1 teaspoon SALT
                                    2 teaspoon OIL
                                    1/2(half) cup RAVA SOOJI
                                    1 teaspoon RED CHILLI POWDER
                                    1 TOMATO
                                    1 ONION
                                    1 GREEN CAPSICUM
                                    10g CORIANDER WITH ROOTS
                                    1/2(half) cup CURD
                                    2 GREEN CHILLIES
                                    1/2(half) cup WATER
                                   
                   </Text>
                </View>

                <View>
                   <Text>
                       Steps: 1. Fine chop the ONION , TOMATO , GREEN CHILLIES ,CORIANDER LEAVES and CAPSICUM. Add it to a bowl and Mix.
                              2. Take a mixing bowl, add RAWA with WATER and SALT, RED CHILI POWDER along with ONION , TOMATO , CORIANDER , GREEN CHILLIES and CURD.
                              3. Mix well to avoid any lumps. The batter should have a pouring consistency.
                              4. Heat the non - stick pan. Pour a laddle full of batter and spread in a circular motion (should be half the size of the tip of the index finger in thickness). Drixxle a little OIL.
                              5. Once it cooks from one side, lightly release from the pan and flip and cook on the other side untill it cooks through it should be golden brown in colour.
                              6. Once done form both the sides , serve hot with Green Chutney.
                              7.Your healthy meal is Ready!!
                                   
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