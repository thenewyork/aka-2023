import { useState } from 'react';
import styled from 'styled-components';

type StyledProps = {
	$hasHovered: boolean;
};

type Props = {
	letter: string;
};

const HeadingLetterWrapper = styled.span<StyledProps>`
	filter: ${(props) => props.$hasHovered ? 'blur(10px)' : 'blur(0px)'};

	transition: all var(--transition-speed-default) var(--transition-ease);

	&::selection {
		background: var(--colour-blue);
		color: var(--colour-black);
	}
`;

const HeadingLetter = ({ letter }: Props) => {
	const [hasHovered, setHasHovered] = useState(false);

	return (
		<HeadingLetterWrapper
			className="type-h1"
			onMouseOver={() => setHasHovered(true)}
			$hasHovered={hasHovered}
		>
			{letter}
		</HeadingLetterWrapper>
	);
};

export default HeadingLetter;