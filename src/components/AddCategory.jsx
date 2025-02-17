import { useState } from 'react';
import { Input } from 'antd';

export const AddCategory = ({ onNewCategory }) => {

    const [ inputValue, setInputValue ] = useState('');

    const onInputChange = ({ target }) => {
        setInputValue( target.value );
    }

    const onSubmit = ( event ) => {
        event.preventDefault();
        if( inputValue.trim().length <= 1) return;

        setInputValue('');
        onNewCategory( inputValue.trim() );
    }

    return (
        <form onSubmit={ onSubmit }>
            <Input 
                size="large"
                type="text"
                placeholder="Buscar gifs"
                value={ inputValue }
                onChange={ onInputChange }
            />
        </form>
    )
}
