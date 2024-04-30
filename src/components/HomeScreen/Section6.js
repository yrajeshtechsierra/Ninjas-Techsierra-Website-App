import React, { useRef, useEffect, useState } from 'react'
import { StyleSheet, View, FlatList, Image, useWindowDimensions, Animated } from 'react-native';
import { data } from './ClientLogoData';
import { colors } from '../../constants/constants';
import { moderateScale } from 'react-native-size-matters';

function OnBoardingItem({ item, width }) {

    return (
        <View style={ { width, justifyContent : "center", alignItems : "center" }}>
            <Image source={item.logo} alt={item.name} style={styles.image} />
        </View>
    )
}

const Section6 = () => {
    const { width } = useWindowDimensions();
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
        <View style={styles.contianer}>
            <FlatList 
            ref={flatListRef}
                data={data} 
                renderItem={({ item }) => <OnBoardingItem item={item} width={width} />} 
                horizontal 
                showsHorizontalScrollIndicator 
                pagingEnabled 
                bounces={false} />
        </View>
    )
}

export default Section6

const styles = StyleSheet.create({
    contianer: {
        paddingVertical : moderateScale(30),
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor : colors.techStackBgColor1,
    },
    image: {
        width : moderateScale(280),
        height : moderateScale(100),
        resizeMode : "contain",
        aspectRatio : 3/1,
    }
})