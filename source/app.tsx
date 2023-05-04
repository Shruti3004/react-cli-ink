import React from 'react';
import {Text, Box, Newline} from 'ink';

type Props = {
	name: string | undefined;
};

export default function App({name = 'Stranger'}: Props) {
	return (
		<>
			<Text backgroundColor="green" color="white">
				{name}
			</Text>
			<Text backgroundColor="#005cc5" color="white">
				is learning
			</Text>
			<Text backgroundColor="rgb(232, 131, 136)" color="white">
				React Cli Ink
			</Text>
			<Text inverse color="yellow">
				Checking out different options
			</Text>
			<Box margin={2}>
				<Text>This is a box with margin</Text>
			</Box>
			<Box>
				<Text>Label:</Text>
				<Box flexGrow={1}>
					<Text>Fills all remaining space</Text>
				</Box>
			</Box>
			<Box alignItems="flex-end">
				<Box marginRight={1}>
					<Text>X</Text>
				</Box>
				<Text>
					A
					<Newline />
					B
					<Newline />C
				</Text>
			</Box>
			<Box borderStyle="round" borderColor="green">
				<Text>Checking Bordered Box</Text>
			</Box>
		</>
	);
}
