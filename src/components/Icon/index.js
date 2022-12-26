import React, {useCallback} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import Zocial from 'react-native-vector-icons/Zocial';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {COLORS} from '../../constants/colors';
import {scale} from '../../utils/fontConfig';

const Icons = ({
  category = 'AntDesign',
  name = 'paperclip',
  color = '#686f7a',
  size = 0,
  style,
  wrapperStyle,
}) => {
  const renderIcon = useCallback(() => {
    switch (category) {
      case 'AntDesign':
        return (
          <AntDesign name={name} size={size} color={color} style={style} />
        );
      case 'Entypo':
        return <Entypo name={name} size={size} color={color} style={style} />;
      case 'EvilIcons':
        return (
          <EvilIcons name={name} size={size} color={color} style={style} />
        );
      case 'Feather':
        return <Feather name={name} size={size} color={color} style={style} />;
      case 'FontAwesome':
        return (
          <FontAwesome name={name} size={size} color={color} style={style} />
        );
      case 'FontAwesome5':
        return (
          <FontAwesome5 name={name} size={size} color={color} style={style} />
        );
      case 'Fontisto':
        return <Fontisto name={name} size={size} color={color} style={style} />;
      case 'Foundation':
        return (
          <Foundation name={name} size={size} color={color} style={style} />
        );
      case 'Ionicons':
        return <Ionicons name={name} size={size} color={color} style={style} />;
      case 'SimpleLineIcons':
        return (
          <SimpleLineIcons
            name={name}
            size={size}
            color={color}
            style={style}
          />
        );
      case 'Zocial':
        return <Zocial name={name} size={size} color={color} style={style} />;
      case 'MaterialCommunityIcons':
        return (
          <MaterialCommunityIcons
            name={name}
            size={size}
            color={color}
            style={style}
          />
        );
      case 'MaterialIcons':
        return (
          <MaterialIcons name={name} size={size} color={color} style={style} />
        );
      case 'Octicons':
        return <Octicons name={name} size={size} color={color} style={style} />;
      default:
        return <React.Fragment />;
    }
  }, [category, color, name, size, style]);

  return <View style={wrapperStyle}>{renderIcon()}</View>;
};

export default React.memo(Icons);
