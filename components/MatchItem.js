import { View, Text, Image, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'
import { format } from 'date-fns'
import { useDispatch, useSelector } from 'react-redux'
import { saveMatchToFavorites } from '../redux/Actions'

const MatchItem = (props) => {
  const dispatch = useDispatch()
  const match = props.match
  const navigation = useNavigation()
  const favorites = useSelector(state => state.favorites)

  const addToFavorites = (match) => {
    dispatch(saveMatchToFavorites(match))
  }

  return (
    <Pressable style={styles.container} onPress={() => navigation.navigate('matchDetail', { match })}>
      <View style={styles.wrapper}>
        <Text style={styles.tournament}>{match.tournament.name}</Text>
        <View style={styles.matchCard}>
          <View style={styles.teamContainer}>
            <Image source={{ uri: 'https://api.sofascore.app/api/v1/team/' + match.homeTeam.id + '/image' }} style={styles.teamImg} />
            <Text style={styles.teamName}>{match.homeTeam.name}</Text>
          </View>
          <Text style={styles.vsText}>VS</Text>
          <View style={styles.teamContainer}>
            <Image source={{ uri: 'https://api.sofascore.app/api/v1/team/'+match.awayTeam.id+'/image' }} style={styles.teamImg} />
            <Text style={styles.teamName}>{match.awayTeam.name}</Text>
          </View>
        </View>
        <View style={styles.footer}>
          <View style={styles.dateTimeContainer}>
            <Icon name='calendar' color={'#4CAF50'} size={20} />
            <Text style={styles.dateTimeText}>{format(new Date(match.startTimestamp*1000), "yyyy-MM-dd")}</Text>
            <Icon name='time' color={'#FFEB3B'} size={20} />
            <Text style={styles.dateTimeText}>{format(new Date(match.startTimestamp*1000), "HH-mm")}</Text>
          </View>
          <Pressable onPress={() => addToFavorites(match)} style={styles.favoriteButton}>
            <Icon name='heart' color={favorites.includes(match) ? '#FF5722' : '#2196F3'} size={30} />
          </Pressable>
        </View>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'purple',
	borderRadius:10,
    margin: 10,
    padding: 15,
  },
  wrapper: {
    flex: 1,
  },
  tournament: {
    color: '#FFFFFF',
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
  },
  matchCard: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 10,
  },
  teamContainer: {
    alignItems: 'center',
  },
  teamImg: {
    width: 60,
    height: 60,
  },
  teamName: {
    color: '#FFFFFF',
    fontSize: 14,
    marginTop: 5,
  },
  vsText: {
    color: '#FFFFFF',
    fontSize: 20,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dateTimeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dateTimeText: {
    color: '#FFFFFF',
    fontSize: 14,
    marginLeft: 5,
  },
  favoriteButton: {
    padding: 5,
    borderRadius: 5,
  },
})

export default MatchItem
