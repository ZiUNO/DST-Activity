// pages/gorge/gorge.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        istrue: false,
        title: '暴食',
        show: '',
        recipe: {
            name: '食谱',
            display: false,
            content: [{
                id: '1',
                food_url: '../../images/Loaf_of_Bread.png',
                name: '条状面包',
                satisfy: ['零食', '面包'],
                kitchen: [{kitchen_url: '../../images/Small_Casserole_Dish.png', kitchen_text: 'Small Casserole Dish'}],
                reward: [{quantity: 6, coin: '../../images/Old_Coin.png'}],
                silver_reward: [{quantity: 1, coin: '../../images/Sapphire_Medallion.png'}, {
                    quantity: 2,
                    coin: '../../images/Old_Coin.png'
                }],
                formula: [[{kind: 'formula', content: {formula_url: '../../images/Flour.png', formula_quantity: '3'}}]]
            }, {
                id: '2',
                food_url: '../../images/Potato_Chips.png',
                name: '薯片',
                satisfy: ['零食', '素食'],
                kitchen: [{kitchen_url: '../../images/Small_Casserole_Dish.png', kitchen_text: 'Small Casserole Dish'}],
                reward: [{quantity: 6, coin: '../../images/Old_Coin.png'}],
                silver_reward: [{quantity: 1, coin: '../../images/Sapphire_Medallion.png'}, {
                    quantity: 2,
                    coin: '../../images/Old_Coin.png'
                }],
                formula: [[{
                    kind: 'formula',
                    content: {formula_url: '../../images/Potato.png', formula_quantity: '2'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Placeholder.png', formula_quantity: '1'}
                }], [{kind: 'text', content: '('}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Potato.png'}
                }, {kind: 'text', content: ','}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Spot_Spice.png'}
                }, {kind: 'text', content: ')'}]]
            }, {
                id: '3',
                food_url: '../../images/Vegetable_Soup.png',
                name: '蔬菜汤',
                satisfy: ['零食', '汤类', '素食'],
                kitchen: [{kitchen_url: '../../images/Cookpot.png', kitchen_text: 'Cookpot'}],
                reward: [{quantity: 8, coin: '../../images/Old_Coin.png'}],
                silver_reward: [{quantity: 1, coin: '../../images/Sapphire_Medallion.png'}, {
                    quantity: 4,
                    coin: '../../images/Old_Coin.png'
                }],
                formula: [[{
                    kind: 'formula',
                    content: {formula_url: '../../images/Placeholder.png', formula_quantity: '2'}
                }], [{kind: 'text', content: '(任意不同蔬菜)'}], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Placeholder.png', formula_quantity: '1'}
                }], [{kind: 'text', content: '(任意蔬菜)'}]]
            }, {
                id: '4',
                food_url: '../../images/Jelly_Sandwich.png',
                name: '果冻三明治',
                satisfy: ['零食', '面包'],
                kitchen: [{kitchen_url: '../../images/Small_Grill.png', kitchen_text: 'Grill'}],
                reward: [{quantity: 8, coin: '../../images/Old_Coin.png'}],
                silver_reward: [{quantity: 1, coin: '../../images/Sapphire_Medallion.png'}, {
                    quantity: 4,
                    coin: '../../images/Old_Coin.png'
                }],
                formula: [[{
                    kind: 'formula',
                    content: {formula_url: '../../images/Berries.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Flour.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Placeholder.png', formula_quantity: '1'}
                }], [{kind: 'text', content: '('}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Berries.png'}
                }, {kind: 'text', content: ','}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Syrup.png'}
                }, {kind: 'text', content: ')'}]]
            }, {
                id: '5',
                food_url: '../../images/Fish_Stew.png',
                name: '炖鱼',
                satisfy: ['鱼类', '汤类'],
                kitchen: [{kitchen_url: '../../images/Cookpot.png', kitchen_text: 'Cookpot'}],
                reward: [{quantity: 8, coin: '../../images/Old_Coin.png'}],
                silver_reward: [{quantity: 1, coin: '../../images/Sapphire_Medallion.png'}, {
                    quantity: 4,
                    coin: '../../images/Old_Coin.png'
                }],
                formula: [[{
                    kind: 'formula',
                    content: {formula_url: '../../images/Salmon.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Placeholder.png', formula_quantity: '2'}
                }], [{kind: 'text', content: '(任意蔬菜或'}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Salmon.png'}
                }, {kind: 'text', content: ')'}]]
            }, {
                id: '6',
                food_url: '../../images/Turnip_Cake.png',
                name: '萝卜蛋糕',
                satisfy: ['零食', '素食'],
                kitchen: [{kitchen_url: '../../images/Small_Casserole_Dish.png', kitchen_text: 'Small Casserole Dish'}],
                reward: [{quantity: 8, coin: '../../images/Old_Coin.png'}],
                silver_reward: [{quantity: 1, coin: '../../images/Sapphire_Medallion.png'}, {
                    quantity: 4,
                    coin: '../../images/Old_Coin.png'
                }],
                formula: [[{
                    kind: 'formula',
                    content: {formula_url: '../../images/Turnip.png', formula_quantity: '2'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Placeholder.png', formula_quantity: '1'}
                }], [{kind: 'text', content: '('}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Turnip.png'}
                }, {kind: 'text', content: ','}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Carrot.png'}
                }, {kind: 'text', content: ','}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Onion.png'}
                }, {kind: 'text', content: ')'}]]
            }, {
                id: '7',
                food_url: '../../images/Potato_Pancakes.png',
                name: '土豆煎饼',
                satisfy: ['零食', '素食'],
                kitchen: [{kitchen_url: '../../images/Small_Grill.png', kitchen_text: 'Grill'}],
                reward: [{quantity: 8, coin: '../../images/Old_Coin.png'}],
                silver_reward: [{quantity: 1, coin: '../../images/Sapphire_Medallion.png'}, {
                    quantity: 4,
                    coin: '../../images/Old_Coin.png'
                }],
                formula: [[{
                    kind: 'formula',
                    content: {formula_url: '../../images/Potato.png', formula_quantity: '2'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Placeholder.png', formula_quantity: '1'}
                }], [{kind: 'text', content: '('}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Potato.png'}
                }, {kind: 'text', content: ','}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Onion.png'}
                }, {kind: 'text', content: ')'}]]
            }, {
                id: '8',
                food_url: '../../images/Potato_Soup.png',
                name: '土豆汤',
                satisfy: ['零食', '汤类', '素食'],
                kitchen: [{kitchen_url: '../../images/Cookpot.png', kitchen_text: 'Cookpot'}],
                reward: [{quantity: 10, coin: '../../images/Old_Coin.png'}],
                silver_reward: [{quantity: 1, coin: '../../images/Sapphire_Medallion.png'}, {
                    quantity: 7,
                    coin: '../../images/Old_Coin.png'
                }],
                formula: [[{
                    kind: 'formula',
                    content: {formula_url: '../../images/Potato.png', formula_quantity: '2'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Placeholder.png', formula_quantity: '1'}
                }], [{kind: 'text', content: '('}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Potato.png'}
                }, {kind: 'text', content: ','}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Spot_Spice.png'}
                }, {kind: 'text', content: ')'}]]
            }, {
                id: '9',
                food_url: '../../images/Fishball_Skewers.png',
                name: '鱼丸串',
                satisfy: ['零食', '鱼类'],
                kitchen: [{kitchen_url: '../../images/Small_Grill.png', kitchen_text: 'Grill'}],
                reward: [{quantity: 10, coin: '../../images/Old_Coin.png'}],
                silver_reward: [{quantity: 1, coin: '../../images/Sapphire_Medallion.png'}, {
                    quantity: 7,
                    coin: '../../images/Old_Coin.png'
                }],
                formula: [[{
                    kind: 'formula',
                    content: {formula_url: '../../images/Salmon.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Twigs.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Placeholder.png', formula_quantity: '1'}
                }], [{kind: 'text', content: '(任意蔬菜或'}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Salmon.png'}
                }, {kind: 'text', content: ')'}]]
            }, {
                id: '10',
                food_url: '../../images/Meatballs_Gorge.png',
                name: '肉丸',
                satisfy: ['零食', '肉类'],
                kitchen: [{kitchen_url: '../../images/Cookpot.png', kitchen_text: 'Cookpot'}],
                reward: [{quantity: 10, coin: '../../images/Old_Coin.png'}],
                silver_reward: [{quantity: 1, coin: '../../images/Sapphire_Medallion.png'}, {
                    quantity: 7,
                    coin: '../../images/Old_Coin.png'
                }],
                formula: [[{
                    kind: 'formula',
                    content: {formula_url: '../../images/Meat_Scraps.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Placeholder.png', formula_quantity: '2'}
                }], [{kind: 'text', content: '('}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Meat_Scraps.png'}
                }, {kind: 'text', content: ',任意蔬菜)'}]]
            }, {
                id: '11',
                food_url: '../../images/Meat_Skewers.png',
                name: '肉串',
                satisfy: ['零食', '肉类'],
                kitchen: [{kitchen_url: '../../images/Small_Grill.png', kitchen_text: 'Grill'}],
                reward: [{quantity: 10, coin: '../../images/Old_Coin.png'}],
                silver_reward: [{quantity: 1, coin: '../../images/Sapphire_Medallion.png'}, {
                    quantity: 7,
                    coin: '../../images/Old_Coin.png'
                }],
                formula: [[{
                    kind: 'formula',
                    content: {formula_url: '../../images/Meat_Scraps.png', formula_quantity: '2'}
                }], [{kind: 'formula', content: {formula_url: '../../images/Twigs.png', formula_quantity: '1'}}]]
            }, {
                id: '12',
                food_url: '../../images/Stone_Soup.png',
                name: '石头汤',
                satisfy: ['零食', '汤类'],
                kitchen: [{kitchen_url: '../../images/Cookpot.png', kitchen_text: 'Cookpot'}],
                reward: [{quantity: 10, coin: '../../images/Old_Coin.png'}],
                silver_reward: [{quantity: 1, coin: '../../images/Sapphire_Medallion.png'}, {
                    quantity: 7,
                    coin: '../../images/Old_Coin.png'
                }],
                formula: [[{
                    kind: 'formula',
                    content: {formula_url: '../../images/Rocks.png', formula_quantity: '1'}
                }], [{kind: 'text', content: '任意蔬菜1'}], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Placeholder.png', formula_quantity: '1'}
                }], [{kind: 'text', content: '('}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Berries.png'}
                }, {kind: 'text', content: ',一个不同的蔬菜)'}]]
            }, {
                id: '13',
                food_url: '../../images/Croquette.png',
                name: '炸丸子',
                satisfy: ['零食', '素食'],
                kitchen: [{kitchen_url: '../../images/Small_Casserole_Dish.png', kitchen_text: 'Small Casserole Dish'}],
                reward: [{quantity: 10, coin: '../../images/Old_Coin.png'}],
                silver_reward: [{quantity: 1, coin: '../../images/Sapphire_Medallion.png'}, {
                    quantity: 7,
                    coin: '../../images/Old_Coin.png'
                }],
                formula: [[{
                    kind: 'formula',
                    content: {formula_url: '../../images/Flour.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Potato.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Placeholder.png', formula_quantity: '1'}
                }], [{kind: 'text', content: '(任意蔬菜)'}]]
            }, {
                id: '14',
                food_url: '../../images/Roast_Vegetables.png',
                name: '烤蔬菜',
                satisfy: ['素食'],
                kitchen: [{
                    kitchen_url: '../../images/Small_Casserole_Dish.png',
                    kitchen_text: 'Small Casserole Dish'
                }, {kitchen_url: '../../images/Small_Grill.png', kitchen_text: 'Grill'}],
                reward: [{quantity: 10, coin: '../../images/Old_Coin.png'}],
                silver_reward: [{quantity: 1, coin: '../../images/Sapphire_Medallion.png'}, {
                    quantity: 7,
                    coin: '../../images/Old_Coin.png'
                }],
                formula: [[{
                    kind: 'formula',
                    content: {formula_url: '../../images/Placeholder.png', formula_quantity: '2'}
                }], [{kind: 'text', content: '(任意不同蔬菜)'}], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Placeholder.png', formula_quantity: '1'}
                }], [{kind: 'text', content: '(任意蔬菜)'}]]
            }, {
                id: '15',
                food_url: '../../images/Meatloaf.png',
                name: '肉饼',
                satisfy: ['肉类'],
                kitchen: [{kitchen_url: '../../images/Small_Casserole_Dish.png', kitchen_text: 'Small Casserole Dish'}],
                reward: [{quantity: 10, coin: '../../images/Old_Coin.png'}],
                silver_reward: [{quantity: 1, coin: '../../images/Sapphire_Medallion.png'}, {
                    quantity: 7,
                    coin: '../../images/Old_Coin.png'
                }],
                formula: [[{
                    kind: 'formula',
                    content: {formula_url: '../../images/Meat_Scraps.png', formula_quantity: '1'}
                }], [{kind: 'formula', content: {formula_url: '../../images/Placeholder.png', formula_quantity: '2'}}]]
            }, {
                id: '16',
                food_url: '../../images/Carrot_Soup.png',
                name: '胡萝卜汤',
                satisfy: ['零食', '汤类', '素食'],
                kitchen: [{kitchen_url: '../../images/Cookpot.png', kitchen_text: 'Cookpot'}],
                reward: [{quantity: 10, coin: '../../images/Old_Coin.png'}],
                silver_reward: [{quantity: 1, coin: '../../images/Sapphire_Medallion.png'}, {
                    quantity: 7,
                    coin: '../../images/Old_Coin.png'
                }],
                formula: [[{
                    kind: 'formula',
                    content: {formula_url: '../../images/Carrot.png', formula_quantity: '2'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Placeholder.png', formula_quantity: '1'}
                }], [{kind: 'text', content: '('}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Carrot.png'}
                }, {kind: 'text', content: ','}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Garlic.png'}
                }, {kind: 'text', content: ','}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Spot_Spice.png'}
                }, {kind: 'text', content: ')'}]]
            }, {
                id: '17',
                food_url: '../../images/Fish_Pie.png',
                name: '鲜鱼派',
                satisfy: ['鱼类'],
                kitchen: [{kitchen_url: '../../images/Small_Casserole_Dish.png', kitchen_text: 'Small Casserole Dish'}],
                reward: [{quantity: 10, coin: '../../images/Old_Coin.png'}],
                silver_reward: [{quantity: 1, coin: '../../images/Sapphire_Medallion.png'}, {
                    quantity: 7,
                    coin: '../../images/Old_Coin.png'
                }],
                formula: [[{
                    kind: 'formula',
                    content: {formula_url: '../../images/Salmon.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Flour.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Placeholder.png', formula_quantity: '1'}
                }], [{kind: 'text', content: '('}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Carrot.png'}
                }, {kind: 'text', content: ','}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Foliage.png'}
                }, {kind: 'text', content: ','}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Mushroom.png'}
                }, {kind: 'text', content: ','}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Onion.png'}
                }, {kind: 'text', content: ','}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Toma_Root.png'}
                }, {kind: 'text', content: ','}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Turnip.png'}
                }, {kind: 'text', content: ')'}]]
            }, {
                id: '18',
                food_url: '../../images/Fish_and_Chips.png',
                name: '炸鱼薯条',
                satisfy: ['鱼类'],
                kitchen: [{kitchen_url: '../../images/Small_Casserole_Dish.png', kitchen_text: 'Small Casserole Dish'}],
                reward: [{quantity: 12, coin: '../../images/Old_Coin.png'}],
                silver_reward: [{quantity: 2, coin: '../../images/Sapphire_Medallion.png'}, {
                    quantity: 3,
                    coin: '../../images/Old_Coin.png'
                }],
                formula: [[{
                    kind: 'formula',
                    content: {formula_url: '../../images/Salmon.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Flour.png', formula_quantity: '1'}
                }], [{kind: 'formula', content: {formula_url: '../../images/Potato.png', formula_quantity: '1'}}]]
            }, {
                id: '19',
                food_url: '../../images/Meat_Pie.png',
                name: '肉派',
                satisfy: ['肉类'],
                kitchen: [{kitchen_url: '../../images/Small_Casserole_Dish.png', kitchen_text: 'Small Casserole Dish'}],
                reward: [{quantity: 12, coin: '../../images/Old_Coin.png'}],
                silver_reward: [{quantity: 2, coin: '../../images/Sapphire_Medallion.png'}, {
                    quantity: 3,
                    coin: '../../images/Old_Coin.png'
                }],
                formula: [[{
                    kind: 'formula',
                    content: {formula_url: '../../images/Meat_Scraps.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Flour.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Placeholder.png', formula_quantity: '1'}
                }], [{kind: 'text', content: '('}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Meat_Scraps.png'}
                }, {kind: 'text', content: ',任意蔬菜)'}]]
            }, {
                id: '20',
                food_url: '../../images/Sliders.png',
                name: '小汉堡',
                satisfy: ['零食', '面包', '肉类'],
                kitchen: [{kitchen_url: '../../images/Small_Grill.png', kitchen_text: 'Grill'}],
                reward: [{quantity: 12, coin: '../../images/Old_Coin.png'}],
                silver_reward: [{quantity: 2, coin: '../../images/Sapphire_Medallion.png'}, {
                    quantity: 3,
                    coin: '../../images/Old_Coin.png'
                }],
                formula: [[{
                    kind: 'formula',
                    content: {formula_url: '../../images/Meat_Scraps.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Flour.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Placeholder.png', formula_quantity: '1'}
                }], [{kind: 'text', content: '('}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Meat_Scraps.png'}
                }, {kind: 'text', content: ','}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Flour.png'}
                }, {kind: 'text', content: ','}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Spot_Spice.png'}
                }, {kind: 'text', content: ',任意蔬菜除了'}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Carrot.png'}
                }, {kind: 'text', content: ','}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Potato.png'}
                }, {kind: 'text', content: ')'}]]
            }, {
                id: '21',
                food_url: '../../images/Fist_Full_of_Jam_Gorge.png',
                name: '满满的果酱',
                satisfy: ['甜点', '零食'],
                kitchen: [{kitchen_url: '../../images/Cookpot.png', kitchen_text: 'Cookpot'}],
                reward: [{quantity: 1, coin: '../../images/Sapphire_Medallion.png'}],
                silver_reward: [{quantity: 1, coin: '../../images/Sapphire_Medallion.png'}, {
                    quantity: 2,
                    coin: '../../images/Old_Coin.png'
                }],
                formula: [[{
                    kind: 'formula',
                    content: {formula_url: '../../images/Berries.png', formula_quantity: '2'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Placeholder.png', formula_quantity: '1'}
                }], [{kind: 'text', content: '('}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Berries.png'}
                }, {kind: 'text', content: ','}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Syrup.png'}
                }, {kind: 'text', content: ')'}]]
            }, {
                id: '22',
                food_url: '../../images/Jelly_Roll.png',
                name: '果冻卷',
                satisfy: ['甜点'],
                kitchen: [{kitchen_url: '../../images/Small_Casserole_Dish.png', kitchen_text: 'Small Casserole Dish'}],
                reward: [{quantity: 1, coin: '../../images/Sapphire_Medallion.png'}, {
                    quantity: 2,
                    coin: '../../images/Old_Coin.png'
                }],
                silver_reward: [{quantity: 1, coin: '../../images/Sapphire_Medallion.png'}, {
                    quantity: 4,
                    coin: '../../images/Old_Coin.png'
                }],
                formula: [[{
                    kind: 'formula',
                    content: {formula_url: '../../images/Flour.png', formula_quantity: '1'}
                }], [{kind: 'formula', content: {formula_url: '../../images/Berries.png', formula_quantity: '2'}}]]
            }, {
                id: '23',
                food_url: '../../images/Carrot_Cake.png',
                name: '胡萝卜蛋糕',
                satisfy: ['甜点'],
                kitchen: [{kitchen_url: '../../images/Small_Casserole_Dish.png', kitchen_text: 'Small Casserole Dish'}],
                reward: [{quantity: 1, coin: '../../images/Sapphire_Medallion.png'}, {
                    quantity: 6,
                    coin: '../../images/Old_Coin.png'
                }],
                silver_reward: [{quantity: 2, coin: '../../images/Sapphire_Medallion.png'}, {
                    quantity: 3,
                    coin: '../../images/Old_Coin.png'
                }],
                formula: [[{
                    kind: 'formula',
                    content: {formula_url: '../../images/Carrot.png', formula_quantity: '1'}
                }], [{kind: 'formula', content: {formula_url: '../../images/Flour.png', formula_quantity: '2'}}]]
            }, {
                id: '24',
                food_url: '../../images/Garlic_Mashed_Potatoes.png',
                name: '蒜香土豆泥',
                satisfy: ['零食', '素食'],
                kitchen: [{kitchen_url: '../../images/Cookpot.png', kitchen_text: 'Cookpot'}],
                reward: [{quantity: 1, coin: '../../images/Sapphire_Medallion.png'}, {
                    quantity: 6,
                    coin: '../../images/Old_Coin.png'
                }],
                silver_reward: [{quantity: 1, coin: '../../images/Red_Mark.png'}, {
                    quantity: 3,
                    coin: '../../images/Old_Coin.png'
                }],
                formula: [[{
                    kind: 'formula',
                    content: {formula_url: '../../images/Garlic.png', formula_quantity: '1'}
                }], [{kind: 'formula', content: {formula_url: '../../images/Potato.png', formula_quantity: '2'}}]]
            }, {
                id: '25',
                food_url: '../../images/Garlic_Bread.png',
                name: '蒜香面包',
                satisfy: ['零食', '面包'],
                kitchen: [{kitchen_url: '../../images/Small_Casserole_Dish.png', kitchen_text: 'Small Casserole Dish'}],
                reward: [{quantity: 1, coin: '../../images/Sapphire_Medallion.png'}, {
                    quantity: 6,
                    coin: '../../images/Old_Coin.png'
                }],
                silver_reward: [{quantity: 1, coin: '../../images/Red_Mark.png'}, {
                    quantity: 3,
                    coin: '../../images/Old_Coin.png'
                }],
                formula: [[{
                    kind: 'formula',
                    content: {formula_url: '../../images/Flour.png', formula_quantity: '2'}
                }], [{kind: 'formula', content: {formula_url: '../../images/Garlic.png', formula_quantity: '1'}}]]
            }, {
                id: '26',
                food_url: '../../images/Tomato_Soup.png',
                name: '番茄汤',
                satisfy: ['汤类', '零食', '素食'],
                kitchen: [{kitchen_url: '../../images/Cookpot.png', kitchen_text: 'Cookpot'}],
                reward: [{quantity: 1, coin: '../../images/Sapphire_Medallion.png'}, {
                    quantity: 8,
                    coin: '../../images/Old_Coin.png'
                }],
                silver_reward: [{quantity: 1, coin: '../../images/Red_Mark.png'}, {
                    quantity: 6,
                    coin: '../../images/Old_Coin.png'
                }],
                formula: [[{
                    kind: 'formula',
                    content: {formula_url: '../../images/Toma_Root.png', formula_quantity: '2'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Placeholder.png', formula_quantity: '1'}
                }], [{kind: 'text', content: '('}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Toma_Root.png'}
                }, {kind: 'text', content: ','}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Garlic.png'}
                }, {kind: 'text', content: ','}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Spot_Spice.png'}
                }, {kind: 'text', content: ')'}]]
            }, {
                id: '27',
                food_url: '../../images/Sausage.png',
                name: '肉肠',
                satisfy: ['零食', '肉类'],
                kitchen: [{kitchen_url: '../../images/Small_Grill.png', kitchen_text: 'Grill'}],
                reward: [{quantity: 1, coin: '../../images/Sapphire_Medallion.png'}, {
                    quantity: 8,
                    coin: '../../images/Old_Coin.png'
                }],
                silver_reward: [{quantity: 1, coin: '../../images/Red_Mark.png'}, {
                    quantity: 6,
                    coin: '../../images/Old_Coin.png'
                }],
                formula: [[{
                    kind: 'formula',
                    content: {formula_url: '../../images/Meat_Scraps.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Spot_Spice.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Placeholder.png', formula_quantity: '1'}
                }], [{kind: 'text', content: '('}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Meat_Scraps.png'}
                }, {kind: 'text', content: ',任意蔬菜)'}]]
            }, {
                id: '28',
                food_url: '../../images/Candied_Fish.png',
                name: '糖煮鱼',
                satisfy: ['零食', '鱼类'],
                kitchen: [{kitchen_url: '../../images/Small_Casserole_Dish.png', kitchen_text: 'Small Casserole Dish'}],
                reward: [{quantity: 2, coin: '../../images/Sapphire_Medallion.png'}, {
                    quantity: 4,
                    coin: '../../images/Old_Coin.png'
                }],
                silver_reward: [{quantity: 1, coin: '../../images/Red_Mark.png'}, {
                    quantity: 1,
                    coin: '../../images/Sapphire_Medallion.png'
                }, {quantity: 2, coin: '../../images/Old_Coin.png'}],
                formula: [[{
                    kind: 'formula',
                    content: {formula_url: '../../images/Salmon.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Syrup.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Placeholder.png', formula_quantity: '1'}
                }], [{kind: 'text', content: '('}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Salmon.png'}
                }, {kind: 'text', content: ','}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Syrup.png'}
                }, {kind: 'text', content: ')'}]]
            }, {
                id: '29',
                food_url: '../../images/Stuffed_Mushroom.png',
                name: '蘑菇馅饼',
                satisfy: ['零食', '素食'],
                kitchen: [{kitchen_url: '../../images/Small_Casserole_Dish.png', kitchen_text: 'Small Casserole Dish'}],
                reward: [{quantity: 2, coin: '../../images/Sapphire_Medallion.png'}, {
                    quantity: 4,
                    coin: '../../images/Old_Coin.png'
                }],
                silver_reward: [{quantity: 1, coin: '../../images/Red_Mark.png'}, {
                    quantity: 1,
                    coin: '../../images/Sapphire_Medallion.png'
                }, {quantity: 2, coin: '../../images/Old_Coin.png'}],
                formula: [[{
                    kind: 'formula',
                    content: {formula_url: '../../images/Garlic.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Mushroom.png', formula_quantity: '1'}
                }], [{kind: 'formula', content: {formula_url: '../../images/Onion.png', formula_quantity: '1'}}]]
            }, {
                id: '30',
                food_url: '../../images/Ratatouille_Gorge.png',
                name: '蔬菜杂烩',
                satisfy: ['素食'],
                kitchen: [{kitchen_url: '../../images/Large_Casserole_Dish.png', kitchen_text: 'Large Casserole Dish'}],
                reward: [{quantity: 2, coin: '../../images/Sapphire_Medallion.png'}, {
                    quantity: 4,
                    coin: '../../images/Old_Coin.png'
                }],
                silver_reward: [{quantity: 1, coin: '../../images/Red_Mark.png'}, {
                    quantity: 1,
                    coin: '../../images/Sapphire_Medallion.png'
                }, {quantity: 2, coin: '../../images/Old_Coin.png'}],
                formula: [[{
                    kind: 'formula',
                    content: {formula_url: '../../images/Toma_Root.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Placeholder.png', formula_quantity: '3'}
                }], [{kind: 'text', content: '('}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Potato.png'}
                }, {kind: 'text', content: ','}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Carrot.png'}
                }, {kind: 'text', content: ','}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Onion.png'}
                }, {kind: 'text', content: ','}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Turnip.png'}
                }, {kind: 'text', content: ','}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Mushroom.png'}
                }, {kind: 'text', content: ',没有重复)'}]]
            }, {
                id: '31',
                food_url: '../../images/Bruschetta.png',
                name: '意大利烤面包片',
                satisfy: ['零食', '素食', '面包'],
                kitchen: [{kitchen_url: '../../images/Large_Grill.png', kitchen_text: 'Large Grill'}],
                reward: [{quantity: 2, coin: '../../images/Sapphire_Medallion.png'}, {
                    quantity: 6,
                    coin: '../../images/Old_Coin.png'
                }],
                silver_reward: [{quantity: 1, coin: '../../images/Red_Mark.png'}, {
                    quantity: 1,
                    coin: '../../images/Sapphire_Medallion.png'
                }, {quantity: 5, coin: '../../images/Old_Coin.png'}],
                formula: [[{
                    kind: 'formula',
                    content: {formula_url: '../../images/Toma_Root.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Flour.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Placeholder.png', formula_quantity: '1'}
                }], [{kind: 'text', content: '('}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Foliage.png'}
                }, {kind: 'text', content: ','}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Garlic.png'}
                }, {kind: 'text', content: ','}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Spot_Spice.png'}
                }, {kind: 'text', content: ')'}], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Placeholder.png', formula_quantity: '1'}
                }], [{kind: 'text', content: '('}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Toma_Root.png'}
                }, {kind: 'text', content: ','}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Goat_Milk.png'}
                }, {kind: 'text', content: ')'}]]
            }, {
                id: '32',
                food_url: '../../images/Meat_Stew.png',
                name: '肉汤',
                satisfy: ['汤类', '肉类'],
                kitchen: [{kitchen_url: '../../images/Large_Cookpot.png', kitchen_text: 'Large Cookpot'}],
                reward: [{quantity: 2, coin: '../../images/Sapphire_Medallion.png'}, {
                    quantity: 6,
                    coin: '../../images/Old_Coin.png'
                }],
                silver_reward: [{quantity: 1, coin: '../../images/Red_Mark.png'}, {
                    quantity: 1,
                    coin: '../../images/Sapphire_Medallion.png'
                }, {quantity: 5, coin: '../../images/Old_Coin.png'}],
                formula: [[{
                    kind: 'formula',
                    content: {formula_url: '../../images/Meat_Scraps.png', formula_quantity: '2'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Placeholder.png', formula_quantity: '1'}
                }], [{kind: 'text', content: '('}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Meat_Scraps.png'}
                }, {kind: 'text', content: ',任意蔬菜)'}], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Placeholder.png', formula_quantity: '1'}
                }], [{kind: 'text', content: '('}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Meat_Scraps.png'}
                }, {kind: 'text', content: ','}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Spot_Spice.png'}
                }, {kind: 'text', content: ',任意蔬菜)'}]]
            }, {
                id: '33',
                food_url: '../../images/Hamburger.png',
                name: '汉堡',
                satisfy: ['肉类', '面包'],
                kitchen: [{kitchen_url: '../../images/Large_Grill.png', kitchen_text: 'Large Grill'}],
                reward: [{quantity: 2, coin: '../../images/Sapphire_Medallion.png'}, {
                    quantity: 6,
                    coin: '../../images/Old_Coin.png'
                }],
                silver_reward: [{quantity: 1, coin: '../../images/Red_Mark.png'}, {
                    quantity: 1,
                    coin: '../../images/Sapphire_Medallion.png'
                }, {quantity: 5, coin: '../../images/Old_Coin.png'}],
                formula: [[{
                    kind: 'formula',
                    content: {formula_url: '../../images/Meat_Scraps.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Flour.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Placeholder.png', formula_quantity: '1'}
                }], [{kind: 'text', content: '('}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Meat_Scraps.png'}
                }, {kind: 'text', content: ','}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Flour.png'}
                }, {kind: 'text', content: ')'}], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Placeholder.png', formula_quantity: '1'}
                }], [{kind: 'text', content: '('}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Meat_Scraps.png'}
                }, {kind: 'text', content: ','}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Spot_Spice.png'}
                }, {kind: 'text', content: ',任意蔬菜)'}]]
            }, {
                id: '34',
                food_url: '../../images/Fish_Burger.png',
                name: '鱼汉堡',
                satisfy: ['鱼类', '面包'],
                kitchen: [{kitchen_url: '../../images/Large_Grill.png', kitchen_text: 'Large Grill'}],
                reward: [{quantity: 2, coin: '../../images/Sapphire_Medallion.png'}, {
                    quantity: 6,
                    coin: '../../images/Old_Coin.png'
                }],
                silver_reward: [{quantity: 1, coin: '../../images/Red_Mark.png'}, {
                    quantity: 1,
                    coin: '../../images/Sapphire_Medallion.png'
                }, {quantity: 5, coin: '../../images/Old_Coin.png'}],
                formula: [[{
                    kind: 'formula',
                    content: {formula_url: '../../images/Salmon.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Flour.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Placeholder.png', formula_quantity: '1'}
                }], [{kind: 'text', content: '('}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Salmon.png'}
                }, {kind: 'text', content: ','}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Flour.png'}
                }, {kind: 'text', content: ',任意蔬菜)'}], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Placeholder.png', formula_quantity: '1'}
                }], [{kind: 'text', content: '('}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Salmon.png'}
                }, {kind: 'text', content: ','}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Flour.png'}
                }, {kind: 'text', content: ','}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Spot_Spice.png'}
                }, {kind: 'text', content: '任意蔬菜)'}]]
            }, {
                id: '35',
                food_url: '../../images/Mushroom_Burger.png',
                name: '蘑菇汉堡',
                satisfy: ['面包', '素食'],
                kitchen: [{kitchen_url: '../../images/Large_Grill.png', kitchen_text: 'Large Grill'}],
                reward: [{quantity: 2, coin: '../../images/Sapphire_Medallion.png'}, {
                    quantity: 6,
                    coin: '../../images/Old_Coin.png'
                }],
                silver_reward: [{quantity: 1, coin: '../../images/Red_Mark.png'}, {
                    quantity: 1,
                    coin: '../../images/Sapphire_Medallion.png'
                }, {quantity: 5, coin: '../../images/Old_Coin.png'}],
                formula: [[{
                    kind: 'formula',
                    content: {formula_url: '../../images/Flour.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Mushroom.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Placeholder.png', formula_quantity: '1'}
                }], [{kind: 'text', content: '('}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Flour.png'}
                }, {kind: 'text', content: ','}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Mushroom.png'}
                }, {kind: 'text', content: ')'}], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Placeholder.png', formula_quantity: '1'}
                }], [{kind: 'text', content: '('}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Mushroom.png'}
                }, {kind: 'text', content: ','}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Spot_Spice.png'}
                }, {kind: 'text', content: ','}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Garlic.png'}
                }, {kind: 'text', content: ')'}]]
            }, {
                id: '36',
                food_url: '../../images/Fish_Steak_Gorge.png',
                name: '鱼排',
                satisfy: ['鱼类'],
                kitchen: [{kitchen_url: '../../images/Large_Grill.png', kitchen_text: 'Large Grill'}],
                reward: [{quantity: 2, coin: '../../images/Sapphire_Medallion.png'}, {
                    quantity: 8,
                    coin: '../../images/Old_Coin.png'
                }],
                silver_reward: [{quantity: 1, coin: '../../images/Red_Mark.png'}, {
                    quantity: 1,
                    coin: '../../images/Sapphire_Medallion.png'
                }, {quantity: 7, coin: '../../images/Old_Coin.png'}],
                formula: [[{
                    kind: 'formula',
                    content: {formula_url: '../../images/Salmon.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Foliage.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Spot_Spice.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Placeholder.png', formula_quantity: '1'}
                }], [{kind: 'text', content: '(任意蔬菜)'}]]
            }, {
                id: '37',
                food_url: '../../images/Curry.png',
                name: '咖喱',
                satisfy: ['肉类', '汤类'],
                kitchen: [{kitchen_url: '../../images/Large_Cookpot.png', kitchen_text: 'Large Cookpot'}],
                reward: [{quantity: 2, coin: '../../images/Sapphire_Medallion.png'}, {
                    quantity: 8,
                    coin: '../../images/Old_Coin.png'
                }],
                silver_reward: [{quantity: 1, coin: '../../images/Red_Mark.png'}, {
                    quantity: 1,
                    coin: '../../images/Sapphire_Medallion.png'
                }, {quantity: 7, coin: '../../images/Old_Coin.png'}],
                formula: [[{
                    kind: 'formula',
                    content: {formula_url: '../../images/Meat_Scraps.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Spot_Spice.png', formula_quantity: '2'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Placeholder.png', formula_quantity: '1'}
                }], [{kind: 'text', content: '(任意蔬菜)'}]]
            }, {
                id: '38',
                food_url: '../../images/Spaghetti_and_Meatball.png',
                name: '肉丸意大利面',
                satisfy: ['意面', '肉类'],
                kitchen: [{kitchen_url: '../../images/Large_Cookpot.png', kitchen_text: 'Large Cookpot'}],
                reward: [{quantity: 2, coin: '../../images/Sapphire_Medallion.png'}, {
                    quantity: 8,
                    coin: '../../images/Old_Coin.png'
                }],
                silver_reward: [{quantity: 1, coin: '../../images/Red_Mark.png'}, {
                    quantity: 1,
                    coin: '../../images/Sapphire_Medallion.png'
                }, {quantity: 7, coin: '../../images/Old_Coin.png'}],
                formula: [[{
                    kind: 'formula',
                    content: {formula_url: '../../images/Meat_Scraps.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Flour.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Toma_Root.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Placeholder.png', formula_quantity: '1'}
                }], [{kind: 'text', content: '('}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Garlic.png'}
                }, {kind: 'text', content: ','}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Mushroom.png'}
                }, {kind: 'text', content: ','}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Onion.png'}
                }, {kind: 'text', content: ','}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Spot_Spice.png'}
                }, {kind: 'text', content: ')'}]]
            }, {
                id: '39',
                food_url: '../../images/Lasagna.png',
                name: '千层面',
                satisfy: ['意面', '肉类'],
                kitchen: [{kitchen_url: '../../images/Large_Casserole_Dish.png', kitchen_text: 'Large Casserole Dish'}],
                reward: [{quantity: 2, coin: '../../images/Sapphire_Medallion.png'}, {
                    quantity: 8,
                    coin: '../../images/Old_Coin.png'
                }],
                silver_reward: [{quantity: 1, coin: '../../images/Red_Mark.png'}, {
                    quantity: 1,
                    coin: '../../images/Sapphire_Medallion.png'
                }, {quantity: 7, coin: '../../images/Old_Coin.png'}],
                formula: [[{
                    kind: 'formula',
                    content: {formula_url: '../../images/Meat_Scraps.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Flour.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Toma_Root.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Placeholder.png', formula_quantity: '1'}
                }], [{kind: 'text', content: '('}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Garlic.png'}
                }, {kind: 'text', content: ','}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Mushroom.png'}
                }, {kind: 'text', content: ','}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Onion.png'}
                }, {kind: 'text', content: ','}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Spot_Spice.png'}
                }, {kind: 'text', content: ')'}]]
            }, {
                id: '40',
                food_url: '../../images/Poached_Fish.png',
                name: '水煮鱼',
                satisfy: ['鱼类'],
                kitchen: [{kitchen_url: '../../images/Large_Cookpot.png', kitchen_text: 'Large Cookpot'}],
                reward: [{quantity: 2, coin: '../../images/Sapphire_Medallion.png'}, {
                    quantity: 8,
                    coin: '../../images/Old_Coin.png'
                }],
                silver_reward: [{quantity: 1, coin: '../../images/Red_Mark.png'}, {
                    quantity: 1,
                    coin: '../../images/Sapphire_Medallion.png'
                }, {quantity: 7, coin: '../../images/Old_Coin.png'}],
                formula: [[{
                    kind: 'formula',
                    content: {formula_url: '../../images/Salmon.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Foliage.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Spot_Spice.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Placeholder.png', formula_quantity: '1'}
                }], [{kind: 'text', content: '(任意蔬菜)'}]]
            }, {
                id: '41',
                food_url: '../../images/Shepherds_Pie.png',
                name: '牧羊人的馅饼',
                satisfy: ['肉类'],
                kitchen: [{kitchen_url: '../../images/Large_Casserole_Dish.png', kitchen_text: 'Large Casserole Dish'}],
                reward: [{quantity: 2, coin: '../../images/Sapphire_Medallion.png'}, {
                    quantity: 8,
                    coin: '../../images/Old_Coin.png'
                }],
                silver_reward: [{quantity: 1, coin: '../../images/Red_Mark.png'}, {
                    quantity: 1,
                    coin: '../../images/Sapphire_Medallion.png'
                }, {quantity: 7, coin: '../../images/Old_Coin.png'}],
                formula: [[{
                    kind: 'formula',
                    content: {formula_url: '../../images/Meat_Scraps.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Potato.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Placeholder.png', formula_quantity: '1'}
                }], [{kind: 'text', content: '('}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Carrot.png'}
                }, {kind: 'text', content: ','}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Onion.png'}
                }, {kind: 'text', content: ','}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Turnip.png'}
                }, {kind: 'text', content: ')'}], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Placeholder.png', formula_quantity: '1'}
                }], [{kind: 'text', content: '('}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Spot_Spice.png'}
                }, {kind: 'text', content: ','}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Garlic.png'}
                }, {kind: 'text', content: ')'}]]
            }, {
                id: '42',
                food_url: '../../images/Candy.png',
                name: '拐棍糖',
                satisfy: ['甜点'],
                kitchen: [{kitchen_url: '../../images/Cookpot.png', kitchen_text: 'Cookpot'}],
                reward: [{quantity: 1, coin: '../../images/Red_Mark.png'}, {
                    quantity: 2,
                    coin: '../../images/Old_Coin.png'
                }],
                silver_reward: [{quantity: 1, coin: '../../images/Red_Mark.png'}, {
                    quantity: 6,
                    coin: '../../images/Old_Coin.png'
                }],
                formula: [[{kind: 'formula', content: {formula_url: '../../images/Syrup.png', formula_quantity: '3'}}]]
            }, {
                id: '43',
                food_url: '../../images/Bread_Pudding.png',
                name: '布丁',
                satisfy: ['甜点'],
                kitchen: [{kitchen_url: '../../images/Small_Casserole_Dish.png', kitchen_text: 'Small Casserole Dish'}],
                reward: [{quantity: 1, coin: '../../images/Red_Mark.png'}, {
                    quantity: 4,
                    coin: '../../images/Old_Coin.png'
                }],
                silver_reward: [{quantity: 1, coin: '../../images/Red_Mark.png'}, {
                    quantity: 1,
                    coin: '../../images/Sapphire_Medallion.png'
                }, {quantity: 2, coin: '../../images/Old_Coin.png'}],
                formula: [[{
                    kind: 'formula',
                    content: {formula_url: '../../images/Flour.png', formula_quantity: '2'}
                }], [{kind: 'formula', content: {formula_url: '../../images/Syrup.png', formula_quantity: '1'}}]]
            }, {
                id: '44',
                food_url: '../../images/Waffles_Gorge.png',
                name: '华夫饼',
                satisfy: ['甜点'],
                kitchen: [{kitchen_url: '../../images/Small_Grill.png', kitchen_text: 'Grill'}],
                reward: [{quantity: 1, coin: '../../images/Red_Mark.png'}, {
                    quantity: 4,
                    coin: '../../images/Old_Coin.png'
                }],
                silver_reward: [{quantity: 1, coin: '../../images/Red_Mark.png'}, {
                    quantity: 1,
                    coin: '../../images/Sapphire_Medallion.png'
                }, {quantity: 2, coin: '../../images/Old_Coin.png'}],
                formula: [[{
                    kind: 'formula',
                    content: {formula_url: '../../images/Flour.png', formula_quantity: '2'}
                }], [{kind: 'formula', content: {formula_url: '../../images/Syrup.png', formula_quantity: '1'}}]]
            }, {
                id: '45',
                food_url: '../../images/Berry_Tart.png',
                name: '浆果馅饼',
                satisfy: ['甜点'],
                kitchen: [{kitchen_url: '../../images/Small_Casserole_Dish.png', kitchen_text: 'Small Casserole Dish'}],
                reward: [{quantity: 1, coin: '../../images/Red_Mark.png'}, {
                    quantity: 6,
                    coin: '../../images/Old_Coin.png'
                }],
                silver_reward: [{quantity: 1, coin: '../../images/Red_Mark.png'}, {
                    quantity: 1,
                    coin: '../../images/Sapphire_Medallion.png'
                }, {quantity: 5, coin: '../../images/Old_Coin.png'}],
                formula: [[{
                    kind: 'formula',
                    content: {formula_url: '../../images/Berries.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Flour.png', formula_quantity: '1'}
                }], [{kind: 'formula', content: {formula_url: '../../images/Syrup.png', formula_quantity: '1'}}]]
            }, {
                id: '46',
                food_url: '../../images/Macaroni_and_Cheese.png',
                name: '芝士通心粉',
                satisfy: ['意面', '奶酪'],
                kitchen: [{kitchen_url: '../../images/Cookpot.png', kitchen_text: 'Cookpot'}],
                reward: [{quantity: 1, coin: '../../images/Red_Mark.png'}, {
                    quantity: 8,
                    coin: '../../images/Old_Coin.png'
                }],
                silver_reward: [{quantity: 1, coin: '../../images/Gnaw27s_Favor.png'}, {
                    quantity: 7,
                    coin: '../../images/Old_Coin.png'
                }],
                formula: [[{
                    kind: 'formula',
                    content: {formula_url: '../../images/Flour.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Goat_Milk.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Placeholder.png', formula_quantity: '1'}
                }], [{kind: 'text', content: '('}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Flour.png'}
                }, {kind: 'text', content: ','}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Goat_Milk.png'}
                }, {kind: 'text', content: ')'}]]
            }, {
                id: '47',
                food_url: '../../images/Bagel_and_Fish.png',
                name: '硬面包圈夹鱼',
                satisfy: ['面包', '鱼类', '零食'],
                kitchen: [{kitchen_url: '../../images/Large_Grill.png', kitchen_text: 'Large Grill'}],
                reward: [{quantity: 1, coin: '../../images/Red_Mark.png'}, {
                    quantity: 8,
                    coin: '../../images/Old_Coin.png'
                }],
                silver_reward: [{quantity: 1, coin: '../../images/Gnaw27s_Favor.png'}, {
                    quantity: 7,
                    coin: '../../images/Old_Coin.png'
                }],
                formula: [[{
                    kind: 'formula',
                    content: {formula_url: '../../images/Salmon.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Flour.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Goat_Milk.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Placeholder.png', formula_quantity: '1'}
                }], [{kind: 'text', content: '('}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Onion.png'}
                }, {kind: 'text', content: ','}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Spot_Spice.png'}
                }, {kind: 'text', content: ')'}]]
            }, {
                id: '48',
                food_url: '../../images/Grilled_Cheese.png',
                name: '烤奶酪',
                satisfy: ['零食', '面包', '奶酪'],
                kitchen: [{kitchen_url: '../../images/Small_Grill.png', kitchen_text: 'Grill'}],
                reward: [{quantity: 1, coin: '../../images/Red_Mark.png'}, {
                    quantity: 8,
                    coin: '../../images/Old_Coin.png'
                }],
                silver_reward: [{quantity: 1, coin: '../../images/Gnaw27s_Favor.png'}, {
                    quantity: 7,
                    coin: '../../images/Old_Coin.png'
                }],
                formula: [[{
                    kind: 'formula',
                    content: {formula_url: '../../images/Flour.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Goat_Milk.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Placeholder.png', formula_quantity: '1'}
                }], [{kind: 'text', content: '('}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Flour.png'}
                }, {kind: 'text', content: ','}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Goat_Milk.png'}
                }, {kind: 'text', content: ')'}]]
            }, {
                id: '49',
                food_url: '../../images/Cream_of_Mushroom.png',
                name: '奶油蘑菇汤',
                satisfy: ['零食', '汤类', '奶酪', '素食'],
                kitchen: [{kitchen_url: '../../images/Cookpot.png', kitchen_text: 'Cookpot'}],
                reward: [{quantity: 1, coin: '../../images/Red_Mark.png'}, {
                    quantity: 8,
                    coin: '../../images/Old_Coin.png'
                }],
                silver_reward: [{quantity: 1, coin: '../../images/Gnaw27s_Favor.png'}, {
                    quantity: 7,
                    coin: '../../images/Old_Coin.png'
                }],
                formula: [[{
                    kind: 'formula',
                    content: {formula_url: '../../images/Goat_Milk.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Mushroom.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Placeholder.png', formula_quantity: '1'}
                }], [{kind: 'text', content: '('}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Goat_Milk.png'}
                }, {kind: 'text', content: ','}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Mushroom.png'}
                }, {kind: 'text', content: ')'}]]
            }, {
                id: '50',
                food_url: '../../images/Pierogies_Gorge.png',
                name: '饺子形馅饼',
                satisfy: ['奶酪', '素食'],
                kitchen: [{kitchen_url: '../../images/Cookpot.png', kitchen_text: 'Cookpot'}],
                reward: [{quantity: 1, coin: '../../images/Red_Mark.png'}, {
                    quantity: 1,
                    coin: '../../images/Sapphire_Medallion.png'
                }, {quantity: 4, coin: '../../images/Old_Coin.png'}],
                silver_reward: [{quantity: 1, coin: '../../images/Gnaw27s_Favor.png'}, {
                    quantity: 1,
                    coin: '../../images/Sapphire_Medallion.png'
                }, {quantity: 4, coin: '../../images/Old_Coin.png'}],
                formula: [[{
                    kind: 'formula',
                    content: {formula_url: '../../images/Flour.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Goat_Milk.png', formula_quantity: '1'}
                }], [{kind: 'formula', content: {formula_url: '../../images/Potato.png', formula_quantity: '1'}}]]
            }, {
                id: '51',
                food_url: '../../images/Manicotti.png',
                name: '番茄沙司烙通心粉',
                satisfy: ['奶酪', '意面'],
                kitchen: [{kitchen_url: '../../images/Large_Casserole_Dish.png', kitchen_text: 'Large Casserole Dish'}],
                reward: [{quantity: 1, coin: '../../images/Red_Mark.png'}, {
                    quantity: 1,
                    coin: '../../images/Sapphire_Medallion.png'
                }, {quantity: 6, coin: '../../images/Old_Coin.png'}],
                silver_reward: [{quantity: 1, coin: '../../images/Gnaw27s_Favor.png'}, {
                    quantity: 1,
                    coin: '../../images/Sapphire_Medallion.png'
                }, {quantity: 6, coin: '../../images/Old_Coin.png'}],
                formula: [[{
                    kind: 'formula',
                    content: {formula_url: '../../images/Flour.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Goat_Milk.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Toma_Root.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Placeholder.png', formula_quantity: '1'}
                }], [{kind: 'text', content: '('}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Foliage.png'}
                }, {kind: 'text', content: ','}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Garlic.png'}
                }, {kind: 'text', content: ','}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Goat_Milk.png'}
                }, {kind: 'text', content: ','}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Spot_Spice.png'}
                }, {kind: 'text', content: ')'}]]
            }, {
                id: '52',
                food_url: '../../images/Cheeseburger.png',
                name: '芝士汉堡',
                satisfy: ['奶酪', '面包', '肉类'],
                kitchen: [{kitchen_url: '../../images/Large_Grill.png', kitchen_text: 'Large Grill'}],
                reward: [{quantity: 1, coin: '../../images/Red_Mark.png'}, {
                    quantity: 1,
                    coin: '../../images/Sapphire_Medallion.png'
                }, {quantity: 6, coin: '../../images/Old_Coin.png'}],
                silver_reward: [{quantity: 1, coin: '../../images/Gnaw27s_Favor.png'}, {
                    quantity: 1,
                    coin: '../../images/Sapphire_Medallion.png'
                }, {quantity: 6, coin: '../../images/Old_Coin.png'}],
                formula: [[{
                    kind: 'formula',
                    content: {formula_url: '../../images/Flour.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Goat_Milk.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Meat_Scraps.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Placeholder.png', formula_quantity: '1'}
                }], [{kind: 'text', content: '('}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Meat_Scraps.png'}
                }, {kind: 'text', content: ','}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Spot_Spice.png'}
                }, {kind: 'text', content: ',任意蔬菜)'}]]
            }, {
                id: '53',
                food_url: '../../images/Creamy_Fettuccine.png',
                name: '奶油意大利宽面',
                satisfy: ['意面'],
                kitchen: [{kitchen_url: '../../images/Large_Cookpot.png', kitchen_text: 'Large Cookpot'}],
                reward: [{quantity: 1, coin: '../../images/Red_Mark.png'}, {
                    quantity: 1,
                    coin: '../../images/Sapphire_Medallion.png'
                }, {quantity: 8, coin: '../../images/Old_Coin.png'}],
                silver_reward: [{quantity: 1, coin: '../../images/Gnaw27s_Favor.png'}, {
                    quantity: 1,
                    coin: '../../images/Red_Mark.png'
                }, {quantity: 3, coin: '../../images/Old_Coin.png'}],
                formula: [[{
                    kind: 'formula',
                    content: {formula_url: '../../images/Flour.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Goat_Milk.png', formula_quantity: '2'}
                }], [{kind: 'formula', content: {formula_url: '../../images/Garlic.png', formula_quantity: '1'}}]]
            }, {
                id: '54',
                food_url: '../../images/Onion_Soup.png',
                name: '洋葱汤',
                satisfy: ['汤类', '零食', '素食'],
                kitchen: [{kitchen_url: '../../images/Large_Cookpot.png', kitchen_text: 'Large Cookpot'}],
                reward: [{quantity: 1, coin: '../../images/Red_Mark.png'}, {
                    quantity: 1,
                    coin: '../../images/Sapphire_Medallion.png'
                }, {quantity: 8, coin: '../../images/Old_Coin.png'}],
                silver_reward: [{quantity: 1, coin: '../../images/Gnaw27s_Favor.png'}, {
                    quantity: 1,
                    coin: '../../images/Red_Mark.png'
                }, {quantity: 3, coin: '../../images/Old_Coin.png'}],
                formula: [[{
                    kind: 'formula',
                    content: {formula_url: '../../images/Flour.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Goat_Milk.png', formula_quantity: '1'}
                }], [{kind: 'formula', content: {formula_url: '../../images/Onion.png', formula_quantity: '2'}}]]
            }, {
                id: '55',
                food_url: '../../images/Breaded_Cutlet.png',
                name: '面包屑炸鱼排',
                satisfy: ['肉类'],
                kitchen: [{kitchen_url: '../../images/Large_Casserole_Dish.png', kitchen_text: 'Large Casserole Dish'}],
                reward: [{quantity: 1, coin: '../../images/Red_Mark.png'}, {
                    quantity: 1,
                    coin: '../../images/Sapphire_Medallion.png'
                }, {quantity: 8, coin: '../../images/Old_Coin.png'}],
                silver_reward: [{quantity: 1, coin: '../../images/Gnaw27s_Favor.png'}, {
                    quantity: 1,
                    coin: '../../images/Red_Mark.png'
                }, {quantity: 3, coin: '../../images/Old_Coin.png'}],
                formula: [[{
                    kind: 'formula',
                    content: {formula_url: '../../images/Flour.png', formula_quantity: '2'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Meat.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Placeholder.png', formula_quantity: '1'}
                }], [{kind: 'text', content: '('}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Meat.png'}
                }, {kind: 'text', content: ','}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Spot_Spice.png'}
                }, {kind: 'text', content: ')'}]]
            }, {
                id: '56',
                food_url: '../../images/Creamy_Fish.png',
                name: '奶油烤鱼',
                satisfy: ['鱼类'],
                kitchen: [{kitchen_url: '../../images/Large_Casserole_Dish.png', kitchen_text: 'Large Casserole Dish'}],
                reward: [{quantity: 1, coin: '../../images/Red_Mark.png'}, {
                    quantity: 1,
                    coin: '../../images/Sapphire_Medallion.png'
                }, {quantity: 8, coin: '../../images/Old_Coin.png'}],
                silver_reward: [{quantity: 1, coin: '../../images/Gnaw27s_Favor.png'}, {
                    quantity: 1,
                    coin: '../../images/Red_Mark.png'
                }, {quantity: 3, coin: '../../images/Old_Coin.png'}],
                formula: [[{
                    kind: 'formula',
                    content: {formula_url: '../../images/Salmon.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Goat_Milk.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Spot_Spice.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Placeholder.png', formula_quantity: '1'}
                }], [{kind: 'text', content: '('}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Goat_Milk.png'}
                }, {kind: 'text', content: ','}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Garlic.png'}
                }, {kind: 'text', content: ','}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Onion.png'}
                }, {kind: 'text', content: ')'}]]
            }, {
                id: '57',
                food_url: '../../images/Pizza.png',
                name: '披萨',
                satisfy: ['肉类', '奶酪'],
                kitchen: [{kitchen_url: '../../images/Large_Casserole_Dish.png', kitchen_text: 'Large Casserole Dish'}],
                reward: [{quantity: 2, coin: '../../images/Red_Mark.png'}, {
                    quantity: 4,
                    coin: '../../images/Old_Coin.png'
                }],
                silver_reward: [{quantity: 1, coin: '../../images/Gnaw27s_Favor.png'}, {
                    quantity: 1,
                    coin: '../../images/Red_Mark.png'
                }, {quantity: 5, coin: '../../images/Old_Coin.png'}],
                formula: [[{
                    kind: 'formula',
                    content: {formula_url: '../../images/Flour.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Goat_Milk.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Meat_Scraps.png', formula_quantity: '1'}
                }], [{kind: 'formula', content: {formula_url: '../../images/Toma_Root.png', formula_quantity: '1'}}]]
            }, {
                id: '58',
                food_url: '../../images/Pot_Roast.png',
                name: '炖肉',
                satisfy: ['肉类'],
                kitchen: [{kitchen_url: '../../images/Large_Casserole_Dish.png', kitchen_text: 'Large Casserole Dish'}],
                reward: [{quantity: 2, coin: '../../images/Red_Mark.png'}, {
                    quantity: 4,
                    coin: '../../images/Old_Coin.png'
                }],
                silver_reward: [{quantity: 1, coin: '../../images/Gnaw27s_Favor.png'}, {
                    quantity: 1,
                    coin: '../../images/Red_Mark.png'
                }, {quantity: 5, coin: '../../images/Old_Coin.png'}],
                formula: [[{
                    kind: 'formula',
                    content: {formula_url: '../../images/Meat.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Placeholder.png', formula_quantity: '1'}
                }], [{kind: 'text', content: '('}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Meat.png'}
                }, {kind: 'text', content: ',任意蔬菜)'}], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Placeholder.png', formula_quantity: '1'}
                }], [{kind: 'text', content: '(任意蔬菜)'}], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Placeholder.png', formula_quantity: '1'}
                }], [{kind: 'text', content: '('}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Spot_Spice.png'}
                }, {kind: 'text', content: ','}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Garlic.png'}
                }, {kind: 'text', content: ')'}]]
            }, {
                id: '59',
                food_url: '../../images/Crab_Cake.png',
                name: '蟹肉蛋糕',
                satisfy: ['零食'],
                kitchen: [{kitchen_url: '../../images/Large_Casserole_Dish.png', kitchen_text: 'Large Casserole Dish'}],
                reward: [{quantity: 2, coin: '../../images/Red_Mark.png'}, {
                    quantity: 4,
                    coin: '../../images/Old_Coin.png'
                }],
                silver_reward: [{quantity: 1, coin: '../../images/Gnaw27s_Favor.png'}, {
                    quantity: 1,
                    coin: '../../images/Red_Mark.png'
                }, {quantity: 5, coin: '../../images/Old_Coin.png'}],
                formula: [[{
                    kind: 'formula',
                    content: {formula_url: '../../images/Flour.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Crab_Meat.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Placeholder.png', formula_quantity: '1'}
                }], [{kind: 'text', content: '('}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Crab_Meat.png'}
                }, {kind: 'text', content: ',任意蔬菜除了'}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Toma_Root.png'}
                }, {kind: 'text', content: ')'}], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Placeholder.png', formula_quantity: '1'}
                }], [{kind: 'text', content: '('}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Spot_Spice.png'}
                }, {kind: 'text', content: ','}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Garlic.png'}
                }, {kind: 'text', content: ')'}]]
            }, {
                id: '60',
                food_url: '../../images/Steak_Frites.png',
                name: '牛排薯条',
                satisfy: ['肉类'],
                kitchen: [{kitchen_url: '../../images/Large_Grill.png', kitchen_text: 'Large Grill'}],
                reward: [{quantity: 2, coin: '../../images/Red_Mark.png'}, {
                    quantity: 6,
                    coin: '../../images/Old_Coin.png'
                }],
                silver_reward: [{quantity: 1, coin: '../../images/Gnaw27s_Favor.png'}, {
                    quantity: 1,
                    coin: '../../images/Red_Mark.png'
                }, {quantity: 1, coin: '../../images/Sapphire_Medallion.png'}, {
                    quantity: 2,
                    coin: '../../images/Old_Coin.png'
                }],
                formula: [[{
                    kind: 'formula',
                    content: {formula_url: '../../images/Meat.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Potato.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Placeholder.png', formula_quantity: '1'}
                }], [{kind: 'text', content: '('}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Meat.png'}
                }, {kind: 'text', content: ','}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Potato.png'}
                }, {kind: 'text', content: ')'}], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Placeholder.png', formula_quantity: '1'}
                }], [{kind: 'text', content: '('}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Potato.png'}
                }, {kind: 'text', content: ','}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Spot_Spice.png'}
                }, {kind: 'text', content: ')'}]]
            }, {
                id: '61',
                food_url: '../../images/Shooter_Sandwich.png',
                name: '射击三明治',
                satisfy: ['肉类', '面包'],
                kitchen: [{kitchen_url: '../../images/Large_Grill.png', kitchen_text: 'Large Grill'}],
                reward: [{quantity: 2, coin: '../../images/Red_Mark.png'}, {
                    quantity: 6,
                    coin: '../../images/Old_Coin.png'
                }],
                silver_reward: [{quantity: 1, coin: '../../images/Gnaw27s_Favor.png'}, {
                    quantity: 1,
                    coin: '../../images/Red_Mark.png'
                }, {quantity: 1, coin: '../../images/Sapphire_Medallion.png'}, {
                    quantity: 2,
                    coin: '../../images/Old_Coin.png'
                }],
                formula: [[{
                    kind: 'formula',
                    content: {formula_url: '../../images/Flour.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Meat.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Placeholder.png', formula_quantity: '1'}
                }], [{kind: 'text', content: '('}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Meat.png'}
                }, {kind: 'text', content: ','}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Mushroom.png'}
                }, {kind: 'text', content: ','}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Garlic.png'}
                }, {kind: 'text', content: ')'}], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Placeholder.png', formula_quantity: '1'}
                }], [{kind: 'text', content: '('}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Spot_Spice.png'}
                }, {kind: 'text', content: ','}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Garlic.png'}
                }, {kind: 'text', content: ')'}]]
            }, {
                id: '62',
                food_url: '../../images/Bacon_Wrapped_Meat.png',
                name: '培根裹肉',
                satisfy: ['肉类'],
                kitchen: [{kitchen_url: '../../images/Large_Casserole_Dish.png', kitchen_text: 'Large Casserole Dish'}],
                reward: [{quantity: 2, coin: '../../images/Red_Mark.png'}, {
                    quantity: 8,
                    coin: '../../images/Old_Coin.png'
                }],
                silver_reward: [{quantity: 1, coin: '../../images/Gnaw27s_Favor.png'}, {
                    quantity: 1,
                    coin: '../../images/Red_Mark.png'
                }, {quantity: 1, coin: '../../images/Sapphire_Medallion.png'}, {
                    quantity: 4,
                    coin: '../../images/Old_Coin.png'
                }],
                formula: [[{
                    kind: 'formula',
                    content: {formula_url: '../../images/Meat.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Meat_Scraps.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Placeholder.png', formula_quantity: '1'}
                }], [{kind: 'text', content: '('}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Meat.png'}
                }, {kind: 'text', content: ','}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Meat_Scraps.png'}
                }, {kind: 'text', content: ')'}], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Placeholder.png', formula_quantity: '1'}
                }], [{kind: 'text', content: '('}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Meat.png'}
                }, {kind: 'text', content: ','}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Meat_Scraps.png'}
                }, {kind: 'text', content: ','}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Spot_Spice.png'}
                }, {kind: 'text', content: ')'}]]
            }, {
                id: '63',
                food_url: '../../images/Crab_Roll.png',
                name: '蟹肉卷',
                satisfy: ['面包'],
                kitchen: [{kitchen_url: '../../images/Large_Grill.png', kitchen_text: 'Large Grill'}],
                reward: [{quantity: 2, coin: '../../images/Red_Mark.png'}, {
                    quantity: 1,
                    coin: '../../images/Sapphire_Medallion.png'
                }, {quantity: 4, coin: '../../images/Old_Coin.png'}],
                silver_reward: [{quantity: 1, coin: '../../images/Gnaw27s_Favor.png'}, {
                    quantity: 1,
                    coin: '../../images/Red_Mark.png'
                }, {quantity: 1, coin: '../../images/Sapphire_Medallion.png'}, {
                    quantity: 7,
                    coin: '../../images/Old_Coin.png'
                }],
                formula: [[{
                    kind: 'formula',
                    content: {formula_url: '../../images/Flour.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Crab_Meat.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Placeholder.png', formula_quantity: '1'}
                }], [{kind: 'text', content: '('}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Crab_Meat.png'}
                }, {kind: 'text', content: ',任意蔬菜)'}], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Placeholder.png', formula_quantity: '1'}
                }], [{kind: 'text', content: '(任意蔬菜)'}]]
            }, {
                id: '64',
                food_url: '../../images/Meat_Wellington.png',
                name: '威灵顿肉排',
                satisfy: ['肉类'],
                kitchen: [{kitchen_url: '../../images/Large_Casserole_Dish.png', kitchen_text: 'Large Casserole Dish'}],
                reward: [{quantity: 2, coin: '../../images/Red_Mark.png'}, {
                    quantity: 1,
                    coin: '../../images/Sapphire_Medallion.png'
                }, {quantity: 4, coin: '../../images/Old_Coin.png'}],
                silver_reward: [{quantity: 1, coin: '../../images/Gnaw27s_Favor.png'}, {
                    quantity: 1,
                    coin: '../../images/Red_Mark.png'
                }, {quantity: 1, coin: '../../images/Sapphire_Medallion.png'}, {
                    quantity: 7,
                    coin: '../../images/Old_Coin.png'
                }],
                formula: [[{
                    kind: 'formula',
                    content: {formula_url: '../../images/Flour.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Meat.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Placeholder.png', formula_quantity: '1'}
                }], [{kind: 'text', content: '('}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Meat.png'}
                }, {kind: 'text', content: ','}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Garlic.png'}
                }, {kind: 'text', content: ','}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Mushroom.png'}
                }, {kind: 'text', content: ')'}], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Placeholder.png', formula_quantity: '1'}
                }], [{kind: 'text', content: '('}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Spot_Spice.png'}
                }, {kind: 'text', content: ','}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Garlic.png'}
                }, {kind: 'text', content: ','}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Mushroom.png'}
                }, {kind: 'text', content: ')'}], [{kind: 'text', content: '(没有重复前面的素材)'}]]
            }, {
                id: '65',
                food_url: '../../images/Crab_Ravioli.png',
                name: '意式蟹肉云吞',
                satisfy: ['奶酪', '意面'],
                kitchen: [{kitchen_url: '../../images/Large_Cookpot.png', kitchen_text: 'Large Cookpot'}],
                reward: [{quantity: 2, coin: '../../images/Red_Mark.png'}, {
                    quantity: 1,
                    coin: '../../images/Sapphire_Medallion.png'
                }, {quantity: 6, coin: '../../images/Old_Coin.png'}],
                silver_reward: [{quantity: 1, coin: '../../images/Gnaw27s_Favor.png'}, {
                    quantity: 2,
                    coin: '../../images/Red_Mark.png'
                }, {quantity: 3, coin: '../../images/Old_Coin.png'}],
                formula: [[{
                    kind: 'formula',
                    content: {formula_url: '../../images/Flour.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Goat_Milk.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Crab_Meat.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Placeholder.png', formula_quantity: '1'}
                }], [{kind: 'text', content: '('}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Spot_Spice.png'}
                }, {kind: 'text', content: ','}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Crab_Meat.png'}
                }, {kind: 'text', content: ',任意蔬菜)'}]]
            }, {
                id: '66',
                food_url: '../../images/Caramel_Cube.png',
                name: '方形焦糖',
                satisfy: ['甜点'],
                kitchen: [{kitchen_url: '../../images/Cookpot.png', kitchen_text: 'Cookpot'}],
                reward: [{quantity: 1, coin: '../../images/Gnaw27s_Favor.png'}, {
                    quantity: 2,
                    coin: '../../images/Old_Coin.png'
                }],
                silver_reward: [{quantity: 1, coin: '../../images/Gnaw27s_Favor.png'}, {
                    quantity: 7,
                    coin: '../../images/Old_Coin.png'
                }],
                formula: [[{
                    kind: 'formula',
                    content: {formula_url: '../../images/Goat_Milk.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Syrup.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Placeholder.png', formula_quantity: '1'}
                }], [{kind: 'text', content: '('}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Goat_Milk.png'}
                }, {kind: 'text', content: ','}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Syrup.png'}
                }, {kind: 'text', content: ')'}]]
            }, {
                id: '67',
                food_url: '../../images/Scone.png',
                name: '司康',
                satisfy: ['甜点', '面包'],
                kitchen: [{kitchen_url: '../../images/Large_Grill.png', kitchen_text: 'Large Grill'}],
                reward: [{quantity: 1, coin: '../../images/Gnaw27s_Favor.png'}, {
                    quantity: 4,
                    coin: '../../images/Old_Coin.png'
                }],
                silver_reward: [{quantity: 1, coin: '../../images/Gnaw27s_Favor.png'}, {
                    quantity: 1,
                    coin: '../../images/Sapphire_Medallion.png'
                }, {quantity: 4, coin: '../../images/Old_Coin.png'}],
                formula: [[{
                    kind: 'formula',
                    content: {formula_url: '../../images/Flour.png', formula_quantity: '2'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Goat_Milk.png', formula_quantity: '1'}
                }], [{kind: 'formula', content: {formula_url: '../../images/Berries.png', formula_quantity: '1'}}]]
            }, {
                id: '68',
                food_url: '../../images/Trifle.png',
                name: '松糕',
                satisfy: ['甜点'],
                kitchen: [{kitchen_url: '../../images/Large_Casserole_Dish.png', kitchen_text: 'Large Casserole Dish'}],
                reward: [{quantity: 1, coin: '../../images/Gnaw27s_Favor.png'}, {
                    quantity: 6,
                    coin: '../../images/Old_Coin.png'
                }],
                silver_reward: [{quantity: 1, coin: '../../images/Gnaw27s_Favor.png'}, {
                    quantity: 1,
                    coin: '../../images/Sapphire_Medallion.png'
                }, {quantity: 6, coin: '../../images/Old_Coin.png'}],
                formula: [[{
                    kind: 'formula',
                    content: {formula_url: '../../images/Flour.png', formula_quantity: '2'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Goat_Milk.png', formula_quantity: '1'}
                }], [{kind: 'formula', content: {formula_url: '../../images/Berries.png', formula_quantity: '1'}}]]
            }, {
                id: '69',
                food_url: '../../images/Cheesecake.png',
                name: '芝士蛋糕',
                satisfy: ['甜点', '奶酪'],
                kitchen: [{kitchen_url: '../../images/Large_Casserole_Dish.png', kitchen_text: 'Large Casserole Dish'}],
                reward: [{quantity: 1, coin: '../../images/Gnaw27s_Favor.png'}, {
                    quantity: 1,
                    coin: '../../images/Sapphire_Medallion.png'
                }, {quantity: 2, coin: '../../images/Old_Coin.png'}],
                silver_reward: [{quantity: 1, coin: '../../images/Gnaw27s_Favor.png'}, {
                    quantity: 1,
                    coin: '../../images/Red_Mark.png'
                }, {quantity: 3, coin: '../../images/Old_Coin.png'}],
                formula: [[{
                    kind: 'formula',
                    content: {formula_url: '../../images/Flour.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Goat_Milk.png', formula_quantity: '2'}
                }], [{kind: 'formula', content: {formula_url: '../../images/Berries.png', formula_quantity: '1'}}]]
            }, {
                id: '70',
                food_url: '../../images/Syrup.png',
                name: '糖浆',
                satisfy: ['其他'],
                kitchen: [{kitchen_url: '../../images/Syrup_Pot.png', kitchen_text: 'Syrup Pot'}],
                reward: [],
                silver_reward: [],
                formula: [[{kind: 'formula', content: {formula_url: '../../images/Sap.png', formula_quantity: '3'}}]]
            }],
            satisfyMap: [{
                satisfy: '全部',
                ids: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69],
                show: true
            }, {
                satisfy: '零食',
                ids: [0, 1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 15, 19, 20, 23, 24, 25, 26, 27, 28, 30, 46, 47, 48, 53, 58],
                show: false
            }, {satisfy: '汤类', ids: [2, 4, 7, 11, 15, 25, 31, 36, 48, 53], show: false}, {
                satisfy: '其他',
                ids: [69],
                show: false
            }, {
                satisfy: '素食',
                ids: [1, 2, 5, 6, 7, 12, 13, 15, 23, 25, 28, 29, 30, 34, 48, 49, 53],
                show: false
            }, {
                satisfy: '肉类',
                ids: [9, 10, 14, 18, 19, 26, 31, 32, 36, 37, 38, 40, 51, 54, 56, 57, 59, 60, 61, 63],
                show: false
            }, {satisfy: '奶酪', ids: [45, 47, 48, 49, 50, 51, 56, 64, 68], show: false}, {
                satisfy: '甜点',
                ids: [20, 21, 22, 41, 42, 43, 44, 65, 66, 67, 68],
                show: false
            }, {satisfy: '鱼类', ids: [4, 8, 16, 17, 27, 33, 35, 39, 46, 55], show: false}, {
                satisfy: '意面',
                ids: [37, 38, 45, 50, 52, 64],
                show: false
            }, {satisfy: '面包', ids: [0, 3, 19, 24, 30, 32, 33, 34, 46, 47, 51, 60, 62, 66], show: false}]
        }
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        let id = options.show + '.display'
        this.setData({
            id: true,
            show: this.data[options.show].name
        })
    },
    openDialog: function () {
        this.setData({
            istrue: true
        })
    },
    closeDialog: function () {
        this.setData({
            istrue: false
        })
    },
    recipeChange: function (event) {
        let tapId = event.currentTarget.id
        let satisfyMap = this.data.recipe.satisfyMap
        for (let i = 0, len = satisfyMap.length; i < len; ++i) {
            satisfyMap[i]['show'] = false
        }
        satisfyMap[tapId]['show'] = true
        this.setData({
            'recipe.satisfyMap': satisfyMap
        })
        this.closeDialog()
    }
})
