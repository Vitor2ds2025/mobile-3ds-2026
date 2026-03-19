import React, {Component} from "react";
import {View, Text, Image, Stylesheet}  from "react-native";
import { SafeAreaView, TextInput } from "react-native-web";

class Aula03 extends Component {
    render() {
        return (
            <SafeAreaView>
                <TextInput 
                    style={ styles.input }
                    onChangeText={onChangeText}
                    value={text}
                />
            </SafeAreaView>
        );
    }
}

export default Aula03;