import { ConfigPlugin } from 'expo/config-plugins';
export type Props = {
    /**
    * The watched directory containing app-target App Intents Swift files.
    * @default 'app-intents'
    */
    directory?: string;
};
export declare function withAppIntentsValidation<T extends {
    experiments?: any;
}>(config: T, props: {
    directory: string;
}): T;
declare const _default: ConfigPlugin<void | Props>;
export default _default;
