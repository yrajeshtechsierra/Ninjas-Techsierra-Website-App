import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native'
import { colors } from '../../constants/constants';
import { data } from './TechStackData';
import { moderateScale, scale } from 'react-native-size-matters';
import PlusIcon from "../../assets/techStack/plusicon.png";
import MinusIcon from "../../assets/techStack/minusicon.png";
import DownWardArrow from "../../assets/techStack/arrow.png";
import UpwardArrow from "../../assets/techStack/upperarrow.png";

const Section3 = () => {
    const [increaseHeight, setIncrementHeight] = useState(false);
    const [selected, setSelected] = useState(null);

    const toggle = (index) => setSelected(selected === index ? null : index)

    return (
        <>
            <View style={{ ...styles.mainCointainer, height: increaseHeight === true ? "auto" : moderateScale(340) }}>
                {
                    data.map((item, index) => (
                        <View key={index} style={{width : "90%"}} >
                            <ImageBackground source={selected === item.id ?item.backgroundImage : null} style={styles.ImageBackgroundStyling}>
                                <View style={styles.container}>
                                    <View style={styles.IconTextContainer}>
                                        <View>
                                            <Image
                                                source={item.logo}
                                                alt={item.name}
                                                style={styles.StackIcon} />
                                        </View>
                                        <Text style={styles.text}>{item.name}</Text>
                                    </View>
                                    <TouchableOpacity onPress={() => toggle(item.id)}>
                                        {
                                            selected === item.id
                                                ?
                                                <Image
                                                    source={MinusIcon}
                                                    alt={`${item.name}-plusIcon`}
                                                    style={styles.PlusIcon} />
                                                : <Image
                                                    source={PlusIcon}
                                                    alt={`${item.name}-plusIcon`}
                                                    style={styles.PlusIcon} />
                                        }
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.SelectedTextContainer}>
                                {
                                    selected === item.id
                                    ? <Text style={styles.SelectedText}>{item.content}</Text>
                                    : null
                                }
                                </View>
                            </ImageBackground>
                        </View>
                    ))
                }
            </View>
            <View style={styles.ArrowContainer}>
                <TouchableOpacity onPress={() => setIncrementHeight(!increaseHeight)}>
                    {
                        increaseHeight === true
                            ? <Image
                                source={UpwardArrow}
                                alt='Arrow Icon'
                                style={styles.ArrowIconStyle} />
                            :
                            <Image
                                source={DownWardArrow}
                                alt='Arrow Icon'
                                style={styles.ArrowIconStyle} />
                    }
                </TouchableOpacity>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    mainCointainer: {
        alignItems: "center",
        overflow: "hidden",
    },
    container: {
        width: "90%",
        paddingVertical: moderateScale(10),
        justifyContent: "flex-start",
        alignItems: "flex-start",
        flexDirection: "row",
    },
    IconTextContainer: {
        flex: 2,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        marginStart : moderateScale(10)
    },
    text: {
        marginStart: moderateScale(30),
        color: colors.white,
        fontSize: scale(22),
        fontWeight: "800",
        letterSpacing: moderateScale(1.3)
    },
    StackIcon: {
        width: moderateScale(40),
        height: moderateScale(40),
    },
    PlusIcon: {
        width: moderateScale(40),
        height: moderateScale(40),
    },
    ArrowContainer: {
        justifyContent: "center",
        alignItems: "center",
    },
    ArrowIconStyle: {
        width: moderateScale(60),
        height: moderateScale(60),
    },
    SelectedText : {
        marginBottom : moderateScale(20),
        color : colors.white,
        fontSize : scale(15),
        fontWeight : "500",
    },
    SelectedTextContainer : {
        padding : moderateScale(10)
    },
    ImageBackgroundStyling : {
        marginVertical : moderateScale(10),
        borderRadius : moderateScale(500),
    }
});

export default Section3;