import { Box, Typography, Link } from '@mui/material';
import CopyrightIcon from '@mui/icons-material/Copyright';
import { styled } from '@mui/system';

export default function Footer() {
	return (
		<Container
			component={Link}
			target='blank'
			href='https://github.com/mfadlihs'
		>
			<CopyrightIcon />
			<Typography>Fadli's Project</Typography>
		</Container>
	);
}

const Container = styled(Box)({
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	padding: 10,
	gap: 5,
	textDecoration: 'inherit',
	color: 'inherit',
});
