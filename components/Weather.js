import React ,{ useState} from 'react';
import Forecast from './Forecast';
import { Text , View ,ImageBackground ,StyleSheet} from 'react-native';

export default function Weather(props) { 
    const [forecastInfo , setForecastInfo] = useState({
        main: 'MAIN',
        description: 'description',
        temp: 25
    })
    return (
        <View>
            <ImageBackground source={require('../bg.jpg')} style={styles.backdrop}>
                <Text>Zip Code</Text>
                <Text>{props.zipCode}</Text>
                <Forecast {...forecastInfo} />
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    backdrop: {
        flexDirection:'row',
        justifyContent:'center',
        width: '100%',
        height: '100%'
    },
});
   