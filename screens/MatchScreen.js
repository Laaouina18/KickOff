import React, { useEffect, useState } from 'react'
import { View, ActivityIndicator, Text, Image, Pressable, Button  } from 'react-native'
import { FlatList } from 'react-native'
import { useSelector } from 'react-redux'
import MatchItem from '../components/MatchItem'
import { useDispatch } from 'react-redux'
import { fetchMatches, FectchTournaments } from '../redux/Actions'

export default function Matchs() {
  
  const [Tournament, setTournament] = useState(null);
  const [filtres, setFiltres] = useState(null);
  const matches = useSelector(state => state.matches)
  const tournaments = useSelector(state => state.tournaments)
  const dispatch = useDispatch()
  const selectTournament = (id) => {
    setTournament(id)
    
  }
  useEffect(() => {
    if(matches){
    if (Tournament) {
      setFiltres(matches.filter(match => match.tournament.uniqueTournament.id === Tournament))
    } else {
      setFiltres(matches)
    }}

  }, [Tournament, matches])
  useEffect(() => {
    dispatch(fetchMatches())
    dispatch(FectchTournaments())
  }, [])
  return (
    <>
      <View style={{ marginTop: 30 }}>
        <View 
        style={{
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginHorizontal: 10,
        }}
        >
          <Button title="All Matches" onPress={() => setTournament(null)} style={{ color: 'red' }} />
          <FlatList
            data={tournaments}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => {
              return (
                <Pressable
                  onPress={() => selectTournament(item.id)}
                >
                  <View
                    style={{
                      borderRadius: 30,
                
                      height: 100,
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginHorizontal: 10,
                    }}>
                    <Text style={{ maxWidth: 120, textAlign: 'center' }}>{item.name}</Text>
                    <Image
                      source={{ uri: 'https://api.sofascore.com/api/v1/unique-tournament/' + item.id + '/image' }}
                      style={{ width: 70, height: 70, borderRadius: 50 }}
                    />
                  </View>
                </Pressable>
              );
            }}
          />
        </View>
      </View>
      {filtres ? (
        <View style={{ marginTop: 20 }}>
          <FlatList
            data={filtres}
            renderItem={({ item }) => {
              return <MatchItem match={item} />
            }}
            ItemSeparatorComponent={() => <View style={{ height: 30 }} />}
            keyExtractor={item => item.id}
          />
        </View>
      ) : (
        <View style={{ marginTop: 200 }}>

          <ActivityIndicator size="large" />
        </View>
      )}
    </>
  )
}
