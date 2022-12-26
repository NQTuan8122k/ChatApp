import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ProfileView from './profile.view';
import {IMAGE_LIST, USER} from '../../data';

const ProfileContainer = () => {
  return <ProfileView userData={USER} imageData={IMAGE_LIST} />;
};

export default ProfileContainer;
const styles = StyleSheet.create({});
