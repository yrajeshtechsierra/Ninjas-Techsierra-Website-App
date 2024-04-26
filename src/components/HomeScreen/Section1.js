//import liraries
import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { backgroundImage, colors } from "../../constants/constants";
import { TouchableOpacity } from "react-native-gesture-handler";
import { moderateScale, scale } from "react-native-size-matters";
import { useNavigation } from "@react-navigation/native";

// create a component
const Section1 = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image
        source={backgroundImage.HomeBanner}
        style={styles.BackgroundImage}
      />
      <View style={styles.ViewTextContainer}>
        <Text style={styles.textStyle}>
          END TO END DIGITAL AND IT SOLUTIONS FOR BUISNESS TRANSFORMATION
        </Text>
      </View>
      <TouchableOpacity style={styles.btnContainer} onPress={() => navigation.navigate("Contact")}>
        <Text style={styles.wanaTalkBtn}>wana talk?</Text>
      </TouchableOpacity>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    paddingBottom : moderateScale(41),
    backgroundColor: colors.commonColor,
  },
  BackgroundImage: {
    width: "100%",
    height: moderateScale(360),
  },
  ViewTextContainer: {
    padding: moderateScale(30),
  },
  textStyle: {
    color: colors.white,
    fontSize: scale(20),
    lineHeight: moderateScale(30),
    fontWeight:"700",
  },
  btnContainer: {
    flex: 1,
    paddingVertical: moderateScale(5),
    justifyContent: "center",
    alignItems: "center",
    width: moderateScale(200),
    marginLeft: moderateScale(30),
    borderRadius: moderateScale(50),
    backgroundColor: colors.btnColor,
  },
  wanaTalkBtn: {
    fontSize: scale(20),
    textTransform: "uppercase",
    fontWeight: "800",
    color: colors.white,
  },
});

//make this component available to the app
export default Section1;
