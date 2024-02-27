import React from 'react'
import { View ,Text ,FlatList } from 'react-native'
import MatchItem from '../components/MatchItem'
import { useSelector } from 'react-redux'


export default function Favoris() {
    const favoris =  useSelector(state => state.favorites)

return (
    <>
    {
            favoris.length > 0 ? 
     (<View style={{ marginTop: 20 }}>
                <FlatList
                    data={favoris}
                    renderItem={({ item }) => {
                        return <MatchItem match={item} />
                    }}
                    ItemSeparatorComponent={() => <View style={{ height: 30 }} />}
                    keyExtractor={item => item.id}
                />
            </View>) : (<Text style={{ textAlign:'center', marginTop:120 , fontSize:30}}> NO favorited posts</Text>)
    }
    </>
)
}
