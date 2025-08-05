import React from 'react';

const Preferences = ({newProdInfo, updateProdInfo, onUpdateInfo}) => {
    return (
        <div>
            <label htmlFor="">New info</label>
            <input type="checkbox"
            checked = {newProdInfo} 
            onChange={(e)=> onUpdateInfo('pref-new', e)}/>



<label htmlFor="">Update product</label>
            <input type="checkbox"
            checked = {updateProdInfo} 
            onChange={(e)=> onUpdateInfo('pref-update', e)}/>
        </div>
    );
};

export default Preferences;