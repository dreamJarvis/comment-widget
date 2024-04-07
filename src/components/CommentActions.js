/** @format */

import React, { useState } from "react";
import { Button, Container, TextField, Stack, Box } from "@mui/material";
import ButtonGroup from "@mui/material/ButtonGroup";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import EditIcon from "@mui/icons-material/Edit";
import AddBoxRoundedIcon from "@mui/icons-material/AddBoxRounded";
import CreateComment from "./CreateComment";

const CommentActions = ({
	commentList,
	createNode,
	updateNode,
	deleteNode,
}) => {
	const [commentStatus, setCommentStatus] = useState(0);
	const [updateCommentStatus, setUpdateCommentStatus] = useState(false);
	const [updateComment, setUpdateComment] = useState(commentList?.text);

	const deleteComment = (id) => {
		deleteNode(id);
	};

	const updateCommentHandler = (e) => {
		updateNode(commentList?.id, updateComment);
		setUpdateCommentStatus(false);
	};

	return (
		<Container
			style={{
				display: "flex",
				textAlign: "center",
				alignItems: "center",
				justifyContent: "center",
				padding: "10px",
			}}>
			{commentList?.id !== 1 ? (
				<Box>
					{!updateCommentStatus ? (
						<Container
							style={{
								display: "flex",
								textAlign: "center",
								alignItems: "center",
								justifyContent: "center",
								padding: "10px",
								marginLeft: "10px",
							}}>
							<p>{updateComment}</p>
							<ButtonGroup variant='contained' aria-label='Basic button group'>
								<Button
									variant='contained'
									color='primary'
									size='small'
									startIcon={<EditIcon />}
									onClick={() => setUpdateCommentStatus(true)}>
									edit
								</Button>
								<Button
									variant='contained'
									color='error'
									size='small'
									startIcon={<DeleteIcon />}
									onClick={() => deleteComment(commentList.id)}>
									delete
								</Button>
								<Button
									variant='contained'
									color='success'
									size='small'
									endIcon={<SendIcon />}
									onClick={() => setCommentStatus(1)}>
									reply
								</Button>
							</ButtonGroup>
						</Container>
					) : (
						<Container
							style={{
								display: "flex",
								textAlign: "center",
								alignItems: "center",
								justifyContent: "center",
								padding: "10px",
								marginLeft: "10px",
							}}>
							<TextField
								label='comments'
								variant='outlined'
								id='comment-input'
								onChange={(e) => setUpdateComment(e.target.value)}
								value={updateComment.text}
							/>
							<Button
								variant='contained'
								color='primary'
								size='small'
								startIcon={<AddBoxRoundedIcon />}
								onClick={updateCommentHandler}>
								update
							</Button>
						</Container>
					)}
				</Box>
			) : (
				<></>
			)}
			<Container
				style={{
					display: "flex",
					textAlign: "center",
					alignItems: "center",
					justifyContent: "center",
					padding: "10px",
					marginLeft: "10px",
				}}>
				<Stack className='comment-stack'>
					{commentStatus === 1 || commentList.id === 1 ? (
						<CreateComment
							commentList={commentList}
							createNode={createNode}
							setCommentStatus={setCommentStatus}
						/>
					) : (
						<></>
					)}
					{commentList.childrens?.length > 0 ? (
						commentList.childrens?.map((comment) => (
							<CommentActions
								key={comment.id}
								commentList={comment}
								createNode={createNode}
								updateNode={updateNode}
								deleteNode={deleteNode}
							/>
						))
					) : (
						<p>no child</p>
					)}
				</Stack>
			</Container>
		</Container>
	);
};

export default CommentActions;
