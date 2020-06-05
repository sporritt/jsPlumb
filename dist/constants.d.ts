export declare function cls(...className: Array<string>): string;
export declare function classList(...className: Array<string>): string;
export declare const SOURCE_DEFINITION_LIST = "_jsPlumbSourceDefinitions";
export declare const TARGET_DEFINITION_LIST = "_jsPlumbTargetDefinitions";
export declare const DEFAULT = "default";
export declare const WILDCARD = "*";
export declare const SOURCE = "source";
export declare const TARGET = "target";
export declare const BLOCK = "block";
export declare const NONE = "none";
export declare const SOURCE_INDEX = 0;
export declare const TARGET_INDEX = 1;
export declare const GROUP_KEY = "_jsPlumbGroup";
export declare const IS_GROUP_KEY = "_isJsPlumbGroup";
export declare const ATTRIBUTE_MANAGED = "jtk-managed";
export declare const ATTRIBUTE_GROUP = "jtk-group";
export declare const ATTRIBUTE_SOURCE = "jtk-source";
export declare const ATTRIBUTE_TARGET = "jtk-target";
export declare const ATTRIBUTE_CONTAINER = "jtk-container";
export declare const ATTRIBUTE_NOT_DRAGGABLE = "jtk-not-draggable";
export declare const ATTRIBUTE_TABINDEX = "tabindex";
export declare const CHECK_DROP_ALLOWED = "checkDropAllowed";
export declare const IS_DETACH_ALLOWED = "isDetachAllowed";
export declare const BEFORE_DETACH = "beforeDetach";
export declare const CHECK_CONDITION = "checkCondition";
export declare const EVENT_CONNECTION = "connection";
export declare const EVENT_CONNECTION_DETACHED = "connectionDetached";
export declare const EVENT_INTERNAL_CONNECTION_DETACHED = "internal.connectionDetached";
export declare const EVENT_CONNECTION_MOVED = "connectionMoved";
export declare const EVENT_CONTAINER_CHANGE = "container:change";
export declare const EVENT_CLICK = "click";
export declare const EVENT_DBL_CLICK = "dblclick";
export declare const EVENT_ENDPOINT_CLICK = "endpointClick";
export declare const EVENT_ENDPOINT_DBL_CLICK = "endpointDblClick";
export declare const EVENT_FOCUS = "focus";
export declare const EVENT_MOUSEOVER = "mouseover";
export declare const EVENT_MOUSEOUT = "mouseout";
export declare const EVENT_MOUSEENTER = "mouseenter";
export declare const EVENT_MOUSEEXIT = "mouseexit";
export declare const EVENT_TAP = "tap";
export declare const EVENT_DBL_TAP = "dbltap";
export declare const EVENT_CONTEXTMENU = "contextmenu";
export declare const EVENT_MOUSEUP = "mouseup";
export declare const EVENT_MOUSEDOWN = "mousedown";
export declare const EVENT_CONNECTION_DRAG = "connectionDrag";
export declare const EVENT_CHILD_ADDED = "group:addMember";
export declare const EVENT_CHILD_REMOVED = "group:removeMember";
export declare const EVENT_GROUP_ADDED = "group:add";
export declare const EVENT_GROUP_REMOVED = "group:remove";
export declare const EVENT_EXPAND = "group:expand";
export declare const EVENT_COLLAPSE = "group:collapse";
export declare const EVENT_GROUP_DRAG_STOP = "groupDragStop";
export declare const EVENT_MAX_CONNECTIONS = "maxConnections";
export declare const CLASS_CONNECTOR = "jtk-connector";
export declare const CLASS_ENDPOINT = "jtk-endpoint";
export declare const CLASS_OVERLAY = "jtk-overlay";
export declare const GROUP_COLLAPSED_CLASS = "jtk-group-collapsed";
export declare const GROUP_EXPANDED_CLASS = "jtk-group-expanded";
export declare const CMD_REMOVE_ALL = "removeAll";
export declare const CMD_ORPHAN_ALL = "orphanAll";
export declare const CMD_SHOW = "show";
export declare const CMD_HIDE = "hide";
export declare const SELECTOR_CONNECTOR: string;
export declare const SELECTOR_ENDPOINT: string;
export declare const SELECTOR_OVERLAY: string;
export declare const SELECTOR_GROUP_CONTAINER = "[jtk-group-content]";
