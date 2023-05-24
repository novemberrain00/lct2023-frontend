import {FC, useState} from 'react';
import {YMaps, Map, Placemark} from '@pbe/react-yandex-maps';
import type {LngLat} from "@yandex/ymaps3-types";

interface MapPropsI {
    region: string,
    setRegion: React.Dispatch<React.SetStateAction<string>>
}

const MoscowMap: FC<MapPropsI> = (props) => {
    const {region, setRegion} = props;
    const [placemarkCoords, setPlacemarkCoords] = useState<LngLat>([0, 0]);

    const getInfoByCoords = async (coords: LngLat) => {
        await fetch(`https://geocode-maps.yandex.ru/1.x/?apikey=3fbc026e-5f59-4a08-95e2-c873958968ac&geocode=${coords[1]},${coords[0]}&format=json&results=5`)
        .then(res => res.json())
        .then(res => {
            
            const regs = res.response.GeoObjectCollection.featureMember.filter((item:any) => item.GeoObject.metaDataProperty.GeocoderMetaData.kind === 'district')
            if(regs.length > 1) {
                setPlacemarkCoords(coords);
                setRegion(regs[regs.length - 1].GeoObject.name);
            } else {
                setRegion('Кликните на территорию Москвы');
            }
        })
        .catch(err => {
            setRegion('Кликните на территорию Москвы');
            console.log(err)
        });
    };
    return (
        <>
            {region}
            <YMaps>
                <Map width={"99.5vw"} height={"93vh"} onClick={(e: any) => getInfoByCoords(e.get('coords'))} defaultState={{ center: [55.75, 37.57], zoom: 9 }}>
                    {region ? 
                        <Placemark
                            geometry={placemarkCoords}
                        />
                    :null}
                </Map>
            </YMaps>
        </>
    );
};

export default MoscowMap;
