const milkModule = {
    form: {
        Tittle: 'Ordeñar',
        MilkingData: 'Dato de ordeño',
        HelpMessage: '¡Es muy facil, tan solo elige una vaca y agrega su información de ordeño!',
        CowHeaderTable: ['ID TAG', 'NOMBRE', 'LITROS', 'FECHA', 'SINTOMAS'],
        Cow: 'Vaca',
        FoodType: '¿Qué tipo de alimento suministró en el ordeño?',
        FoodAmount: 'Kilogramos de alimento (kg)',
        MilkAmount: 'Litros de leche (L) ',
        foodSelectPlaceholder: "Seleccione una opción",
        foodOptions: [
            { key: 1, value: 'Forraje fresco o conservado' },
            { key: 2, value: 'Concentrado' },
            { key: 3, value: 'Concentrado+forraje' },
            { key: 4, value: 'Subproductos de industria' },
            { key: 5, value: 'Rechazo de cultivo' },
            { key: 6, value: 'Mezcla' }
        ],
        CowSelect: 'Seleccionar otra vaca',
        Send: 'Registrar'
    }
}

export default milkModule