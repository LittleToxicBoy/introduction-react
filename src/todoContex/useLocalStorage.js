import React from "react";

function useLocalStorage(itemName, initialValue) {
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);
    const [item, setitem] = React.useState(initialValue);

    React.useEffect(() => {
        setTimeout(() => {
            try {
                //localStorage
                const localStorageItem = localStorage.getItem('TODOS_V1');
                let parsedItem;

                if (!localStorageItem) {
                    localStorage.setItem(itemName, JSON.stringify(initialValue));
                    parsedItem = initialValue;
                } else {
                    parsedItem = JSON.parse(localStorageItem);
                }

                setitem(parsedItem);
                setLoading(false);
            } catch (error) {
                setError(error);
            }
        }, 1000);
    });

    const saveItem = (newitem) => {
        try {
            const strinfieditem = JSON.stringify(newitem);
            localStorage.setItem(itemName, strinfieditem);
            setitem(newitem);
        } catch (error) {
            setError(error);
        }
    };

    return {
        item,
        saveItem,
        loading,
        error,
    };
}

export {useLocalStorage};