import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { LinearGradient } from 'expo-linear-gradient';
import { Link } from 'expo-router';
import Animated, { FadeInUp } from 'react-native-reanimated';

export default function CorpsListItem({ item }) {
    return (
        <Animated.View entering={FadeInUp.delay(300).duration(500)}>
            <TouchableOpacity
                style={{ width: wp(44), height: wp(52) }}
                className="flex justify-end p-4 mb-5">
                <Image
                    source={item.image}
                    resizeMode='cover'
                    style={{ width: wp(44), height: wp(52) }}
                    className="rounded-[35px] absolute"
                />
                <LinearGradient
                    colors={['transparent', 'rgba(0,0,0,0.9)']}
                    style={{ width: wp(44), height: hp(15) }}
                    start={{ x: 0.5, y: 0 }}
                    end={{ x: 0.5, y: 1 }}
                    className="absolute bottom-0 rounded-b-[35px]"
                />
                <Link
                    href={`/${item.name}`}
                    style={{ fontSize: hp(2.3) }}
                    className="text-white font-semibold text-center tracking-wide"
                >
                    {item?.name}
                </Link>
            </TouchableOpacity>
        </Animated.View>
    )
}