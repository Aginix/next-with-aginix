import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
export declare class TodoUpdateInput {
    title?: NullableStringFieldUpdateOperationsInput | undefined;
    checked?: BoolFieldUpdateOperationsInput | undefined;
}
