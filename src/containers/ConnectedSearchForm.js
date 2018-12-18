import {connect} from 'react-redux';
import {reduxForm } from 'redux-form';

import SearchForm from '../components/SearchForm';

import {localSearchEvents} from '../actions/events';
import {validate, warn} from '../utils/validator';

const _mapStateToProps = () => ({});

const _mapDispatchToProps = {
    onSubmit: localSearchEvents,  //action search
};

const Search = reduxForm({
    form: 'searchForm',
    validate,
    warn,
})(SearchForm);

const SearchFormConnected = connect(
    _mapStateToProps,
    _mapDispatchToProps
)(Search);

export default SearchFormConnected;
