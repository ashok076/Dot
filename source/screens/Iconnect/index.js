import React, { useState } from "react";
import { FlatList, Image, ScrollView, Text, TouchableOpacity, View, } from "react-native";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";

import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

import { nh } from "../../utils/scaling";
import styles from "./styles";
import { LIN } from "./constVariable";
import { Dropdown } from "react-native-element-dropdown";


const Iconnect = () => {

    const [selectedView, setSelectedView] = useState('from')
    const [fromColor, setFromColor] = useState('#F33A6A')
    const [toColor, settoColor] = useState('#fff')

    const renderItem = ({ item }) => {

        return (
            <View style={{ borderWidth: 1, borderColor: '#7B7A72', borderWidth: 0.2, padding: 5 }}>
                <Text> Location :{item.name} :{item.Location}</Text>
                <Text style={{ color: '#F33A6A' }}>0</Text>
            </View>
        )
    }

    const setColor = (value) => {
        if (value === 1) {
            setFromColor('#F33A6A'),
                settoColor('#fff')
            setSelectedView('from')
        }
        else {
            setFromColor('#fff'),
                settoColor('#F33A6A')
            setSelectedView('to')
        }
    }
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <Entypo color={'#fff'} size={25} name="arrow-long-left" />
                        <Text style={{ color: '#fff' }}>Inventory Transfer</Text>
                        <MaterialCommunityIcons color={'#fff'} size={25} name="logout" />
                    </View>
                </View>
                <View style={styles.aboutUserImage}>
                    <View style={{ width: '50%',left:-20}}>
                        <Text>
                            Finishing -filament Tape, 50 mm X 50m
                        </Text>
                        <Text style={{marginTop:10}}>
                            Item
                        </Text>
                        <Text style={{ color: '#F33A6A' }}>
                            FI-ADH1525-001
                        </Text>
                        <Text  style={{marginTop:10}}>
                            Ucom
                        </Text>

                        <Text style={{ color: '#F33A6A' }}>
                            Per RL(50m)
                        </Text>

                        <Text  style={{marginTop:10}}>
                            Quantity on hand
                        </Text>

                        <Text style={{ color: '#F33A6A' }}>
                            0
                        </Text>
                    </View>
                    <View>
                        <Image
                            source={require('../../../Images/Dot.jpg')}
                            style={styles.headerImage}
                       />
                    </View>
                </View>


                <View style={{ flex: 1.1, width: '90%', backgroundColor: '#fff', alignSelf: 'center' }}>
                    <ScrollView>
                        <FlatList
                            data={LIN}
                            renderItem={renderItem}

                        />
                        <View style={{ borderWidth: 0.5, borderColor: '#7B7A72', borderWidth: 0.2, padding: 5, marginTop: 10 }}>

                            <View style={{ flexDirection: 'row', alignSelf: 'center', borderRadius: 20, backgroundColor: '#fff', borderWidth: 1, marginTop: 10, borderColor: '#F33A6A' }}>
                                <TouchableOpacity onPress={() => setColor(1)} style={{ width: '25%', backgroundColor: fromColor, alignSelf: 'center', borderRadius: 20, padding: 10, }} >
                                    <Text style={{ color: fromColor === '#F33A6A' ? '#fff' : '#000', alignSelf: 'center' }} >From</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => setColor(2)} style={{ width: '25%', backgroundColor: toColor, alignSelf: 'center', borderRadius: 20, padding: 10, }} >
                                    <Text style={{ color: toColor === '#F33A6A' ? '#fff' : '#000', alignSelf: 'center' }} >To</Text>
                                </TouchableOpacity>
                            </View>
                            {fromColor === '#F33A6A' ?
                                <>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 10 }}>
                                        <Text style={{ alignSelf: 'center' }}>Received</Text>
                                        <View style={{ borderWidth: 1, padding: 5, width: '20%' }}>
                                            <Text style={{ alignSelf: 'center' }}>0</Text>
                                        </View>
                                    </View>
                                    <Dropdown
                                        placeholder={'Location'}
                                        placeholderStyle={{ color: '#F33A6A' }}
                                        style={{ borderBottomWidth: 1, width: '60%', alignSelf: 'center' }}
                                    />

                                    <TouchableOpacity style={{ width: '70%', alignSelf: 'center', borderRadius: 20, padding: 10, borderColor: '#F33A6A', borderWidth: 1, marginTop: 20, bottom: 10 }} >
                                        <Text style={{ color: '#F33A6A', alignSelf: 'center' }} >Next</Text>
                                    </TouchableOpacity>
                                </>
                                :
                                <>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 10 }}>
                                        <Text style={{ alignSelf: 'center' }}>Received</Text>
                                        <View>
                                            <Text style={{ alignSelf: 'center' }}>0</Text>
                                        </View>

                                    </View>
                                    <Dropdown
                                        placeholder={'Location'}
                                        placeholderStyle={{ color: '#F33A6A' }}
                                        style={{ borderBottomWidth: 1, width: '60%', alignSelf: 'center' }}
                                    />
                                    <TouchableOpacity style={{ width: '70%', alignSelf: 'center', borderRadius: 20, padding: 10, borderColor: '#F33A6A', borderWidth: 1, marginTop: 20, bottom: 10 }} >
                                        <Text style={{ color: '#F33A6A', alignSelf: 'center' }} >Update</Text>
                                    </TouchableOpacity>
                                </>
                            }
                        </View>
                        <TouchableOpacity style={{ width: '90%', backgroundColor: '#767873', alignSelf: 'center', padding: 10, marginBottom: 10, borderRadius: 5, marginTop: 10 }} >
                            <Text style={{ color: '#fff', alignSelf: 'center' }} >Print Label</Text>
                        </TouchableOpacity>

                    </ScrollView>
                </View>
            </>

        </SafeAreaView>
    )
}

export default Iconnect;