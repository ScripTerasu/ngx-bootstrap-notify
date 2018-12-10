
export interface INotifySettings {
    element?: string;
    position?: string;
    type?: string;
    allow_dismiss?: boolean;
    allow_duplicates?: boolean;
    newest_on_top?: boolean;
    showProgressbar?: boolean;
    placement?: {
        from?: string;
        align?: string;
    };
    offset?: number;
    spacing?: number;
    z_index?: number;
    delay?: number;
    timer?: number;
    url_target?: string;
    mouse_over?: Function;
    animate?: {
        enter?: string;
        exit?: string;
    };
    onShow?: (element: any) => void;
    onShown?: (element: any) => void;
    onClose?: (element: any) => void;
    onClosed?: (element: any) => void;
    icon_type?: string;
    template?: string;
}
