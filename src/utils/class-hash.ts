export type ClassHashValue = boolean | string | number | void | (string | boolean)[];
export type ClassHashDict = Record<string, ClassHashValue>;

function join(prefix: string, name: string, value: ClassHashValue): string[] {
    if (value) {
        if (value === true) {
            return [prefix + name];
        } else if (Array.isArray(value)) {
            return value.reduce((acc: string[], value) => acc.concat(join(prefix, name, value)), []);
        } else {
            return [prefix + name + '_' + value];
        }
    }

    return [];
}

export function classHash(prefix: string | ClassHashDict, hash?: ClassHashDict, mix?: string): string {
    let classList = [prefix];

    if (hash) {
        Object.keys(hash).forEach((key) => {
            if (hash[key]) {
                let prefixed = prefix + '_';

                classList = classList.concat(join(prefixed, key, hash[key]));
            }
        });
    }

    if (mix) {
        classList.push(mix);
    }

    return classList.join(' ');
}

export default function classHashHelper(prefix: string, {hash}: { hash: ClassHashDict }): string {
    return classHash(prefix, hash);
}
