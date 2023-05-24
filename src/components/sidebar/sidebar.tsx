import {FC} from 'react';

import './sidebar.css';

interface SidebarPropsI {
    region: string
}

const Sidebar: FC<SidebarPropsI> = (props) => {
    return (
        <aside className='sidebar'>
            <h1 className="title sidebar__title">Расчет стоимости инвестиций</h1>
            <div className="sidebar__data">
                <div className="select-wrapper sidebar__input">
                    <span className="select__label">Хозяйственная деятельность</span>
                    <select className="select" name=''>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                    </select>
                </div>
                <label htmlFor="employees" className="input__label sidebar__input">
                    <input
                        type="text" 
                        className="input" 
                        id="employees"
                        required
                    />
                    <span className="input__label-text">Численность сотрудников</span>
                </label>
                <label htmlFor="square" className="input__label sidebar__input">
                    <input
                        type="text" 
                        className="input" 
                        id="square"
                        required
                    />
                    <span className="input__label-text">Предполагаемая площадь</span>
                </label>
                <label htmlFor="objects-square" className="input__label sidebar__input">
                    <input
                        type="text" 
                        className="input" 
                        id="objects-square"
                        required
                    />
                    <span className="input__label-text">Площадь объектов строительства</span>
                </label>
                <div className="select-wrapper sidebar__input">
                    <span className="select__label">Использование оборудования</span>
                    <select className="select" name=''>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                    </select>
                </div>
                <div className="select-wrapper sidebar__input">
                    <span className="select__label">Тип сооружения</span>
                    <select className="select" name=''>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                    </select>
                </div>
                <div className="select-wrapper sidebar__input">
                    <span className="select__label">Предоставление бухгалтерских услуг</span>
                    <select className="select" name=''>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                    </select>
                </div>
                <div className="select-wrapper sidebar__input">
                    <span className="select__label">Оформление патента</span>
                    <select className="select" name=''>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                    </select>
                </div>
                <div className="select-wrapper sidebar__input">
                    <span className="select__label select__label_left">Расположение производства</span>
                    <span id="region">
                        {props.region || 'Выберете на карте'}
                    </span>
                </div>
            </div>
            <button className="btn btn_large">Рассчитать</button>
        </aside>
    );
};

export default Sidebar;