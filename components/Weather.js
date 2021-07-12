import React ,{ useState} from 'react';
import Forecast from './Forecast';
import { Text , View ,ImageBackground ,StyleSheet} from 'react-native';

export default function Weather(props) { 
    const [forecastInfo , setForecastInfo] = useState({
        main: 'light',
        description: 'rain weather',
        Fahren:80,
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
        alignItems: 'center',
        width: '100%',
        height: '100%'
    },
});
   