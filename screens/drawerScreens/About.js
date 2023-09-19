import { useNavigation } from "@react-navigation/native";
import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";

import { Ionicons } from '@expo/vector-icons';

import COLORS from '../../constants/colors'

export default function About() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <View style={{flex: 1, marginHorizontal: 22 }}>
        <View style={{
          marginVertical: 22
          }}
          > 
          <Text style={{
            fontSize: 20,
            fontWeight: "bold",
            marginVertical: 12,
            color: COLORS.black,
          }}>
            
            <View
              style={{
                marginLeft: "75px"
              }}
            >About Giftaway</View>
          </Text>

          <Text style={{
            fontSize: 16,
            color: COLORS.black
          }}>In our Giftaway, we created an app that meets users needs both the receiver and the giver. Such that
            if as a receiver you have thrash you want to give out to people you can easily upload what the thrash looks like 
            and anyone interested can contact you!</Text>
          </View>
            <Text
              style={{
                fontSize: 14,
                fontWeight: "400"
              }}
            >
              <Ionicons name='ios-information-circle-outline' size={20} />Please note that any information given on this platform
              doesn't have anything to do with us @Giftaway. Every information you give is between the giver and the receiver. Thanks!
            </Text>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  successText: {
    color: 'green',
    marginTop: 10,
    fontSize: 17,
  },
});