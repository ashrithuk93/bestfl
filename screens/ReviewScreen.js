import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';

const ReviewScreen = ({ navigation }) => {
    return (
        <View>
            <Text>ReviewScreen</Text>
            <Text>ReviewScreen</Text>
            <Text>ReviewScreen</Text>
            <Text>ReviewScreen</Text>
            <Text>ReviewScreen</Text>
            <Button 
                title='Settings'
                onPress={() => {
                    navigation.navigate('settings')
                }}
            />
        </View>
    )
}

ReviewScreen.navigationOptions = {
    title: 'Review Jobs',
    headerRight: () => <Button 
        title='Settings'
    />
}

export default ReviewScreen;