import { Box } from '@mui/material';
import { styled } from '@mui/system';

const checkColor = condition => {
	if (condition === 'x') {
		return 'blue';
	} else if (condition === 'o') {
		return 'orange';
	} else {
		return 'unset';
	}
};

export const Cell = styled(Box)(props => ({
	backgroundColor: checkColor(props.active),
	width: 200,
	height: 200,
}));
