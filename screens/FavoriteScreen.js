import React from 'react'
import { View ,Text ,FlatList } from 'react-native'
import MatchItem from '../components/MatchItem'
import { useSelector } from 'react-redux'


export default function Favorites() {
    const favorites =  useSelector(state => state.favorites)

return (
    <>
   <Text>lkflkf</Text>
    </>
)
}
