import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getCountryHandle} from '../../redux/country/country.actions';
import {getCountrySelector} from '../../redux/country/country.selectors';

const HomeView = () => {
  const dispatch = useDispatch();
  const getCountryData = async () => {
    dispatch(getCountryHandle());
  };
  const data = useSelector(getCountrySelector);
  //   useEffect(() => {
  //     console.log('---------------', data);
  //   }, [data]);
  return (
    <View>
      <Text>home.view</Text>
      <TouchableOpacity onPress={getCountryData}>
        <Text>click to test</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({});

export default HomeView;
