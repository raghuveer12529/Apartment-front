import * as React from 'react';
import { Alert, Button, TextInput, View, StyleSheet , Text , Image } from 'react-native';
// import {error_page} from '../STATICS/images/'
const Page = () => {
    return(
        <View>
            <Image      
            source={{uri:'https://static.collectui.com/shots/2311590/ui-challenge-404-page-008-psd-large'}}
            style = {{height:'100%',width:'100%'}}
            />
        </View>
    );
};

export default Page;