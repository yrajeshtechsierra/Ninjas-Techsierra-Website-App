//import liraries
import React from "react";
import { View, StyleSheet, Image, Text, Button } from "react-native";
import { backgroundImage, colors } from "../../constants/constants";
import { TouchableOpacity } from "react-native-gesture-handler";

// create a component
const Section1 = () => {
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
      <TouchableOpacity style={styles.btnContainer}>
        <Text style={styles.wanaTalkBtn}>wana talk?</Text>
      </TouchableOpacity>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.commonColor,
  },
  BackgroundImage: {
    width: "100%",
    height: 500,
  },
  ViewTextContainer: {
    padding: 30,
  },
  textStyle: {
    color: colors.white,
    fontSize: 26,
    lineHeight: 40,
    fontWeight: "700",
  },
  btnContainer: {
    flex: 1,
    paddingVertical: 5,
    justifyContent: "center",
    alignItems: "center",
    width: 220,
    marginLeft: 40,
    borderRadius: 50,
    backgroundColor: colors.btnColor,
  },
  wanaTalkBtn: {
    fontSize: 24,
    textTransform: "uppercase",
    fontWeight: "800",
    color: colors.white,
  },
});

//make this component available to the app
export default Section1;
