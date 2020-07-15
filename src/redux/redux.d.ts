import {Action, MiddlewareAPI} from 'redux';
import {State} from 'schema/State';

export interface ReduxMiddlewareAPI extends MiddlewareAPI {
    setState(state: State, type?: string): void;
}

declare type ReduxAction<T> = ({ payload: T } & Action);

declare interface ReduxActionOptions {
    dispatch<ServiceAsyncActionCallback extends (options: ReduxActionOptions) => any>(action: ServiceAsyncActionCallback): ReturnType<ServiceAsyncActionCallback>;
    dispatch(action: ReduxAction<any>): any;
    dispatch<Input, Output>(action: ServiceAsyncAction<Input, Output>): Output;
    dispatch<Input>(action: ServiceAction<Input>): void;

    getState(): State;

    setState(state: State, type?: string): void;
}

declare type ServiceCallback<T = any> = (state: State, data: T) => State;
declare type AsyncServiceCallback<Input = any, Output = void> = (data: Input, options: ReduxActionOptions) => Output;

declare interface ServiceAsyncAction<Input, Output> {
    (options: ReduxActionOptions): Output;

    readonly data?: Input;
}

declare interface ServiceAction<T> {
    (options: ReduxActionOptions): void;

    readonly data?: T;
}

declare interface ServiceCreatorSync<T> {
    (data?: T): ServiceAction<T>;

    reducer: ServiceCallback<T>;
}

declare interface ServiceCreatorAsync<Input, Output> {
    (data?: Input): ServiceAsyncAction<Input, Output>;
}

declare type ServiceCreator<T, Output = void> = ServiceCreatorSync<T> | ServiceCreatorAsync<T, Output>;
