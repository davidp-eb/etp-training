export const validate = values => {
    const errors = {};
    if (!values.search) {
      errors.search = 'Search Field is Required.';
    } else if (values.search.length < 3) {
      errors.search = 'Must be 4 characters or more.';
    }

    return errors;
}

export const warn = values => {
    const warnings = {}
    if (values.search == 'David') {
      warnings.search = 'Hello David!';
    }

    return warnings;
  }