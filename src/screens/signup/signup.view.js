import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useCallback, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {COLORS} from '../../constants/colors';
import {scale, scaleHeight} from '../../utils/fontConfig';
import {IMAGES} from '../../constants/images';
import {ICONS} from '../../constants/icons';
import {FONT_SIZE} from '../../constants/fonts';
import CustomPassword from './components/customPasswordInput';

const SignupView = ({data = [], regionCode = '84'}) => {
  const [password, setPassword] = useState('12345678');
  const [placeholder, setPlaceholder] = useState('');

  const onChangePassword = useCallback(text => {
    setPassword(text);
    setPlaceholder(prev => prev + '⚫ ');
  }, []);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      {/* <View
        style={{
          width: scale(375),
          height: scaleHeight(31),
          position: 'absolute',
          top: scaleHeight(31),
          left: 0,
          zIndex: 100,
          backgroundColor: COLORS.white,
        }}>
        <View
          style={{
            backgroundColor: '#2669FF',
            // backgroundColor: 'red',
            width: scale(375),
            height: scaleHeight(31),
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 10,
            borderBottomRightRadius: scale(18),
          }}
        />
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(38, 105, 255, 0.85)',
          }}
        />
      </View>

      <View style={{position: 'absolute', left: 0}}>
        <View
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: scale(415),
            height: scaleHeight(321),
            backgroundColor: '#2669FF',
          }}></View>
        <View
          style={{
            position: 'absolute',
            left: 0,
            top: scaleHeight(62),
            width: scale(200),
            height: scaleHeight(900),
            backgroundColor: COLORS.white,
            borderTopLeftRadius: scale(1000),
          }}
        />
        <View
          style={{
            position: 'absolute',
            left: scale(200),
            top: scaleHeight(62),
            width: scale(200),
            height: scaleHeight(900),
            backgroundColor: COLORS.white,
          }}
        />
      </View>

      <View
        style={{
          top: scaleHeight(31),
          position: 'absolute',
          left: 0,
          zIndex: 1,
        }}>
        <View
          style={{
            position: 'absolute',
            borderTopLeftRadius: scale(40),
            left: 0,
            top: 0,
            width: scale(415),
            height: scaleHeight(321),
            backgroundColor: '#2669FF',
            opacity: 0.7,
          }}></View>

        <View
          style={{
            position: 'absolute',
            left: 0,
            top: scaleHeight(62),
            width: scale(200),
            height: scaleHeight(900),
            backgroundColor: COLORS.white,
            borderTopLeftRadius: scale(1000),
          }}
        />
        <View
          style={{
            position: 'absolute',
            left: scale(200),
            top: scaleHeight(62),
            width: scale(200),
            height: scaleHeight(900),
            backgroundColor: COLORS.white,
          }}
        />
      </View>

      <View
        style={{
          top: scaleHeight(62),
          position: 'absolute',
          left: 0,
          backgroundColor: 'red',
          zIndex: 2,
        }}>
        <View
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: scale(415),
            height: scaleHeight(321),
            backgroundColor: '#2669FF',
            opacity: 0.4,
            borderTopLeftRadius: scale(180),
          }}></View>

        <View
          style={{
            position: 'absolute',
            left: 0,
            top: scaleHeight(62),
            width: scale(200),
            height: scaleHeight(900),
            backgroundColor: COLORS.white,
            borderTopLeftRadius: scale(1000),
          }}
        />
        <View
          style={{
            position: 'absolute',
            left: scale(200),
            top: scaleHeight(62),
            width: scale(200),
            height: scaleHeight(900),
            backgroundColor: COLORS.white,
          }}
        />
      </View> */}
      {/* 
      <View
        style={{
          top: scaleHeight(62),
          position: 'absolute',
          left: 0,
          backgroundColor: 'red',
          zIndex: 3,
        }}>
        <View
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: scale(415),
            height: scaleHeight(321),
            backgroundColor: '#2669FF',
            opacity: 0.2,
            borderTopLeftRadius: scale(180),
          }}></View>

        <View
          style={{
            position: 'absolute',
            left: 0,
            top: scaleHeight(93),
            width: scale(200),
            height: scaleHeight(900),
            backgroundColor: COLORS.white,
            borderTopLeftRadius: scale(1000),
          }}
        />
        <View
          style={{
            position: 'absolute',
            left: scale(200),
            top: scaleHeight(93),
            width: scale(200),
            height: scaleHeight(900),
            backgroundColor: COLORS.white,
          }}
        />
      </View> */}
      <ImageBackground
        // source={ICONS.MESSENGER_LOGO}
        source={IMAGES.SIGNUP_BACKGROUND}
        style={{
          width: scaleHeight(400),
          height: scaleHeight(400),
          left: -scale(75),
          top: -scaleHeight(150),
          marginBottom: scaleHeight(50),
        }}
        resizeMode={'contain'}>
        <View
          style={{
            left: scale(75),
            top: scaleHeight(150),
            paddingLeft: scale(25),
            paddingTop: scaleHeight(20),
          }}>
          <Image
            source={ICONS.MESS_LOGO}
            style={{
              width: scaleHeight(50),
              height: scaleHeight(50),
              tintColor: COLORS.white,
            }}
            resizeMode={'contain'}
          />
          <Text
            style={{
              color: COLORS.white,
              fontSize: FONT_SIZE.X_LARGE,
              fontWeight: '700',
              paddingLeft: scale(20),
            }}>
            {'\b\t\t'}Wellcome,{'\n\t\t\t\b'} New member
          </Text>
        </View>
      </ImageBackground>
      <View
        style={{
          alignItems: 'center',
          zIndex: 4,
          top: -scaleHeight(150),
        }}>
        <Text
          style={{
            color: COLORS.GST_Blue,
            fontSize: FONT_SIZE.XX_LARGE,
            fontWeight: '600',
            marginBottom: scaleHeight(20),
          }}>
          SIGN UP
        </Text>
        <View
          style={{
            width: '100%',
            paddingHorizontal: scale(40),
          }}>
          <Text
            style={{
              color: COLORS.black,
              fontWeight: '600',
              fontSize: FONT_SIZE.LARGE,
            }}>
            Phone number
          </Text>

          {/* <TextInput
            style={{
              width: scale(310),
            }}
            placeholder="+84 395 965 419"
            underlineColorAndroid={'#AAAAAA'}
          /> */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TextInput
              style={{
                color: COLORS.black,
                fontSize: FONT_SIZE.MEDIUM,
                fontWeight: '600',
                paddingHorizontal: scale(10),
              }}
              value={'+' + regionCode}
              underlineColorAndroid={'#AAAAAA'}
            />
            <TextInput
              style={{
                flex: 1,
                color: COLORS.black,
                fontSize: FONT_SIZE.MEDIUM,
                fontWeight: '600',
                paddingLeft: scale(15),
              }}
              placeholder="395 965 419"
              underlineColorAndroid={'#AAAAAA'}
            />
          </View>
        </View>

        <TouchableOpacity
          style={{
            width: scale(300),
            height: scaleHeight(40),
            borderRadius: scale(15),
            backgroundColor: '#00A3FF',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: scaleHeight(42),
            marginBottom: scaleHeight(30),
          }}>
          <Text
            style={{
              fontSize: FONT_SIZE.NORMAL,
              color: COLORS.white,
              fontWeight: '700',
            }}>
            Continue
          </Text>
        </TouchableOpacity>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginHorizontal: scale(40),
            height: scaleHeight(20),
            marginBottom: scaleHeight(30),
          }}>
          <View
            style={{
              backgroundColor: '#AAAAAA',
              height: scaleHeight(1),
              width: scale(135),
            }}
          />
          <Text
            style={{
              color: '#999999',
              fontSize: FONT_SIZE.NORMAL,
              fontWeight: '400',
              marginHorizontal: scale(10),
            }}>
            OR
          </Text>
          <View
            style={{
              backgroundColor: '#AAAAAA',
              height: scaleHeight(1),
              width: scale(135),
            }}
          />
        </View>
        <TouchableOpacity
          style={{
            paddingHorizontal: scale(24),
            paddingVertical: scaleHeight(8),
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf: 'center',
            borderRadius: scale(12),
            borderWidth: scale(1.5),
            borderColor: '#00A3FF',
            marginBottom: scaleHeight(50),
          }}>
          <Text
            style={{
              color: COLORS.black,
              fontSize: FONT_SIZE.SMALL,
              fontWeight: '400',
            }}>
            Already have an account ? Login now
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default SignupView;
