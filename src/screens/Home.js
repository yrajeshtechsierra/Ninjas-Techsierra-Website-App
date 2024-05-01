//import liraries
import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import { colors } from "../constants/constants";
import Section1 from "../components/HomeScreen/Section1";
import Section2 from "../components/HomeScreen/Section2";
import Section3 from "../components/HomeScreen/Section3";
import Section4 from "../components/HomeScreen/Section4";
import Section5 from "../components/HomeScreen/Section5";
import Section6 from "../components/HomeScreen/Section6";
import Section7 from "../components/HomeScreen/Section7";
import Section8 from "../components/HomeScreen/Section8";

// create a component
const Home = () => {
  return (
    <ScrollView style={styles.container}>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
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
