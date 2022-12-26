import React from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {Header, Icon} from '../../components';
import {COLORS} from '../../constants/colors';
import {FONT_SIZE} from '../../constants/fonts';
import {HttpImage} from '../../helpers/httpImage';
import {scale, scaleHeight} from '../../utils/fontConfig';
import CustomCarousel from './Components/Carousel';
import styles from './place.styles';

const PlaceView = ({
  name = 'VYN',
  listData = [],
  labelTag = [],
  data = {},
  isFocus,
  onFocus = () => {},
  setCurrentPicture,
  setData,
  currentPicture,
}) => {
  let data1 = [...listData];
  const nextPicture = async () => {
    let tmp = data1.pop();
    data1 = [...[tmp], ...data1];
    setCurrentPicture(prev => {
      if (prev === 0) {
        return listData?.length - 1;
      }
      return prev - 1;
    });
    setData({data: data1});
    return;
  };

  const prevPicture = async () => {
    let tmp = data1[0];
    data1 = data1.slice(1);
    data1.push(tmp);
    setData({data: data1});
    setCurrentPicture(prev => (prev + 1) % listData?.length);
    return;
  };

  const renderLabelItem = (item, index) => {
    return (
      <TouchableOpacity
        style={[
          styles.labelContainer,
          isFocus === index
            ? {backgroundColor: COLORS.orange}
            : {
                backgroundColor: COLORS.white,
                borderColor: COLORS.gray_light,
                borderWidth: scale(1),
              },
        ]}
        onPress={() => onFocus(index)}>
        <Icon
          category={item?.category}
          name={item?.icon}
          size={18}
          color={isFocus === index ? COLORS.white : COLORS.black}
        />
        <Text
          style={[
            {marginLeft: scale(10)},
            isFocus === index ? {color: COLORS.white} : {color: COLORS.black},
          ]}>
          {item?.name}
        </Text>
      </TouchableOpacity>
    );
  };
  const renderCardItem = item => {
    return (
      <View style={styles.cardItemContainer}>
        <Image
          source={{
            uri: HttpImage(item?.image),
          }}
          resizeMode="cover"
          style={{
            height: scaleHeight(125),
            width: scale(200),
            borderRadius: scale(8),
          }}
        />
        <View style={styles.cardText}>
          <View>
            <Text style={styles.placeName}>{item?.name}</Text>

            <View style={styles.row}>
              <Icon
                name="location-pin"
                category="Entypo"
                color={COLORS.red}
                size={12}
              />
              <Text style={styles.locationText}>{item?.location}</Text>
            </View>
          </View>
          <View style={styles.rowCenter}>
            <Icon
              name="star"
              category="AntDesign"
              color={COLORS.red}
              size={12}
            />
            <Text
              style={{
                marginLeft: scale(3),
                color: COLORS.gray,
                fontSize: FONT_SIZE.NORMAL,
              }}>
              4.8
            </Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.greeting}>Hi {name},</Text>
      <Text style={styles.question}>Where do you {'\n'}wanna go?</Text>

      <CustomCarousel
        listData={listData}
        data={data.data}
        nextPicture={nextPicture}
        prevPicture={prevPicture}
        currentPicture={currentPicture}
      />

      <FlatList
        style={{marginBottom: scaleHeight(20)}}
        showsHorizontalScrollIndicator={false}
        data={labelTag}
        keyExtractor={item => item?.name}
        renderItem={({item, index}) => renderLabelItem(item, index)}
        horizontal
      />

      <FlatList
        showsHorizontalScrollIndicator={false}
        data={listData}
        keyExtractor={item => item?.name}
        renderItem={({item, index}) => renderCardItem(item, index)}
        horizontal
      />
    </View>
  );
};

export default PlaceView;
