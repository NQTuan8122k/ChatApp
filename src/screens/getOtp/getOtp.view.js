import {Formik} from 'formik';
import React from 'react';
import {
  Image,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {COLORS} from '../../constants/colors';
import {FONT_SIZE} from '../../constants/fonts';
import {ICONS} from '../../constants/icons';
import {IMAGES} from '../../constants/images';
import {SCREEN_NAME} from '../../constants/screenName';
import {scale, scaleHeight} from '../../utils/fontConfig';
import NavigationServices from '../../utils/navigationServices';
import {phoneYupSchema} from '../../utils/YupSchema';
import styles from './getOtp.styles';

const GetOtpView = ({
  regionCode = '84',
  onPressContinue = () => {},
  formikRef,
  focus,
  setFocus = () => {},
  onChangePhoneNumber = () => {},
  maxLength,
  onlogin = () => {},
}) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <ImageBackground
        source={IMAGES.SIGNUP_BACKGROUND}
        style={styles.imageBackground}
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
              paddingLeft: scale(5),
            }}>
            {'\n'}Welcome new member
          </Text>
        </View>
      </ImageBackground> */}
      <View style={{width: '100%', height: '40%'}}>
        <ImageBackground
          source={IMAGES.SIGNUP_BACKGROUND}
          style={styles.imageBackground}
          resizeMode={'contain'}>
          {/* <View
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
              paddingLeft: scale(5),
            }}>
            {'\n'}Welcome new member
          </Text>
        </View> */}
        </ImageBackground>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}> </Text>

        <Formik
          innerRef={formikRef}
          enableReinitialize={true}
          initialValues={{
            phoneNumber: '',
          }}
          validationSchema={phoneYupSchema}
          onSubmit={onPressContinue}
          validateOnChange={true}>
          {({
            errors,
            values,
            setFieldValue,
            handleSubmit,
            touched,
            handleBlur,
            setFieldTouched,
            ...props
          }) => {
            return (
              <View style={styles.validateContainer}>
                <Text style={styles.headerText}>Phone number</Text>

                <View style={styles.inputContainer}>
                  <View style={styles.regionCode}>
                    <Text style={styles.codeText}>{'+' + regionCode}</Text>
                  </View>
                  <TextInput
                    style={styles.textInput}
                    onFocus={() => setFocus(true)}
                    onBlur={() => setFocus(false)}
                    keyboardType={'numeric'}
                    value={values?.phoneNumber}
                    onChangeText={onChangePhoneNumber}
                    placeholder="039xxxxxxx//39xxxxxxx"
                    underlineColorAndroid={'#AAAAAA'}
                    maxLength={maxLength}
                  />
                  <View style={styles.textContainer}>
                    <Text
                      style={[
                        styles.textStyles,
                        !values?.phoneNumber && styles.disabled,
                      ]}>
                      {values?.phoneNumber || '039xxxxxxx'}
                    </Text>
                  </View>
                </View>
                {!!errors?.phoneNumber && !focus && (
                  <Text style={styles.errorsMsg}>{errors?.phoneNumber}</Text>
                )}
              </View>
            );
          }}
        </Formik>
      </View>
      <View style={[styles.bottomContainer, focus && {top: scaleHeight(150)}]}>
        <TouchableOpacity
          onPress={onPressContinue}
          disabled={
            formikRef?.current?.values?.phoneNumber?.length !== maxLength
              ? true
              : false
          }
          style={[
            styles.buttonContainer,
            formikRef?.current?.values?.phoneNumber?.length !== maxLength &&
              styles.disabledBackground,
          ]}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>

        <View style={styles.indicatorContainer}>
          <View style={styles.indicator} />
          <Text style={styles.indicatorText}>OR</Text>
          <View style={styles.indicator} />
        </View>
        <TouchableOpacity onPress={onlogin} style={styles.loginContainer}>
          <Text style={styles.loginText}>
            Already have an account ? Login now
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default GetOtpView;
