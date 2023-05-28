import {FC, useEffect, useState} from 'react';
import Header from '../../components/header/header';
import Rate from '../../components/rate/rate';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {setGlobalHardware, setGlobalHardwareSum, setIndustry, setSquare, setSubindustry} from '../../redux/countDataSlice';
import {saveAs} from 'file-saver';
import type {RootState} from '../../store';

import CalcIcon from "../../static/icons/calc-icon.svg";
import './countPage.css'
import {devDomain} from '../../vars';

interface TotalRateI {
    employees: number,
    rent: number,
    taxes: number,
    other: number
}

interface DataToCalcI {
    earning_tax: number
    industry_id: number
    land_tax: number
    midsalary: number
    ndfl: number
    other_tax: number
    prop_tax: number
    subindustry_name: string
    total_tax: number
    transport_tax: number
}

const CountPage: FC = () => {
    const {
        industry, 
        subindustry, 
        employees_number, 
        square,
        place,
        hardware,
        calculationsType,
        globalHardwareSum
    } = useSelector((state: RootState) => state.countDataSlice);
    const dispatch = useDispatch();

    const [dataToCalc, setDataToCalc] = useState<DataToCalcI>({
        earning_tax: 0,
        industry_id: 0,
        land_tax: 0,
        midsalary: 0,
        ndfl: 0,
        other_tax: 0,
        prop_tax: 0,
        subindustry_name: '',
        total_tax: 0,
        transport_tax: 0,
    });

    const [hardwarePrice, setHardwarePrice] = useState<number>(0);

    const [total, setTotal] = useState<TotalRateI>({
        employees: 0,
        rent: 0,
        taxes: 0 ,
        other: 0,
    });

    const getIndustryData = async (industry: number) => {
        await fetch(`${devDomain}/industries/subindustries/?id=${industry}`)
        .then(res => res.json())
        .then(res => {
            setDataToCalc(res.result[subindustry]);
        });
    };

    const getHardwarePrice = async (hardware: number) => {
        await fetch(`${devDomain}/industries/hardware`)
        .then(res => res.json())
        .then(res => {
            setHardwarePrice(res.result[hardware-1]?.price);
        });
    };

    useEffect(() => {
        getIndustryData(industry);
        getHardwarePrice(hardware)
    }, []);

    useEffect(() => {
        const {
            earning_tax,
            industry_id,
            land_tax,
            midsalary,
            ndfl,
            other_tax,
            prop_tax,
            total_tax,
            transport_tax,
        } = dataToCalc;

        let totalRentPrice = 0;

        switch(place) {
            case 'Центральный АО':
                totalRentPrice = +calculationsType ?  63274.79*square : square/63274.79;
                break;
            case 'Юго-Западный АО':
                totalRentPrice = +calculationsType ? 16423.1*square : square/16423.1;
                break;
            case 'Зеленоградский АО':
                totalRentPrice =  +calculationsType ? 4111.5*square : square / 4111.5;
                break;
            case 'Западный АО':
                totalRentPrice =  +calculationsType ? 11703.2 * square : square / 11703.2;
                break;
            case 'Северо-Западный АО':
                totalRentPrice =  +calculationsType ? 19961.59 * square : square / 19961.59;
                break;
            case 'Северный АО':
                totalRentPrice =  +calculationsType ? 20532.99 * square : square / 20532.99;
                break;
            case 'Северо-Восточный АО':
                totalRentPrice =  +calculationsType ? 10485.33 * square : square / 10485.33;
                break;
            case 'Восточный АО':
                totalRentPrice =  +calculationsType ? 15492.36 * square : square / 15492.36;
                break;
            case 'Юго-Восточный АО':
                totalRentPrice =  +calculationsType ? 14086.97 * square : square / 14086.97;
                break;
            case 'Южный АО':
                totalRentPrice =  +calculationsType ? 13510.37 * square : square / 13510.37;
                break;
            case 'Троицкий АО':
                totalRentPrice = +calculationsType ? 2890.51 * square : square / 2890.51;
                break;
            case 'Новомосковский АО':
                totalRentPrice = +calculationsType ? 5333.94 * square : square / 5333.94;
                break;

        }

        if(+(sessionStorage.getItem('type') as string)) {
            setTotal({
                employees: Math.round(midsalary*employees_number*1000), //employees_number * dataToCalc.midsalary,
                rent: Math.round(totalRentPrice),
                taxes: Math.round((earning_tax + land_tax + land_tax + transport_tax + other_tax + prop_tax + total_tax + ndfl) * 1000),
                other: hardwarePrice
            });
        } else {
            setTotal({
                employees: Math.round(employees_number / (midsalary * 1000)),
                rent: Math.round(totalRentPrice), 
                taxes: Math.round((earning_tax + land_tax + land_tax + transport_tax + other_tax + prop_tax + total_tax + ndfl) * 1000),
                other: Math.round(globalHardwareSum / hardwarePrice)
            });
            
        }
    }, [hardwarePrice]);

    const createAndDownloadPdf = async () => {
        const industryName = await fetch(`${devDomain}/industries/industry/?id=${industry}`)
        .then(res => res.json()).then(res => res.result[0].industry_name);

        await fetch(`${devDomain}/industries/generate-report`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                industry: industryName,
                employees: employees_number,
                region: place,
                totalRate: new Intl.NumberFormat("ru", {style: "currency", currency: "RUB"}).format(total.employees + total.other + total.rent + total.taxes),
                employeesRate: new Intl.NumberFormat("ru", {style: "currency", currency: "RUB"}).format(total.employees),
                rentRate: new Intl.NumberFormat("ru", {style: "currency", currency: "RUB"}).format(total.rent),
                taxes: new Intl.NumberFormat("ru", {style: "currency", currency: "RUB"}).format(total.taxes),
                other: new Intl.NumberFormat("ru", {style: "currency", currency: "RUB"}).format(total.other)
            })
        })
        .then(async () => {
            await fetch(`${devDomain}/industries/get-report`)
            .then(res => res.blob())
            .then((res) => {
                const pdfBlob = new Blob([res], {type: 'application/pdf'});
        
                saveAs(pdfBlob, 'отчёт.pdf');
              })
            .catch(err => console.log(err));
        })
        .catch(err => console.log(err));;
        
    }

    const totalBlock = +(sessionStorage.getItem('type') as string) ? <>
        <h2 className="title counter-title">Итоговые значения возможных затрат</h2>
            <div className="counter-subtitle">
                <div className="counter-subtitle__total">
                    <img src={CalcIcon + ''} alt="расчет" className="counter-subtitle__img" />
                    <div>
                        <div className="counter-subtitle__row">~ в  российских рублях, ₽</div>
                        <div className="counter-subtitle__row counter-subtitle__price">
                        {
                            total.other ? Math.round(total.employees + total.other + total.rent + total.taxes)
                            :Math.round(total.employees + total.rent + total.taxes)
                        }
                        </div>
                    </div>
                </div>
                <button onClick={() => createAndDownloadPdf()} className="btn">Скачать полный отчет</button>
            </div>
            <h2 className="title counter-title">Детали расходов</h2>
            <div className="counter-rates">
                <Rate name="Персонал" data={new Intl.NumberFormat("ru", {style: "currency", currency: "RUB"}).format(total.employees)}/>
                <Rate name="Аренда объектов недвижимости" data={new Intl.NumberFormat("ru", {style: "currency", currency: "RUB"}).format(total.rent)}/>
                <Rate name="Налоги" data={new Intl.NumberFormat("ru", {style: "currency", currency: "RUB"}).format(total.taxes)}/>
                {hardwarePrice ? <Rate name="Оборудование" data={new Intl.NumberFormat("ru", {style: "currency", currency: "RUB"}).format(total.other)}/> : null}
            </div>
    </>
    : 
    <>
        <h2 className="title counter-title">Приблизительные результаты инвестиций</h2>
        <h2 className="title counter-title">Детали расходов</h2>
        <div className="counter-rates">
            <Rate name="Персонал" data={total.employees + ' чел'}/>
            <Rate name="Возможная площадь помещения" data={total.rent + ' кв.м'}/>
            {total.other > 0 ? <Rate name="Оборудование" data={total.other + ' станков'}/> : null}
        </div>
    </>;

    return (
        <>
            <Header/>
            <div className="container">
                <div className="back-link-wrapper">
                    <Link onClick={()=>{
                        dispatch(setIndustry(1));
                        dispatch(setGlobalHardware(0));
                        dispatch(setSubindustry(0));
                        dispatch(setSquare(0));
                        dispatch(setGlobalHardwareSum(0));
                    }} to="/">
                        <span className="back-link">
                            <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.5 13L1.5 7L7.5 1" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            Назад
                        </span>
                    </Link>
                </div>
                {totalBlock}
            </div>
        </>
    );
};

export default CountPage;