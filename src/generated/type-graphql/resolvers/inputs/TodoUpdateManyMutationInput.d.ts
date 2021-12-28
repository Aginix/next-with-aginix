import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
export declare class TodoUpdateManyMutationInput {
    title?: NullableStringFieldUpdateOperationsInput | undefined;
    checked?: BoolFieldUpdateOperationsInput | undefined;
}
