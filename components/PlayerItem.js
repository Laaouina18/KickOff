import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const PlayerItem= ({ player }) => {
    const navigation = useNavigation()

    return (
        <Pressable
            onPress={() => navigation.navigate('playerDetail', { player })}
            style={({ pressed }) => [
                { backgroundColor: pressed ? "#E5E5E5" : '#FFFFFF' },
                styles.container
            ]}
        >
            <View style={styles.flagContainer}>
                <Image source={{ uri: player.team_picture }} style={styles.flag} />
            </View>
            <View style={styles.playerInfo}>
                <Text style={styles.playerName}>{player.player_name}</Text>
                <Text style={styles.playerAge}>Age: {player.age}</Text>
            </View>
            <View style={styles.playerPicture}>
                <Image source={{ uri: player.player_picture }} style={styles.playerImage} />
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        width: '90%',
        marginHorizontal: 'auto',
        marginBottom: 20,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    flagContainer: {
        position: 'absolute',
        top: 10,
        right: 10,
    },
    flag: {
        width: 40,
        height: 30,
        resizeMode: 'stretch',
        borderRadius: 10,
    },
    playerInfo: {
        flex: 2,
        marginLeft: 20,
    },
    playerName: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333333',
    },
    playerAge: {
        fontSize: 18,
        fontWeight: '600',
        color: '#666666',
    },
    playerPicture: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    playerImage: {
        width: 100,
        height: 120,
        borderRadius: 10,
    },
})

export default PlayerItem
