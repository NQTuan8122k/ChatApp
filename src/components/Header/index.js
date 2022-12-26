import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Evillcons from 'react-native-vector-icons/EvilIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {COLORS} from '../../constants/colors';
import {HttpImage} from '../../helpers/httpImage';
import {scaleHeight} from '../../utils/fontConfig';
import styles from './styles';
const Header = ({location = 'Dhaka, Bangladesh', wraperStyle}) => {
  return (
    <View style={[styles.HeaderContainer, wraperStyle]}>
      <Evillcons name="navicon" size={scaleHeight(36)} color={COLORS.black} />
      <View style={styles.location}>
        <MaterialIcons
          name="my-location"
          size={scaleHeight(16)}
          color={COLORS.red}
        />
        <Text style={styles.locationText}>{location}</Text>
      </View>

      <TouchableOpacity style={styles.user}>
        <Image
          source={{
            uri: HttpImage(
              'https://img.freepik.com/free-vector/rice-field-terraces-illustration_107791-5424.jpg?w=900&t=st=1671432154~exp=1671432754~hmac=121f1257afea396b798bfd596bd736774e74220b7b560ffa74f99e31ac44d970',
            ),
          }}
          resizeMode="cover"
          style={styles.image}
        />
      </TouchableOpacity>
    </View>
  );
};

export default React.memo(Header);
