import React from 'react';
import { Text , View ,StyleSheet} from 'react-native';

export default function Forecast(props) {
    return (
        <View >
            <Text style={styles.text}>{props.main}</Text>
            <Text style={styles.text}>{props.description}</Text>
            <Text style={styles.text}>{props.temp}</Text>
            <Text style={styles.text}>°C</Text>
        </View>
    );
}
   
const styles = StyleSheet.create({
    text:{
        margin: 10 ,
        alignItems:'center',
        fontSize: 20,
        flex:1,
        flexDirection:'column'
    },
     
})