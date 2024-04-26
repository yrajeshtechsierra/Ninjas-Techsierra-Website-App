import React from 'react'
import { colors } from '../../constants/constants'
import { StyleSheet, Text, View } from 'react-native'
import { moderateScale, scale } from 'react-native-size-matters'

const Section2 = () => {
    return (
        <View style={styles.mainContainer}>
            <Text style={styles.HeaderText}>techstack</Text>
            <View>
                <Text style={styles.para}>what you do matter.</Text>
                <Text style={styles.para}>let's secure the future.</Text>
            </View>
        </View>
  )
}

export default Section2

const styles = StyleSheet.create({
    mainContainer : {
        paddingVertical : moderateScale(50),
        backgroundColor : colors.techStackBgColor1,
    },
    HeaderText : {
        paddingLeft : moderateScale(30),
        marginBottom : moderateScale(20),
        color : colors.btnColor,
        fontSize : scale(34),
        textTransform : "uppercase",
        fontWeight : "800",
    },
    para : {
        paddingLeft : moderateScale(30),
        marginBottom : moderateScale(6),
        color : colors.techStackColor,
        fontSize : scale(22),
        textTransform : "capitalize",
        fontWeight : "600"
    }
})