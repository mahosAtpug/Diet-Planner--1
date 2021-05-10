import React from "react";
import {TouchableOpacity , Text , Image , StyleSheet , View, TextInput, Alert , Modal, ScrollView , KeyboardAvoidingView} from "react-native"
import DietPlanner from "../screens/dietPlanner"
import firebase from "firebase";
import db from "../config";
import MyHeader from "../components/myHeader"
import DropDownPicker from 'react-native-dropdown-picker'


export default class CreateMySchedule extends React.Component{

    constructor(){
        super()
        this.state={
            day:""
        }
    }

    render(){
        return(
            <View>
                <View>
                    <MyHeader title={"Create My Schedule"} navigation={this.props.navigation}/>
                </View>

                <View>
                <DropDownPicker
                        items={[
                            {label: 'Monday', value: 'Monday', },
                            {label: 'Tuesday', value: 'Tuesday' },
                            {label: 'Wednesday', value: 'Wednesday' },
                            {label: 'Thursday', value: 'Thursday' },
                            {label: 'Friday', value: 'Friday' },
                            {label: 'Saturday', value: 'Saturday' },
                            {label: 'Sunday', value: 'Sunday' },
                        ]}
                        defaultValue={this.state.day}
                        containerStyle={{height: 40}}
                        style={{backgroundColor: '#fafafa',paddingBottom:-30,alignItems:'center',alignSelf:'center'}}
                        itemStyle={{
                            justifyContent: 'center'
                        }}
                        dropDownStyle={{backgroundColor: '#fafafa'}}
                        onChangeItem={item => this.setState({
                            day: item.value
                        })}
                    />
                </View>

            </View>
        )
    }
}