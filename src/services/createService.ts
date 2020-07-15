import {ReduxActionOptions, ReduxMiddlewareAPI, ServiceCreatorSync} from 'redux/redux';
import {State} from 'schema/State';

export function createService<T>(callback: (state: State, data: T) => State): {
    (data?: T): (options: ReduxActionOptions) => void;

    reducer: (state: State, data: T) => State;
};

export function createService<T>(callback: (state: State, data: T) => State): ServiceCreatorSync<T> {
    let creator: ServiceCreatorSync<T> = function (data: T) {
        let service: any = function ({getState, setState}: ReduxMiddlewareAPI) {
            let curState = getState();
            let newState = callback(curState, data);

            if (newState !== curState) {
                setState(newState, callback.name);
            }
        };

        service.data = data;
        service.callback = callback;

        return service;
    } as any;

    creator.reducer = callback;

    return creator;
}
