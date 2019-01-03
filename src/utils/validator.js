export const validate = values => {
    const errors = {};
    if (values.search && values.search.length > 20) {
      errors.search = 'Must be 20 characters as maximum.';
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