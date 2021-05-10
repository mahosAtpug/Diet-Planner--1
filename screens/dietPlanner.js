import React, { Component } from 'react';
import { View, StyleSheet, Text, FlatList,TouchableOpacity } from 'react-native';
import { ListItem } from 'react-native-elements'
import firebase from 'firebase';
import db from '../config'
import MyHeader from "../components/myHeader"

export default class Diet extends React.Component{

    constructor (){
        super()
        this.state={
          breakfast:"",
          lunch:"",
          snacks:"",
          dinner:"" ,
          calories:0  
        }
    }

    render(){
        return(
            <View style={{flex:1 }}>
               
                <MyHeader title={"Diet Planner"} navigation={this.props.navigation} />  

                <View style={{alignItems:"center" , justifyContent:"center"}}>

                    <Text style={{fontSize:20 , fontWeight:"bold" , color:"#6E7881"}}>
                        Today's Diet Plan
                    </Text>

                 </View>   

                    <View >
                        <Text style={styles.textStyle}>
                            BREAKFAST:{this.state.breakfast}
                        </Text>
                     </View>

                     <View >
                        <Text style={styles.textStyle}>
                            LUNCH:{this.state.lunch}
                        </Text>
                     </View>

                     <View> 
                        <Text  style={styles.textStyle}>
                            SNACKS:{this.state.snacks}
                        </Text>
                     </View>

                     <View >
                        <Text style={styles.textStyle}>
                            DINNER:{this.state.dinner}
                        </Text>
                     </View>


                     <View>
                        <Text  style={styles.textStyle}>
                            Total Calories Consumed:{this.state.calories}
                        </Text>
                     </View>
                </View>
            
        )
    }
    
}

const styles= StyleSheet.create({
      textStyle:{
          color:"#6E7881",
          fontSize:15
      }
})