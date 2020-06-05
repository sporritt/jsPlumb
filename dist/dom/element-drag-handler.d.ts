import { DragHandler } from "./drag-manager";
import { BrowserJsPlumbInstance, PosseSpec } from "./browser-jsplumb-instance";
import { UIGroup } from "../group/group";
import { BoundingBox, Dictionary, Offset } from "../core";
import { Drag } from "./collicat";
declare type IntersectingGroup = {
    group: UIGroup;
    d: number;
    intersectingElement: HTMLElement;
};
declare type GroupLocation = {
    el: HTMLElement;
    r: BoundingBox;
    group: UIGroup;
};
declare type PosseMemberSpec = {
    el: HTMLElement;
    elId: string;
    active: boolean;
};
declare type Posse = {
    id: string;
    members: Set<PosseMemberSpec>;
};
export declare class ElementDragHandler implements DragHandler {
    protected instance: BrowserJsPlumbInstance;
    selector: string;
    _dragOffset: Offset;
    _groupLocations: Array<GroupLocation>;
    _intersectingGroups: Array<IntersectingGroup>;
    _posseByElementIdMap: Dictionary<Posse>;
    _posseMap: Dictionary<Posse>;
    _currentPosse: Posse;
    private _currentPosseOffsets;
    private _currentPosseSizes;
    private _dragSelection;
    private _dragSelectionOffsets;
    private _dragSizes;
    protected katavorioDraggable: Drag;
    constructor(instance: BrowserJsPlumbInstance);
    onStop(params: any): void;
    reset(): void;
    init(drag: Drag): void;
    onDrag(params: any): void;
    onStart(params: any): boolean;
    addToDragSelection(el: string | HTMLElement): void;
    clearDragSelection(): void;
    removeFromDragSelection(el: string | HTMLElement): void;
    toggleDragSelection(el: string | HTMLElement): void;
    getDragSelection(): Array<HTMLElement>;
    private static decodePosseSpec;
    addToPosse(spec: PosseSpec, ...els: Array<HTMLElement>): void;
    removeFromPosse(...els: Array<HTMLElement>): void;
    setPosseState(state: boolean, ...els: Array<HTMLElement>): void;
    private isActivePosseMember;
}
export {};
