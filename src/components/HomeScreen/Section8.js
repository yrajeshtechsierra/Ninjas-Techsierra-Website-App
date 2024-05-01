import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../../constants/constants';
import { moderateScale, scale } from 'react-native-size-matters';
import { ourOffice } from "../../constants/Images"

const Section8 = () => {
  return (
    <View style={styles.mainContainer}>
        <View style={styles.wrapperContainer}>
            <View style={styles.Section8Container}>
                <ImageBackground source={ourOffice.map} alt='Map'>
                    <Text style={styles.HeaderText}>our office</Text>
                    <Text style={styles.SpanText}>locations</Text>
                </ImageBackground>
                <View style={{marginBottom : moderateScale(30)}}>
                    <Text style={styles.IndiaText}>india</Text>
                    <View style={styles.AddresText}>
                        <Image source={ourOffice.location} style={{width : moderateScale(15), height : moderateScale(15), marginRight : moderateScale(10)}}/>
                        <Text style={{color : colors.techStackColor, paddingRight : moderateScale(20), lineHeight : scale(20)}}>
                            AB/14, Nandanvan Industrial Estate, Teen Hath Naka, Thane (W), Maharashtra, India - 400604
                        </Text>
                    </View>
                    <View style={styles.ImageContainer}>
                        <Image source={ourOffice.indiaLoction} style={{width : "100%", height : "100%", resizeMode : "contain" }} />
                    </View>
                </View>

                <View>
                    <Text style={styles.IndiaText}>usa</Text>
                    <View style={styles.AddresText}>
                        <Image source={ourOffice.location} style={{width : moderateScale(15), height : moderateScale(15), marginRight : moderateScale(10)}}/>
                        <Text style={{color : colors.techStackColor, paddingRight : moderateScale(20), lineHeight : scale(20)}}>
                            6909 Timber Creek CtClarksville, MD 21029Tech Sierra USA (Mind Consulting LLC)
                        </Text>
                    </View>
                    <View style={styles.ImageContainer}>
                        <Image source={ourOffice.USLocation} style={{width : "100%", height : "100%", resizeMode : "contain" }} />
                    </View>
                </View>

            </View>
        </View>
    </View>
  )
}

export default Section8;

const styles = StyleSheet.create({
    mainContainer : {
        paddingVertical : moderateScale(40),
        justifyContent : "center",
        alignItems : "center",
        backgroundColor : colors.OurOffice,
    },
    wrapperContainer : {
        width : "90%",
    },
    Section8Container : {
        paddingTop : "2%",
        paddingLeft : moderateScale(15),
        paddingBottom : "2%",
        paddingRight : moderateScale(15),
        borderWidth : 3,
        borderRadius : 10,
        borderColor : colors.ourApproachWrapperBorder,
        backgroundColor : colors.commonColor,
    },
    HeaderText : {
        marginTop : moderateScale(10),
        color : colors.btnColor,
        fontSize : scale(28),
        fontWeight : "800",
        textTransform : "uppercase",
    }, 
    SpanText : {
        marginVertical : moderateScale(18),
        color : colors.techStackColor,
        fontSize : scale(22),
        fontWeight : "500",
        textTransform : "capitalize",
    },
    IndiaText : {
        color : colors.techStackColor,
        fontSize : scale(20),
        fontWeight : "800",
        textTransform : "uppercase",
    },
    AddresText : {
        marginVertical : moderateScale(20),
        flexDirection : "row",
    },
    ImageContainer : {
        width : moderateScale(292),
        height : moderateScale(200),
        borderRadius : scale(10)
    }
})