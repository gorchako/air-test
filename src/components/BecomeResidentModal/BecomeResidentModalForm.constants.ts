export enum PlacementType {
    Industrial = 'Industrial',
    Residential = 'Residential',
}

const PLACEMENT_TYPE_TRANSLATIONS: { [k in PlacementType]: string } = {
    [PlacementType.Industrial]: 'Производственная площадь',
    [PlacementType.Residential]: 'Жилая площадь',
}

export const SELECT_PLACEMENT_OPTIONS: { id: PlacementType, label: string }[] = [
    {
        id: PlacementType.Industrial,
        label: PLACEMENT_TYPE_TRANSLATIONS[PlacementType.Industrial]
    },
    {
        id: PlacementType.Residential,
        label: PLACEMENT_TYPE_TRANSLATIONS[PlacementType.Residential]
    }
]