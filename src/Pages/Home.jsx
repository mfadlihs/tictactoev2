import { Cell } from '../Component/Cell';
import { GlobalButton } from '../Component/GlobalButton';
import Footer from '../Layout/Footer';

export default function Home() {
	return (
		<>
			<GlobalButton variant='contained'>ini button</GlobalButton>
			<Footer />
			<Cell active='o' />
		</>
	);
}
