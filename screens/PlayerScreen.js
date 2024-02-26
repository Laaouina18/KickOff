import React, { useEffect } from 'react'
import PlayerItem from '../components/PlayerItem'
import { useSelector } from 'react-redux'
import { View, FlatList, ActivityIndicator ,StyleSheet,TextInput,Text} from 'react-native'
import { useDispatch } from 'react-redux'
import {  fetchPlayers } from '../redux/Actions'

export default function Players() {
  const [text, onChangeText] = React.useState('');
  const [filteredPlayers, setFilteredPlayers] = React.useState(null);
  const dispatch = useDispatch()
  const players = useSelector(state => state.players)

  useEffect(() => {
    dispatch(fetchPlayers())
  }, [])
  return (
    <>
 <Text>
	kjfjf
 </Text>
    </>
  )
}
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
