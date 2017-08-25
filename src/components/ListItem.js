import React from 'react';
import ReactNative from 'react-native';
import { CardSection } from './common';
import { Actions } from 'react-native-router-flux';

class ListItem extends React.Component {
  onRowPress() {
    Actions.employeeEdit({ employee: this.props.employee });
  }
  render() {
    const { name } = this.props.employee;

    return (
      <ReactNative.TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
        <ReactNative.View>
          <CardSection>
            <ReactNative.Text style={styles.titleStyle}>
              {name}
            </ReactNative.Text>
          </CardSection>
        </ReactNative.View>
      </ReactNative.TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

export default ListItem;
