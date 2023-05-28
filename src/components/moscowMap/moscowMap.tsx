import {FC, useState} from 'react';
import {YMaps, Map, Placemark} from '@pbe/react-yandex-maps';
import type {LngLat} from "@yandex/ymaps3-types";
import North from './districts/north';
import Novomos from './districts/novomos';
import SE from './districts/se';
import South from './districts/south';
import SW from './districts/sw';
import Troickiy from './districts/troickiy';
import East from './districts/east';
import NE from './districts/ne';
import West from './districts/west';
import Zelenograd from './districts/zelenograd';
import NW from './districts/nw';
import CAO from './districts/cao';

import './moscowMap.css';

interface MapPropsI {
    region: string,
    setRegion: React.Dispatch<React.SetStateAction<string>>
}

const MoscowMap: FC<MapPropsI> = (props) => {
    const {region, setRegion} = props;
    const [activeRegions, setActiveRegions] = useState([0,0,0,0,0,0,0,0,0,0,0,0]);

    return (
        <svg className='map' width="50vw" height="668" viewBox="0 0 863 968" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Novomos isActive={activeRegions[4]} setActiveRegions={setActiveRegions} setRegion={setRegion}/>
            <Troickiy isActive={activeRegions[9]} setActiveRegions={setActiveRegions} setRegion={setRegion}/>
            <South isActive={activeRegions[7]} setActiveRegions={setActiveRegions} setRegion={setRegion}/>
            <SE isActive={activeRegions[6]} setActiveRegions={setActiveRegions} setRegion={setRegion}/>
            <East isActive={activeRegions[1]} setActiveRegions={setActiveRegions}setRegion={setRegion}/>
            <NE isActive={activeRegions[2]} setActiveRegions={setActiveRegions} setRegion={setRegion}/>
            <North isActive={activeRegions[3]} setActiveRegions={setActiveRegions} setRegion={setRegion}/>
            <NW isActive={activeRegions[5]} setActiveRegions={setActiveRegions} setRegion={setRegion}/>
            <West isActive={activeRegions[10]} setActiveRegions={setActiveRegions} setRegion={setRegion}/>
            <Zelenograd isActive={activeRegions[11]} setActiveRegions={setActiveRegions} setRegion={setRegion}/>
            <SW isActive={activeRegions[8]} setActiveRegions={setActiveRegions} setRegion={setRegion}/>
            <CAO isActive={activeRegions[0]} setActiveRegions={setActiveRegions} setRegion={setRegion}/>
        </svg>
    );
};

export default MoscowMap;
