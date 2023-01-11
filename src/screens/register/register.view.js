import {Formik} from 'formik';
import React, {useEffect, useRef} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
//import Header from '../../../components/Header';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useDispatch} from 'react-redux';
import {TextInputCustom} from '../../components';
import {COLORS} from '../../constants/colors';
import {FONT_SIZE} from '../../constants/fonts';
import {SCREEN_NAME} from '../../constants/screenName';
import {registerNewUserHandle} from '../../redux/signup/signup.actions';
import {registerYupSchema} from '../../utils/YupSchema';
import {scale, scaleHeight} from '../../utils/fontConfig';
import NavigationServices from '../../utils/navigationServices';
import styles from './register.styles';

const RegisterView = ({phoneNumber, uid}) => {
  const formikRef = useRef(null);
  const dispatch = useDispatch();
  const onConfirm = async () => {
    dispatch(
      registerNewUserHandle(
        {
          userData: {
            username: formikRef?.current?.values?.username,
            password: formikRef?.current?.values?.password,
            confirmPassword: formikRef?.current?.values?.confirmPassword,
            name: 'ABC NYV',
            age: 21,
            followers: '',
            following: '',
            description: '',
            phoneNumber: phoneNumber,
            uid: uid,
            backgroundUrl:
              'https://images.unsplash.com/photo-1494633114655-819eb91fde40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fGFuaW1lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60',
          },
          uid: phoneNumber,
          auth: {
            username: formikRef?.current?.values?.username,
            password: formikRef?.current?.values?.password,
            phoneNumber: phoneNumber,
          },
        },
        () => NavigationServices.navigate(SCREEN_NAME.HOME_SCREEN),
        () => {},
      ),
    );
    console.log(
      '\n========================HELLO***************************',
      formikRef?.current?.values,
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={{
            position: 'absolute',
            zIndex: 100,
            top: scale(15),
            left: scale(15),
            flexDirection: 'row',
            alignItems: 'center',
          }}
          onPress={NavigationServices.goBack}>
          <Ionicons
            name="arrow-back-outline"
            color={COLORS.black}
            size={scale(24)}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 1,
          paddingHorizontal: scale(20),
          paddingTop: scaleHeight(40),
        }}>
        <Text
          style={{
            color: COLORS.black,
            fontSize: FONT_SIZE.X_LARGE,
            fontWeight: '700',
          }}>
          Register Account
        </Text>
        <Text style={{marginTop: scaleHeight(15)}}>
          Full your details to continue
        </Text>

        <Formik
          innerRef={formikRef}
          enableReinitialize={true}
          initialValues={{
            username: '',
            password: '',
            confirmPassword: '',
          }}
          validationSchema={registerYupSchema}
          onSubmit={onConfirm}
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
            let checkEmpty =
              !values?.password &&
              !values?.username &&
              !values?.confirmPassword;
            let checkError =
              !errors?.username &&
              !errors?.password &&
              !errors?.confirmPassword;

            return (
              <>
                <TextInputCustom
                  wrapperStyle={[styles.wrapperStyles, styles.marginTop]}
                  value={values?.username}
                  onChangeText={text => setFieldValue('username', text)}
                  onBlur={handleBlur('username')}
                  placeHolder={'username'}
                  errorMessage={errors?.username}
                  maxLength={50}
                  isTouched={touched.username}
                  setTouched={setFieldTouched}
                />

                <TextInputCustom
                  wrapperStyle={styles.wrapperStyles}
                  value={values?.password}
                  onChangeText={text => setFieldValue('password', text)}
                  onBlur={handleBlur('password')}
                  placeHolder={'Password'}
                  errorMessage={errors?.password}
                  maxLength={50}
                  isSecure={true}
                  isTouched={touched.password}
                  setTouched={setFieldTouched}
                />

                <TextInputCustom
                  wrapperStyle={styles.wrapperStyles}
                  value={values?.confirmPassword}
                  onChangeText={text => setFieldValue('confirmPassword', text)}
                  onBlur={handleBlur('confirmPassword')}
                  placeHolder={'Confirm Password'}
                  errorMessage={errors?.confirmPassword}
                  maxLength={50}
                  isSecure={true}
                  isTouched={touched.confirmPassword}
                  setTouched={setFieldTouched}
                />

                <TouchableOpacity
                  onPress={handleSubmit}
                  disabled={
                    !!checkEmpty ? true : !(!checkEmpty && checkError) && true
                  }
                  style={[
                    {
                      width: '85%',
                      height: scaleHeight(50),
                      borderRadius: scale(15),
                      backgroundColor: '#00A3FF',
                      justifyContent: 'center',
                      alignItems: 'center',
                      alignSelf: 'center',
                      marginTop: scaleHeight(50),
                    },
                    !!checkEmpty
                      ? {
                          backgroundColor: COLORS.gray,
                        }
                      : !(!checkEmpty && checkError) && {
                          backgroundColor: COLORS.gray,
                        },
                  ]}>
                  <Text
                    style={{
                      fontSize: FONT_SIZE.MEDIUM,
                      color: COLORS.white,
                      fontWeight: '700',
                    }}>
                    Register
                  </Text>
                </TouchableOpacity>
              </>
            );
          }}
        </Formik>
      </View>
      <Text
        style={{
          position: 'absolute',
          bottom: scaleHeight(30),
          left: 0,
          width: '100%',
          textAlign: 'center',
          color: COLORS.black,
          fontSize: FONT_SIZE.MEDIUM,
        }}>
        Already have an account?{' '}
        <Text
          style={{
            color: '#35C2C1',
          }}>
          Login Now
        </Text>
      </Text>
    </SafeAreaView>
  );
};

export default React.memo(RegisterView);
