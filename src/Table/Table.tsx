import * as React from 'react';
import {TableItem} from 'TableItem/TableItem';

import 'Table/Table.css';

export interface TableProps {

}

export const Table: React.FC<TableProps> =
    function Table({}: TableProps) {
        return (
            <div>
                <div className="row">
                    <TableItem square />

                    <TableItem />
                    <TableItem />
                    <TableItem />
                    <TableItem />
                    <TableItem />
                    <TableItem />
                    <TableItem />
                    <TableItem />
                    <TableItem />
                    <TableItem />

                    <TableItem square />
                </div>

                <div className="row">
                    <div className="col">
                        <TableItem vertical />
                        <TableItem vertical />
                        <TableItem vertical />
                        <TableItem vertical />
                        <TableItem vertical />
                        <TableItem vertical />
                        <TableItem vertical />
                        <TableItem vertical />
                        <TableItem vertical />
                        <TableItem vertical />
                    </div>

                    <div className="mid">
                    </div>

                    <div className="col">
                        <TableItem vertical />
                        <TableItem vertical />
                        <TableItem vertical />
                        <TableItem vertical />
                        <TableItem vertical />
                        <TableItem vertical />
                        <TableItem vertical />
                        <TableItem vertical />
                        <TableItem vertical />
                        <TableItem vertical />
                    </div>
                </div>

                <div className="row">
                    <TableItem square />

                    <TableItem />
                    <TableItem />
                    <TableItem />
                    <TableItem />
                    <TableItem />
                    <TableItem />
                    <TableItem />
                    <TableItem />
                    <TableItem />
                    <TableItem />

                    <TableItem square />
                </div>
            </div>
        );
    };
