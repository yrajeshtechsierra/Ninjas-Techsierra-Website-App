import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, Text, View, FlatList, useWindowDimensions, Image } from 'react-native'
import { colors } from '../../constants/constants'
import { moderateScale, scale } from 'react-native-size-matters';
import { data } from './OurClientSayData';

const OnBoardingItem = ({ data }) => {

    return (
        <View style={styles.CardContainer}>
            <View>
                <View style={styles.CardContent}>
                    <View style={styles.TextCard}>
                        <Text style={styles.CardName}>{data.name}</Text>
                        <Text style={styles.deginationText}>{data.designation}</Text>
                    </View>
                    <View style={styles.ImageContainer}>
                        <Image source={data.image} style={{width : "100%", height : "100%", borderRadius : scale(50)}} />
                    </View>
                </View>
            </View>
            <View style={styles.descriptionContainer}>
                <Text style={styles.descriptionText}>{data.description}</Text>
            </View>
        </View>
    )
}

const Section7 = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const flatListRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            if (flatListRef.current) {
                const nextIndex = (currentIndex === data.length - 1) ? 0 : currentIndex + 1;
                flatListRef.current.scrollToIndex({ index: nextIndex, animated: true });
                setCurrentIndex(nextIndex);
            }
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(interval);
    }, [currentIndex]);

    return (
        <View style={styles.mainContainer}>
            <View style={styles.wrapperContainer}>
                <Text style={styles.headingText}>voices of satification</Text>
                <Text style={styles.headingText1}>client testimonials</Text>

                <View style={styles.sliderContainer}>
                    <FlatList 
                        ref={flatListRef}   
                        data={data} 
                        renderItem={({ item }) => <OnBoardingItem data={item}/>} 
                        horizontal 
                        sshowsHorizontalScrollIndicator 
                        pagingEnabled 
                    />
                </View>
            </View>
        </View>
    )
}

export default Section7

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical : moderateScale(30),
        backgroundColor: colors.commonColor,
    },
    wrapperContainer: {
        width: "92%",
    },
    headingText: {
        color: colors.btnColor,
        fontSize: scale(30),
        fontWeight: "800",
        textTransform: "uppercase",
    },
    headingText1: {
        marginTop : moderateScale(20),
        color: colors.techStackColor,
        fontSize: scale(20),
        fontWeight: "600",
        textTransform: "capitalize",
    },
    sliderContainer: {
        padding : "3%",
        marginTop : moderateScale(20)
    },
    CardName : {
        marginBottom : moderateScale(10),
        color : colors.btnColor,
        fontSize : scale(22),
        fontWeight : "800",
    },
    deginationText : {
        width : "95%",
        color : colors.techStackColor,
        fontSize : scale(15),
    },
    descriptionText : {
        color : colors.techStackColor,
        fontSize : scale(14),
    },
    CardContainer : {
        width : moderateScale(305), 
        marginRight : moderateScale(10),
        justifyContent : "flex-start",
        alignItems : "flex-start",
        borderWidth : 3,
        borderColor : colors.ourApproachWrapperBorder,
        borderRadius : scale(10),
    },
    CardContent : {
        width : "85%",
        padding : "2%",
        paddingVertical : moderateScale(20),
        flexDirection : "row",
        justifyContent : "space-between",
        alignItems : "flex-start",
    },
    TextCard : {
        width : "90%",
    },
    ImageContainer : {
        width : moderateScale(50),
        height : moderateScale(50),
        resizeMode : "contain",
    },
    descriptionContainer : { 
        padding : "3%"
,       height : moderateScale(260),
    }
})