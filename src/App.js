import styled, { keyframes } from "styled-components";

const Father = styled.div`
	display: flex;
`;

const Animation = keyframes`
  0% {
    transform: rotate(0deg);
    border-radius: 0px;

  }
  50% {
    transform: rotate(180deg);
    border-radius: 50px;
  }

  100% {
    transform: rotate(360deg);
    border-radius: 100px;

  }
`;

const Emoji = styled.span`
	font-size: 40px;
`;
const Box = styled.div`
	background-color: ${(props) => props.bgColor};
	width: 100px;
	height: 100px;
	animation: ${Animation} 0.5s linear infinite;
	display: flex;
	justify-content: center;
	align-items: center;
	${Emoji} {
		font-size: 10px;
		&:hover {
			font-size: 40px;
		}
		&:active {
			font-size: 30px;
			opacity: 30%;
		}
	}
`;

const Circle = styled(Box)`
	border-radius: 50px;
	background-color: green;
`;

function App() {
	return (
		<Father>
			<Box bgColor="tomato">
				<Emoji as="p">🖤</Emoji>
			</Box>
			<Circle></Circle>
		</Father>
	);
}

export default App;
