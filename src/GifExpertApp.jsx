import { useState } from 'react';
import { AddCategory, GifGrid } from './components';
import { Card } from 'antd';

export const GifExpertApp = () => {
    
    const [ categories, setCategories ] = useState([ 'Dragon Ball' ]);
    
    const onAddCategory = ( newCategory ) => {
        if ( categories.includes(newCategory) ) return;
        setCategories([ newCategory, ...categories ]);
    }
    
    return (
        <Card title="Buscador de Gifs">
            <AddCategory 
                onNewCategory={ (value) => onAddCategory(value) }
            />

            { 
                categories.map( ( category ) => (
                    <GifGrid 
                        key={ category } 
                        category={ category } />
                ))
            }

        </Card>
)
}
