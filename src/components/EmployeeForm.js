import React from 'react';
import ReactNative from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';
import { CardSection, Input } from './common';

class EmployeeForm extends React.Component {
  render() {
    return (
      <ReactNative.View>
        <CardSection>
          <Input
            label="Name"
            placeholder="Sai"
            value={this.props.name}
            onChangeText={text => this.props.employeeUpdate({ prop: 'name', value: text })}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Phone"
            placeholder="555-555-5555"
            value={this.props.phone}
            onChangeText={value => this.props.employeeUpdate({ prop: 'phone', value })}
          />
        </CardSection>
        <CardSection style={{ flexDirection: 'column' }}>
          <ReactNative.Picker
            style={{ flex: 0 }}
            selectedValue={this.props.shift}
            onValueChange={day => this.props.employeeUpdate({ prop: 'shift', value: 'day' })}
          >
            <ReactNative.Picker.Item label="Monday" value="Monday" />
            <ReactNative.Picker.Item label="Wednesday" value="Wednesday" />
            <ReactNative.Picker.Item label="Thursday" value="Thursday" />
            <ReactNative.Picker.Item label="Friday" value="Friday" />
            <ReactNative.Picker.Item label="Tuesday" value="Tuesday" />
            <ReactNative.Picker.Item label="Saturday" value="Saturday" />
            <ReactNative.Picker.Item label="Sunday" value="Sunday" />
          </ReactNative.Picker>
        </CardSection>
      </ReactNative.View>
    );
  }
}

const styles = {
  pickerTextStyle: {
    fontSize: 18,
    paddingLeft: 20
  }
};

const mapStatetoProps = state => {
  const { name, phone, shift } = state.employeeform;

  return { name, phone, shift };
};

export default connect(mapStatetoProps, { employeeUpdate })(EmployeeForm);
