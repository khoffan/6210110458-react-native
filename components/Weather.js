import React ,{ useState , useEffect} from 'react';
import Forecast from './Forecast';
import { Text , View ,ImageBackground ,StyleSheet} from 'react-native';

export default function Weather(props) {
    const [forecastInfo , setForecastInfo] = useState({
        main: 'loading',
        description: 'description',
        temp: ' ',
        tempmin: 0,
        tempmax: 0
    })

    useEffect(() => {
        console.log(`fetching data with zipCode = ${props.zipCode}`)
        if (props.zipCode) {
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=fd68c0f2039c5a25f666a9ff374bc93e`)
            .then((response) => response.json())
            .then((json) => {
                setForecastInfo({
                    main: json.weather[0].main,
                    description: json.weather[0].description,
                    temp: json.main.temp,
                    tempmax: json.main.temp_max,
                    tempmin: json.main.temp_min,});
                    
                })
            .catch((error) => {
                console.warn(error);
            });
        }
    }, [props.zipCode])
        
    
    return (
        <View>
            <ImageBackground source={require('../bg.jpg')} style={styles.backdrop}>
                <Text style={styles.text}>Zip Code</Text>
                <Text style={styles.text}>{props.zipCode}</Text>
                <Forecast {...forecastInfo} />
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    backdrop: {
        alignItems:'center',
        width: '100%',
        height: '100%'
    },
    text:{
        margin: 10 ,
        alignItems:'center',
        fontSize: 20,
        backgroundColor:'lightblue'
    },  
});
   