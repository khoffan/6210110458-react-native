import React from 'react';
import { Text , View ,StyleSheet} from 'react-native';
import { min } from 'react-native-reanimated';

export default function Forecast(props) {
    return (
        <View >
            <Text style={styles.text}>{props.main}</Text>
            <Text style={styles.text}>{props.description}</Text>
            <Text style={styles.text}>{props.temp}</Text>
            <Text style={styles.text}>{props.tempmin}</Text>
            <Text style={styles.text}>{props.tempmax}</Text>
            <Text style={styles.text}>{props.country}</Text>
            <Text style={styles.text}>°C</Text>
        </View>
    );
}
   
const styles = StyleSheet.create({
    text:{
        margin: 10 ,
        alignItems:'center',
        fontSize: 20,
        flexDirection:'column',
        backgroundColor:'lightblue'
    },

})