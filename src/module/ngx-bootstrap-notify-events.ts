/**
 * This event fires immediately when the show instance method is called.
 */
export interface OnShowEvent {
    element: HTMLElement;
}

/**
 * This event is fired when the modal has been made visible to the user (will wait for CSS transitions to complete).
 */
export interface OnShownEvent {
    element: HTMLElement;
}

/**
 * This event is fired immediately when the notification is closing.
 */
export interface OnCloseEvent {
    element: HTMLElement;
}

/**
 * This event is fired when the modal has finished closing and is removed from the document (will wait for CSS transitions to complete).
 */
export interface OnClosedEvent {
    element: HTMLElement;
}
