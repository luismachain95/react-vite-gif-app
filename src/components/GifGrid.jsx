import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { Flex } from 'antd';

export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs( category );
    
    return (
        <>
            <h4>Resultados para: { category }</h4>
            {
                isLoading && ( <h2>Cargando...</h2> )
            }
            

            <Flex
                justify="space-around"
                gap="large"
                wrap
            >
                {
                    images.map( ( image ) => (
                        <GifItem 
                            key={ image.id } 
                            { ...image }
                        />
                    ))
                }
                
            </Flex>

        </>
    )
}
