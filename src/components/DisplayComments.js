/** @format */

import { Box, Stack } from "@mui/material";
import React, { useEffect } from "react";
import CommentActions from "./CommentActions";

const DisplayComments = ({
	commentList,
	createNode,
	updateNode,
	deleteNode,
}) => {
	return (
		<Box className='display-comments'>
			{commentList?.childrens?.length > 0 ? (
				commentList?.childrens?.map((comment) => (
					<Stack className='comment-stack'>
						<CommentActions
							commentList={comment}
							createNode={createNode}
							updateNode={updateNode}
							deleteNode={deleteNode}
						/>
					</Stack>
				))
			) : (
				<p>no comments</p>
			)}
		</Box>
	);
};

export default DisplayComments;
