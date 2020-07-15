import {AsyncServiceCallback, ReduxActionOptions, ServiceAsyncAction, ServiceCreatorAsync} from 'redux/redux';

export function createAsyncService<Input, AsyncServiceCallback extends (data: Input, options: ReduxActionOptions) => any>(callback: AsyncServiceCallback):
    (data?: Input) =>
        (options: ReduxActionOptions) =>
            AsyncServiceCallback extends (...args: any[]) => infer R ? R : unknown;

/**
 * Please use `createAsyncService(function (data: Type, options) {})`
 * instead `createAsyncService<Type>(function (data, options) {})`
 * @deprecated
 */
export function createAsyncService<Input = {}, Output = any>(callback: AsyncServiceCallback<Input, Output>): ServiceCreatorAsync<Input, Output>;

export function createAsyncService<Input, Output>(callback: AsyncServiceCallback<Input, Output>): ServiceCreatorAsync<Input, Output> {
    return function (data?: Input): ServiceAsyncAction<Input, Output> {
        let service: any = function (options: ReduxActionOptions) {
            return Promise.resolve()
                .then(() => callback(data as any, options));
        };

        service.type = callback.name;
        service.data = data;

        return service;
    };
}
