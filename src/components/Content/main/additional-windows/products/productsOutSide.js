const kebab = {
    header: 'Шашлыки',
    products: [
        {
            imgLink: '../../../../img/temporary/kebab1.jpg',
            name: 'Шашлык из свинины в классическом маринаде',
            description: ' ',
            dose: '200' ,
            calculation: 'гр',
            price: '95',
        },
        {
            imgLink: '../../../../img/temporary/kebab1.jpg',
            name: 'Шашлык из свиной шейки',
            description: ' ',
            dose: '200' ,
            calculation: 'гр',
            price: '120',
        },
        {
            imgLink: '../../../../img/temporary/kebab1.jpg',
            name: 'Шашлык из куриного филе',
            description: ' ',
            dose: '200' ,
            calculation: 'гр',
            price: '95',
        },
        {
            imgLink: '../../../../img/temporary/kebab1.jpg',
            name: 'Шашлык из мякоти баранины в классическом маринаде',
            description: ' ',
            dose: '200' ,
            calculation: 'гр',
            price: '150',
        },
        {
            imgLink: '../../../../img/temporary/kebab1.jpg',
            name: 'Шашлык из свинины на рёбрышке в маринаде «Барбадос»',
            description: ' ',
            dose: '200' ,
            calculation: 'гр',
            price: '160',
        },
        {
            imgLink: '../../../../img/temporary/kebab1.jpg',
            name: 'Куриные крылышки на углях',
            description: ' ',
            dose: '200' ,
            calculation: 'гр',
            price: '80',
        },
        {
            imgLink: '../../../../img/temporary/kebab1.jpg',
            name: 'Люля-кебаб из курицы с сыром Моцарелла',
            description: ' ',
            dose: '200' ,
            calculation: 'гр',
            price: '100',
        },
    ],
};


const vegetablesHot = {
    header: 'Овощные закуски',
    products: [
        {
            imgLink: '../../../../img/temporary/vegetable-snacks.jpg',
            name: 'Соленья',
            description: 'Солёные помидоры, маринованные огурцы, корейская морковь, черемша и маринованные грибы и чеснок, капуста красная - это не только закуска к водке, а ещё и хороший гарнир к шашлыку.',
            dose: '200' ,
            calculation: 'гр',
            price: '220',
        },
        {
            imgLink: '../../../../img/temporary/vegetable-snacks.jpg',
            name: 'Овощная грядка',
            description: 'Свежие томаты, огурцы, болгарский перец, сыр брынза, укроп, петрушка, кинза и зеленый лук - это всегда хорошее дополнение к мясным блюдам.',
            dose: '200' ,
            calculation: 'гр',
            price: '290',
        },
        {
            imgLink: '../../../../img/temporary/vegetable-snacks.jpg',
            name: 'Хорошо сидим',
            description: 'Блюдо на компанию под водочку. Капуста солёная, черемша, перец, чеснок, помидоры, огурцы, маринованный лук, лук красный, картофель в мундире, яйца варёные.',
            dose: '1400' ,
            calculation: 'гр',
            price: '1000',
        },
    ],

};
const vegetablesEat = {
    header: 'Мясные закуски',
    products: [
        {
            imgLink: '../../../../img/temporary/meat-eat.jpg',
            name: 'Мясной пир',
            description: 'Пять видов мяса: говядина запечённая, баранина пряная, буженина, грудка свиная подкопчённая, рулет из курятины.',
            dose: '420' ,
            calculation: 'гр',
            price: '600',
        },
        {
            imgLink: '../../../../img/temporary/meat-eat.jpg',
            name: 'Бен Ганн',
            description: 'Отварной говяжий язык под сливочным хреном с грецкими орехами.',
            dose: '385' ,
            calculation: 'гр',
            price: '400',
        },
    ],
};
const MeatEat = {
    header: 'Овощи на мангале',
    products: [
        {
            imgLink: '../../../../img/temporary/hot-vegetable.jpg',
            name: 'Абордаж',
            description: 'Грибы шампиньоны и помидоры черри, обжаренные на мангале. Подаются с белым чесночным соусом. Это блюдо станет прекрасным дополнением к горячительному напитку.',
            dose: '300 ' ,
            calculation: 'гр',
            price: '95',
        },
        {
            imgLink: '../../../../img/temporary/hot-vegetable.jpg',
            name: 'Картофан',
            description: 'Запеченный на мангале до золотистой корочки картофель, обёрнутый в курдючное или в свиное сало (на выбор). Подаётся с белым чесночным соусом.',
            dose: '200' ,
            calculation: 'гр',
            price: '240',
        },
        {
            imgLink: '../../../../img/temporary/hot-vegetable.jpg',
            name: 'Йо-хо-хо',
            description: 'Свежие овощи (помидор, баклажан (кабачок), перец болгарский), приготовленные на углях в лучших традициях восточной кухни, всегда будут возбуждать Ваш аппетит для дальнейшего продолжения трапезы. Подаются с белым чесночным соусом и тонким лавашом.',
            dose: '300' ,
            calculation: 'гр',
            price: '300',
        },
    ],
};

const productsOutSideArr = [kebab, vegetablesHot, vegetablesEat, MeatEat];


export default productsOutSideArr;