import {Formik} from 'formik';
import React from 'react';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ICONS} from '../../constants/icons';
import {SCREEN_NAME} from '../../constants/screenName';
import NavigationServices from '../../utils/navigationServices';
import {loginSchema} from '../../utils/YupSchema';
import TopBackground from './components/topBackground';
import styles from './login.styles';

const LoginView = ({
  formikRef,
  onLogin = () => {},
  setFocusUsername = () => {},
  setIsTouchedUsername = () => {},
  maxLength,
  onChangePassword = () => {},
  onChangePhoneNumber = () => {},
  setFocusPassword = () => {},
  setIsTouchedPassword = () => {},
  isTouchedUsername,
  errorMsgPassword,
  isTouchedPassword,
  errorMsgUsername,
  focusUsername,
  focusPassword,
  dot = '⚫ ',
}) => {
  return (
    <SafeAreaView style={styles.container}>
      <TopBackground />
      <Image
        source={ICONS.MESSENGER_LOGO}
        style={styles.logo}
        resizeMode={'contain'}
      />
      <Formik
        innerRef={formikRef}
        enableReinitialize={true}
        initialValues={{
          phoneNumber: '0395965412',
          password: 'Qwe123456!',
        }}
        validationSchema={loginSchema}
        onSubmit={onLogin}
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
            <View style={styles.inputContainer}>
              <View style={styles.phoneContainer}>
                <Text
                  style={[
                    styles.phonePlaceholder,
                    !!values?.phoneNumber && styles.phoneText,
                  ]}>
                  {values?.phoneNumber || 'Phone number'}
                </Text>
                <View style={styles.underline} />
              </View>
              <TextInput
                style={styles.inputPhone}
                onFocus={() => {
                  setFocusUsername(true);
                  setIsTouchedUsername(true);
                }}
                onBlur={() => setFocusUsername(false)}
                keyboardType={'numeric'}
                value={values?.phoneNumber}
                onChangeText={onChangePhoneNumber}
                placeholder="039xxxxxxx//39xxxxxxx"
                underlineColorAndroid={'#AAAAAA'}
                maxLength={maxLength}
              />

              <TextInput
                style={styles.inputPassword}
                onFocus={() => {
                  setFocusPassword(true);
                  setIsTouchedPassword(true);
                }}
                onBlur={() => setFocusPassword(false)}
                value={values?.password}
                onChangeText={onChangePassword}
                maxLength={maxLength}
              />
              <View style={styles.passwordContainer}>
                <Text
                  style={[
                    styles.passwordPlaceholder,
                    !!values?.password && styles.passwordText,
                  ]}>
                  {values?.password
                    ? dot.repeat(values?.password?.length || 0)
                    : focusPassword
                    ? ''
                    : '⚫ ⚫ ⚫ ⚫ ⚫ ⚫ ⚫ ⚫'}
                </Text>
                <View style={styles.underline} />
              </View>
              {!focusUsername && !!errorMsgUsername && !!isTouchedUsername ? (
                <Text style={styles.password}>{errorMsgUsername}</Text>
              ) : (
                !focusPassword &&
                !!isTouchedPassword &&
                !!errorMsgPassword && (
                  <Text style={styles.errorMess}>{errorMsgPassword}</Text>
                )
              )}
            </View>
          );
        }}
      </Formik>
      <View style={styles.bottomContainer}>
        <TouchableOpacity
          onPress={onLogin}
          disabled={!errorMsgPassword && !errorMsgUsername ? false : true}
          style={[
            styles.loginBtn,
            !errorMsgPassword && !errorMsgUsername
              ? styles.activeBg
              : styles.disableBg,
          ]}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>

        <View style={styles.indicatorContainer}>
          <View style={styles.indicator} />
          <Text style={styles.indicatorText}>OR</Text>
          <View style={styles.indicator} />
        </View>
        <TouchableOpacity
          onPress={() =>
            NavigationServices.navigate(SCREEN_NAME.GET_OTP_SCRREN)
          }
          style={styles.registerContainer}>
          <Text style={styles.registerText}>Create new Facebook account</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LoginView;
