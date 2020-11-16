const kebab = {
    header: 'Шашлыки',
    products: [
        {
            imgLink: '../../../../img/kebab-img/kebab1.jpg',
            name: 'Шашлык из свинины в классическом маринаде',
            description: ' ',
            dose: '200' ,
            calculation: 'гр',
            price: '95',
        },
        {
            imgLink: '../../../../img/kebab-img/kebab2.jpg',
            name: 'Шашлык из свиной шейки',
            description: ' ',
            dose: '200' ,
            calculation: 'гр',
            price: '120',
        },
        {
            imgLink: '../../../../img/kebab-img/kebab3.jpg',
            name: 'Шашлык из куриного филе',
            description: ' ',
            dose: '200' ,
            calculation: 'гр',
            price: '95',
        },
        {
            imgLink: '../../../../img/kebab-img/kebab4.jpg',
            name: 'Шашлык из мякоти баранины в классическом маринаде',
            description: ' ',
            dose: '200' ,
            calculation: 'гр',
            price: '150',
        },
        {
            imgLink: '../../../../img/kebab-img/kebab5.jpg',
            name: 'Шашлык из свинины на рёбрышке в маринаде «Барбадос»',
            description: ' ',
            dose: '200' ,
            calculation: 'гр',
            price: '160',
        },
        {
            imgLink: '../../../../img/kebab-img/kebab6.jpg',
            name: 'Куриные крылышки на углях',
            description: ' ',
            dose: '200' ,
            calculation: 'гр',
            price: '80',
        },
        {
            imgLink: '../../../../img/kebab-img/kebab7.jpg',
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
            imgLink: '../../../../img/vegetable-snaks/vegetable-s2.jpg',
            name: 'Соленья',
            description: 'Солёные помидоры, маринованные огурцы, корейская морковь, черемша и маринованные грибы и чеснок, капуста красная - это не только закуска к водке, а ещё и хороший гарнир к шашлыку.',
            dose: '200' ,
            calculation: 'гр',
            price: '220',
        },
        {
            imgLink: '../../../../img/vegetable-snaks/vegetable-s2.jpg',
            name: 'Овощная грядка',
            description: 'Свежие томаты, огурцы, болгарский перец, сыр брынза, укроп, петрушка, кинза и зеленый лук - это всегда хорошее дополнение к мясным блюдам.',
            dose: '200' ,
            calculation: 'гр',
            price: '290',
        },
        {
            imgLink: '../../../../img/vegetable-snaks/vegetable-s3.jpg',
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
            imgLink: '../../../../img/meat-snaks/meat-s1.jpg',
            name: 'Мясной пир',
            description: 'Пять видов мяса: говядина запечённая, баранина пряная, буженина, грудка свиная подкопчённая, рулет из курятины.',
            dose: '420' ,
            calculation: 'гр',
            price: '600',
        },
        {
            imgLink: '../../../../img/meat-snaks/meat-s2.jpg',
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
            imgLink: '../../../../img/hot-vegetables/h-vet1.jpg',
            name: 'Абордаж',
            description: 'Грибы шампиньоны и помидоры черри, обжаренные на мангале. Подаются с белым чесночным соусом. Это блюдо станет прекрасным дополнением к горячительному напитку.',
            dose: '300 ' ,
            calculation: 'гр',
            price: '95',
        },
        {
            imgLink: '../../../../img/hot-vegetables/h-vet2.jpg',
            name: 'Картофан',
            description: 'Запеченный на мангале до золотистой корочки картофель, обёрнутый в курдючное или в свиное сало (на выбор). Подаётся с белым чесночным соусом.',
            dose: '200' ,
            calculation: 'гр',
            price: '240',
        },
        {
            imgLink: '../../../../img/hot-vegetables/h-vet3.jpg',
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