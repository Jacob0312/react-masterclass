import styled from "styled-components";

const Father = styled.div`
	display: flex;
`;

const Box = styled.div`
	background-color: ${(props) => props.bgColor};
	width: 100px;
	height: 100px;
`;

const Circle = styled(Box)`
	border-radius: 50px;
	background-color: green;
`;

const Text = styled.span`
	color: white;
`;
function App() {
	return (
		<Father>
			<Box bgColor="tomato">
				<Text>Hi</Text>
			</Box>
			<Circle></Circle>
			<Box bgColor="teal"></Box>
		</Father>
	);
}

export default App;
