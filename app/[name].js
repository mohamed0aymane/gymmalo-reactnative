import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import { corps } from '../constants';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Animated, { FadeInUp } from 'react-native-reanimated';


export default function exercices() {
    const params = useLocalSearchParams();
    const corp = corps.find(item => item.name == params.name);
    if (!corp) {
        return (
            <Text>Exercise pour cette partie de corp n'est pas trouvé</Text>
        )
    }

    return (
        <SafeAreaView style={styles.container} edges={['top']} >
            <StatusBar style='light' />
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <View style={styles.content}>
                    <View style={styles.imageContainer}>
                        <Image
                            style={styles.image}
                            source={corp.image} />
                    </View>

                    <View style={styles.detailsContainer}>
                        <Text style={styles.exerciseLabel}>
                            Exercice <Text style={styles.exerciseName}> {corp.name} </Text>
                        </Text>

                    </View>

                    <Animated.View entering={FadeInUp.delay(300).duration(500)} style={styles.textContainer}>
                        <TouchableOpacity
                            style={{ width: wp(44), height: wp(52) }}
                            className="flex justify-end p-4 mb-5">
                            <Image
                                source={corp.imageone}
                                resizeMode='cover'
                                style={{ width: wp(44), height: wp(52) }}
                                className=" absolute"
                            />
                            <LinearGradient
                                colors={['transparent', 'rgba(0,0,0,0.9)']}
                                style={{ width: wp(44), height: hp(15) }}
                                start={{ x: 0.5, y: 0 }}
                                end={{ x: 0.5, y: 1 }}
                                className="absolute bottom-0 "
                            />
                            <Text

                                style={{ fontSize: hp(2.3) }}
                                className="text-white font-semibold text-center tracking-wide"
                            >
                                {corp.titreun}
                            </Text>

                        </TouchableOpacity>
                        <View  className="bg-blue-500" style={styles.textFrame}>
                            <Text style={styles.exerciseText}>1- {corp.un}</Text>
                        </View>

                        <TouchableOpacity
                            style={{ width: wp(44), height: wp(52) }}
                            className="flex justify-end p-4 mb-5">
                            <Image
                                source={corp.imagetwo}
                                resizeMode='cover'
                                style={{ width: wp(44), height: wp(52) }}
                                className=" absolute"
                            />
                            <LinearGradient
                                colors={['transparent', 'rgba(0,0,0,0.9)']}
                                style={{ width: wp(44), height: hp(15) }}
                                start={{ x: 0.5, y: 0 }}
                                end={{ x: 0.5, y: 1 }}
                                className="absolute bottom-0 "
                            />
                            <Text

                                style={{ fontSize: hp(2.3) }}
                                className="text-white font-semibold text-center tracking-wide"
                            >
                                {corp.titredeux}
                            </Text>

                        </TouchableOpacity>
                        <View  className="bg-blue-500" style={styles.textFrame}>
                            <Text style={styles.exerciseText}>2- {corp.deux}</Text>
                        </View>

                        <TouchableOpacity
                            style={{ width: wp(44), height: wp(52) }}
                            className="flex justify-end p-4 mb-5">
                            <Image
                                source={corp.imagethree}
                                resizeMode='cover'
                                style={{ width: wp(44), height: wp(52) }}
                                className=" absolute"
                            />
                            <LinearGradient
                                colors={['transparent', 'rgba(0,0,0,0.9)']}
                                style={{ width: wp(44), height: hp(15) }}
                                start={{ x: 0.5, y: 0 }}
                                end={{ x: 0.5, y: 1 }}
                                className="absolute bottom-0 "
                            />
                            <Text
                                style={{fontSize: hp(2.3) }}
                                className="text-white font-semibold text-center tracking-wide"
                            >
                                {corp.titretrois}
                            </Text>

                        </TouchableOpacity>
                        <View  className="bg-blue-500" style={styles.textFrame}>
                            <Text style={styles.exerciseText}>3- {corp.trois}</Text>
                        </View>


                        <TouchableOpacity
                            style={{ width: wp(44), height: wp(52) }}
                            className="flex justify-end p-4 mb-5">
                            <Image
                                source={corp.imagefour}
                                resizeMode='cover'
                                style={{ width: wp(44), height: wp(52) }}
                                className=" absolute"
                            />
                            <LinearGradient
                                colors={['transparent', 'rgba(0,0,0,0.9)']}
                                style={{ width: wp(44), height: hp(15) }}
                                start={{ x: 0.5, y: 0 }}
                                end={{ x: 0.5, y: 1 }}
                                className="absolute bottom-0 "
                            />
                            <Text

                                style={{fontSize: hp(2.3) }}
                                className="text-white font-semibold text-center tracking-wide"
                            >
                                {corp.titrequatre}
                            </Text>
                        </TouchableOpacity>
                        <View  className="bg-blue-500" style={styles.textFrame}>
                            <Text style={styles.exerciseText}>4- {corp.quatre}</Text>
                        </View>

                        <TouchableOpacity
                            style={{ width: wp(44), height: wp(52) }}
                            className="flex justify-end p-4 mb-5">
                            <Image
                                source={corp.imagefive}
                                resizeMode='cover'
                                style={{ width: wp(44), height: wp(52) }}
                                className=" absolute"
                            />
                            <LinearGradient
                                colors={['transparent', 'rgba(0,0,0,0.9)']}
                                style={{ width: wp(44), height: hp(15) }}
                                start={{ x: 0.5, y: 0 }}
                                end={{ x: 0.5, y: 1 }}
                                className="absolute bottom-0 "
                            />
                            <Text

                                style={{fontSize: hp(2.3) }}
                                className="text-white font-semibold text-center tracking-wide"
                            >
                                {corp.titrecinq}
                            </Text>

                        </TouchableOpacity>
                        <View  className="bg-blue-500" style={styles.textFrame}>
                            <Text style={styles.exerciseText}>5- {corp.cinq}</Text>
                        </View>

                        <TouchableOpacity
                            style={{ width: wp(44), height: wp(52) }}
                            className="flex justify-end p-4 mb-5">
                            <Image
                                source={corp.imagesix}
                                resizeMode='cover'
                                style={{ width: wp(44), height: wp(52) }}
                                className=" absolute"
                            />
                            <LinearGradient
                                colors={['transparent', 'rgba(0,0,0,0.9)']}
                                style={{ width: wp(44), height: hp(15) }}
                                start={{ x: 0.5, y: 0 }}
                                end={{ x: 0.5, y: 1 }}
                                className="absolute bottom-0 "
                            />
                            <Text

                                style={{fontSize: hp(2.3) }}
                                className="text-white font-semibold text-center tracking-wide"
                            >
                                {corp.titresix}
                            </Text>

                        </TouchableOpacity>
                        <View  className="bg-blue-500" style={styles.textFrame}>
                            <Text style={styles.exerciseText}>6- {corp.six}</Text>
                        </View>

                    </Animated.View>

                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    scrollViewContent: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        padding: 10,
        alignItems: 'center',
    },
    imageContainer: {
        marginBottom: 20,
    },
    image: {
        height: hp(20),
        width: hp(20),
        borderRadius: hp(10),
    },
    detailsContainer: {
        marginBottom: 20,
    },
    exerciseLabel: {
        fontSize: hp(4.5),
        fontWeight: 'bold',
        color: 'rgba(0, 0, 0, 0.5)',
    },
    exerciseName: {
        fontSize: hp(4.5),
        fontWeight: 'bold',
        color: '#3061AF',
    },
    textContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    textFrame: {
        width: '100%',
        borderWidth: 1,
        borderColor: 'black',
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
        backgroundColor: '#3061AF',
    },
    exerciseText: {

        marginBottom: 5,
        color: 'white',
        fontWeight: 'bold',
    },
});
