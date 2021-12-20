/*
 * @Author: Dieu-Donne Nazzah
 * @Date: 2021-12-19 23:05:31
 * @Last Modified by: Dieu-Donne Nazzah
 * @Last Modified time: 2021-12-20 00:34:16
 */
import { DistributorsData } from '@shared/assets/data';
import React from 'react';
import {
	Table,
	TableBody,
	TableBodyCell,
	TableBodyRow,
	TableHead,
	TableHeadCell,
	TableHeadRow,
	TableWrapper,
} from './styledComponents';

interface Props {}

const Distributors = (props: Props) => {
	return (
		<TableWrapper>
			<Table>
				<TableHead>
					<TableHeadRow>
						<TableHeadCell>TEAM MEMBER</TableHeadCell>
						<TableHeadCell>REGION</TableHeadCell>
						<TableHeadCell>TOWN / CITY</TableHeadCell>
						<TableHeadCell>CONTACT</TableHeadCell>
					</TableHeadRow>
				</TableHead>
				<TableBody>
					{DistributorsData.map((distributor, index) => (
						<TableBodyRow
							glassy={index % 2 !== 0}
							key={index.toString()}
						>
							<TableBodyCell>{distributor.member}</TableBodyCell>
							<TableBodyCell center>
								{distributor.region}
							</TableBodyCell>
							<TableBodyCell center>
								{distributor.town_city}
							</TableBodyCell>
							<TableBodyCell center>
								{distributor.contact}
							</TableBodyCell>
						</TableBodyRow>
					))}
				</TableBody>
			</Table>
		</TableWrapper>
	);
};

export default Distributors;
