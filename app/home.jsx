import { View, Text, FlatList,Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import {  heightPercentageToDP as hp } from 'react-native-responsive-screen';
import ImageSlider from '../components/ImageSlider';

import { corps} from '../constants';

import CorpsListItem from '../components/CorpsListItem'


export default function home() {
    
    return (
        <SafeAreaView className="flex-1 bg-white flex space-y-5" edges={['top']} >
            <StatusBar style='light' />
            <View className="flex-row   justify-between items-center mx-5">
                <View className="space-y-2">
                    <Text style={{ fontSize: hp(4.5) }}
                        className="font-bold tracking-wider text-neutral-400">
                        PRET POUR
                    </Text>
                    <Text style={{ fontSize: hp(4.5) ,color:'#3061AF'}}
                        className="font-bold tracking-wider ">
                        EXERCICES
                    </Text>
                </View>
                <View className="flex justify-center items-center spacy-y-2">
                    <Image
                        className="rounded-full mb-2"
                        style={{ height: hp(8), width: (hp(8)) }}
                        source={require('../assets/images/avatar.jpeg')} />

                </View>
            </View>
            <View>
                <ImageSlider />
            </View>
            <Text className="font-bold tracking-wider  ml-5 mr-1">Des exercises pour le corps : </Text>
            <View className="flex-1 mx-4">
                
                <FlatList
                    data={corps}
                    numColumns={2}
                    keyExtractor={(item, index) => item.name + index}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingBottom: 50, paddingTop: 20 }}
                    columnWrapperStyle={{
                        justifyContent: 'space-between'
                    }}
                    renderItem={({ item }) => <CorpsListItem item={item} />}
                />
                <StatusBar style='auto' />

            </View>            
        </SafeAreaView>
    )
}