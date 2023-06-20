import React, { useState, useEffect }from 'react'

import { listProvince, listAmphure, listDistrict } from '../functions/locations';

const DropdownPages = () => {
    const [ province, setProvince] = useState([])
    const [ amphure, setAmphure] = useState([])
    const [ district, setDistrict] = useState([])

    useEffect(() => {
        loadData()
    }, [])
    const loadData = () => {
        listProvince()
            .then(res => {
                setProvince(res.data)
            }).catch(err => {
                console.log(err)
            })
    }
    const onChangeProvince = (id) => {
        listAmphure(id)
            .then(res => {
                setAmphure(res.data)
            }).catch(err => {
                console.log(err)
            })
    }
    const onChangeAmphure = (id) => {
        listDistrict(id)
            .then(res => {
                setDistrict(res.data)
            }).catch(err => {
                console.log(err)
            })
    }
    const onChangeDistrict = (id) => {
        console.log(id)
    }

    return (
        <div>
            <h1>Dropdown Page</h1>
            <form>
                <select onChange={(e)=> onChangeProvince(e.target.value)}>
                    {province.map((item, index) =>
                    <option 
                        key={index} 
                        value={item.id}>
                        {item.name_th}
                    </option>
                    )}
                </select>

                <select onChange={(e)=> onChangeAmphure(e.target.value)}>
                    {amphure.map((item, index) =>
                    <option 
                        key={index} 
                        value={item.id}>
                        {item.name_th}
                    </option>
                    )}
                </select>

                <select onChange={(e)=> onChangeDistrict(e.target.value)}>
                    {district.map((item, index) =>
                    <option 
                        key={index} 
                        value={item.id}>
                        {item.name_th}
                    </option>
                    )}
                </select>
            </form>
        </div>
    )
}

export default DropdownPages