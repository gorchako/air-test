import { PlacementType } from "@/components/BecomeResidentModal/BecomeResidentModalForm.constants";

export interface IBecomeResidentForm {
    companyName: string,
    phone: string,
    placementType: PlacementType,
    address: string,
    placementArea: {
        from: string,
        to: string,
    },
    rentDate: {
        from: string,
        to: string,
    }
}