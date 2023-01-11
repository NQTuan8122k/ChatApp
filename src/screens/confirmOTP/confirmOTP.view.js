import React from 'react';
import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
//import Header from '../../../components/Header';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {COLORS} from '../../constants/colors';
import {FONT_FAMILY, FONT_SIZE} from '../../constants/fonts';
import {IMAGES} from '../../constants/images';
import {scale, scaleHeight} from '../../utils/fontConfig';
import NavigationServices from '../../utils/navigationServices';
import styles from './confirmOTP.styles';

const ConFirmOTPView = ({
  phoneNumber,
  countDown,
  codeOTP,
  onCodeChanged,
  RequestOTPPhoneNumber,
  confirmVerificationCode,
  ...props
}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}
          onPress={NavigationServices.goBack}>
          <Ionicons
            name="arrow-back-outline"
            color={COLORS.gray_dark}
            size={scale(24)}
          />
          <Text
            style={{
              marginLeft: scale(10),
              color: COLORS.black,
              fontFamily: FONT_FAMILY.MEDIUM,
              fontSize: FONT_SIZE.NORMAL,
            }}>
            Use another phone number
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableWithoutFeedback onPress={() => {}}>
        <View style={styles.bodyContainer}>
          <Image
            source={IMAGES.OTP}
            style={styles.imageStyle}
            resizeMode="cover"
          />
          <Text style={styles.titleText}>Verify phone number</Text>
          <Text style={styles.normalText}>
            Please enter the OTP that was sent SMS to the phone number{' '}
            {phoneNumber?.replace('+84', '0')}
          </Text>
          <View style={styles.countDownContainer}>
            {countDown == 0 ? (
              <TouchableOpacity
                style={styles.countDownContainer}
                onPress={RequestOTPPhoneNumber}>
                <Feather
                  name="refresh-ccw"
                  size={scale(24)}
                  color={COLORS.blue}
                />
                <Text style={styles.countDownText1}>Resend OTP</Text>
              </TouchableOpacity>
            ) : (
              <>
                <MaterialIcons
                  name="access-time"
                  size={scale(24)}
                  color={COLORS.red}
                />
                <Text style={styles.countDownText}>
                  OTP expires in {countDown}
                </Text>
              </>
            )}
          </View>
          <View>
            <OTPInputView
              style={styles.inputOTPContainer}
              pinCount={6}
              code={codeOTP}
              onCodeChanged={onCodeChanged}
              codeInputFieldStyle={styles.codeInputFieldStyle}
              autoFocusOnLoad={false}
              keyboardType="number-pad"
            />
          </View>
          <TouchableOpacity style={styles.helpContainer}>
            <MaterialIcons
              name="headset-mic"
              size={scale(24)}
              color={COLORS.orange}
            />
            <Text style={styles.titleText}>Support</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={confirmVerificationCode}
            style={{
              width: scale(300),
              height: scaleHeight(40),
              borderRadius: scale(15),
              backgroundColor: '#00A3FF',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: scaleHeight(20),
              marginBottom: scaleHeight(25),
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
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default React.memo(ConFirmOTPView);
