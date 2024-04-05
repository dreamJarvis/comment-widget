/** @format */

import React, { useState } from "react";
import { Button, Box, Container, TextField } from "@mui/material";
import ButtonGroup from "@mui/material/ButtonGroup";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import EditIcon from "@mui/icons-material/Edit";
import AddBoxRoundedIcon from "@mui/icons-material/AddBoxRounded";
import Comments from "./Comments";

const CommentActions = ({ comment, setComments }) => {
	const [commentStatus, setCommentStatus] = useState(0);
	const [updateCommentStatus, setUpdateCommentStatus] = useState(false);
	const [updateComment, setUpdateComment] = useState(comment);

	const deleteComment = () => {
		setComments((comments) => comments.filter((text) => text !== comment));
	};

	const updateCommentHandler = (e) => {
		setComments((comments) =>
			comments.filter((text) => {
				if (text !== comment) return updateComment;
				return text;
			})
		);
		setUpdateCommentStatus(false);
	};

	return (
		<Container>
			{!updateCommentStatus ? (
				<Container
					style={{
						display: "flex",
						textAlign: "center",
						alignItems: "center",
						justifyContent: "center",
						padding: "10px",
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
							onClick={deleteComment}>
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
					}}>
					<TextField
						label='comments'
						variant='outlined'
						id='comment-input'
						onChange={(e) => setUpdateComment(e.target.value)}
						value={updateComment}
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
			<Container
				style={{
					display: "flex",
					textAlign: "center",
					alignItems: "center",
					justifyContent: "center",
					padding: "10px",
				}}>
				{commentStatus === 1 ? <Comments /> : null}
			</Container>
		</Container>
	);
};

export default CommentActions;
