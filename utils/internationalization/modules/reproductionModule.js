const reproductionModule = {
    index: {
        Zeal: 'Celo',
        Insemination: 'Servicio',
        Palpation: 'Palpación/Ecografia',
        Birth: 'Nacimiento / Aborto'

    },

    form: {
        ZealFormTitle: 'Registro de celos',
        ZealForm: 'Información del Celo',
        ZealOptions: [
            { label: 'Aceptación de monta', value: 'Aceptación de monta' },
            { label: 'Reflejo de monta', value: 'Reflejo de monta' },
            { label: 'Mugidos frecuentes', value: 'Mugidos frecuentes' },
            { label: 'Reflejos olfativos', value: 'Reflejos olfativos' },
            { label: 'Incremento de la actividad', value: 'Incremento de la actividad' },
        ],
        ZealTextHelp: '  Escriba sus observaciones si es necesario',
        ZealRegister: ' Registrar celo',
        InsemitationFormTitle: 'Registro de servicios',
        InsemitationInfo: 'Información del servicio',
        InseminationTypeLabel: 'Tipo de servicio',
        InseminationType: ['Monta natural', 'Inseminación artificial', 'Transferencia de embrion'],
        ParentalInsemination: 'Identificación del parental',
        InseminationRegister: 'Registro de servicio',
        PalpationFormTitle: 'Palpaciones y ecografías',
        PalpationDiagnosis: 'Diagnostico de preñez',
        PalpationStatus: ['Preñada', 'Vacia'],
        DiagnosisOvaries: 'Diagnostico de ovarios',
        LeftOvary: 'Ovario izquierdo',
        RightOvary: 'Ovario derecho',
        GeneralDiagnosis: 'Observaciones generales',
        PalpationRegister: 'Registro de monitoreo',
        BirthInfo: 'Información del nacimiento',
        BirthTitle: 'Nacimientos y abortos',
        BirthSelectType: '¿Que tipo de evento desea registrar?',
        BirthType: ['Nacimiento', 'Aborto'],
        BirthSex: 'Sexo de la cría',
        BirthWeigth: 'Peso de la cría (kg)',
        BirthName: 'Nombre',
        BirthId: 'Identificacion',
        BirthRegister: 'Registrar nacimiento',
        AbortionInfo: 'Información del aborto',
        DiagnosedAbortion: 'Observaciones sobre el aborto',
        RegisterAbortion: 'Registrar aborto'
    }
}

export default reproductionModule