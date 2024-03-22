//import liraries
import React from 'react';
import { createDrawerNavigator, DrawerToggleButton } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native"
import Home from '../screens/Home';
import WhatWeDo from '../screens/WhatWeDo';
import WhoWeAre from '../screens/WhoWeAre';
import CaseStudy from '../screens/CaseStudy';

const Drawer = createDrawerNavigator();

// create a component
const DrawerNavigation = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator
                screenOptions={{
                    drawerPosition : "right",
                    headerLeft : false,
                    headerRight : () => <DrawerToggleButton  />,
                }}
            >
                <Drawer.Screen name='Home' component={Home}/>
                <Drawer.Screen name='WhatWeDo' component={WhatWeDo}/>
                <Drawer.Screen name='WhoWeAre' component={WhoWeAre}/>
                <Drawer.Screen name='CaseStudy' component={CaseStudy}/>
            </Drawer.Navigator>
        </NavigationContainer>
    );
};

export default DrawerNavigation;