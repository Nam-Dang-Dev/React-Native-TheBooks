import React from 'react';
import SpecialInput from '../../components/SpecialInput';
import {
  StyleSheet,
  View,
  Image,
  ScrollView,
  Text,
  ActivityIndicator,
} from 'react-native';
import TouchableButton from '../../components/TouchableButton';
import {Navigation} from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import * as loginActions from '../../redux/auth/Login/actions';
import {connect} from 'react-redux';
import {Colors} from '../../themes';
import Icons from 'react-native-vector-icons/thebook-appicon';

class Login extends React.Component {
  static options(passProps) {
    return {
      topBar: {},
    };
  }
  constructor(props) {
    super(props);
  }

  focusNextField(nextField) {
    this[nextField].focus();
  }
  onLogIn = () => {
    if (!this.email.getText()) {
      this.email.focus();
      return null;
    }

    if (!this.password.getText()) {
      this.password.focus();
      return null;
    }
    const data = {
      grant_type: 'password',
      username: this.email.getText(),
      password: this.password.getText(),
    };

    this.props.login(data);
  };

  onPush = () => {
    Navigation.push(this.props.componentId, {
      component: {
        name: 'Register',
        passProps: {
          text: 'Pushed screen',
        },
        options: {
          topBar: {
            title: {
              text: 'Đăng ký',
              fontSize: 22,
              fontFamily: 'SVN-ProximaNova',
              alignment: 'center',
            },
          },
        },
      },
    });
  };

  render() {
    return (
      <ScrollView style={{top: 20}}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Text style={{fontSize: 25, fontFamily: 'SVN-ProximaNova'}}>
            Đăng nhập
          </Text>
        </View>

        <View
          style={{
            flex: 1,
            marginHorizontal: 20,
            top: 20,
          }}>
          <SpecialInput
            title="Email"
            ref={ref => {
              this.email = ref;
            }}
            isRequired
            validateType="email"
            value="namdang@gmail.com"
            errorMessage={'Email không hợp lệ'}
            placeholder={'Nhập Email'}
            onSubmitEditing={() => {
              this.focusNextField('password');
            }}
          />

          <SpecialInput
            title="Mật khẩu"
            ref={ref => {
              this.password = ref;
            }}
            // secureTextEntry
            isRequired
            validateType="password"
            value="123456789"
            errorMessage={'Mật khẩu không hợp lệ'}
            placeholder={'Nhập mật khẩu'}
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableButton
            title={'Đăng nhập'}
            style={styles.button}
            buttonColor={Colors.lightBlue}
            onPress={this.onLogIn}
            textStyle={styles.textButton}
            loading={this.props.isLoading}
          />
          <TouchableButton
            title={'Đăng ký'}
            style={styles.button}
            buttonColor={Colors.lightBlue}
            onPress={this.onPush}
            textStyle={styles.textButton}
            isOutlineMode={true}
          />
        </View>

        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontFamily: 'SVN-ProximaNova',
              color: Colors.darkGray,
              fontSize: 17,
              fontWeight: '100',
            }}>
            Quên mật khẩu?
          </Text>
        </View>
      </ScrollView>
    );
  }
}
const mapStateToProps = state => {
  return {
    isLoading: state.loginReducer.loginLoading,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    //register: data => dispatch(registerAction.register(data)),
    login: data => dispatch(loginActions.login(data)),
  };
};

const styles = StyleSheet.create({
  titleContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 40,
  },
  title: {fontSize: 30},
  button: {
    top: 10,
    width: 140,
    borderRadius: 3,
    marginHorizontal: 8,
    height: 45,
  },
  textButton: {fontSize: 16, fontFamily: 'SVN-ProximaNova'},
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
