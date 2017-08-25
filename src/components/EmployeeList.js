import _ from 'lodash';
import React from 'react';
import ReactNative from 'react-native';
import { connect } from 'react-redux';
import { employeeFetch } from '../actions';
import ListItem from './ListItem';

class EmployeeList extends React.Component {
  componentWillMount() {
    this.props.employeeFetch();

    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    //nextProps are the next set of props that this component
    //will be rendered with
    //this.props is still the old set of props

    this.createDataSource(nextProps);
  }

  createDataSource({ employees }) {
    const ds = new ReactNative.ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(employees);
  }

  renderRow() {
    return <ReactNative.ListItem employee={employee} />;
  }

  render() {
    return (
      <ReactNative.ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}

const mapStateToProps = state => {
  const employees = _.map(state.employees, (val, uid) => {
    return { ...val, uid }; // { shift : 'Monday', name: 'S', id: '1j2j34'}
  });

  return { employees };
};

export default connect(mapStateToProps, { employeeFetch })(EmployeeList);
