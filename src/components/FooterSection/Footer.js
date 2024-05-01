import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Linking, Image } from 'react-native'
import { backgroundImage, colors } from '../../constants/constants'
import { moderateScale, scale } from 'react-native-size-matters';
import { social } from '../../constants/Images';

const Footer = () => {
    return (
        <View style={styles.footerContainer}>
            <View style={styles.QuickLReachinkContainer}>
                <View style={styles.QuickLReachink}>
                    <View style={styles.QuickLink}>
                        <Text style={styles.HeaderText}>quick link</Text>
                        <TouchableOpacity><Text style={styles.Text}>about</Text></TouchableOpacity>
                        <TouchableOpacity><Text style={styles.Text}>services</Text></TouchableOpacity>
                        <TouchableOpacity><Text style={styles.Text}>testimonials</Text></TouchableOpacity>
                        <TouchableOpacity><Text style={styles.Text}>who we are</Text></TouchableOpacity>
                        <TouchableOpacity><Text style={styles.Text}>carrers</Text></TouchableOpacity>
                    </View>
                    <View style={styles.ReachLink}>
                        <Text style={styles.HeaderText}>reach us</Text>
                        <TouchableOpacity onPress={async () => await Linking.openURL("mailto:info@techsierra.in?subject=Tech-Sierra-Mail&body=body")}><Text style={styles.Text}>info@techsierra.in</Text></TouchableOpacity>
                        <TouchableOpacity onPress={async () => await Linking.openURL("tel:+919819783891")}><Text style={styles.Text}>+91 9819783891</Text></TouchableOpacity>
                    </View>
                </View>
            </View>

            
            <View style={styles.socialContainer}>
                <View style={styles.wrapperContainer}>
                    <View style={styles.ImageContainer}>
                        <Image source={backgroundImage.FooterLogo} style={{width : "100%", height : "100%", resizeMode : "contain"}} />
                    </View>
                    <Text style={styles.footerText}>End-to-end Digital and IT solutions for business transformation</Text>
                    <View style={styles.socialIcon}>
                        <TouchableOpacity><Image source={social.linkdin} style={styles.iconImage}/></TouchableOpacity>
                        <TouchableOpacity><Image source={social.twitter} style={styles.iconImage}/></TouchableOpacity>
                        <TouchableOpacity><Image source={social.instagram} style={styles.iconImage}/></TouchableOpacity>
                        <TouchableOpacity><Image source={social.youtube} style={styles.iconImage}/></TouchableOpacity>
                    </View>
                    <View style={styles.footerContent}>
                        <Text style={styles.footerTextContent}>&copy; copyright U18, LLC.</Text>
                        <TouchableOpacity><Text style={styles.footerTextContent}>privacy policy</Text></TouchableOpacity>
                        <TouchableOpacity><Text style={styles.footerTextContent}>terms of services</Text></TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Footer

const styles = StyleSheet.create({
    footerContainer: {
        color: colors.footerBGcolor,
    },
    QuickLReachinkContainer : {
        flex : 1,
        justifyContent : "center",
        alignItems : "center",
    },
    wrapperContainer : {
        width : "90%",
    },
    QuickLReachink: {
        width : "90%",
        padding : "3%",
        flexDirection: "row",
        paddingVertical: moderateScale(30),
    },
    ReachLink: {
        flex : 1,
    },
    QuickLink: {
        flex : 1,
    },
    Text: {
        marginBottom: moderateScale(10),
        color: colors.techStackColor,
        textTransform: "capitalize",
        fontSize: scale(15),
    },
    HeaderText: {
        marginBottom: moderateScale(25),
        color: colors.techStackColor,
        textTransform: "uppercase",
        fontWeight: "800",
        fontSize: scale(20),
    },
    footerLogoContainer: {
        width: moderateScale(300),
        height: moderateScale(180),
    },
    socialContainer: {
        paddingVertical : moderateScale(30),
        backgroundColor: colors.OurOffice,
        justifyContent : "center",
        alignItems : "center",
    },
    ImageContainer : {
        width : moderateScale(300),
        height : moderateScale(200),

    },
    footerText : {
        marginVertical : moderateScale(20),
        color : colors.techStackColor,
        fontSize : scale(19),
        fontWeight : "500",
        textAlign : "center",
    },
    socialIcon : {
        marginTop : moderateScale(30),
        marginBottom : moderateScale(60),
        flexDirection : "row",
        justifyContent : "space-evenly",
        alignItems : "center",
    },
    iconImage : {
        width : moderateScale(60),
        height : moderateScale(60),
    },
    footerContent : {
        flexDirection : "row",
        justifyContent : "space-between",
        alignItems : "center",
    },
    footerTextContent : {
        color : colors.techStackColor,
        textTransform : "capitalize",
        fontSize : scale(12),
    }
})