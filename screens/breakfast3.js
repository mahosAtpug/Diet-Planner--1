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
                       Serves: 2
                       Time: 10-15 mins
                       Difficulty: Easy       
                   </Text>
                </View>

                <View>
                   <Text>
                       Ingredients: 2 tablespoons HONEY
                                    1 tablespoon ROLLED OATS
                                    2 BANANAS
                                    4 tablespoons UNSWEETENED PEANUT BUTTER
                                    3 cups COW MILK
                                    3 cups WATER
                                   
                   </Text>
                </View>

                <View>
                   <Text>
                       Steps: 1. Take ROLLED OATS in a bowl
                              2. Add HONEY
                              3. Add PEANUT BUTTER AND WATER/MILK of choice 
                              4. Take the BANANAS and cut it in half.
                              5. Take all ingredients in a blender and blitz!!
                              6. Blend to a smoothie like consistency
                              7. Drink or Serve Cold
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