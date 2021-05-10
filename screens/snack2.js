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
                    Dabeli
                </Text>
                </View>

                <View>
                   <Text>
                       Serves: 6
                       Time: 45 mins - 1 hr
                       Difficulty: Intermediate       
                   </Text>
                </View>

                <View>
                   <Text>
                            Ingredients: 1/4 cups PEANUTS WITH SKIN
                                         1/4 teaspoons RED CHILLI POWDER
                                         2 teaspoons OIL
                                         1/2 teaspoons JAGGERY POWDER
                                         1/2 cups CHANA/CHIKPEAS
                                         1 teaspoon SALT
                                         1 teaspoon CHAT MASALA
                                         1/2 teaspoons CHANNA MASALA
                                         1/2 teaspoons TURMERIC POWDER
                                         1 ONION
                                         1 POMEGRANTE
                                         6 WHITE PAV
                                         6g CORIANDER LEAVES 
                                         1/4 cups GARLIC CHUTNEY
                                         1/4 cups TAMARING CHUTNEY
                                   
                   </Text>
                </View>

                <View>
                   <Text>
                       Steps: 1. Clean the POMEGRANTE, removve seeds , and set aside. Chop ONION and CORIANDER and set aside.
                              2. Soak CHIKPEAS/CHANA in waterfor 4-6 hours overnight. Pressure Cook the CHIKPEAS/CHANA until soft. Drain the water and mash the CHANA till fine. Set Aside
                              3. Heat saucepan. Add OIL and chopped ONION. Saute till golden brown. 
                              4. Add the CHANA MASALA, RED CHILI POWDER, TURMERIC POWDER, CHAT MASALA and SALT to taste. Allow the masalas to cook.
                              5. Add mashed CHIKPEAS and a little WATER. Let it cook for 2 mins and finish it with CORIANDER and LEMON JUICE. Add 1 tbsp TAMARIND CHUTNEY , JAGGERY POWDER and mix well. Let it cook untill the mixture gets thick.
                              6. Finish with CORIANDER, LEMON JUICE , check Seasoning and set aside to cool down. As cooled add half of the pomegrante seeds in and mix.
                              7. Roast PEANUTS in a pan and let it cool down and remove the skin. Add 1/2 tsp of OIL , SALT , RED CHILI POWDER , CHAT MASALA. Mix well and turn off the flame. Add some LEMON JUICE.
                              8. Take a WHOLE WHEAT PAV , slice it , and spread TAMARIND CHUTNEY on both sides. Add the stuffing and put some MASALA PEANUTS.
                              9. Close the PAV and roll in some POMEGRANTE SEEDS. Serve
                              10.Your healthy meal is Ready!!
                                   
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