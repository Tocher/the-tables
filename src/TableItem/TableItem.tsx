import * as React from 'react';
import 'TableItem/TableItem.css';
import {classHash} from 'utils/class-hash';

export interface TableItemProps {
    square?: boolean;
    vertical?: boolean;
}

export const TableItem: React.FC<TableItemProps> =
    function TableItem({square, vertical}: TableItemProps) {
        return (
            <div
                className={classHash('table-item', {
                    square,
                    vertical,
                    horizontal: !vertical && !square,
                })}
            >

            </div>
        );
    };
