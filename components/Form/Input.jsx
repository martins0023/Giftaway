import { View, Text } from 'react-native'
import React from 'react'

export default function Input() {
    return (
        <TextInput
            placeholder="Enter your email address"
            placeholderTextColor={COLORS.black}
            keyboardType="email-address"
            style={{
                width: "100%",
            }}
        />
    )
}

const styles = StyleSheet.create({

})