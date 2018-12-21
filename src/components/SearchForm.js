import React, { Component } from 'react';
import ValidationFormField from 'eventbrite_design_system/validationFormField/ValidationFormField';
import InputField from 'eventbrite_design_system/inputField/InputField';
import SelectField from 'eventbrite_design_system/inputField/SelectField';
import Button from 'eventbrite_design_system/button/Button';
import PropTypes from 'prop-types';
import {FORMATTED_CATEGORY_MAPPING} from '../constants/constants';

const shouldDisplayError = ({error, submitFailed, touched}) => (!!error && (submitFailed || touched));

export default class SearchForm extends Component {
    static propTypes = {
        handleSubmit: PropTypes.func.isRequired,
        submitFailed: PropTypes.bool,
        error: PropTypes.string,
    }

    render() {
        const {handleSubmit, submitFailed, error} = this.props;
        let submitError;

        if (submitFailed && error) {
            submitError = 'Ha ocurrido un error por buscar David.';
        }

        return (
            <div className="eds-g-grid">
                <div className="eds-g-cell eds-g-cell-12-12">
                    <form onSubmit={handleSubmit}>
                        <div className="eds-g-cell eds-g-cell-8-12 eds-align--center">
                            {submitError}
                            <ValidationFormField
                                label=""
                                name="search"
                                shouldDisplayError={shouldDisplayError}
                            >
                                <InputField
                                    id="search-field"
                                    type="text"
                                    name="search-field"
                                    label="Search"
                                    placeholder="Type event name..."
                                    data-spec="search-field"
                                />
                            </ValidationFormField>
                        </div>
                        <div className="eds-g-cell eds-g-cell-6-12 eds-align--center">
                            <ValidationFormField
                                label=""
                                name="category"
                                shouldDisplayError={shouldDisplayError}
                            >
                                <SelectField
                                    values={FORMATTED_CATEGORY_MAPPING}
                                />
                            </ValidationFormField>
                        </div>
                        <div className="eds-g-cell eds-g-cell-8-12 eds-align--center">
                            <Button
                                type="submit"
                                onClick={handleSubmit}
                                style="fill"
                            >
                                Submit
                            </Button>
                        </div>
                        <div className="eds-g-cell eds-g-cell-8-12 eds-align--center">
                            <Button
                                type="submit"
                                onClick={handleSubmit}
                            >
                                Reset
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
