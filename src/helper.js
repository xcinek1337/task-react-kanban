export function validate(data, values) {
    const errors = [];

    data.forEach(({ name, validation }) => {
        const value = values[name];

        if (validation.isReq && (!value || value.trim() === '')) {
          errors.push(`pole ${name} jest wymagane.`);
        }
    });
    return errors;
} 
export function getInitFormValues(){

    const fieldsList = [
        { name: 'name', type: 'text', defaultValue: '', validation: { isReq: true } },
        { name: 'describe', type: 'textarea', validation: { isReq: false } },
        { name: 'user', type: 'text', defaultValue: '', validation: { isReq: true } },
    ];
    
    const init = {};
    
    fieldsList.forEach(({ name, defaultValue }) => {
        init[name] = defaultValue;
    });

    return {init, fieldsList}
}