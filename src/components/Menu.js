import React, { useState } from 'react';

const Menu = () => {
    const [menuType, setMenuType] = useState('breakfast');

    const showBreakfast = () => {
        setMenuType('breakfast');
    };

    const showLunchDinner = () => {
        setMenuType('lunchDinner');
    };

    const showOnRequest = () => {
        setMenuType('onRequest');
    };

    return (
        <div>
            <h1>Menu:</h1>
            <div className="button-container">
                <button onClick={showBreakfast}>Breakfast</button>
                <button onClick={showLunchDinner}>Lunch/Dinner</button>
                <button onClick={showOnRequest}>On Request</button>
            </div>
            <div className="menu-images" style={{ textAlign: 'center' }}>
                {menuType === 'breakfast' && (
                    <img src="breakfast.webp" alt="breakfast" />
                )}
                {menuType === 'lunchDinner' && (
                    <img src="lunch-dinner 1.webp" alt="lunch/dinner 1" />
                )}
                {menuType === 'onRequest' && (
                    <img src="lunch-dinner 2.webp" alt="lunch/dinner 2" />
                )}
            </div>
        </div>
    );
};

export default Menu;