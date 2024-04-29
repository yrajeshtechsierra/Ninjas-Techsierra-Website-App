import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../../constants/constants'
import { moderateScale, scale } from 'react-native-size-matters'
import { data } from './OurApproachData'

const Section4 = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.wrapperContainer}>
        <Text style={styles.headingH1}>our approach</Text>
        <Text style={styles.paraText}>We follow an agile approach with continuous feedback control</Text>
        <View style={styles.ourApproachDataContainer}>
            <View style={styles.dataContainer1}>
                <View style={{flex : 1, alignItems : "center"}}>
                    <View style={styles.ImageContainer}>
                        <Image source={data[0].image1} alt={data[0].name} style={styles.Image1Style1}/>
                        <Image source={data[0].image2} alt="1" style={styles.Image1Style}/>
                    </View>
                    <Text style={styles.dataText}>{data[0].name}</Text>
                    <Text style={styles.dataContent}>{data[0].content}</Text>
                </View>
                <View style={{flex : 1, alignItems : "center"}}>
                    <View style={styles.ImageContainer}>
                        <Image source={data[1].image1} alt={data[1].name} style={styles.Image2Style2}/>
                        <Image source={data[1].image2} alt="2" style={styles.Image2Style}/>
                    </View>
                    <Text style={styles.dataText}>{data[1].name}</Text>
                    <Text style={styles.dataContent}>{data[1].content}</Text>
                </View>
            </View>

            <View style={styles.dataContainer1}>
                <View style={{flex : 1, alignItems : "center"}}>
                    <View style={styles.ImageContainer}>
                        <Image source={data[2].image1} alt={data[2].name} style={styles.Image1Style1}/>
                        <Image source={data[2].image2} alt="1" style={styles.Image3Style}/>
                    </View>
                    <Text style={styles.dataText}>{data[2].name}</Text>
                    <Text style={styles.dataContent}>{data[2].content}</Text>
                </View>
                <View style={{flex : 1, alignItems : "center"}}>
                    <View style={styles.ImageContainer}>
                        <Image source={data[3].image1} alt={data[3].name} style={styles.Image2Style2}/>
                        <Image source={data[3].image2} alt="2" style={styles.Image2Style}/>
                    </View>
                    <Text style={styles.dataText}>{data[3].name}</Text>
                    <Text style={styles.dataContent}>{data[3].content}</Text>
                </View>
            </View>
            
        </View>
      </View>
    </View>
  )
}

export default Section4

const styles = StyleSheet.create({
    mainContainer : {
        paddingVertical : moderateScale(50),
        backgroundColor : colors.ourApproach,
        flex : 1,
        justifyContent : "center",
        alignItems : "center",
    },
    wrapperContainer : {
        width : "94%",
        padding : moderateScale(5),
        borderColor : colors.ourApproachWrapperBorder,
        borderRadius : scale(10),
        borderWidth : scale(2),
    },

    headingH1 : {
        paddingStart : moderateScale(5),
        paddingTop : moderateScale(20),
        color : colors.btnColor,
        fontSize : scale(35),
        fontWeight : "800",
        textTransform : "uppercase",
    },
    paraText : {
        paddingStart : moderateScale(5),
        color : colors.techStackColor,
        marginVertical : moderateScale(20),
        fontSize : scale(22),
    },
    ourApproachDataContainer : {
        flex : 1,
        flexDirection : "column",
    },
    dataContainer1 : {
        marginVertical : moderateScale(30),
        flexDirection : "row",
    },
    dataContainer2 : {
        flexDirection : "row",
    },
    ImageContainer : {
        position : "relative",
        height : moderateScale(150),
    },
    Image1Style : {
        position : "absolute",
        top : 0,
        left : moderateScale(-70),
        width : "27%",
        height : moderateScale(132),
    },
    Image2Style : {
        position : "absolute",
        top : 0,
        left : moderateScale(-80),
        width : moderateScale(90),
        height : moderateScale(132),
    },
    Image1Style1 : {
        position : "absolute",
        top : moderateScale(20),
        left : moderateScale(-60),
        width : moderateScale(140),
        height : moderateScale(140),
        zIndex : 1,
    }, 
    Image2Style2 : {
        position : "absolute",
        top : moderateScale(20),
        left : moderateScale(-40),
        width : moderateScale(140),
        height : moderateScale(140),
        zIndex : 1,
    },
    Image3Style : {
        position : "absolute",
        top : 0,
        left : moderateScale(-70),
        width : "50%",
        height : moderateScale(132),
    },
    dataText : {
        marginBottom : moderateScale(10),
        color : colors.techStackColor,
        fontSize : scale(25),
        fontWeight : "800",
        textAlign : "center",
        textTransform : "uppercase",
    }, 
    dataContent : {
        color : colors.techStackColor,
        fontSize : scale(14),
        textAlign : "center",
    }
})