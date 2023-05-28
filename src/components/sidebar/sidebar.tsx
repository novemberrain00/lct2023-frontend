import {FC, useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {
    setIndustry, 
    setSubindustry, 
    setEmployeesNum, 
    setSquare, 
    setBuildsSquare, 
    setPlace,
    setGlobalHardware,
    setCalculationsType,
    setGlobalHardwareSum
} from '../../redux/countDataSlice';
import type {RootState} from '../../store';
import {devDomain} from '../../vars';

import './sidebar.css';


interface SidebarPropsI {
    region: string, 
}

interface IndustryI {
    id: number,
    industry_name: string
}

interface SubindustryI {
    earning_tax: number,
    industry_id: number,
    land_tax: number,
    midsalary: number,
    other_tax: number,
    prop_tax: number,
    subindustry_name: string,
    total_tax: number,
    transport_tax: number,
}

interface HardwareI {
    id: number,
    name: string,
    price: number
}

const Sidebar: FC<SidebarPropsI> = (props) => {
    const navigate = useNavigate();
    const {
        industry, 
        subindustry, 
        employees_number, 
        square,
        builds_square,
        hardware
    } = useSelector((state: RootState) => state.countDataSlice);

    const [inds, setInds] = useState<IndustryI[]>([]);
    const [subinds, setSubinds] = useState<SubindustryI[]>([]);
    const [activeTab, setActiveTab] = useState(1); //true - основной раздел, false - второй
    const [localHardware, setLocalHardware] = useState<HardwareI[]>([]);

    const clickHandler = () => {
        if(activeTab) {
            if(industry && employees_number && square && builds_square && props.region) {
                navigate('/results');
            } else {
                alert('lol')
            }
        } else {
            if(employees_number && square && props.region) {
                navigate('/results');
            } else {
                alert('lol');
            }
        }
        
    } ;

    const dispatch = useDispatch();

    const getAllIndustries = async () => {
        const industries = await fetch(`${devDomain}/industries/all`)
        .then(res => res.json())
        .then(res => setInds(res.result));
        return industries;
    };

    const getSubindustries = async (industry: number) => {
        await fetch(`${devDomain}/industries/subindustries/?id=${industry}`)
        .then(res => res.json())
        .then(res => setSubinds(res.result))
    };

    const getHardware = async () => {
        await fetch(`${devDomain}/industries/hardware`)
        .then(res => res.json())
        .then(res => setLocalHardware(res.result))
    }

    useEffect(() => {
        getAllIndustries();
        getHardware();
        sessionStorage.setItem('type', '1');
    }, []);
    useEffect(() => {getSubindustries(industry)}, [industry]);
    useEffect(() => {dispatch(setPlace(props.region))}, [props.region]);

    return (
        <aside className='sidebar'>
            <div className="sidebar__header">
                <h3 
                    onClick={() => {
                        setActiveTab(1);
                        dispatch(setCalculationsType(1));
                        sessionStorage.setItem('type', '1');
                        setIndustry(1);
                        dispatch(setGlobalHardware(0));
                    }} 
                    className={activeTab ? "sidebar__header-tab sidebar__header-tab_active" : "sidebar__header-tab"}
                >Расчет</h3>
                <h3 
                    onClick={() => {
                        setActiveTab(0);
                        dispatch(setCalculationsType(0));
                        sessionStorage.setItem('type', '0');
                        setIndustry(1);
                        dispatch(setGlobalHardware(0));
                    }} 
                    className={!activeTab ? "sidebar__header-tab sidebar__header-tab_active" : "sidebar__header-tab"}
                >Инвестировать</h3>
            </div>
            <div className={activeTab? "sidebar__data sidebar__data_visible" : "sidebar__data"}>
                <h1 className="title sidebar__title">Расчет стоимости инвестиций</h1>
                <div className="select-wrapper sidebar__input">
                    <span className="select__label">Основная отрасль</span>
                    <select
                        onChange={(e) => {
                            dispatch(setIndustry(+(e.target as HTMLSelectElement).value));
                        }}
                        className="select" 
                        name='industry'
                    >
                        {
                            inds.map((ind, i) => {
                                return <option key={ind.industry_name + ''} value={ind.id}>{ind.industry_name}</option>
                            })
                        }
                    </select>
                </div>
                {subinds.filter(item => item.subindustry_name).length > 1 ?
                    <div className="select-wrapper sidebar__input">
                        <span className="select__label">Подотрасль</span>
                        <select 
                            onChange={(e) => {
                                dispatch(setSubindustry(+(e.target as HTMLSelectElement).value));
                            }}
                            className="select" 
                            name='subindustry'
                        >
                            {
                                subinds.map((subind, i) => {
                                    return subind.subindustry_name ? <option key={i+''} value={i}>{subind.subindustry_name}</option> : null
                                })
                            }
                        </select>
                    </div>
                : null}
                <label htmlFor="employees" className="input__label sidebar__input">
                    <input
                        onChange={(e) => {
                            dispatch(setEmployeesNum(+(e.target as HTMLInputElement).value))
                        }}
                        type="text" 
                        className="input" 
                        id="employees"
                        required
                    />
                    <span className="input__label-text">Численность сотрудников</span>
                </label>
                <label htmlFor="square" className="input__label sidebar__input">
                    <input
                        onChange={(e) => {
                            dispatch(setSquare(+(e.target as HTMLInputElement).value))
                        }}
                        type="text" 
                        className="input" 
                        id="square"
                        required
                    />
                    <span className="input__label-text">Предполагаемая площадь</span>
                </label>
                <label htmlFor="objects-square" className="input__label sidebar__input">
                    <input
                        onChange={(e) => {
                            dispatch(setBuildsSquare(+(e.target as HTMLInputElement).value))
                        }}
                        type="text" 
                        className="input" 
                        id="objects-square"
                        required
                    />
                    <span className="input__label-text">Площадь объектов строительства</span>
                </label>
                <div className="select-wrapper sidebar__input">
                    <span className="select__label">Использование оборудования</span>
                    <select 
                        onChange={(e) => {
                            dispatch(setGlobalHardware(+(e.target as HTMLSelectElement).value))
                        }}
                        className="select" 
                        name='hardware'
                    >
                        <option 
                            value="0"
                        >Не использовать оборудование</option>
                        {
                            localHardware.map((item, i) => {
                                return <option key={i+''} value={item.id}>{item.name}</option>
                            })
                        }
                    </select>
                </div>
                <div className="select-wrapper sidebar__input">
                    <span className="select__label select__label_left">Расположение предприятия</span>
                    <span id="region">
                        {props.region || 'Выберете на карте'}
                    </span>
                </div>
            </div>
            <div className={activeTab? "sidebar__data" : "sidebar__data sidebar__data_visible"}>
                <h1 className="title sidebar__title">Расчет результата инвестиций</h1>
                <div className="select-wrapper sidebar__input">
                    <span className="select__label">Основная отрасль</span>
                    <select
                        onChange={(e) => {
                            dispatch(setIndustry(+(e.target as HTMLSelectElement).value));
                        }}
                        className="select" 
                        name='industry'
                    >
                        {
                            inds.map((ind, i) => {
                                return <option key={ind.industry_name + ''} value={ind.id}>{ind.industry_name}</option>
                            })
                        }
                    </select>
                </div>
                {subinds.filter(item => item.subindustry_name).length > 1 ?
                    <div className="select-wrapper sidebar__input">
                        <span className="select__label">Подотрасль</span>
                        <select 
                            onChange={(e) => {
                                dispatch(setSubindustry(+(e.target as HTMLSelectElement).value));
                            }}
                            className="select" 
                            name='subindustry'
                        >
                            {
                                subinds.map((subind, i) => {
                                    return subind.subindustry_name ? <option key={i+''} value={i}>{subind.subindustry_name}</option> : null
                                })
                            }
                        </select>
                    </div>
                : null}
                <label htmlFor="employees" className="input__label sidebar__input">
                    <input
                        onChange={(e) => dispatch(setEmployeesNum(+(e.target as HTMLInputElement).value))}
                        type="text" 
                        className="input" 
                        id="employees"
                        required
                    />
                    <span className="input__label-text">Траты на сотрудников</span>
                </label>
                <label htmlFor="rent" className="input__label sidebar__input">
                    <input
                        onChange={(e) => dispatch(setSquare(+(e.target as HTMLInputElement).value))}
                        type="text" 
                        className="input" 
                        id="rent"
                        required
                    />
                    <span className="input__label-text">Траты на недвижимлсть</span>
                </label>
                <div className="select-wrapper sidebar__input">
                    <span className="select__label">Использование оборудования</span>
                    <select 
                        onChange={(e) => {
                            dispatch(setGlobalHardware(+(e.target as HTMLSelectElement).value))
                        }}
                        className="select" 
                        name='hardware'
                    >
                        <option 
                            value="0"
                        >Не использовать оборудование</option>
                        {
                            localHardware.map((item, i) => {
                                return <option key={i+''} value={item.id}>{item.name}</option>
                            })
                        }
                    </select>
                </div>
                {hardware ? <label htmlFor="hardware-sum" className="input__label sidebar__input">
                    <input
                        onChange={(e) => dispatch(setGlobalHardwareSum(+(e.target as HTMLInputElement).value))}
                        type="text" 
                        className="input" 
                        id="hardware-sum"
                        required
                    />
                    <span className="input__label-text">Сумма закупки оборудования</span>
                </label>:null }
                <div className="select-wrapper sidebar__input">
                    <span className="select__label select__label_left">Расположение предприятия</span>
                    <span id="region">
                        {props.region || 'Выберете на карте'}
                    </span>
                </div>
            </div>
            <button onClick={() => clickHandler()} className="btn btn_large sidebar__btn">Рассчитать</button>
        </aside>
    );
};

export default Sidebar;