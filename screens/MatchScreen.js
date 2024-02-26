import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator, Text, Image, Pressable, Button  } from 'react-native';
import { FlatList } from 'react-native';
import MatchItem from '../components/MatchItem';
import { useDispatch,useSelector } from 'react-redux';
import { FectchTournaments,fetchMatches } from '../redux/Actions';

export default function Matchs() {
  const matchs = useSelector(state => state.matches)
  const tournaments = useSelector(state => state.tournaments)
  const dispatch = useDispatch()
const filtredMatchs=[",v,vg,","nf,flk"]
  
  useEffect(() => {
 dispatch(fetchMatches),
 dispatch(FectchTournaments),
 console.log("hifavorte",matchs)

  }, [dispatch])
  return (
    <>
	<Text>
		jkjdl
	</Text>
    </>
  )
}
