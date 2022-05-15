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

const Btn = styled.button`
	color: blue;
	background-color: ${(props) => props.bgColor};
`;

const Input = styled.input.attrs({
	placeholder: "Hello",
	required: true,
	minlength: 10,
})``;

const Send = styled(Input).attrs({ type: "submit" })``;
function App() {
	return (
		<Father as="header">
			<Box bgColor="tomato">
				<Text as="h1">Hi</Text>
			</Box>
			<Circle></Circle>
			<Box bgColor="teal"></Box>
			<Input></Input>
			<Send></Send>
			<Btn as="a" href="/" bgColor="orange">
				Hello!
			</Btn>
		</Father>
	);
}

export default App;
