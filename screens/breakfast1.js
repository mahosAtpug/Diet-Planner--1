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
                    Boiled Egg Sandwich
                </Text>
                </View>

                <View>
                   <Text>
                       Serves: 3
                       Time: 25-30 mins
                       Difficulty: Easy       
                   </Text>
                </View>

                <View>
                   <Text>
                       Ingredients: 1 teaspoon SALT
                                    1 teaspoon OIL
                                    1 TOMATO
                                    1 ONION
                                    6 BROWN BRED SLICES
                                    1 teaspoon PEPPER
                                    3 GREEN CHILLIES
                                    2 teaspoons CORIANDER LEAVES
                                    4 RAW EGG
                                   
                   </Text>
                </View>

                <View>
                   <Text>
                       Steps: 1. Boil the EGG in SALT WATER for 10-12 minutes.
                              2. Pell and Cut the BOILED EGGS into small dice.
                              3. Fine chop the ONION , TOMATO , GREEN CHILLIES and CORIANDER LEAVES
                              4. Take a mixing bowl, add dices of BOILED EGG along with ONION , TOMATO , CORIANDER , GREEN CHILLIES , SALT and PEPPER. Mix it well to combine evrything and set aside.
                              5. Place the mixture on a BREAD SLICE and sandwich it with another slice. Repeat the same with other BREAD SLICES.
                              4. Heat the pan , add a little OIL. Place the sandwich and sear on other sides untill tosated in golden color. Slice it into 4 pieces.
                              5.Your healthy meal is Ready!!
                                   
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