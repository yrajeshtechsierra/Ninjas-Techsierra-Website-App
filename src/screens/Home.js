//import liraries
import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { colors } from "../constants/constants";
import Section1 from "../components/HomeScreen/Section1";

// create a component
const Home = () => {
  return (
    <ScrollView style={styles.container}>
      <Section1 />
    </ScrollView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.commonColor,
  },
});

//make this component available to the app
export default Home;
