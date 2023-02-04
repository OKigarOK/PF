const OIL_FILTERS = [
    {
        detail_info: 'Фильтр маслянный',
        detail_scheme: './images/details/oil_filters/77102.gif',
        detail_image: './images/details/oil_filters/oil-filter_mopar_05281090AB.jpg',
        detail_code: '5281090AB',
        detail_manufacturer: 'Mopar',
        detail_more: 'Какая-то дополнительная информация...',
        detail_options: [{},],
    },
    {
        detail_info: 'Фильтр маслянный',
        detail_scheme: './images/details/oil_filters/77102.gif',
        detail_image: './images/details/oil_filters/oil-filter_fram_PH16.jpg',
        detail_code: 'PH16',
        detail_manufacturer: 'Fram',
        detail_more: 'Что-то ещё...',
        detail_options: [{},],
    },
    {
        detail_info: 'Фильтр маслянный',
        detail_scheme: './images/details/oil_filters/77102.gif',
        detail_image: './images/details/oil_filters/oil-filter_mahle_OC23.jpg',
        detail_code: 'OC23',
        detail_manufacturer: 'Mahle/Knecht',
        detail_more: 'Что-то ещё...',
        detail_options: [{},],
    },
    {
        detail_info: 'Фильтр маслянный',
        // detail_scheme: './images/details/oil_filters/77102.gif',
        detail_image: './images/details/oil_filters/oil-filter_mahle_OC236.jpg',
        detail_code: 'OC236',
        detail_manufacturer: 'Mahle/Knecht',
        detail_more: 'Что-то ещё...',
        detail_options: [{},],
    },
]

const AIR_FILTERS = [
    {
        detail_image: './images/details/air_filters/air-filter_mopar_5510026AA.jpg',
        detail_info: 'Фильтр воздушный',
        detail_code: '5510026AA',
        detail_manufacturer: 'Mopar',
        detail_more: '',
        detail_scheme: ''
    },
]

const CABIN_FILTERS = [
    {
        detail_image: './images/details/cain_filters/cabin-filter_mopar_82205905.jpg',
        detail_info: 'Фильтр салона',
        detail_code: '82205905',
        detail_manufacturer: 'Mopar',
        detail_more: '',
        detail_scheme: ''
    },
]

const TRANSMISSION_FILTERS = [
    {
        detail_image: './images/details/transmission_filters/transmission-filter_mopar_4864505AB.jpg',
        detail_info: 'Фильтр АКПП',
        detail_code: '4864505AB',
        detail_manufacturer: 'Mopar',
        detail_more: '',
        detail_scheme: ''
    },
]

const SPARK_PLUGS = [
    {
        detail_image: './images/details/spark_plugs/spark-plug_mopar_SZFR5LP13G.jpg',
        detail_info: 'Свечи зажигания',
        detail_code: 'SZFR5LP13G',
        detail_manufacturer: 'Mopar',
        detail_more: '',
        detail_scheme: ''
    },
]

// export const DATA = [...OIL_FILTERS, ...OIL_FILTERS]

const MAINTENANCE_LIST = [
    {
        subtitle: 'Маслянный фильтр',
        id: 'oil_filters',
        details: OIL_FILTERS // МАССИВ ДЕТАЛЕЙ
    },
    {
        subtitle: 'Воздушный фильтр',
        // id: 'air_filters',
        details: AIR_FILTERS
    },
    {
        subtitle: 'Фильтр салона',
        id: 'cabin_filters',
        details: CABIN_FILTERS
    },
    {
        subtitle: 'Фильтр АКПП',
        id: 'transmission_filters',
        details: TRANSMISSION_FILTERS
    },
    {
        subtitle: 'Свечи зажигания',
        id: 'spark_plugs',
        details: SPARK_PLUGS
    },
    {
        subtitle: 'Ремень поликлинковый',
        id: '',
        details: ''
    },
    {
        subtitle: 'Ремень ГРМ',
        id: '',
        details: ''
    },
    {
        subtitle: 'Колодки тормозные',
        id: '',
        details: ''
    },
    {
        subtitle: 'Пробка сливного отверстия',
        id: '',
        details: ''
    },
    {
        subtitle: 'Щетки стеклоочистителя',
        id: '',
        details: ''
    },
]


const GASKETS = [
    {
        detail_image: './images/details/gaskets/vs50248.jpg',
        detail_info: 'Прокладка клапанной крышки',
        detail_code: 'VS50248',
        detail_manufacturer: 'Mahle',
        detail_more: '',
        detail_scheme: './images/details/gaskets/76920.gif'
    },
]



const ENGINE_LIST = [
    ]

const FUEL_SYSTEM_LIST = [
    {},
]

const COOLING_SYSTEM_LIST = [
    {},
]

const EXHAUST_SYSTEM_LIST = [
    {},
]

const TRANSMISSION_LIST = [
    {},
]

const CHASSIS_LIST = [
    {},
]

const STEERING_LIST = [
    {},
]

const BRAKE_SYSTEM_LIST = [
    {},
]

const ELECTRICAL_EQUIPMENT_LIST = [
    {},
]

const HEATING_CONDITION_LIST = [
    {},
]

const INTERIOR_DETAILS_LIST = [
    {},
]

const BODY_PARTS_LIST = [
    {},
]

export const HEADERS = [
    {
        title: 'Детали ТО',
        // subtitles: MAINTENANCE_LIST, // МАССИВ ПОДЗАГОЛОВКОВ
        subtitles: [
            {
                subtitle: 'Маслянный фильтр',
                details: OIL_FILTERS // МАССИВ ДЕТАЛЕЙ
            },
            {
                subtitle: 'Воздушный фильтр',
                details: AIR_FILTERS
            },
            {
                subtitle: 'Фильтр салона',
                details: CABIN_FILTERS
            },
            {
                subtitle: 'Фильтр АКПП',
                details: TRANSMISSION_FILTERS
            },
            {
                subtitle: 'Свечи зажигания',
                details: SPARK_PLUGS
            },
            {
                subtitle: 'Ремень поликлинковый',
                details: ''
            },
            {
                subtitle: 'Ремень ГРМ',
                details: ''
            },
            {
                subtitle: 'Колодки тормозные',
                details: ''
            },
            {
                subtitle: 'Пробка сливного отверстия',
                details: ''
            },
            {
                subtitle: 'Щетки стеклоочистителя',
                details: ''
            },
        ]
    },
    {
        title: 'Двигатель',
        subtitles: [
            {
                subtitle: 'Прокладки',
                details: GASKETS // МАССИВ ДЕТАЛЕЙ
            },
            {
                subtitle: 'Система подачи воздуха',
                // details: AIR_SUPPLY_SYSTEM
            },
            {
                subtitle: 'Механизм газораспределения ГРМ',
                // details: GAS_DISTRIBUTION_MECHANISM
            },
            {
                subtitle: 'Блок-картер',
                // details: CRANKCASE_BLOCK
            },
            {
                subtitle: 'Кривошипношатунный механизм',
                // details: CRANK_MECHANISM
            },
            {
                subtitle: 'Система смазки (насос)',
                // details: LUBRICATION_MECHANISM
            },
            {
                subtitle: 'Крепление двигателя (подушки)',
                // details: MOUNTS
            },
            {
                subtitle: 'Система очистки ОГ (ЕГР)',
                // details: EXHAUST_GAS_CLEANING_SYSTEM
            },
            {
                subtitle: 'Ременной привод',
                // details: DRIVE_PULLEYS
            },
            {
                subtitle: 'Приготовление смеси (форсунки)',
                // details: FUEL_PREPARATION
            },
            {
                subtitle: 'Головка цилиндра',
                // details: CYLINDER_HEAD
            },
        ]
    },
    {
        title: 'Топливная система',
        subtitles: [
            {
                subtitle: 'Бак топливный',
                // details: TANK_FUEL
            },
            {
                subtitle: 'Клапан',
                // details: LEAK_DETECTION_PUMP
            },
            {
                subtitle: 'Датчик уровня топлива',
                // details: FUEL_SENDING_UNIT
            },
            {
                subtitle: 'Регулятор давления подачи топлива',
                // details: REGULATOR_FUEL_PRESSURE
            },
            {
                subtitle: 'Насос топливный, комплектующие',
                // details: FUEL_PUMP
            },
        ],
    },
    {
        title: 'Система охлаждения',
        subtitles: [
            {
                subtitle: 'Термостат, прокладка',
                // details: THERMOSTAT_PAD
            },
            {
                subtitle: 'Расширительный бачок, крышка',
                // details: EXPANSION_TANK
            },
            {
                subtitle: 'Радиаторы: основной, масляннный (АКПП), кондиционера',
                // details: COOLING_RADIATORS
            },
            {
                subtitle: 'Патрубки системы охлаждения',
                // details: PIPE_BRANCH
            },
            {
                subtitle: 'Выключатель, датчик ОЖ',
                // details: COOLANT_SENSOR
            },
            {
                subtitle: 'Вентилятор охлаждения радиатора',
                // details: RADIATOR_FANS
            },
            {
                subtitle: 'Насос системы охлаждения (помпа)',
                // details: WATER_PUMP
            },
        ],
    },
    {
        title: 'Система выпуска',
        subtitles: [
            {
                subtitle: 'Нейтрализация ОГ (катализатор)',
                // details: CATALYTIC_CONVERTER
            },
            {
                subtitle: 'Глушитель в сборе/части',
                // details: EXHAUST
            },
            {
                subtitle: 'Датчик кислорода (лямбда-зонд)',
                // details: OXYGEN
            },
            {
                subtitle: 'Коллектор выпускной (прокладки)',
                // details: EXHAUST_MANIFOLD
            },
            {
                subtitle: 'Трубы (гофра)',
                // details: MUFFLER_CORRUGATION
            },
            {
                subtitle: 'Детали монтажа',
                // details: ISOLATOR_EXHAUST
            },
        ],
    },
    {
        title: 'Трансмиссия',
        subtitles: [
            {
                subtitle: 'Автоматическая коробка передач',
                // details: AUTOMATIC_TRANSMISSION
            },
            {
                subtitle: 'Привод колеса (полуоси)',
                // details: WHEEL_DRIVE
            },
            {
                subtitle: 'Раздатка и карданная передача (AWD)',
                // details: CARDAN_SHAFT
            },
        ],
    },
    {
        title: 'Ходовая часть',
        subtitles: [
            {
                subtitle: 'Пружина подвески',
                // details: SPRINGS
            },
            {
                subtitle: 'Опора амортизатора',
                // details: SHOCK_ABSORBER_SUPPORT
            },
            {
                subtitle: 'Амортизатор подвески',
                // details: SHOCK_ABSORBER
            },
            {
                subtitle: 'Рычаги и тяги подвески',
                // details: LEVERS_AND_PULLS
            },
            {
                subtitle: 'Стабилизатор, крепление',
                // details: STABILIZER
            },
            {
                subtitle: 'Ступица колеса, составляющие',
                // details: HUB
            },
            {
                subtitle: 'Крепление амортизатора подвески',
                // details: SHOCK_ABSORBER_MOUNT
            },
            {
                subtitle: 'Кулак поворотный, составляющие',
                // details: ROUNDED_FIST
            },
            {
                subtitle: 'Балка моста, подвеска оси',
                // details: BRIDGE_BEAM
            },
            {
                subtitle: 'Колесо, крепление колеса',
                // details: WHEEL
            },
            {
                subtitle: 'Система контроля давления в шинах',
                // details: TPMS
            },
            {
                subtitle: 'Колеса, шины',
                // details: TIRES
            },
        ],
    },
    {
        title: 'Рулевое управление',
        subtitles: [
            {
                subtitle: 'Шарниры (рулевые наконечники)',
                // details: END_TIE_ROD
            },
            {
                subtitle: 'Рейка рулевая, насос ГУР',
                // details: STEERING_RAIL
            },
            {
                subtitle: 'Бачок ГУР',
                // details: HYDRAULIC_RESERVOIR
            },
            {
                subtitle: 'Тяга рулевая',
                // details: TIE_ROD
            },
        ],
    },
    {
        title: 'Тормозная система',
        subtitles: [
            {
                subtitle: 'Дисковый тормоз',
                // details: BRAKE_DISC
            },
            {
                subtitle: 'Барабанный тормозной механизм',
                // details: DRUM_BRAKE
            },
            {
                subtitle: 'Тросы, тяги и рычаги тормозной системы',
                // details: BRAKE_CABLES
            },
            {
                subtitle: 'Стояночный тормоз',
                // details: PARKING_BRAKE
            },
            {
                subtitle: 'Шланги тормозные',
                // details: BRAKE_HOSE
            },
            {
                subtitle: 'Тормозной усилитель',
                // details: BRAKE_BOOSTER
            },
            {
                subtitle: 'Главный тормозной усилитель',
                // details: MAIN_BRAKE_BOOSTER
            },
            {
                subtitle: 'Регулировка динамики движения',
                // details: DYNAMICS_CONTROL
            },
            {
                subtitle: 'Выключатель фонаря сигнала торможения',
                // details: BRAKE_LIGHT_SWITCH
            },
            {
                subtitle: 'Суппорт тормозной',
                // details: BRAKE_CALIPER
            },
        ],
    },
    {
        title: 'Электрооборудование',
        subtitles: [
            {
                subtitle: 'Система стартера',
                // details: STARTER_SYSTEM
            },
            {
                subtitle: 'Генератор, составляющие',
                // details: GENERATOR
            },
            {
                subtitle: 'Головной свет, составляющие',
                // details: HEADLIGHT
            },
            {
                subtitle: 'Дополнительное освещение',
                // details: ADDITIONAL_LIGHTING
            },
            {
                subtitle: 'Система освещения',
                // details: LIGHTING_SYSTEM
            },
            {
                subtitle: 'Выключатель, реле, блок управления освещения',
                // details: LIGHTING_CONTROL_UNIT
            },
            {
                subtitle: 'Датчики',
                // details: SENSORS
            },
            {
                subtitle: 'Контрольные приборы',
                // details: CONTROL_DEVICES
            },
            {
                subtitle: 'Система очистки окон',
                // details: WINDOW_CLEANING_SYSTEM
            },
            {
                subtitle: 'Дополнительные удобства',
                // details: ADDITIONAL_AMENITIES
            },
        ],
    },
    {
        title: 'Отопление / Кондиционирование',
        subtitles: [
            {
                subtitle: 'Отопление',
                // details: HEATING
            },
            {
                subtitle: 'Кондиционер',
                // details: AIR_CONDITIONER
            },
        ],
    },
    {
        title: 'Детали салона',
        subtitles: [
            {
                subtitle: 'Подъемное устройство',
                // details: LIFTING_DEVICE
            },
            {
                subtitle: 'Ручки',
                // details: PENS
            },
            {
                subtitle: 'Багажник',
                // details: TRUNK
            },
            {
                subtitle: 'Замок',
                // details: LOCK
            },
        ],
    },
    {
        title: 'Детали кузова',
        subtitles: [
            {
                subtitle: 'Автомобиль, передняя часть',
                // details: FRONT_END
            },
            {
                subtitle: 'Кабина пассажира',
                // details: PASSENGER_CABIN
            },
            {
                subtitle: 'Автомобиль, задняя часть',
                // details: REAR_END
            },
            {
                subtitle: 'Кузовные детали',
                // details: BODY_PARTS
            },
            {
                subtitle: 'Облицовка, защитные накладки, эмблемы',
                // details: FACING
            },
            {
                subtitle: 'Остекление, зеркала',
                // details: GLAZING_MIRRORS
            },
            {
                subtitle: 'Головной свет',
                // details: HEADLIGHT
            },
            {
                subtitle: 'Дополнительное освещение',
                // details: ADDITIONAL_LIGHTING
            },
            {
                subtitle: 'Освещение',
                // details: LIGHTING
            },
        ],
    },
]

// console.log(HEADERS);


