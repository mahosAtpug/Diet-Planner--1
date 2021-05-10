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
                    Lemon Detox Water
                </Text>
                </View>

                <View>
                   <Text>
                       Serves: 2
                       Time: 10 - 15 mins
                       Difficulty: Easy       
                   </Text>
                </View>

                <View>
                   <Text>
                            Ingredients: 1 pinch SALT
                                         2 tablespoons HONEY
                                         2 tablespoons APPLE CIDER VINEGAR
                                         2 cups WATER
                                         1 LEMON
                                         
                                   
                   </Text>
                </View>

                <View>
                   <Text>
                       Steps: 1. In a bowl , zest or peel the LEMON into very small shards. Cut and squeeze the LEMON JUICE  
                              2. Add APPLE CIDER VINEGAR , HONEY and SALT to taste. Mix Well.
                              3. Add 2 cups of WATER and mix well 
                              4. The DETOX LEMON WATER is ready!! It could be consumed immediately or stored in the refrigerator for later use.
                                   
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