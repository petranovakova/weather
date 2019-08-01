const groupBy = (array, key) => {
    return array.reduce((acc, value) => {
        let v = key instanceof Function ? key(value) : value[key];
        let el = acc.find((r) => r && r.key === v);
        if (el) {
            el.values.push(value);
        } else {
            acc.push({key: v, values: [value]});
        }
        return acc;
    }, []);
};


export default groupBy;