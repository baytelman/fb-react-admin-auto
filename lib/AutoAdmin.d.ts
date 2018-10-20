/// <reference types="react" />
interface AutoAdminAttribute {
    attribute: string;
    type: string | NumberConstructor | StringConstructor | AutoAdminAttribute[];
}
export declare const AutoFilter: (props: any) => JSX.Element;
export declare const AutoCreate: (props: any, { schema }: {
    schema: AutoAdminAttribute[];
}) => JSX.Element;
export declare const AutoShow: (props: any, { schema }: {
    schema: AutoAdminAttribute[];
}) => JSX.Element;
export declare const AutoEdit: (props: any, { schema }: {
    schema: AutoAdminAttribute[];
}) => JSX.Element;
export declare const AutoList: (props: any, { schema }: {
    schema: AutoAdminAttribute[];
}) => JSX.Element;
export declare const AutoResource: (modelName: string, { schema }: {
    schema: AutoAdminAttribute[];
}) => JSX.Element;
export {};
