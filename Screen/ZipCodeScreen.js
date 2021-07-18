import React from 'react';
import { FlatList,View,Text, } from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

const availableZipItems = [
    { place: 'Hatyai', code: '90110' },
    { place: 'Trang', code: '92000' },
    { place: 'Chiangmai', code: '50000' },
    { place: 'Khonkaen', code: '40000' },
    { place: 'Chonburi', code: '20000' },
]
   

const ZipItem = ({place,code,navigation}) =>(
    <TouchableHighlight onPress={() => {
        navigation.navigate('Weather',{ZipCode: code})} 
    }> 
        <View>
            <Text>{place}</Text>
            <Text>{code}</Text>
        </View>
    </TouchableHighlight>
)

export default function ZipCodeScreen() {
    const navigation = useNavigation();
    return (
        <FlatList
            data = {availableZipItems}
            keyEctractor = {item => item.code}
            randerItem = {({item}) => <ZipItem {...item} navigation={navigation}/>}
        />    
    )
    
}