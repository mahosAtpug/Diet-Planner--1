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
                    Peanut Butter Smoothie with Oats
                </Text>
                </View>

                <View>
                   <Text>
                       Serves: 1
                       Time: 15 mins
                       Difficulty: Easy       
                   </Text>
                </View>

                <View>
                   <Text>
                       Ingredients: 1 and 1/2(half) cup MANGO PUREE
                                    2 tablespoons CHIA SEEDS
                                    10 DATES SEEDLESS
                                    2 BANANAS
                                    1/2(half) teaspoons WATER
                                   
                   </Text>
                </View>

                <View>
                   <Text>
                       Steps: 1. Soak CHIA SEEDS in a bowl for 7-10 mins.
                              2. In a blender add chopped DATES , sliced BANANAS, MANGO PUREE soaked CHIA SEEDS, WATER and then blend.
                              3. Pour it in a Glass and Serve Chilled
                              8.Your healthy meal is Ready!!
                                   
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