/** @format */

import React, { useState } from "react";
import { Container } from "@mui/material";

import CreateComment from "./CreateComment";
import DisplayComments from "./DisplayComments";

const Comments = () => {
	const [comments, setComments] = useState([]);

	return (
		<Container className='comment'>
			<CreateComment setComments={setComments} />
			<DisplayComments comments={comments} setComments={setComments} />
		</Container>
	);
};

export default Comments;
