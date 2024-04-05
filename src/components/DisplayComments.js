/** @format */

import { Box, Stack } from "@mui/material";
import React from "react";
import CommentActions from "./CommentActions";

const DisplayComments = ({ comments, setComments }) => {
	return (
		<Box className='display-comments'>
			{comments.length > 0 ? (
				comments.map((comment) => (
					<Stack className='comment-stack'>
						<CommentActions comment={comment} setComments={setComments} />
					</Stack>
				))
			) : (
				<p>no comments</p>
			)}
		</Box>
	);
};

export default DisplayComments;
