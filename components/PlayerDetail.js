import { Text, StyleSheet, View } from 'react-native'
import { Dimensions } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

export default function Player({ route }) {
    const player = route.params.player

    return (
        <View style={styles.container}>
            <ScrollView style={styles.playerDetails} contentContainerStyle={styles.scrollViewContent}>
                <View style={styles.playerContainer}>
                    <Image source={{ uri: player.team_picture }} blurRadius={1} style={styles.teamPicture} />

                    <Text style={styles.playerName}>{player.player_name}</Text>
                    <Image
                        source={{ uri: player.player_picture }}
                        style={styles.playerImage}
                    />
                </View>
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Player Details</Text>
                </View>
                <View style={styles.moreDetails}>
                    <View style={styles.box}>
                        <Text style={styles.label}>Age</Text>
                        <Text style={styles.value}>{player.age} Years</Text>
                    </View>
                    <View style={styles.box}>
                        <Text style={styles.label}>Position</Text>
                        <View style={styles.positionContainer}>
                            {player.position_short_name.split(",").map((position, index) => (
                                <Text key={index} style={styles.position}>{position.trim()}</Text>
                            ))}
                        </View>
                    </View>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Professional Details</Text>
                </View>
                <View style={styles.moreDetails}>
                    <View style={styles.box}>
                        <Text style={styles.label}>Skill</Text>
                        <Text style={[styles.value, { backgroundColor: player.sci_skill_color }]}>{player.sci_skill_smg}</Text>
                    </View>
                    <View style={styles.box}>
                        <Text style={styles.label}>Potential</Text>
                        <Text style={[styles.value, { backgroundColor: player.sci_potential_color }]}>{player.sci_potential_smg}</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
    },
    playerContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    playerDetails: {
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    playerName: {
        color: '#333',
        fontSize: 28,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 10,
    },
    playerImage: {
        width: 200,
        height: 200,
        borderRadius: 100,
        backgroundColor: '#fff',
    },
    section: {
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
    },
    moreDetails: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    box: {
        flex: 1,
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        elevation: 3,
    },
    label: {
        fontSize: 18,
        color: '#666',
        marginBottom: 5,
    },
    value: {
        fontSize: 20,
        color: '#333',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    positionContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    position: {
        fontSize: 18,
        color: '#333',
        backgroundColor: '#f0f0f0',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 10,
        marginRight: 10,
        marginBottom: 10,
    },
    scrollViewContent: {
        paddingBottom: 30,
    },
    teamPicture: {
        width: '100%',
        height: 200,
        position: 'absolute',
        top: 0,
        left: 0,
        opacity: 0.3,
        zIndex: -1,
    },
})
