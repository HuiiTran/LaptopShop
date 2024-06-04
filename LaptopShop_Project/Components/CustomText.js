import React from 'react';
import { Text, StyleSheet } from 'react-native';

const CustomText = ({ style, children, ...props }) => {
    return (
        <Text style={[styles.text, style]} {...props}>
            {children}
        </Text>
    );
};

const styles = StyleSheet.create({
    text: {
        fontFamily: 'Cuprum-Regular', // Ensure this matches the font file name without the extension
    },
});

export default CustomText;
